import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Get In Touch!" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            {/* <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p> */}
            <form name="contact" method="POST" data-netlify="true" attribute="netlify-honeypot='bot-field'">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <label>Your Name: <input type="text" name="name" /></label>
              <label>Your Email: <input type="email" name="email" /></label>
              <label>Message: <textarea name="message"></textarea></label>
              <button type="submit">Send</button>
            </form>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a> */}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
