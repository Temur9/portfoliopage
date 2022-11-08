import React from "react";
import "../Footer/Footer.scss";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-section">
            <h3>Let's connect!</h3>
            <div className="connect-links">
              <div className="links-container">
                <ul>
                  <li>
                    <a href="/#">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i class="fa-brands fa-github-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <i class="fa-brands fa-telegram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Build with <i class="fa-solid fa-heart"></i> Antonin Nhek © 2022{" "}
              <br />
              Powered by React, Gatsby & Tailwind CSS <br />
              Hosted by Netlify
            </p>
            <div className="toTopBtn">
              <button>Back to top</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
