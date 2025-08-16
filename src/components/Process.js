import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const ProcessSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.95) 100%),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%2310b981" stop-opacity="0.1"/><stop offset="50%" stop-color="%2306b6d4" stop-opacity="0.2"/><stop offset="100%" stop-color="%23a78bfa" stop-opacity="0.1"/></linearGradient></defs><rect width="1200" height="800" fill="%231e293b"/><path d="M0,200 C300,100 600,300 900,200 C1050,150 1200,250 1200,200 L1200,0 L0,0 Z" fill="url(%23flow)"/><path d="M0,600 C300,500 600,700 900,600 C1050,550 1200,650 1200,600 L1200,800 L0,800 Z" fill="url(%23flow)"/><g opacity="0.3"><circle cx="200" cy="300" r="3" fill="%2310b981"><animate attributeName="r" values="3;8;3" dur="3s" repeatCount="indefinite"/></circle><circle cx="600" cy="400" r="3" fill="%2306b6d4"><animate attributeName="r" values="3;8;3" dur="3s" begin="1s" repeatCount="indefinite"/></circle><circle cx="1000" cy="350" r="3" fill="%23a78bfa"><animate attributeName="r" values="3;8;3" dur="3s" begin="2s" repeatCount="indefinite"/></circle></g></svg>');
  background-size: cover;
  background-position: center;
  color: white;
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
`;

const ProcessTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const ProcessStep = styled.div`
  background: rgba(255,255,255,0.1);
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.6s ease;
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateX(0)' : 'translateX(-30px)'};

  &:hover {
    background: rgba(255,255,255,0.15);
    transform: translateX(10px);
  }
`;

const StepNumber = styled.div`
  background: linear-gradient(45deg, #10b981, #06b6d4);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(16, 185, 129, 0.3);
`;

const StepTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const StepDescription = styled.p`
  line-height: 1.6;
`;

const processSteps = [
  {
    number: "1",
    title: "Stakeholder Engagement",
    description: "We begin by engaging with key stakeholders to understand your specific ESG needs and challenges, setting the foundation for a tailored approach."
  },
  {
    number: "2",
    title: "Preliminary Assessment",
    description: "Comprehensive evaluation of current ESG status through questionnaires and analysis, identifying gaps and opportunities for improvement."
  },
  {
    number: "3",
    title: "Deep-Dive Analysis",
    description: "Detailed assessment of ESG adoption and readiness, ensuring data quality and audit-readiness for compliance requirements."
  },
  {
    number: "4",
    title: "ESG Reporting & Implementation",
    description: "Final ESG reporting aligned with frameworks like Bursa Malaysia/SEDG, with actionable roadmaps and continuous performance tracking."
  }
];

function Process() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <ProcessSection id="process" ref={ref}>
      <Container>
        <SectionTitle>Our Business Methodology</SectionTitle>
        <ProcessTimeline>
          {processSteps.map((step, index) => (
            <ProcessStep key={index} inView={inView} style={{transitionDelay: `${index * 0.2}s`}}>
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </ProcessStep>
          ))}
        </ProcessTimeline>
      </Container>
    </ProcessSection>
  );
}

export default Process;