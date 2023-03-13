import React from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";
import line from "../assets/img/line.png";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;

  flex-direction: row;
  align-item: left;
  justify-content: space-between;

  // position: relative;
`;
const Left = styled.div`
  flex: 1;
  
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 24;
  color: lightgray;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-with: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;



export const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* <Img src={moon} alt="moon" /> */}
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src={line} alt="line" />
            <Subtitle>Who we are</Subtitle>
          </WhatWeDo>
          <Desc>
            a creative group of designers and developers with a passion of the arts.
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};
