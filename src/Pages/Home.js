import React from 'react';
import NavBar from '../Components/NavBar';
import Announcement from '../Components/Announcement';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Footer from '../Components/Footer';
import PopularProducts from '../Components/PopularProducts';
import NewsLetter from '../Components/Newsletter';
import { Wrapper,Container,Center,Popular } from '../Components/Divider.style';

const Home = () => {
  return (
    <div>
<Announcement />
<NavBar />
<Slider />
<Categories />
<Container>
<Wrapper>
 
    <Center>
  <Popular>Popular Products</Popular>
  </Center>
  
</Wrapper>
</Container>
<PopularProducts />
<NewsLetter />
<Footer/>
 </div>
  )
}

export default Home;
