import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';

const ProjectStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
    input {
      width: 100%;
      font-size: 2rem;
      padding: 0.8rem;
      color: var(--black);
      border-radius: 6px;
      outline: none;
      border: none;
    }
    .search__Icon {
      position: absolute;
      width: 2rem;
      right: 1rem;
      path {
        color: var(--deep-dark);
      }
    }
  }
  /* .projectItem__img:hover {
    
  } */
  @media only screen and (max-width: 768px) {
    .projects__searchBar {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    // if searctText is empty(not valid)
    if (searchText === '') return;
    // set the Data
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (e.target.value.length <= 0) {
      setProjectData(ProjectInfo);
    }
  }

  return (
    <ProjectStyles>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent works" />
        <div className="projects__searchBar">
          <form action="#">
            <input
              type="text"
              onChange={handleChange}
              value={searchText}
              placeholder="Project Name"
            />
            <MdSearch className="search__Icon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData?.map((project) => (
            <ProjectItem
              key={project.id}
              img={project.img}
              title={project.name}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
    </ProjectStyles>
  );
}
