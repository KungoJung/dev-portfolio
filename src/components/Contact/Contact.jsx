import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={750} delay={500} distance="30px">
          <div className="contact-wrapper">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              attribute="netlify-honeypot='bot-field'"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />

              <input
                className="form-input input"
                type="text"
                name="name"
                required
                placeholder="Name"
              />

              <input required type="email" name="email" className=" input" placeholder="Email" />

              <textarea required name="message" rows="6" className=" input" placeholder="Message" />

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
