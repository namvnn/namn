import styles from "../../styles/Button.module.scss";
import Link from "next/link";

export interface ButtonProps {
  text: string;
  url?: string | null;
}

const Button: React.FC<ButtonProps> = ({ text, url }) => {
  return (
    <>
      {!url && <button className={styles["button"]}>{text}</button>}
      {url && (
        <button className={styles["button"]}>
          <Link href={url}>{text}</Link>
        </button>
      )}
    </>
  );
};

export default Button;
