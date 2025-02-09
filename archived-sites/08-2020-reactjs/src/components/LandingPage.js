import React from 'react';
// import MyFace from '../static/my-face.jpg';
import * as Work from "../static/work.json";
import Lottie from 'react-lottie';
import Header from './Header';
import Social from './Social';

const config = {
    loop: true,
    autoplay: true,
    animationData: Work.default,
    rendererSettings: {
        preserveAspectiveRatio: 'xMidYMid slice'
    }
}

const LandingPage = () => {

    return (
        <div className="landing-page container" id="home">
            <Header />
            <div className="brief-introduction">
                <div className="title-name">
                    <a href="https://lottiefiles.com/18123-developer" target="_blank" rel="noopener noreferrer">
                        <Lottie options={config} height={300} width={300} />
                    </a>
                    <div className="title">Junior Web Developer</div>
                    <small>Elementary Competitive Programmer</small>
                    <div className="name"><span>Nam Nguyen</span> is passionate about web development and programming contest</div>
                    {/*<img src={MyFace} alt="Error" />*/}
                    <div className="email-container">
                        <a className="email" href="mailto:vnngu@deakin.edu.au">vnngu@deakin.edu.au</a>
                        <div className="email-line"></div>
                    </div>
                </div>
                <Social />
            </div>
            <small className="welcome">Welcome To My World</small>
        </div >
    );
};

export default LandingPage;