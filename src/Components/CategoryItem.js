import React from "react";
import { Container, Image, Title,Button, Info } from "./CategoryItem.style";
import { Link } from "react-router-dom";
 //import { Button } from '@toluna-ui-toolkit/buttons'

const CategoryItem = ({ item }) => {
  return (
    <>
      <Container>
        <Link to={`/products/${item.cat}`}>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
             <Button>Vezi categoria</Button>
          </Info>
        </Link>
      </Container>
    </>
  );
};

export default CategoryItem;
