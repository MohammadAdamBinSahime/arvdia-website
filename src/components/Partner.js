import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const PartnerSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(45deg, rgba(241, 245, 249, 0.9), rgba(226, 232, 240, 0.9)),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="renewable" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse"><rect width="200" height="200" fill="%23f1f5f9"/><g transform="translate(100,100)"><circle cx="0" cy="0" r="40" fill="none" stroke="%2310b981" stroke-width="1" opacity="0.1"/><path d="M0,-35 L8,-20 L-8,-20 Z M25,-25 L33,-10 L17,-10 Z M25,25 L33,40 L17,40 Z M-25,25 L-17,40 L-33,40 Z M-25,-25 L-17,-10 L-33,-10 Z M0,35 L8,50 L-8,50 Z" fill="%2310b981" opacity="0.12"/><circle cx="0" cy="0" r="8" fill="%2306b6d4" opacity="0.15"/></g><g transform="translate(50,50)"><rect x="-15" y="-25" width="30" height="20" fill="%2306b6d4" opacity="0.08"/><path d="M-12,-25 L12,-25 L10,-5 L-10,-5 Z" fill="%23075985" opacity="0.1"/></g><g transform="translate(150,150)"><rect x="-12" y="-20" width="24" height="16" fill="%2310b981" opacity="0.08"/><path d="M-10,-20 L10,-20 L8,-4 L-8,-4 Z" fill="%23065f46" opacity="0.1"/></g></pattern></defs><rect width="1200" height="600" fill="url(%23renewable)"/><path d="M0,200 Q400,150 800,200 Q1000,220 1200,180 L1200,0 L0,0 Z" fill="%23ecfdf5" opacity="0.4"/><path d="M0,500 Q400,450 800,500 Q1000,520 1200,480 L1200,600 L0,600 Z" fill="%23f0f9ff" opacity="0.4"/></svg>');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1e293b;
`;

const PartnerCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid rgba(16, 185, 129, 0.1);
  transition: all 0.6s ease;
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(30px)'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  }
`;

const PartnerTitle = styled.h3`
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
`;

const PartnerDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
`;

const OfferingsTitle = styled.h4`
  color: #10b981;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const OfferingsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const OfferingsItem = styled.li`
  padding: 0.5rem 0;
  color: #64748b;
  position: relative;
  padding-left: 1.5rem;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #10b981;
    font-weight: bold;
  }
`;

const offerings = [
  "Realtime Monitoring Systems (ENISCOPE)",
  "Building Management Systems (SAUTER)",
  "Energy Audits and ESCO Services",
  "Modular Hybrid Chillers",
  "Proven track record with major clients including Tesco, Carrefour, and 1-Utama"
];

function Partner() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <PartnerSection id="partner" ref={ref}>
      <Container>
        <SectionTitle>Strategic Partnership</SectionTitle>
        <PartnerCard inView={inView}>
          <PartnerTitle>IETCO Energy - Energy Efficiency Solutions</PartnerTitle>
          <PartnerDescription>
            Our partnership with IETCO Energy enhances our ESG services with cutting-edge energy efficiency solutions. 
            IETCO specializes in HVAC systems, building management, and thermal control solutions that help reduce 
            operational costs and boost energy efficiency.
          </PartnerDescription>
          
          <OfferingsTitle>Key Offerings:</OfferingsTitle>
          <OfferingsList>
            {offerings.map((offering, index) => (
              <OfferingsItem key={index}>{offering}</OfferingsItem>
            ))}
          </OfferingsList>
        </PartnerCard>
      </Container>
    </PartnerSection>
  );
}

export default Partner;