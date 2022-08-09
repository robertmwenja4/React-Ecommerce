  import React, { useState } from 'react'
  import { Add, Remove } from "@material-ui/icons";
  import Announcement from "../components/Announcement";
  import Footer from "../components/Footer";
  import Navbar from "../components/NavBar";
  import { mobile } from "../responsive";
  import styled from 'styled-components';
  import { useSelector } from 'react-redux';
import axios, { Axios } from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

  const Container = styled.div``;

  const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
  `;

  const Title = styled.h1`
    font-weight: 300;
    text-align: center;
  `;

  const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  `;

  const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
      props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
  `;

  const TopTexts = styled.div`
    ${mobile({ display: "none" })}
  `;
  const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
  `;

  const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}

  `;

  const Info = styled.div`
    flex: 3;
  `;

  const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
  `;

  const ProductDetail = styled.div`
    flex: 2;
    display: flex;
  `;

  const Image = styled.img`
    width: 200px;
  `;

  const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;

  const ProductName = styled.span``;

  const ProductId = styled.span``;

  const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  `;

  const ProductSize = styled.span``;

  const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `;

  const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
  `;

  const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
  `;

  const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
  `;

  const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
  `;

  const SummaryTitle = styled.h1`
    font-weight: 200;
  `;

  const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
  `;

  const SummaryItemText = styled.span``;

  const SummaryItemPrice = styled.span``;

  const button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
  `;
  const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

  const Cart = () => {
    const cart = useSelector(state => state.cart);
    let phoneNumber = "254719189576";
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(cart);
    const handleMpesa =  (e) => {
      e.preventDefault();
        axios.get('http://localhost:5000/api/mpesa/stk',{
          Amount: "1",
          PhoneNumber: phoneNumber
        }).then((res) =>console.log(res.data))
        .catch((err) => console.log(err))
        handleClose();
    }

    return (
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {cart.product.map((products) =>(
              <Product>
                <ProductDetail>
                  <Image src={products.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {products.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {products._id}
                    </ProductId>
                    <ProductColor color={products.color} />
                    <ProductSize>
                      <b>Size:</b> {products.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{products.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>Ksh {products.price * products.quantity}</ProductPrice>
                </PriceDetail>
              </Product>
              ))}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>Ksh {cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>Ksh {cart.total}</SummaryItemPrice>
              </SummaryItem>
              {/* <button onClick={handleMpesa}>CHECKOUT NOW</button> */}
              <SummaryItem>
              <Button variant="primary" onClick={handleShow}>
                CHECKOUT NOW
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>PAYMENT INFORMATION</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Input placeholder="Amount" value={cart.total} readOnly/>
                <Input placeholder="Phone Number" value={phoneNumber}/>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleMpesa}>
                    PAY
                  </Button>
                </Modal.Footer>
              </Modal>
              </SummaryItem>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    )
  }

  export default Cart