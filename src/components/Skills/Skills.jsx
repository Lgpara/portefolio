import "./skills.css";

//icons
import html from "../../appdata/images/icons/html.svg";
import css from "../../appdata/images/icons/css.svg";
import sass from "../../appdata/images/icons/sass.svg";
import js from "../../appdata/images/icons/js.svg";
import react from "../../appdata/images/icons/react.svg";
import next from "../../appdata/images/icons/next.svg";

export default function Skills() {
  return (
    <div className="skillsContainer">
      <h2 className="stacksTitle">Tech stacks</h2>
      <div className="stacks">
        <div className="stacksIcons">
          <img src={html} alt="Icone Html" />
          <img src={css} alt="Icone Css" />
          <img src={sass} alt="Icone Sass" />
          <img src={js} alt="Icone Js" />
          <img src={react} alt="Icone React" />
          <img src={next} alt="Icone Next" />
        </div>
      </div>
      <div className="competences">
      <h2>Area of competence</h2>
        <div className="skillsBloc">
          <div className="apt1">
            <h3>Web Applications</h3>
            <p>
              Need a custom web application? I'm here to design tailored and
              high-performance solutions for your business. Take your business
              to the next level with a custom web application designed to meet
              your unique needs.
            </p>
          </div>
          <div className="apt1">
            <h3>SEO</h3>
            <p>
              Enhance your online visibility. I will create a website that
              stands out on search engines. Your site will be designed to
              attract qualified traffic, thereby strengthening your online
              presence and boosting your growth.
            </p>
          </div>
          <div className="apt1">
            <h3>Accessibility</h3>
            <p>
              Make your site accessible to everyone. I ensure that your site is
              user-friendly for all, including those with special needs. Enhance
              the experience for your visitors and demonstrate your commitment
              to inclusion by choosing an accessible website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
