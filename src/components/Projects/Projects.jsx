import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div style={{ textAlign: "right", marginTop: "10px" }}>
        <a href="https://github.com/Mswati03?tab=repositories">
        <p style={{ color: "#007bff", cursor: "pointer", fontSize: "20px" }}>
          View More
        </p>
        </a>
      </div>

      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
