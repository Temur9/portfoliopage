import React from "react";
import "../About/About.scss";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-section">
            <div className="about-image">
              <div className="image-container">
                <img src="/images/myAvatar.svg" alt="avatar" />
              </div>
            </div>
            <div className="about-container">
              <div className="about-text">
                <p>
                  Hello ! I'm Antonin Nhek, Front-end developer based in Lyon
                  (France). After several years in graphic design and a
                  retraining in web programming, I offer my services as a
                  freelance.
                </p>
              </div>
              <div className="stack-container">
                <h3 className="about-stack_h3">MY ACTUAL STACK</h3>
                <div className="about-stack">
                  <div className="stack">
                    <img src="/images/stacks/html.svg" alt="html" />
                  </div>
                  <div className="stack">
                    <img src="/images/stacks/css.svg" alt="css" />
                  </div>
                  <div className="stack">
                    <img src="/images/stacks/sass.svg" alt="sass" />
                  </div>
                  <div className="stack">
                    <img src="/images/stacks/bootstrap.svg" alt="bootstrap" />
                  </div>
                  <div className="stack">
                    <img src="/images/stacks/javascript.svg" alt="javascript" />
                  </div>
                  <div className="stack">
                    <img src="/images/stacks/react.svg" alt="react" />
                  </div>
                  <div className="stack">
                    <img src="/images/stacks/redux.svg" alt="redux" />
                  </div>
                  <div className="stack">
                    <img src="/images/stacks/npm.svg" alt="npm" />
                  </div>
                  <div className="stack">
                    <img src="/images/stacks/yarn.svg" alt="yarn" />
                  </div>
                  <div className="stack">
                    <img src="/images/stacks/git.svg" alt="git" />
                  </div>
                  <div className="stack">
                    <img src="/images/stacks/github.svg" alt="github" />
                  </div>
                </div>
              </div>
              <div className="mission-container">
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
              </div>
              <div className="mission-text">
                <p>
                  Passionate about design and front-end web development, I am
                  committed to carrying out the opportunities entrusted to me by
                  building modern and effective solutions. Rigorous and
                  demanding, I take care to respect the best practices and
                  standards of the Web. Being also curious and open, I like to
                  experiment with the latest trends through daily monitoring.
                </p>
              </div>
              <div className="resume-download">
              <a href="/#">Download my resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
