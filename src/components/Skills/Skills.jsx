import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import BurgerImg from '../Image/BurgerImg';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { base, top, mid, bot, intro, topSkills, midSkills, botSkills } = skills;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoverLayer, setHoverLayer] = useState(null);
  const [clickLayer, setClickLayer] = useState(null);
  const [burger, setBurger] = useState(base);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  // Load the burger image once skills load
  useEffect(() => {
    if (!burger) {
      setBurger(base);
    }
  }, [skills]);

  useEffect(() => {

  }, [hoverLayer, clickLayer]);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="skills-wrapper__image">
                <BurgerImg alt={`image of ${burger}`} filename={burger} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="skills-wrapper__info">
                {!hoverLayer && !clickLayer && (
                  <h3>{intro}</h3>
                )}
                <p className="skills-wrapper__info-text">
                  ...
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
