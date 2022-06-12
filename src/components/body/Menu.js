import React, { Component } from "react";
import DISHES from '../../data/dishes';
import COMMENTS from '../../data/comments';
import DishDetails from "./DishDetails";
import MenuItem from "./MenuItem";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
class Menu extends Component {

    state = {
        dishes: DISHES,
        comments: COMMENTS,
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
    render() {
        document.title = "Menu";
        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect={() => this.onDishSelect(item)} />
            );
        })
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.state.comments.filter(comment =>
                comment.dishId === this.state.selectedDish.id
            )
            dishDetail = <DishDetails dish={this.state.selectedDish} comments={comments} />
        }
        return (
            <div className="container">
                <div className="row row-cols-2">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
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
export default Menu;
