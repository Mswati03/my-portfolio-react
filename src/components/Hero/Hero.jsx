import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mswati Tshabalala</h1>
        <p className={styles.description}>
          Computer System Engineering Fresher with a strong foundation in
          developing web and mobile applications, as well as websites.
          Proficient in various programming languages and development tools, I
          am eager to apply my technical skills to create efficient,
          user-friendly solutions. My goal is to contribute to innovative
          projects that enhance user experience and meet business objectives
          while continuously learning and staying updated with industry trends
          and best practices.
        </p>
        <a
          href="mailto:mswatitshabalala34@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mswati-logo.png")}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
