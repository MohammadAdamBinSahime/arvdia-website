import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const ServicesSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(45deg, rgba(248, 250, 252, 0.9), rgba(241, 245, 249, 0.9)),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="sustainability" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse"><rect width="120" height="120" fill="%23f8fafc"/><g transform="translate(60,60)"><path d="M-20,-20 Q0,-30 20,-20 Q30,0 20,20 Q0,30 -20,20 Q-30,0 -20,-20 Z" fill="%2310b981" opacity="0.08"/><circle cx="0" cy="0" r="15" fill="none" stroke="%2322c55e" stroke-width="1" opacity="0.1"/><path d="M-10,-10 L10,10 M-10,10 L10,-10" stroke="%2306b6d4" stroke-width="0.5" opacity="0.2"/></g><g transform="translate(20,20)"><circle cx="0" cy="0" r="8" fill="%2310b981" opacity="0.05"/><path d="M-4,-4 L4,4 M-4,4 L4,-4" stroke="%2322c55e" stroke-width="0.5" opacity="0.1"/></g><g transform="translate(100,100)"><circle cx="0" cy="0" r="6" fill="%2306b6d4" opacity="0.05"/></g></pattern></defs><rect width="1200" height="600" fill="url(%23sustainability)"/><g opacity="0.1"><path d="M0,100 Q200,50 400,100 Q600,150 800,100 Q1000,50 1200,100" stroke="%2310b981" stroke-width="2" fill="none"/><circle cx="200" cy="75" r="8" fill="%2310b981"/><circle cx="600" cy="125" r="8" fill="%2322c55e"/><circle cx="1000" cy="75" r="8" fill="%2306b6d4"/></g></svg>');
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.6s ease;
  border: 1px solid rgba(16, 185, 129, 0.1);
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(30px)'};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
`;

const ServiceTitle = styled.h3`
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ServiceDescription = styled.p`
  margin-bottom: 1rem;
  color: #64748b;
`;

const ServiceList = styled.ul`
  list-style: none;
  margin: 1rem 0;
`;

const ServiceItem = styled.li`
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

const services = [
  {
    title: "Asset Level ESG Program",
    description: "Comprehensive ESG assessment and reporting for individual assets, contributing to Green Building Certification.",
    items: [
      "ESG Preliminary Assessment",
      "ESG Adoption Assessment", 
      "ESG Asset Reporting",
      "Green Building Certification Support",
      "Performance Tracking"
    ]
  },
  {
    title: "Supplier Level ESG Program",
    description: "End-to-end ESG enablement for suppliers aligned with Bursa Malaysia/SEDG frameworks.",
    items: [
      "ESG Readiness Assessment",
      "ESG Adoption Evaluation",
      "Bursa/SEDG Compliant Reporting",
      "HRDF Claimable Training",
      "Supply Chain Risk Reduction"
    ]
  },
  {
    title: "Corporate ESG Reporting",
    description: "Complete corporate-level ESG strategy development and reporting solutions.",
    items: [
      "Materiality Assessment",
      "Sustainability Policy Development",
      "ESG Framework Design",
      "Full Bursa ESG Indicators",
      "Decarbonization Roadmap",
      "IFRS S1 & S2 Compliance"
    ]
  },
  {
    title: "GHG Emissions Consultancy",
    description: "Specialized greenhouse gas accounting and inventory management services.",
    items: [
      "GHG Accounting & Inventory",
      "Emissions Scope 1, 2 & 3 Analysis",
      "Carbon Footprint Assessment",
      "Reduction Strategy Development",
      "Compliance Monitoring"
    ]
  },
  {
    title: "ISO 20121 Certification",
    description: "Sustainable Event Management Certification for environmentally responsible events.",
    items: [
      "Event Sustainability Assessment",
      "ISO 20121 Implementation",
      "Certification Support",
      "Event Carbon Footprint Analysis",
      "Sustainable Event Planning"
    ]
  },
  {
    title: "ESG Training & Education",
    description: "Comprehensive ESG and sustainability training programs for teams and leadership.",
    items: [
      "HRDF Claimable Training",
      "ESG Principles Education",
      "Reporting Best Practices",
      "Leadership ESG Workshops",
      "Supplier Training Programs"
    ]
  }
];

function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <ServicesSection id="services" ref={ref}>
      <Container>
        <SectionTitle>Our ESG Enablement Programs</SectionTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index} inView={inView}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceList>
                {service.items.map((item, itemIndex) => (
                  <ServiceItem key={itemIndex}>{item}</ServiceItem>
                ))}
              </ServiceList>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
}

export default Services;