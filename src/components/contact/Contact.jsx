import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/b.jpg" alt="" />
      </div>
      <div className="right">
        <p>Hey there, send me a message and I will reply ASAP ! </p><br></br>
        <form onSubmit={handleSubmit}>
          
          <input type="text" placeholder="Subject" />
          <br></br>
          <textarea placeholder="Message"></textarea>
          <br></br>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}