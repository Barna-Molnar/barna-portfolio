import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Ptext from './Ptext';

const ContanctBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ConactBanner() {
  return (
    <ContanctBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <Ptext>Lorem ipsum dolor sit</Ptext>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/home" />
        </div>
      </div>
    </ContanctBannerStyles>
  );
}
