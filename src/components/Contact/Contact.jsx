import "./contact.css";

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="message">
        <h2>Thanks for visiting my Portefolio !</h2>
        <p>Feel free to contact me for infos or just to say hi.</p>
      </div>
      <div className="formContainer">
        <form name="contact">
          <input type="hidden" name="to" value="louisgerber004@gmail.com" />
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
      </div>
    </div>
  );
}
