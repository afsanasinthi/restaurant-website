import React, { Component } from "react";
import DishDetails from "./DishDetails";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { addComment, fetchDishes, fetchComments } from "../../redux/actionCreators";
import Loading from "./Loading";

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())
    }
}
class Menu extends Component {

    state = {
        selectedDish: null,
        modalOpen: false
    }
    onDishSelect = dish => {
        console.log(dish);
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render() {
        document.title = "Menu";
        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem
                        dish={item}
                        key={item.id}
                        DishSelect={() => this.onDishSelect(item)} />
                );
            })
            let dishDetail = null;
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.comments.filter(comment =>
                    comment.dishId === this.state.selectedDish.id
                )
                dishDetail = <DishDetails dish={this.state.selectedDish} comments={comments}
                    addComment={this.props.addComment} CommentsIsLoading={this.props.comments.isLoading} />
            }
            return (
                <div className="container">
                    <div className="row row-cols-2">
                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen}>
                            <ModalBody>{dishDetail}</ModalBody>
                            <ModalFooter>
                                <Button color="warning" onClick={this.toggleModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                        {/* <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div> */}
                    </div>
                </div>
            );
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
