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
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <form name="contact" method="POST" data-netlify="true" attribute="netlify-honeypot='bot-field'">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <label className="form-label">
                Name:
                <input className="form-input" type="text" name="name" />
              </label>
              <label className="form-label">
                Email:
                <input type="email" name="email" />
              </label>
              <label className="form-label">
                Message:
                <textarea name="message" rows="4"></textarea>
              </label>
              <button className="cta-btn cta-btn--hero" type="submit">
                Send
              </button>
            </form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
