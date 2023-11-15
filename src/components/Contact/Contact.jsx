import { useState } from "react";
import "./contact.css";

export default function Contact() {

  const [mailBtnClicked, setMailBtnClicked] = useState(false);
  function handleMailBtnClick() {
    const mail = "louisgerber004@gmail.com";
    const elementTemporaire = document.createElement("textarea");
    elementTemporaire.value = mail;
    document.body.appendChild(elementTemporaire);
    elementTemporaire.select();
    document.execCommand("copy");
    document.body.removeChild(elementTemporaire);
    setMailBtnClicked(prevState => !prevState);
    setTimeout(() => {
      setMailBtnClicked(false);
    }, 5000);
  }

  return (
    <div className="contactContainer">
      <div className="message">
        <h2>Thanks for visiting my Portefolio !</h2>
        <p>Feel free to contact me for infos or just to say hi.</p>
      </div>
      <div className="mail">
        <p className="overBtnText">Click to copy my email address!</p>
        <div onClick={handleMailBtnClick} className={mailBtnClicked? "mailBtn mailBtnAnim" : "mailBtn" }>
          <i className={!mailBtnClicked? "fa-solid fa-envelope" : "fa-solid fa-check"}></i>
          <p>louisgerber004@gmail.com</p>
        </div>
      <div className="social">
        <p className="overIconsText">Check out my links</p>
        <div className="socialIconsContainer">
          <a href="https://github.com/Lgpara">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/louis-gerber-838a33291/" className="linkedinLink">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      </div>
      {/* <div className="formContainer">
        <form name="contact">
          <label htmlFor="name">Name / Company</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">E-mail address *</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="20"
            required
          ></textarea>
          <button type="submit">Send message</button>
        </form>
      </div> */}
    </div>
  );
}
