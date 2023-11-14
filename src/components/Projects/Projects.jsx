import "./projects.css";
import projectsData from "../../appdata/data/projects.json";
import Button from "../../props/button/Button";

export default function Projects() {
  return (
    <div className="projectsContainer">
      {projectsData.map((project, index) => (
        <div key={"project" + index} className={index === 1 ?"projectBloc bloc2" :"projectBloc"}>
          <div className="projectCard">
            <img src={project.images[0]} alt="" />
          </div>
          <div className="projectInfos">
            <h3 className="projectName">Titre du site - Infos</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum nam, illum corporis iste quidem minus. Rem ducimus
              officiis tempore error! Velit iste officiis exercitationem magnam
              architecto animi quam voluptates amet!
            </p>
            <div className="usedStacks">
              <h3 className="stacksTitle">Used technology:</h3>
              <p>{project.stacks.join(", ")}</p>
            </div>
            <div className="links">
              <Button icon={<i className="fa-solid fa-arrow-up-right-from-square"></i>} text="Visit website" />
              <Button icon={<i className="fa-brands fa-github"></i>} text="Check code on Github" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
