import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const ContactSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><radialGradient id="contact-grad" cx="50%" cy="50%"><stop offset="0%" stop-color="%2310b981" stop-opacity="0.2"/><stop offset="100%" stop-color="%23064e3b" stop-opacity="0.05"/></radialGradient></defs><rect width="1200" height="600" fill="%230f172a"/><circle cx="600" cy="300" r="200" fill="url(%23contact-grad)"/><g opacity="0.1"><path d="M200,300 L400,200 L600,350 L800,250 L1000,300" stroke="%2310b981" stroke-width="2" fill="none"/><circle cx="200" cy="300" r="5" fill="%2310b981"/><circle cx="400" cy="200" r="5" fill="%2306b6d4"/><circle cx="600" cy="350" r="5" fill="%23a78bfa"/><circle cx="800" cy="250" r="5" fill="%2310b981"/><circle cx="1000" cy="300" r="5" fill="%2306b6d4"/></g></svg>');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const ContactInfo = styled.div`
  background: rgba(255,255,255,0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  display: inline-block;
  margin: 1rem;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.6s ease;
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(30px)'};

  &:hover {
    background: rgba(255,255,255,0.15);
    transform: translateY(-5px);
  }
`;

const ContactTitle = styled.h3`
  margin-bottom: 1rem;
  color: #4ade80;
`;

const ContactDetail = styled.p`
  margin: 0.5rem 0;
  
  strong {
    color: #22d3ee;
  }
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
  margin-top: 2rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
  }
`;

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <SectionTitle>Start Your Sustainability Journey</SectionTitle>
        <SectionSubtitle>
          Engage with us as your trusted partner to develop and achieve robust sustainability goals.
        </SectionSubtitle>
        
        <ContactInfo inView={inView}>
          <ContactTitle>Contact Information</ContactTitle>
          <ContactDetail><strong>Phone:</strong> +012-342-7018</ContactDetail>
          <ContactDetail><strong>Email:</strong> nazirah@arvdia.com</ContactDetail>
        </ContactInfo>
        
        <div>
          <CTAButton href="mailto:nazirah@arvdia.com">Get In Touch Today</CTAButton>
        </div>
      </Container>
    </ContactSection>
  );
}

export default Contact;