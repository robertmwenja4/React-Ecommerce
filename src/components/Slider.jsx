import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(231, 222, 222);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>

        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider