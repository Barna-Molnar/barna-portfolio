import React from 'react';
import styled from 'styled-components';
import Ptext from './Ptext';

const AboutItemStyles = styled.div`
  display: flex;
  position: relative;

  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    position: absolute;
    flex-wrap: wrap;
    gap: 1.5rem;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Default Title',
  items = ['HTML', 'JavaScript', 'CSS'],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <Ptext>{item}</Ptext>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
