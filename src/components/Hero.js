import React from 'react';
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  from { filter: drop-shadow(0 0 10px rgba(74, 222, 128, 0.5)); }
  to { filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.8)); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 50%, rgba(51, 65, 85, 0.7) 100%),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="leaves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M20,20 Q30,10 40,20 Q50,30 40,40 Q30,50 20,40 Q10,30 20,20 Z" fill="%2310b981" opacity="0.1"/><path d="M70,70 Q80,60 90,70 Q100,80 90,90 Q80,100 70,90 Q60,80 70,70 Z" fill="%2322c55e" opacity="0.08"/><circle cx="15" cy="85" r="3" fill="%2306b6d4" opacity="0.1"/><circle cx="85" cy="15" r="3" fill="%2306b6d4" opacity="0.1"/></pattern><radialGradient id="earth" cx="20%" cy="30%"><stop offset="0%" stop-color="%2310b981" stop-opacity="0.2"/><stop offset="100%" stop-color="%23064e3b" stop-opacity="0.05"/></radialGradient></defs><rect width="1200" height="800" fill="%230f172a"/><rect width="1200" height="800" fill="url(%23leaves)"/><circle cx="200" cy="150" r="60" fill="url(%23earth)"/><circle cx="900" cy="200" r="80" fill="url(%23earth)"/><path d="M0,600 Q300,500 600,600 T1200,550 L1200,800 L0,800 Z" fill="%23065f46" opacity="0.15"/><g opacity="0.3"><path d="M100,400 Q200,350 300,400 Q400,450 500,400" stroke="%2310b981" stroke-width="1" fill="none"/><path d="M600,300 Q700,250 800,300 Q900,350 1000,300" stroke="%2322c55e" stroke-width="1" fill="none"/></g></svg>');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.1" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(74, 222, 128, 0.1);
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;

  &:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
  &:nth-child(2) { top: 20%; right: 20%; animation-delay: 1s; }
  &:nth-child(3) { top: 60%; left: 30%; animation-delay: 2s; }
  &:nth-child(4) { top: 80%; right: 10%; animation-delay: 3s; }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #4ade80, #22d3ee, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${glow} 2s ease-in-out infinite alternate;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled.a`
  background: linear-gradient(45deg, #10b981, #06b6d4);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
  }
`;

function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
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
    <HeroSection id="home">
      <FloatingElements>
        <FloatingElement />
        <FloatingElement />
        <FloatingElement />
        <FloatingElement />
      </FloatingElements>
      <Container>
        <HeroContent>
          <HeroTitle>ESG & Sustainability Consultancy</HeroTitle>
          <HeroText>
            Transform your business with tailored ESG solutions that reduce carbon footprint, 
            optimize resources, and embrace circular economy practices for a sustainable future.
          </HeroText>
          <CTAButton onClick={scrollToServices}>Discover Our Services</CTAButton>
        </HeroContent>
      </Container>
    </HeroSection>
  );
}

export default Hero;