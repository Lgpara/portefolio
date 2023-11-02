import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="elements">
        <i class="bars headerIcons fa-solid fa-bars"></i>
        <div className="hiddenContent">
          <nav>
            <a href="#home"></a>
            <a href="#about"></a>
            <a href="#projects"></a>
            <a href="#contact"></a>
          </nav>
        </div>
      </div>
      <div className="socialIcons">
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
