import "./contact.css"


export default function Contact(){
    return(
        <div className="contactContainer">
            <div className="message">
                <h2>Thanks for visiting my Portefolio !</h2>
                <p>Feel free to contact me for infos or just to say hi.</p>
            </div>
            <div className="formContainer">
                <form action="">
                    <label htmlFor="">Name / Entreprise</label>
                    <input type="text" />
                    <label htmlFor="">Email address</label>
                    <input type="email" name="" id="" />
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="26"></textarea>
                    <button>SEND MESSAGE</button>
                </form>
            </div>
            <div className="socialContainer"></div>
        </div>
    )
}