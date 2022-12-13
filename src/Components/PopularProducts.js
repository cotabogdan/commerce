import React from 'react';
import { Container } from './Products.style';
import {popularProducts,allProducts} from '../data';
import ProductItem from './ProductItem';


const PopularProducts = () => {
  return (
    <p>Popular Products</p>,
    <Container>
      
      {popularProducts.map(item=>(
       <ProductItem item ={item} key={item.id}/>
      ))}
      
    </Container>
  )
}

export default PopularProducts
