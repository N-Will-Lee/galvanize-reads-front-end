import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const SideCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100px" src={props.img_URL} alt="Card image cap" />
        <CardBody top width="100px">
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>Genre: {props.genre}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default SideCard;