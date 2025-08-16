import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  color: white;
  padding: 1.2rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  transition: background 0.3s ease;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(45deg, #4ade80, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(74, 222, 128, 0.3);
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 25px;

  &:hover {
    background: rgba(255,255,255,0.1);
    transform: translateY(-2px);
  }
`;

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <HeaderContainer style={{
      background: scrolled 
        ? 'rgba(30, 58, 95, 0.95)' 
        : 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
    }}>
      <Container>
        <Nav>
          <Logo>ARVDIA</Logo>
          <NavLinks>
            <li><NavLink href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</NavLink></li>
            <li><NavLink href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</NavLink></li>
            <li><NavLink href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</NavLink></li>
            <li><NavLink href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Team</NavLink></li>
            <li><NavLink href="#partner" onClick={(e) => { e.preventDefault(); scrollToSection('partner'); }}>Partner</NavLink></li>
            <li><NavLink href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</NavLink></li>
          </NavLinks>
        </Nav>
      </Container>
    </HeaderContainer>
  );
}

export default Header;