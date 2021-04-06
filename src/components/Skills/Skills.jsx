import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import SkillList from "./SkillList";
import BurgerImg from '../Image/BurgerImg';
import PortfolioContext from '../../context/context';

const defaultSkills = {
  title: 'None',
  stacks: [],
  burger: 'burger_blank.png',
};

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { frontEnd, backEnd, tools } = skills;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoverLayer, setHoverLayer] = useState(null);
  const [clickLayer, setClickLayer] = useState(null);
  const [activeLayer, setActiveLayer] = useState(defaultSkills);
  const [burger, setBurger] = useState(defaultSkills.burger);

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
    setBurger(activeLayer.burger);
  }, [skills, activeLayer]);

  const clickBurger = lay => {
    setClickLayer(lay);
  };
  const hoverBurger = lay => {
    setHoverLayer(lay);
  };

  // clickLayer takes priority over hoverLayer
  useEffect(() => {
    const layer = clickLayer || hoverLayer;
    if (!layer) setActiveLayer(defaultSkills);
    else setActiveLayer(layer);
  }, [hoverLayer, clickLayer]);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={750} delay={500} distance="30px">
              <div className="skills-wrapper__image">
                <div className="burger-wrapper">
                  <div className="burger-overlay">
                    <div
                      onClick={() => clickBurger(frontEnd)}
                      onMouseEnter={() => hoverBurger(frontEnd)}
                      onMouseLeave={() => hoverBurger(defaultSkills)}
                    className="top-overlay"></div>
                    <div
                      onClick={() => clickBurger(tools)}
                      onMouseEnter={() => hoverBurger(tools)}
                      onMouseLeave={() => hoverBurger(defaultSkills)}
                    className="mid-overlay"></div>
                    <div
                      onClick={() => clickBurger(backEnd)}
                      onMouseEnter={() => hoverBurger(backEnd)}
                      onMouseLeave={() => hoverBurger(defaultSkills)}
                    className="bot-overlay"></div>
                  </div>
                  <BurgerImg alt={`image of ${burger}`} filename={burger} />
                </div>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            {activeLayer.title === 'None' && (
              <Fade left={isDesktop} bottom={isMobile} duration={500} delay={250} distance="30px">
                <div className="skills-wrapper__info">
                  <h3 className="skills-wrapper__info-text">"Apps are like burgers. They've got layers."   - Shrek <span className="small">(rumored)</span></h3>
                  <p className="skills-wrapper__info-text">
                    Select a layer on the burger to show stack skills.
                  </p>
                </div>
              </Fade>
            )}
            {activeLayer.title === 'Front End' && (
              <Fade right={isDesktop} bottom={isMobile} duration={500} delay={250} distance="60px">
                <div className="skills-wrapper__info">
                  <h3 className="skills-wrapper__info-text__center">Front End</h3>
                  <SkillList skills={frontEnd.stacks} />
                </div>
              </Fade>
            )}
            {activeLayer.title === 'Back End' && (
              <Fade right={isDesktop} bottom={isMobile} duration={500} delay={250} distance="60px">
                <div className="skills-wrapper__info">
                  <h3 className="skills-wrapper__info-text__center">Back End</h3>
                  <SkillList skills={backEnd.stacks} />
                </div>
              </Fade>
            )}
            {activeLayer.title === 'Tools' && (
              <Fade right={isDesktop} bottom={isMobile} duration={500} delay={250} distance="60px">
                <div className="skills-wrapper__info">
                  <h3 className="skills-wrapper__info-text__center">Tools</h3>
                  <SkillList skills={tools.stacks} />
                </div>
              </Fade>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
