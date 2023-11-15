import React from "react";
// import { Application } from "@splinetool/runtime";
import "./background.css";
import background from "../../appdata/images/background.webp";

// function SplineComponent() {
//   useEffect(() => {
//     const loadSplineScene = async () => {
//       const canvas = document.getElementById("canvas3d");
//       const app = new Application(canvas);
//       await app.load(
//         "https://prod.spline.design/ppOTAvz1aI26A9De/scene.splinecode"
//       );
//     };

//     loadSplineScene();
//   }, []);
//   return <canvas id="canvas3d" style={{ display: "none" }}></canvas>;
// }

export default function Background() {
  return (
    <div className="bgContainer" >
      <img className="bgImg" src={background} alt="" />
    </div>
  );
}
