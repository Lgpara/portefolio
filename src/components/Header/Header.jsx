import { useState } from "react";
import "./header.css";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [langClicked, setLangClicked] = useState(false);
  function handleLangBtnClick(){
    console.log("click")
    setLangClicked(true)
    setTimeout(() => setLangClicked(false), 500);
  }

  return (
    <header>
      <div className="elements">
        {navOpen ? (
          <i
            onClick={() => setNavOpen(false)}
            class="navIcon headerIcons fa-solid fa-xmark"
          ></i>
        ) : (
          <i
            onClick={() => setNavOpen(true)}
            class="navIcon headerIcons fa-solid fa-bars"
          ></i>
        )}
        <nav className={navOpen ? "openAnim" : "closeAnim"}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="socialIcons">
        <div onClick={handleLangBtnClick} className={langClicked? "langSwitch langSwitchAnim" : "langSwitch"}>
          <i class="fa-solid fa-language"></i>
          <p className="lang">Anglais</p>
        </div>
        <div className="mail">
          <i class="copyMail fa-regular fa-copy"></i>
          <p className="mailAdress">louisgerber004@gmail.com</p>
        </div>
        <i class="headerIcons fa-brands fa-github"></i>
        <i class="headerIcons fa-brands fa-linkedin"></i>
      </div>
    </header>
  );
}
