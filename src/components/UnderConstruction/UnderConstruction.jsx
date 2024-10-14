import React from "react";
import "./style.css"; // Ensure you have this file in the project
import constructionImagePath from "./construction.svg"; // Import the construction image

const UnderConstruction = () => {
  return (
    <>
      <div class="overlay" ></div>
      <div class="stars" aria-hidden="true"></div>
      <div class="starts2" aria-hidden="true"></div>
      <div class="stars3" aria-hidden="true"></div>
      <main class="main">
        <section class="contact">
          <h1 class="title">Mswati.dev</h1>
          <h2 class="sub-title">Site Under Construction</h2>
        </section>
      </main>
    </>
  );
};

export default UnderConstruction;
