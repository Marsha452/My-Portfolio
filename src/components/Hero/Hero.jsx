import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Marsha</h1>
        <p className={styles.description}>
        Aspiring front-end developer crafting seamless, user-friendly experiences.
         Exploring JavaScript and modern web tech—let’s create something amazing!
        </p>
        
          <a href="https://drive.google.com/file/d/1Qa827STAfU0AZo1i7-QKRelwBoZbylH9/view?usp=sharing" className={styles.contactBtn} target="_blank">
            Resume
          </a>
            
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
