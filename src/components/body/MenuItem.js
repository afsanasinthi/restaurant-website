import React from 'react';
import { Card, CardImg, CardBody, CardImgOverlay, CardTitle } from 'reactstrap';
import { baseUrl } from '../../redux/baseUrl';
const MenuItem = (props) => {
    return (
        <div>
            <Card className="m-4">
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={baseUrl + props.dish.image} style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer" }} onClick={props.DishSelect}>{props.dish.name} </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;