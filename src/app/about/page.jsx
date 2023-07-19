import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const abc = 13;

console.log(abc);

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          fill={true}
          alt="image yet to come"
          className={styles.imgContainer}
        />
        <div className={styles.imgText}></div>
      </div>
      <div className={styles.textContainer}></div>
    </div>
  );
}
