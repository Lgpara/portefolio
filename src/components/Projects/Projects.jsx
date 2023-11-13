import "./projects.css";
import projectsData from "../../appdata/data/projects.json";

export default function Projects() {
  return (
    <div className="projectsContainer">
      {projectsData.map((project, index) => (
        <div className={index === 1 ?"projectBloc bloc2" :"projectBloc"}>
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
            <div className="usedStacks"></div>
            <div className="links">
              <div className="redirect"></div>
              <div className="github"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
