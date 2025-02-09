import styles from "../../styles/Home.module.scss";
import Link from "next/link";
const Introduction = () => {
  return (
    <section className="container">
      <div className={styles["introduction"]}>
        <p>
          I am a Junior Front-End Developer in Melbourne. I think that I am a{" "}
          <span>funny guy</span> who loves building <span>programs</span> that
          makes <span>people's lives easier</span>. At the moment, I specialize
          in web development, and I am trying different areas such as{" "}
          <span>computer graphics</span> and <span>game development</span> by
          myself.
        </p>
        <div>
          <p>
            In my spare time, you can catch me filming, drawing pixel art,
            reading books and learning English
          </p>
          <p>
            Take a look on my{" "}
            <span>
              <Link href="/projects">
                <a>projects</a>
              </Link>
            </span>{" "}
            page or{" "}
            <span>
              <Link href="/resume">
                <a>resume</a>
              </Link>
            </span>{" "}
            to understand about me a bit better, or visit contact page to reach
            me out and say "G'day". I am seeking for a developer job and open to
            hearing about new opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
