import React from "react";
import { Slide } from "react-reveal";
import "../Contact/Contact.scss";
const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-section">
            <header className="contact-header">
              <Slide left>
                <h2>Get in touch</h2>
              </Slide>
              <p>
                Do you have web development projects, freelance missions or just
                opportunities to offer me? Let's get in touch and discuss it
                over a coffee!
              </p>
            </header>
            <form action="" className="contact-form">
              <div className="name-input">
                <div id="nameIn">
                  <label htmlFor="name">
                    First name
                    <input
                      placeholder="Temur"
                      id="name"
                      name="firstname"
                      type="text"
                    />
                  </label>
                </div>
                <div id="lastIn">
                  <label htmlFor="lastname">
                    Last name
                    <input
                      id="lastname"
                      placeholder="Tulamov"
                      name="lastname"
                      type="text"
                    />
                  </label>
                </div>
              </div>
              <div className="email-input">
                <label htmlFor="email">
                  Email{" "}
                  <input
                    placeholder="temurtolamov@gmail.com"
                    id="email"
                    name="email"
                    type="email"
                  />
                </label>
              </div>
              <div className="message-input">
                <label htmlFor="message">
                  Message
                  <textarea
                    name="message"
                    id="message"
                    rows="10"
                    maxLength={2000}></textarea>
                </label>
              </div>
              <div className="submit-button">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
