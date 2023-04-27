import { useState } from "react";
import "./contact.scss";
import { useRef } from "react";
import emailjs from '@emailjs/browser'; 
export default function Contact() {
  const [message, setMessage] = useState(false);

  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('service_uu2gtgr', 'template_20lqewq', form.current, 'teFfaP0LMG8D82MyW')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()

  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/b.jpg" alt="" />
      </div>
      <div className="right">
        <p>Hey there, send me a message and I will reply ASAP ! </p><br></br>
        <form ref={form} onSubmit={handleSubmit}>
          
          <input type="text" placeholder="Email" name ="user_email" />
          <input type="text" placeholder="Subject" name ="subject" />
         
          <br></br>
          <textarea placeholder="Message" name ="message"></textarea>
          <br></br>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}