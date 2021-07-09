import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : ' var(--gray-1)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
    transition: all 0.2s ease-out;
  }
  .button:hover {
    background-color: ${(props) =>
      props.outline ? ' var(--gray-1)' : 'transparent'};
    color: ${(props) => (props.outline ? 'black' : 'var(--gray-1)')};
    /* transform: scale(1.04); */
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnLink = 'Test',
  btnText = 'Test',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button__wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
