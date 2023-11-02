import "./skills.css";

//icons
import html from "../../appdata/images/icons/html.svg";
import css from "../../appdata/images/icons/css.svg";
import sass from "../../appdata/images/icons/sass.svg";
import js from "../../appdata/images/icons/js.svg";
import react from "../../appdata/images/icons/react.svg";
import vue from "../../appdata/images/icons/vue.svg";

export default function Skills() {
  return (
    <div className="skillsContainer">
      <div className="stacks">
        <h2>Mes Stacks</h2>
        <div className="stacksIcons">
          <img src={html} alt="Icone Html" />
          <img src={css} alt="Icone Css" />
          <img src={sass} alt="Icone Sass" />
          <img src={js} alt="Icone Js" />
          <img src={react} alt="Icone React" />
          <img src={vue} alt="Icone Vue" />
        </div>
      </div>
      <div className="competences">
        <h2>Domaine de compétences</h2>
        <div className="skillsBloc">
          <div className="apt1">
            <h3>Applications Web</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              ab eveniet quis veritatis reiciendis amet non qui, veniam quam
              necessitatibus delectus itaque, perspiciatis quo quisquam
              possimus. Laudantium alias mollitia esse.
            </p>
          </div>
          <div className="apt1">
            <h3>SEO</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              ab eveniet quis veritatis reiciendis amet non qui, veniam quam
              necessitatibus delectus itaque, perspiciatis quo quisquam
              possimus. Laudantium alias mollitia esse.
            </p>
          </div>
          <div className="apt1">
            <h3>Accessibilité</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              ab eveniet quis veritatis reiciendis amet non qui, veniam quam
              necessitatibus delectus itaque, perspiciatis quo quisquam
              possimus. Laudantium alias mollitia esse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
