import React from "react";
import "../Footer/Footer.scss";
const Footer = () => {

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-section">
            <h3>Let's connect!</h3>
            <div className="connect-links">
              <div className="links-container">
                <ul>
                  <li>
                    <a target={'blank'} href="/#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a target={'blank'} href="https://github.com/Temur9">
                      <i className="fa-brands fa-github-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a target={'blank'} href="https://t.me/timurkhan9">
                      <i className="fa-brands fa-telegram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Build with <i className="fa-solid fa-heart"></i> Tulamov Temur © 2022{" "}
              <br />
              Powered by React<br />
              Hosted by Netlify
            </p>
            <div className="toTopBtn">
              <button onClick={goToTop}>Back to top</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
