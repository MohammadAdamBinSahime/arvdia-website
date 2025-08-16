import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const TeamSection = styled.section`
  padding: 80px 0;
  background-color: #f8fafc;
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9)),
                    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="forest" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse"><rect width="150" height="150" fill="%23f8fafc"/><g transform="translate(75,130)"><path d="M-30,0 Q-25,-40 -15,-35 Q0,-50 15,-35 Q25,-40 30,0 Z" fill="%2322c55e" opacity="0.12"/><rect x="-3" y="0" width="6" height="15" fill="%23a3a3a3" opacity="0.1"/></g><g transform="translate(25,120)"><path d="M-15,0 Q-12,-25 -8,-22 Q0,-30 8,-22 Q12,-25 15,0 Z" fill="%2310b981" opacity="0.1"/><rect x="-2" y="0" width="4" height="10" fill="%23a3a3a3" opacity="0.08"/></g><g transform="translate(125,125)"><path d="M-12,0 Q-10,-20 -6,-18 Q0,-25 6,-18 Q10,-20 12,0 Z" fill="%2334d399" opacity="0.1"/><rect x="-1.5" y="0" width="3" height="8" fill="%23a3a3a3" opacity="0.08"/></g><circle cx="50" cy="50" r="4" fill="%2310b981" opacity="0.08"/><circle cx="100" cy="80" r="3" fill="%2322c55e" opacity="0.08"/></pattern></defs><rect width="1200" height="600" fill="url(%23forest)"/><ellipse cx="300" cy="100" rx="150" ry="50" fill="%2310b981" opacity="0.05"/><ellipse cx="900" cy="500" rx="200" ry="60" fill="%2322c55e" opacity="0.05"/></svg>');
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  background: linear-gradient(145deg, #f8fafc, #e2e8f0);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.6s ease;
  opacity: ${props => props.inView ? 1 : 0};
  transform: ${props => props.inView ? 'translateY(0)' : 'translateY(30px)'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`;

const TeamMemberAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  background: linear-gradient(45deg, #10b981, #06b6d4);
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="35" r="15" fill="white" opacity="0.8"/><ellipse cx="50" cy="75" rx="25" ry="20" fill="white" opacity="0.8"/></svg>');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

const MemberName = styled.h3`
  margin-bottom: 0.5rem;
  color: #1e293b;
  font-size: 1.5rem;
`;

const MemberTitle = styled.h4`
  color: #10b981;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const MemberDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

const teamMembers = [
  {
    initials: "SL",
    name: "Steven Lee",
    title: "President, ESG Malaysia",
    description: "With over 15 years of experience in Green Technology and Sustainability, Steven leads ESG advocacy and implementation strategies across Malaysia. His expertise spans project management, technical leadership, and delivering successful ESG transformations within specified timeframes."
  },
  {
    initials: "NA",
    name: "Nazirah Mohammad Ali",
    title: "Multi-Disciplinary Practitioner",
    description: "Nazirah specializes in developing business strategies for companies adopting new technologies including green tech, IoT, and drone technologies. Her background in oil and gas contracting and procurement brings valuable industry insights to ESG and SDG initiatives."
  }
];

function Team() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <TeamSection id="team" ref={ref}>
      <Container>
        <SectionTitle>Our Expert Consultants</SectionTitle>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} inView={inView} style={{transitionDelay: `${index * 0.2}s`}}>
              <TeamMemberAvatar>{member.initials}</TeamMemberAvatar>
              <MemberName>{member.name}</MemberName>
              <MemberTitle>{member.title}</MemberTitle>
              <MemberDescription>{member.description}</MemberDescription>
            </TeamMember>
          ))}
        </TeamGrid>
      </Container>
    </TeamSection>
  );
}

export default Team;