import { Add, Remove } from "@material-ui/icons";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import NavBar from '../Components/NavBar'
import Newsletter from "../Components/Newsletter";
import { Container,Wrapper,ImgContainer,Image,InfoContainer,Title,Desc,Price,Filter,FilterContainer,FilterColor,FilterSize,FilterSizeOption,FilterTitle,AddContainer,AmountContainer,Amount } from "./Product.style";
// import { Button } from '@toluna-ui-toolkit/buttons';


const Product = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            {/* <Button text="ADD TO CART" /> */}
            <button>Add to cart</button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;