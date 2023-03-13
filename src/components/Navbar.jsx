import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import search from "../assets/img/search.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li``;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
    width: 100px;
    padding 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={logo} alt="A" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src={search} alt="search" />
          <Button>Hire NOw</Button>
        </Icons>
      </Container>
    </Section>
  );
};
