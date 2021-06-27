import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Ptext from '../components/Ptext';
import aboutImg from '../assets/images/about-page-img.png';

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
            <Button btnText="Dovnload CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}
