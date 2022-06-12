import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = (props) => {
    return (
        <div>
            <Card className="mt-4">
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}

                    </CardText>
                    <CardText>Price: {props.dish.price}/=</CardText>
                    <hr />
                    <LoadComments comments={props.comments} />
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetails;