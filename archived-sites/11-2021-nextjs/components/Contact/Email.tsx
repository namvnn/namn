import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import styles from "../../styles/Contact.module.scss";
import Button from "../Button";

const EMAIL = "vnngucs@outlook.com"
const Email = () => {
  const [isCopied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [isCopied]);

  const copyToClipboard = () => {
    let textField: HTMLTextAreaElement = document.createElement("textarea");
    textField.innerText = EMAIL;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setCopied(true);
  };
  return (
    <div className={styles["email"]} onClick={copyToClipboard}>
      <div>
        {isCopied ? <span>Copied</span> : <span style={{ display: "none"}}></span>}
        <MdEmail className={styles["email-icon"]} />
        <h1>{EMAIL}</h1>
      </div>
      <Button text="Copy Email" />
    </div>
  );
};

export default Email;
