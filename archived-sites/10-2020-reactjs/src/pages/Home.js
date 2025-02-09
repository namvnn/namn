import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
// import Lottie from "react-lottie";
// import * as Work from "../assets/lottie/work.json";
import Face from "../assets/face/face.png";
import Footer from "../components/Footer";
import UnderLayImage from "../assets/face/home.svg";
import ScrollToTopButton from "../components/ScrollToTopButton";

// const config = {
//   loop: true,
//   autoplay: true,
//   animationData: Work.default,
//   rendererSettings: {
//     preserveAspectiveRatio: "xMidYMid slice",
//   },
// };
const greetings = [
  "Xin Chào <span role='img' aria-label='vietnam'>🇻🇳</span>",
  "Hello <span role='img' aria-label='england'>🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>",
  "Hola <span role='img' aria-label='spanish' >🇪🇸</span>",
  "Bonjour <span role='img' aria-label='france' >🇫🇷</span>",
  "안녕하세요 <span role='img' aria-label='south-korea'>🇰🇷</span>",
  "こんにちは <span role='img' aria-label='japan'>🇯🇵</span>",
  "你好 <span role='img' aria-label='china'>🇨🇳</span>",
  "สวัสดี <span role='img' aria-label='thai'>🇹🇭</span>",
  "ສະບາຍດີ <span role='img' aria-label='lao'>🇱🇦</span>",
  "សួស្តី <span role='img' aria-label='cambodia'>🇰🇭</span>",
  "Zdravstvuyte <span role='img' aria-label='russia'>🇷🇺</span>",
  "Salve <span role='img' aria-label='italy'>🇮🇹</span>",
  "Guten Tag <span role='img' aria-label='germany'>🇩🇪</span>",
  "Olá <span role='img' aria-label='portugal'>🇵🇹</span>",
  "Asalaam alaikum <span role='img' aria-label='arabic'>🇦🇪</span>",
  "Goddag <span role='img' aria-label='danmark'>🇩🇰</span>",
  "Goedendag <span role='img' aria-label='netherland'>🇳🇱</span>",
  "Yassas <span role='img' aria-label='greek'>🇬🇷</span>",
  "Dzień dobry <span role='img' aria-label='polan'>🇵🇱</span>",
  "Selamat siang <span role='img' aria-label='singapore'>🇮🇩</span>",
  "Merhaba <span role='img' aria-label='turkey'>🇹🇷</span>",
];

const Home = () => {
  useEffect(() => {
    const greeting = document.querySelector(".home .greetings .greeting");
    let greetingNumber = 0;
    setInterval(() => {
      if (greeting) {
        greeting.innerHTML = greetings[greetingNumber];
        if (++greetingNumber >= greetings.length) greetingNumber = 0;
      }
    }, 3000);
  }, []);
  return (
    <div className="home">
      <NavBar />
      <div className="columns is-centered is-vcentered mt-6 pt-6 extend">
        {/* Left Column: Image */}
        <div className="column face-image is-5 has-text-centered">
          <img src={Face} alt="Landing Page" />
          {/* <a
          href="https://lottiefiles.com/18123-developer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Lottie options={config} height={300} width={300} />
        </a> */}
        </div>

        {/* Right Column: Content */}
        <div className="column is-5 introduction">
          {/* Introduction */}
          <div className="px-5 py-5 ">
            <p className="greetings mb-4">
              <span className="greeting is-size-5" id="greeting">
                Look at here{" "}
                <span role="img" aria-label="rocket">
                  🚀
                </span>
              </span>
            </p>
            <Link to="/projects" className="btn-black">
              PROJECTS →
            </Link>
            <p
              className="is-size-4 has-text-weight-semibold mt-4"
              style={{ wordSpacing: "5px" }}
            >
              I am Nam Nguyen. I am an avid programmer. I am passionate about
              web development and computer graphics.
            </p>
          </div>
          {/* Introduction in detail */}
          <div className="py-5 px-5" style={{ lineHeight: "1.7rem" }}>
            <p style={{ fontSize: "15px" }}>
              I am a third-year undergraduate student at Deakin University,
              Melbourne. I think that I am a{" "}
              <span className="has-text-weight-bold">funny guy</span> who loves
              building programs that makes{" "}
              <span className="has-text-weight-bold">
                people's lives easier
              </span>
              . At the moment, I specialize in{" "}
              <span className="has-text-weight-bold">web development</span>, and
              I am trying different areas such as{" "}
              <span className="has-text-weight-bold">computer simulation,</span>{" "}
              <span className="has-text-weight-bold">game development</span> and{" "}
              <span className="has-text-weight-bold"> security</span> by myself.
              In my spare time, you can catch me filming, drawing pixel art,
              reading books and learning English.
            </p>
            <br />
            <p style={{ fontSize: "15px" }}>
              Take a look on my{" "}
              <Link
                to="/projects"
                className="has-text-weight-bold has-text-black"
              >
                projects
              </Link>{" "}
              page or{" "}
              <Link
                to="/resume"
                className="has-text-weight-bold has-text-black"
              >
                resume
              </Link>{" "}
              to understand about me a bit better, or visit{" "}
              <Link
                to="/resume"
                className="has-text-weight-bold has-text-black"
              >
                contact
              </Link>{" "}
              page to reach me out and say "G'day". I am seeking for a developer
              job and open to hearing about new opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className="underlay-image">
        <img src={UnderLayImage} alt="underlay" />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Home;
