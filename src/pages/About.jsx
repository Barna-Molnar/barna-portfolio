import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Ptext from '../components/Ptext';
import aboutImg2 from '../assets/images/about-page-photo.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ConactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      filter: grayscale(1000%);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi I am <span>Barnabas Molnar</span>
            </p>
            <h2 className="about__heading">A Junior Web Developer</h2>
            <div className="about__info">
              <Ptext>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae adipisci vel at ullam iste atque modi vero perferendis
                fugiat soluta sequi eveniet voluptate libero veritatis facilis
                doloribus recusandae, voluptatem autem.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, nesciunt eveniet, vitae hic optio rem suscipit
                possimus nisi, quaerat aliquid corporis ex voluptas. Praesentium
                quos voluptas nostrum neque harum quibusdam.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                debitis non, voluptate voluptas quas asperiores excepturi,
                numquam corrupti eligendi, natus eaque architecto. Accusantium,
                nihil neque? Quae perspiciatis perferendis alias odio.
              </Ptext>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={aboutImg2} alt="" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Jedlik A. Mech. Engineering & Infor. Tech Sch.']}
            />
            <AboutInfoItem
              title="Courses"
              items={['Advanced Css/Sass', 'JavaScript', 'FreeCodeCamp']}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={[
                'HTML',
                'CSS',
                'JavaScript',
                'REACT',
                'SCSS',
                'Npm',
                'Git',
              ]}
            />
            <AboutInfoItem
              title="Libraries"
              items={[
                'React-Bootstrap',
                'Bootstrap',
                'Materialize',
                'Material UI',
              ]}
            />
          </div>
        </div>
      </div>
      <ConactBanner />
    </AboutPageStyles>
  );
}
