import React from "react";
import "../Work/Work.scss";

const Work = () => {
  return (
    <>
      <section className="work" id="work">
        <div className="container">
          <div className="work-section">
            <div className="work-container">
              <div className="work-picture">
                <a className="picture_link" target={'blank'} href="https://coctail-shop.netlify.app/">
                  <img src="/images/coctail-shop.png" alt="coctail-shop" />
                </a>
              </div>
              <h4 className="work-h4">
                <a target={'blank'} href="https://coctail-shop.netlify.app/">
                  Online Shopping <i class="fa-sharp fa-solid fa-link"></i>
                </a>
                <span></span>
                <a target={'blank'} href="https://github.com/Temur9/shopping">
                  <i class="fa-brands fa-github-alt"></i>
                </a>
              </h4>
              <p className="work-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                dicta?
              </p>
              <div className="work-languages">
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
                <span>Redux</span>
              </div>
            </div>
            <div className="work-container">
              <div className="work-picture">
                <a className="picture_link" target={'blank'} href="https://todo-list-temurbek.netlify.app/">
                  <img src="/images/todo.png" alt="todo" />
                </a>
              </div>
              <h4 className="work-h4">
                <a target={'blank'} href="https://todo-list-temurbek.netlify.app/">
                  ToDo List <i class="fa-sharp fa-solid fa-link"></i>
                </a>
                <span></span>
                <a target={'blank'} href="https://github.com/Temur9/todo">
                  <i class="fa-brands fa-github-alt"></i>
                </a>
              </h4>
              <p className="work-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                dicta?
              </p>
              <div className="work-languages">
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
              </div>
            </div>
            <div className="work-container">
              <div className="work-picture">
                <a className="picture_link" target={'blank'} href="https://tic-tac-toe-temurbek.netlify.app/">
                  <img src="/images/tictactoe.png" alt="coctail-shop" />
                </a>
              </div>
              <h4 className="work-h4">
                <a target={'blank'} href="https://tic-tac-toe-temurbek.netlify.app/">
                  Tic Tac Toe <i class="fa-sharp fa-solid fa-link"></i>
                </a>
                <span></span>
                <a target={'blank'} href="https://github.com/Temur9/tic-tac-toe-JS">
                  <i class="fa-brands fa-github-alt"></i>
                </a>
              </h4>
              <p className="work-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                dicta?
              </p>
              <div className="work-languages">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>
            <div className="work-container">
              <div className="work-picture">
                <a className="picture_link" target={'blank'} href="https://weather-app-temurbek.netlify.app/">
                  <img src="/images/weather.png" alt="coctail-shop" />
                </a>
              </div>
              <h4 className="work-h4">
                <a target={'blank'} href="https://weather-app-temurbek.netlify.app/">
                  Weather App <i class="fa-sharp fa-solid fa-link"></i>
                </a>
                <span></span>
                <a target={'blank'} href="https://github.com/Temur9/weather-app_ReactJS">
                  <i class="fa-brands fa-github-alt"></i>
                </a>
              </h4>
              <p className="work-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                dicta?
              </p>
              <div className="work-languages">
                <span>HTML</span>
                <span>CSS</span>
                <span>React</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
