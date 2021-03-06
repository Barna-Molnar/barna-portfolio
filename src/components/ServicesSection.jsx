import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What I will do for you" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web design"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde nesciunt veritatis vero quo pariatur esse quas, ex quasi numquam."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web dev"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde nesciunt veritatis vero quo pariatur esse quas, ex quasi numquam."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde nesciunt veritatis vero quo pariatur esse quas, ex quasi numquam."
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
