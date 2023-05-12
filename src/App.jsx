import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Hero } from "./components/Hero";
import { Who } from "./components/Who";
import { Works } from "./components/Works";
import Contact from "./components/Contact";
import bg from "./assets/img/bg.jpeg";
import { Test } from "./components/Test";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: url(${bg});
  scrollbar-with: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Test />
    </Container>
  );
}

// Time: 1:10:48
// link: https://www.youtube.com/watch?v=qALsVa-V9qo
export default App;
