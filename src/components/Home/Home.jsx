import React from 'react'
import '../Home/Home.scss'
import TypedText from './typed-animation'


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
                        <h1 className='home-text_header'><TypedText/></h1>
                        
                        <p className="home-text" id='home-text'>I develop responsive, optimized and efficient websites. Satisfiction on my projects is my pride.</p>
                        <div className="home-buttons">
                            <a href="/#contact" className="home-button">Get in touch</a>
                            <a href="https://drive.google.com/file/d/1TBQReVaf_HLf3YHfVFh1SUoSwAsRYDRS/view?usp=sharing" className="home-button">My resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Home