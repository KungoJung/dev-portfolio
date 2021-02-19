import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero, footer } = useContext(PortfolioContext);
  const { title, name, subtitle } = hero;
  const { networks } = footer;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <nav>
        {networks &&
          networks.map((network) => {
            const { id, name: networkName, url } = network;
            return (
              <a
                key={id}
                href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={networkName}
              >
                <i className={`fa fa-${networkName || 'refresh'} fa-inverse`} />
              </a>
            );
          })}
      </nav>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="skills" smooth duration={1000}>
                Skills
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to="projects" smooth duration={1000}>
                Projects
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                About
              </Link>
            </span>
            <span className="cta-btn cta-btn--hero">
              <Link to="contact" smooth duration={1000}>
                Contact
              </Link>
            </span>
            {/* <span className="cta-btn cta-btn--hero">
              <Link to="footer" smooth duration={1000}>
                Links
              </Link>
            </span> */}
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
