import "./projects.css";
import ph1 from "../../appdata/images/projettestphoto.jpg";
import ph2 from "../../appdata/images/phototest2.png";
import ph3 from "../../appdata/images/phototest3.jpg";

export default function Projects() {
  return (
    <div className="projectsContainer">
      <div className="projectBloc">
        <div className="projectCard">
          <img src={ph1} alt="" />
          <div className="content">
            <div className="stacks">
              <div className="linkButton">Visit website</div>
            </div>
            <div className="textContent">
              <div className="blocLeft">
                <h2>Visit website</h2>
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
        <div className="projectInfos">
          <h2 className="projectName">Placeholder</h2>
          <p className="mission">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nam, illum corporis iste quidem minus. Rem ducimus officiis tempore
            error! Velit iste officiis exercitationem magnam architecto animi
            quam voluptates amet!
          </p>
          <div className="usedStacks"></div>
        </div>
      </div>
      <div className="projectBloc bloc2">
        <div className="projectCard">
          <img src={ph2} alt="" />
          <div className="content">
            <div className="stacks">
              <div className="linkButton">Visit website</div>
            </div>
            <div className="textContent">
              <div className="blocLeft">
                <h2>Visit website</h2>
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
        <div className="projectInfos"></div>
      </div>
      <div className="projectBloc">
        <div className="projectCard">
          <img src={ph3} alt="" />
          <div className="content">
            <div className="stacks">
              <div className="linkButton">Visit website</div>
            </div>
            <div className="textContent">
              <div className="blocLeft">
                <h2>Visit website</h2>
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
        <div className="projectInfos"></div>
      </div>
    </div>
  );
}
