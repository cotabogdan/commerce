import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { Container, Circle, Info, Icon, Image, Data } from "./ProductItem.style";
import { addProduct } from "../redux/cartRedux";
 //import { SmallTooltip } from '@toluna-ui-toolkit/tooltips';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const addItemToCart = (e) => {
    e.preventDefault();
    dispatch(addProduct(item));
  };
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
           
            <ShoppingCartOutlined onClick={addItemToCart} />
         
        </Icon>
        <Data>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </Data>
      </Info>
    </Container>
  );
};

export default ProductItem;
