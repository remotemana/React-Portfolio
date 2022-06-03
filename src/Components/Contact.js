import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
            <h1 className="text-light">Contact Me:</h1>
            {/* Review forms in React for this portion. Include an email form with a comment & name section */}
            <form className="form ">
                <input className="text-light"
                    value={name}
                    name="name"
                    onChange={(e) => { setName(e.target.value) }}
                    type="text"
                    placeholder="Your Name"
                />
                <input className="text-light"
                    value={email}
                    name="email"
                    onChange={(e) => { setEmail(e.target.value) }}
                    type="email"
                    placeholder="Your Email"
                />
                <textarea className="text-light"
                    value={message}
                    name="message"
                    onChange={(e) => { setMessage(e.target.value) }}
                    type="text"
                    placeholder="Your Message"
                />
                <br/>
                <br/>
                <button style={{alignSelf:"center",width:"20%"}} type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            <br/>
            <br/>
            <br/>
            <br/>
    
        </div>
    );
}