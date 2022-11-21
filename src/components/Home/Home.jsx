import React from 'react'
import '../Home/Home.scss'


const Home = () => {
  return (
    <>
        <header className="home">
            <div className="container">
                <div className="home-section">
                    <div className="home-left_section">
                        <img src="./images/myAvatar.svg" alt="avatar"/>
                    </div>
                    <div className="home-right_section">
                        <p className="home-text">Hello! I'm <span>Tulamov Temur</span></p>
                        <h1 className='home-text_header'>Front-end Developer</h1>
                        <p className="home-text" id='home-text'>I develop responsive, optimized and efficient websites. Satisfiction on my projects is my pride.</p>
                        <div className="home-buttons">
                            <a href="/#contact" className="home-button">Get in touch</a>
                            <a href="https://www.dropbox.com/s/949tqkeppoj9xms/Tulamov%20Temurbek%28CV%29.pdf?dl=0" className="home-button">My resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Home