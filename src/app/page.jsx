import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero.png";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Hii Welcome to my Portfolio Website</h1>
          <p className={styles.desc}>
            Hello , I am Shubham Raut, I AM CURRENTLY PURSUING MSC. IN COMPUTER
            SCIENCE FROM FERGUSSON COLLEGE, PUNE. I HAVE PASSION FOR PIXEL
            PERFECT, MINIMAL AND EASY TO USE INTERFACES.I HAVE DEEP
            UNDERSTANDING ABOUT UI/UX & WEB DEVELOPMENT CONCEPTS I HAVE ALSO
            WORKED WITH DBMS AND CLOUD COMPUTING TECHNOLOGIES.
          </p>
          <button className={styles.button}>See Our Work</button>
        </div>
        <div className={styles.item}>
          <Image
            width={500}
            height={500}
            src={Hero}
            alt="hero"
            className={styles.img}
          />
        </div>
      </div>
    </>
  );
}
