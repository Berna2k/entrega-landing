import React from 'react';
import './ItemListContainer.css';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const ItemListContainer = ({name, peso, description, img}) => {
  return (
<div>
<CardGroup>
  <Card>
    <CardImg
      alt="Pote de helado"
      src={img}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {name}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {peso}
      </CardSubtitle>
      <CardText>
        {description}
      </CardText>
    </CardBody>
  </Card>
</CardGroup>
</div>

  );
};

export default ItemListContainer;
