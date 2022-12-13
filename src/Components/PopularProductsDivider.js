import React from 'react';
import { Wrapper,Left,Right,Container } from './Divider.style'

const PopularProductsDivider = () => {
  return (
    <div>
    <Container>
    <Wrapper>
        <Left>
      <p>Popular Products</p>
      </Left>
      <Right>
      <button>All products</button>
      </Right>
    </Wrapper>
    </Container>
    </div>
  )
}

export default PopularProductsDivider;
