import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import certification from "../../data/certification.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Certifications</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.certification}>
          {certification.map((certificationItem, id) => {
            return (
              <li key={id} className={styles.certificationItem}>
                <img
                  src={getImageUrl(certificationItem.imageSrc)}
                  alt={`${certificationItem.organisation} Logo`}
                />
                <div className={styles.certificationItemDetails}>
                  <h3>{certificationItem.Certification}</h3>
                  <p> {certificationItem.organisation}</p>
                  <a target="_blank" href={certificationItem.certificateLink}  className={styles.certificateBtn}>View Certificate</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
