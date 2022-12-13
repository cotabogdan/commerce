import { Badge, Button, Menu, MenuItem } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Container } from "./NavBar.style";
import { Wrapper, Left, Right, Center, Language, SearchContaniner, Input, LogoStyle } from "./NavBar.style";
import Logo from "../logo.png";
import { Link } from "react-router-dom";
import { Provider, useSelector } from "react-redux";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const cartState = useSelector((state) => state.cart);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContaniner>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContaniner>
        </Left>
        <Center>
          <LogoStyle src={Logo} />
        </Center>
        <Right>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Menu
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link to={`/register`}>
              <MenuItem onClick={handleClose}>Register</MenuItem>
            </Link>

            <Link to={`/login`}>
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Link>

            <Link to={`/cart`}>
              <MenuItem>
                <Badge badgeContent={cartState.quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default NavBar;
