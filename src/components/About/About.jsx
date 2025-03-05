import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.paragraph}>Hi, I’m Marsha, a passionate and driven front-end developer with a love for creating intuitive and visually appealing user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I’m continuously building on my skills and diving deeper into the world of programming. I enjoy the challenge of translating complex ideas into sleek, user-friendly designs that make a real impact.

When I’m not coding, you’ll find me exploring new trends in tech, or unwinding with anime and a good cup of coffee. I take pride in my work, always striving to learn and grow. Currently, I’m looking for opportunities where I can apply my knowledge, collaborate with creative teams, and continue improving as a developer.</p>

<p className={styles.paragraph}>Feel free to check out my projects, and don’t hesitate to reach out if you’re interested in collaborating or have any questions!</p>
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
