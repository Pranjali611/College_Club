import React from 'react'
import './Contact.css'
import { FcFeedback } from "react-icons/fc";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "facea27f-83f5-4c53-98a7-4fc4dea6ef6f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="Contact">
    <div className='contact' id='Contact'>
        <div className='contact-col'>
            <h3>Send us a message<FcFeedback className='img'/></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our institute community.</p>
            <ul>
                <li><IoMdMail className='img3'/>pranjalimendhekar7789@gmail.com</li>
                <li><IoLocationSharp className='img2'/>Pune, India</li>
            </ul>
        </div>
        <div className='contact-column'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required></input>
                <label>Phone Number</label>
                <input type='tel' name='Phone' placeholder='Enter your mobile number' required></input>
                <label>Write your message here</label>
                <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='butn dark-btn'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
    </section>
  )
}

export default Contact
