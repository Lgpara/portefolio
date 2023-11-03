import "./home.css";
import React, { useEffect } from "react";
import { Application } from "@splinetool/runtime";
import testprojet from "../../appdata/images/phototest2.png";
import pp from "../../appdata/images/testphoto.png";
import projectsData from "../../appdata/data/projects.json"

function SplineComponent() {
  useEffect(() => {
    const loadSplineScene = async () => {
      const canvas = document.getElementById("canvas3d");
      const app = new Application(canvas);
      await app.load(
        "https://prod.spline.design/ppOTAvz1aI26A9De/scene.splinecode"
      );
    };

    loadSplineScene();
  }, []);

  return <canvas id="canvas3d" style={{ display: "none" }}></canvas>;
}

function Home() {
  return (
    <div className="homeContainer">
      <div className="bgContainer">
        <SplineComponent />
      </div>
      <div className="hello">
        <h1>Hello my name is Louis,</h1>
        <p>
          I'm a junior Front-End
          <br />
          web developper,
          <br />
          this is my portefolio.
        </p>
      </div>
      <aside className="rightModule">
        <div className="topElement">
          <div className="textContainer">
            <h2>About me.</h2>
            <p>
              My name is Louis Gerber. I'm a 26 years old web developper
              passionated about the tech industry. I have completed the web
              integrator curriculum on the OpenClassrooms platform.
            </p>
          </div>
          <div className="photoContainer">
            <img src={pp} alt="" />
          </div>
        </div>
        <div className="bottomElement">
          <img src={projectsData.projects[0].images[0]} alt="" />
          <div className="textElement">
            <div className="title">
              <h2>Last Project</h2>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Home;
