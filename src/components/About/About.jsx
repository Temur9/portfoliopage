import React from "react";
import { Fade, Flip } from "react-reveal";
import "../About/About.scss";
import stacks from "./Stacks";

const shortid = require("shortid");

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-section">
            <div className="about-image">
              <div className="image-container">
                <Flip left>
                  <img src="/images/myAvatar.svg" alt="avatar" />
                </Flip>
              </div>
            </div>
            <div className="about-container">
              <div className="about-text">
                <p>
                  Hello ! I'm Tulamov Temur, Front-end developer based in
                  Tashkent (Uzbekistan).I have been working on my different
                  projects,since I graduated from the training center
                </p>
              </div>
              <div className="stack-container">
                <h3 className="about-stack_h3">MY ACTUAL STACK</h3>
                <div className="about-stack">
                  {stacks.map(({ img, alt }) => (
                    <Flip bottom>
                      <div key={shortid.generate()} className="stack">
                        <img src={img} alt={alt} />
                      </div>
                    </Flip>
                  ))}
                </div>
              </div>
              <div className="mission-container">
                <Fade top>
                  <div className="missions">
                    <img
                      src="/images/web-development.svg"
                      alt="web-development"
                    />
                    <h3>Development</h3>
                    <p>I develop the Front-end part of your projects.</p>
                  </div>
                  <div className="missions">
                    <img src="/images/responsive.svg" alt="web-development" />
                    <h3>Responsive</h3>
                    <p>My websites will work on any device, big or small.</p>
                  </div>
                  <div className="missions">
                    <img src="/images/dynamic.svg" alt="web-development" />
                    <h3>Dynamic</h3>
                    <p>
                      Websites don't have to be static, I love making pages come
                      to life.
                    </p>
                  </div>
                </Fade>
              </div>
              <div className="mission-text">
                <p>
                  Passionate about front-end web development, I am committed to
                  carrying out the opportunities entrusted to me by building
                  modern and effective solutions. Rigorous and demanding, I take
                  care to respect the best practices and standards of the Web.
                  Being also curious and open, I like to experiment with the
                  latest trends through daily monitoring.
                </p>
              </div>
              <div className="resume-download">
                <a href="https://drive.google.com/file/d/1Txz3jSu0lEh9qvOssbEzo50Sz6oYGOXU/view?usp=sharing">
                  Download my resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
