import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
                I'm a Software developer with experience in building responsive
                and optimized solutions
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile App Developer</h3>
              <p>
                I have experience developing fast and optimised multi-platform applications
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/img.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Figma Designer Extraordinaire </h3>
              <p>
                I have used figma to design multiple landing pages and navigation through systems
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
