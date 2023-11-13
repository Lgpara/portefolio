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
        <h2 className="stacksTitle">Mes Stacks</h2>
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
        <h2>Domaine de compétences</h2>
        <div className="skillsBloc">
          <div className="apt1">
            <h3>Applications Web</h3>
            <p>
              Besoin d'une application web sur mesure ? Je suis là pour
              concevoir des solutions personnalisées et performantes pour votre
              entreprise. Faites passer votre entreprise au niveau supérieur
              avec une application web conçue sur mesure pour répondre à vos
              besoins uniques.
            </p>
          </div>
          <div className="apt1">
            <h3>SEO</h3>
            <p>
              Optimisez votre visibilité en ligne. Je créerai un site web qui se
              démarque sur les moteurs de recherche. Votre site sera conçu pour
              attirer un trafic qualifié, renforçant ainsi votre présence en
              ligne et stimulant votre croissance.
            </p>
          </div>
          <div className="apt1">
            <h3>Accessibilité</h3>
            <p>
              Rendez votre site accessible à tous. Je veille à ce que votre site
              soit convivial pour tous les utilisateurs, y compris ceux ayant
              des besoins spéciaux. Améliorez l'expérience de vos visiteurs et
              montrez votre engagement envers l'inclusion en optant pour un site
              web accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
