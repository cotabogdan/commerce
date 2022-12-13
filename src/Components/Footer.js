import { AlternateEmail, Facebook, Instagram, MapOutlined, Phone, Pinterest } from '@material-ui/icons'
import React from 'react'
import { Container,Center,Left,Right,Desc,SocialContainer,SocialIcon,Logo,ContactItem,Title,List,ListItem } from './Footer.style'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FashionPays</Logo>
        <Desc>Hit our Socials!</Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Pinterest />
            </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            <Title>
            Useful Links
            </Title>
            <List>
                <ListItem to={`/allproducts`}>All Products</ListItem>
                <ListItem to={`/cart`}>Cart</ListItem>
                <ListItem to={`/`}>Homepage</ListItem>
                <ListItem to={`/register`}>Register</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> <MapOutlined/>Soseaua Nordului 1 Bucuresti</ContactItem>
            <ContactItem><Phone/>0735686521</ContactItem>
            <ContactItem><AlternateEmail/>contact@fashionpays.ro</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer
