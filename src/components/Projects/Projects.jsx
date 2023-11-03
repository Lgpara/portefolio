import "./projects.css";
import ph1 from "../../appdata/images/projettestphoto.jpg";
import ph2 from "../../appdata/images/phototest2.png";
import ph3 from "../../appdata/images/phototest3.jpg";

export default function Projects() {
  return (
    <div className="projectsContainer">
      <div className="projectCard">
        <img src={ph1} alt="" />
        <div className="content">
          <div className="stacks">
            <div className="linkButton">Visit website</div>
          </div>
          <div className="textContent">
            <div className="blocLeft">
              <h2>Placeholder</h2>
              <p className="description">Placeholder - description</p>
            </div>
            <div className="ghButtonContainer">
              <p className="ghButtonTxt">Check code on github !</p>
              <div className="iconContainer">
              <i class="fa-brands fa-github"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projectCard">
        <img src={ph2} alt="" />
        <div className="content">
          <div className="stacks">
          <div className="linkButton">Visit website</div>
          </div>
          <div className="textContent">
            <div className="blocLeft">
              <h2>Placeholder</h2>
              <p className="description">Placeholder - description</p>
            </div>
            <div className="ghButtonContainer">
              <p className="ghButtonTxt">Check code on github !</p>
              <div className="iconContainer">
              <i class="fa-brands fa-github"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projectCard">
        <img src={ph3} alt="" />
        <div className="content">
          <div className="stacks">
          <div className="linkButton">Visit website</div>
          </div>
          <div className="textContent">
            <div className="blocLeft">
              <h2>Placeholder</h2>
              <p className="description">Placeholder - description</p>
            </div>
            <div className="ghButtonContainer">
              <p className="ghButtonTxt">Check code on github !</p>
              <div className="iconContainer">
              <i class="fa-brands fa-github"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
