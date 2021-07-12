import React from 'react';
import styled from 'styled-components';
import { MdRoom } from 'react-icons/md';
import Ptext from './Ptext';
// import MapImg from '../assets/images/map.png';
import MapImg2 from '../assets/images/myLocation2.png';

const MapStyles = styled.div`
  background: url(${MapImg2}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    background-color: var(--deep-dark);
    padding: 2rem;
    border-radius: 12px;
    width: 100%;
    max-width: 300px;
  }
  .map__card__heading {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  .para {
    font-size: 1.6rem;
  }
  #mapid {
    height: 180px;
  }

  svg {
    position: absolute;
    width: 5rem;
    height: 5rem;
    fill: red;
    left: 25%;
    top: -40%;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 768px) {
    .map__card {
      /* max-width: none; */
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <MdRoom />

          <h3 className="map__card__heading">Here is me</h3>
          <Ptext>BW, Backnang, Germany</Ptext>
          <a
            className="map__card__link "
            href="www.google.com/maps"
            target="_blank"
            rel="noreferrer"
          >
            Open in a google map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
