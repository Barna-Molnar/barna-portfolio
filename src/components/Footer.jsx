import React from 'react';
import styled from 'styled-components';
import FooterColumn from './FooterColumn';
import Ptext from './Ptext';

const FooterStyles = styled.div`
  padding: 10rem 0 0 0;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
    .footer__col1 {
      flex: 2;
    }
    .footer__col2,
    .footer__col3,
    .footer__col4 {
      flex: 1;
    }
    .footer__col1__title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0;
      & > div {
        margin-top: 5rem;
      }
      .footer__col1 {
        max-width: 100%;
      }
    }
    .copyright {
      .container {
        div {
          margin-top: 0rem !important;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Barna Molnar</h1>
          <Ptext>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptas iusto accusamus vero dolores aliquid beatae architecto ea
            quos expedita?
          </Ptext>
        </div>
        <div className="footer__col2">
          <FooterColumn
            heading="Important Links"
            links={[
              {
                type: 'link',
                path: '/',
                title: 'Home',
              },
              {
                type: 'link',
                path: '/about',
                title: 'About',
              },
              {
                type: 'link',
                path: '/projects',
                title: 'Project',
              },
              {
                type: 'link',
                path: '/contact',
                title: 'Contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterColumn
            heading="Contact Info"
            links={[
              {
                title: '0123456789',
                path: 'tel: +49 62179718',
              },
              {
                title: 'hanta911@gmail.com',
                path: 'mailto: me',
              },
              {
                title: 'BW, Backnang, Germany',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterColumn
            heading="Social Links"
            links={[
              { title: 'LinkedIn', path: 'linked.com' },
              { title: 'Twitter', path: 'twitter.com' },
              { title: 'Github', path: 'github.com' },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Ptext>© 2021 - Barnabas Molnar </Ptext>
        </div>
      </div>
    </FooterStyles>
  );
}
