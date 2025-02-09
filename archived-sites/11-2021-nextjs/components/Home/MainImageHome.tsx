import { useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import Button from "../Button";
import MainImage from "../MainImage";

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

const MainImageHome = () => {
  useEffect(() => {
    const greeting = document.querySelector(".greeting");
    let greetingNumber = 0;
    setInterval(() => {
      if (greeting) {
        greeting.innerHTML = greetings[greetingNumber];
        if (++greetingNumber >= greetings.length) greetingNumber = 0;
      }
    }, 3000);
  }, []);
  return (
    <div className={styles["main-image-container"]}>
      <MainImage>
        <div className={styles["titles"]}>
          <h1>
            {" "}
            <span className="greeting" id="greeting">
              Look at here{" "}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </span>
          </h1>
          <section>
            <p>front-end developer,</p>
            <p>computer science enthusiast, </p>
            <p>art enthusiast (pixel, 3D Model)</p>
          </section>
          <Button text={"Projects →"} url={"/projects"} />
        </div>
      </MainImage>
    </div>
  );
};

export default MainImageHome;
