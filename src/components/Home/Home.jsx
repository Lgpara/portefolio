import "./home.css"
import bg from "../../appdata/images/placeholderhomebg.jpg"
import testprojet from "../../appdata/images/phototest2.jpg"
import pp from "../../appdata/images/testphoto.png"


export default function Home(){
    return(
        <div className="homeContainer">
            <div className="bgContainer">
                <img src={bg} alt="" />
            </div>
            <aside className="rightModule">
                <div className="topElement">
                    <div className="textContainer">
                        <p>Je m'appelle Louis Gerber, j'ai 26 ans. Je suis passionné par l'informatique et tout ce qui tourne autour. J'ai suivi la formation d'intégrateur web de la plateforme OpenClassrooms.</p>
                    </div>
                    <div className="photoContainer">
                        <img src={pp} alt="" />
                    </div>
                </div>
                <div className="bottomElement">
                    <img src={testprojet} alt="" />
                    <div className="textElement">
                        <div className="title">
                          <h2>Last Project</h2>
                          <i class="titleIcon fa-solid fa-meteor"></i>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}