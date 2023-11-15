import { useEffect, useState } from "react";
import "./header.css";
import Button from "../../props/button/Button";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const [langClicked, setLangClicked] = useState(false);
  const [lang, setLang] = useState("English");

  function handleLangBtnClick() {
    console.log("click");
    setLangClicked(true);
    setTimeout(() => setLangClicked(false), 500);
    if (lang === "English") {
      setLang("French");
    } else {
      setLang("English");
    }
  }

  const [mailClicked, setMailClicked] = useState("false");

  function copyMail() {
    const mail = "louisgerber004@gmail.com";
    const elementTemporaire = document.createElement("textarea");
    elementTemporaire.value = mail;
    document.body.appendChild(elementTemporaire);
    elementTemporaire.select();
    document.execCommand("copy");
    document.body.removeChild(elementTemporaire);

    setMailClicked(true);
    setTimeout(() => setMailClicked(false), 5000);
  }


  useEffect(() => {
    setNavOpen(false);
    setMailClicked(false);
  }, []);

  return (
    <header>
      <div className={navOpen ? "elements openAnimSidePannel" : "elements"}>
        {navOpen ? (
          <i
            onClick={() => setNavOpen(false)}
            className="navIcon fa-solid fa-xmark"
          ></i>
        ) : (
          <i
            onClick={() => setNavOpen(true)}
            className="navIcon fa-solid fa-bars"
          ></i>
        )}
        <nav className={navOpen ? "openAnim" : "closeAnim"}>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="socialIcons">
        {/* <div onClick={handleLangBtnClick}>
          <Button
            icon={<i className="fa-solid fa-language"></i>}
            text={lang}
            containerClass={langClicked ? "langSwitchAnim" : null}
          />
        </div> */}
        <div onClick={copyMail}>
          <Button
            icon={
              mailClicked ? (
                <i className="fa-solid fa-check"></i>
              ) : (
                <i className="copyMail fa-regular fa-copy"></i>
              )
            }
            text="louisgerber004@gmail.com"
            containerClass={mailClicked ? "greenBg" : null}
          />
        </div>

        <a href="https://github.com/Lgpara">
          <i className="headerIcons fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/louis-gerber-838a33291/" className="linkedinLink">
          <i className="headerIcons fa-brands fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
}
