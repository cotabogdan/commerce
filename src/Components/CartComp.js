import { Add, Remove } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../redux/cartRedux";


import { Container,Title,Top,TopButton,TopText,TopTexts,Bottom,Button,
    ProductAmount,PriceDetail,Product,ProductAmountContainer,ProductColor,ProductDetail,ProductId,ProductName,
    ProductPrice,ProductSize,Image,Info,Details,Summary,SummaryItem,SummaryItemPrice,SummaryItemText,SummaryTitle,Hr,Wrapper} from "./Cart.style";

const ProductComponent = ({img, title, id, size, price, color, quantity}) => {
  const dispatch = useDispatch()
  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct({id, price, }))
  }
  const handleRemoveProduct = (e) => {
    e.preventDefault();
    dispatch(removeProduct({id, price}))
  }
  return (
  <Product>
              <ProductDetail>
                <Image src={img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {id}
                  </ProductId>
                  <ProductColor color={color} />
                  <ProductSize>
                    <b>Size:</b> {size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add onClick={handleAddProduct} cursor="pointer"/>
                  <ProductAmount>{quantity}</ProductAmount>
                  <Remove onClick={handleRemoveProduct} cursor="pointer"/>
                </ProductAmountContainer>
                <ProductPrice>{price}</ProductPrice>
              </PriceDetail>
            </Product>
            )
}
const CartComponent = () => {

  const cartState = useSelector(state => state.cart);
  console.log(cartState)
  return (
    <Container>
     
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cartState.quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cartState.products.map(product => (<React.Fragment key={product.id}><ProductComponent {...product}/> <Hr /></React.Fragment>))}

          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cartState.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cartState.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default CartComponent;