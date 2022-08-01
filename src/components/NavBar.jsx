import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Center = styled.div`
flex: 1;
text-align: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    margin-left: 25px;
    padding: 5px;
    align-items: center;
`;

const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const NavBar = () => {

  const quantity = useSelector(state => state.cart.quantity);
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style ={{ color: "gray", fontSize: 16 }}/>
          </SearchContainer>
        </Left>
        <Center><Logo>SHOPIFY</Logo></Center>
        <Right>
          <MenuItem><Link to="Register">REGISTER</Link></MenuItem>
          <MenuItem><Link to="login">SIGN IN</Link></MenuItem>
          <Link to="/cart">
          <MenuItem>
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartOutlined/>
          </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper> 
    </Container>
  )
}

export default NavBar