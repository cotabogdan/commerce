import { FavoriteOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Container, Circle, Info, Icon, Image, Data } from "./ProductItem.style";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
 //import { SmallTooltip } from '@toluna-ui-toolkit/tooltips'

const AllProducts = ({ all }) => {
  const dispatch = useDispatch();
  const addItemToCart = (e) => {
    e.preventDefault();
    dispatch(addProduct(all));
  };
  return (
    <Container>
      <Circle />
      <Image src={all.img} />
      <Info>

        <Icon>
            <ShoppingCartOutlined onClick={addItemToCart}/>
        </Icon>
        

        <Data>
          <p>{all.title}</p>
          <p>{all.price}</p>
        </Data>
      </Info>
    </Container>
  );
};

export default AllProducts;
