import { ReactNode  } from "react";
import styles from "../../styles/MainImage.module.scss";
import Image from "next/image";

interface MainImage {
  children: ReactNode;
}

const MainImage: React.FC<MainImage> = ({ children }) => {
  return (
    <>
      <div
        style={{ position: "relative", height: "600px" }}
        className={styles["image-container"]}
      >
        <Image
          src="/images/background/main-desktop-op.gif"
          alt="Pixel art with a moon and a big yellow in jungle made by Name Nguyen"
          objectFit="cover"
          layout="fill"
          objectPosition="85%"
          quality={10}
        />
      </div>
      {children}
    </>
  );
};

export default MainImage;
