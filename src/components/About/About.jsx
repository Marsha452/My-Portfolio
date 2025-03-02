import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Front-end developer building responsive and optimized websites while sharpening my skills in modern web technologies. Passionate about creating smooth, user-friendly experiences
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/qa.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Quality Assurance</h3>
              <p>
              Detail-oriented QA tester ensuring smooth, bug-free user experiences. Skilled in identifying issues, improving functionality, and enhancing software quality through thorough testing
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
