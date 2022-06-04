import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = () => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        if (email && name && message) {
            const serviceID = "service_pjde67o"
            const templateID = "template_v6du5pv"
            const publicKey = "LsudeP0e90Lm51_ZN"
            const templateParams = { name, email, message }
            emailjs.send(serviceID, templateID, templateParams, publicKey)
                .then(function (response) {
                    alert("Your email was successfully sent!");
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                });

        }
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h1 id="reach2" >Got a project?</h1>
            <h1 id="reach1">Need a sleek custom site?</h1>
            <h1 id="reach">Reach me below!</h1>
            <img id="think" src="/thinkman.png"></img>
            {/* Review forms in React for this portion. Include an email form with a comment & name section */}
            <form className="form" id="contact">
                <h4>Name</h4>
                <input value={name} name="name" onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Your Name"/>
                <br/>
                <h4>Email</h4>
                <input value={email} name="email" onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Your Email"/>
                <br/>
                <h4>Message</h4>
                <textarea value={message} name="message" onChange={(e) => { setMessage(e.target.value) }} type="text" placeholder="Your Message" rows="10"/>
                <br/>
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}