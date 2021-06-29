import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyle = styled.div`
  position: relative;
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 2px solid var(--gray-2);
  }
  .projectItem__img::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    bottom: 0;
    height: 400px;
    width: 0;
    transition: all 0.2s;
    border: inset 2px solid var(--gray-2);
    border-radius: 12px;

    background-color: rgba(0, 0, 0, 0.2);
  }
  /* .projectItem__img::after {
    content: '';
    position: absolute;
    top: 0;

    right: 10px;
    bottom: 0;
    height: 400px;
    width: 10px;
    transition: all 0.2s;
    border: inset 2px solid var(--gray-2);
    border-radius: 12px;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.2);
    color: red;
  }
   */

  .projectItem__img:hover::before {
    width: 100%;
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'Robotomono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 300px;
      width: 100%;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt',
}) {
  return (
    <ProjectItemStyle>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}
