import "./projects.css";
import projectsData from "../../appdata/data/projects.json";
import Button from "../../props/button/Button";

export default function Projects() {
  return (
    <div className="projectsContainer">
      {projectsData.map((project, index) => (
        project.highlight !== true ? (
        <div key={"project" + index} className={index === 1 ?"projectBloc bloc2" :"projectBloc"}>
          <div className="projectCard">
            <img src={project.images[0]} alt="" />
          </div>
          <div className="projectInfos">
            <h3 className="projectName">{project.titre}</h3>
            <p className="description">{project.description}</p>
            <div className="usedStacks">
              <h3 className="stacksTitle">Used technology:</h3>
              <p>{project.stacks.join(", ")}</p>
            </div>
            <div className="links">
              <Button link={project.link.website} containerClass={project.link.website ? null : "unavailable"} icon={<i className="fa-solid fa-arrow-up-right-from-square"></i>} text="Visit website" />
              <Button link={project.link.github} containerClass={project.link.github ? null : "unavailable"} icon={<i className="fa-brands fa-github"></i>} text="Check code on Github" />
            </div>
          </div>
        </div>) : null
      ))}
    </div>
  );
}
