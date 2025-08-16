import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import Partner from './components/Partner';
import Contact from './components/Contact';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Hero />
      <Services />
      <Process />
      <Team />
      <Partner />
      <Contact />
    </AppContainer>
  );
}

export default App;