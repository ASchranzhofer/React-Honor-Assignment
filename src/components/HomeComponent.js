import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle} from 'reactstrap';

function RenderCard({item}) {

        return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );


}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.feature1} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.feature2} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.feature3} />
                </div>
            </div>
        </div>
    );
}

export default Home;