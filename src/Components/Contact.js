import React, {Component, useState} from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

    const handleFormSubmit = () => {
      
      if (Name && Email && Message) {
          const serviceID = "service_pjde67o"
          const templateID = "template_4cq8j6w"
          const publicKey = "LsudeP0e90Lm51_ZN"
          const templateParams = { Name, Email, Message }
          emailjs.send(serviceID, templateID, templateParams, publicKey)
              .then(function (response) {
                  alert("Your email was successfully sent to Lucas!");
                  console.log('email sent!', response.status, response.text);
              }, function (error) {
                  console.log('email failed', error);
              });
      } 
      
      setName('');
      setEmail('');
      setMessage('');
    };

    return (

      <div>
        <form>
        <h2>Name</h2>
        <input type="text" value={Name} onChange={(e)=> {setName(e.target.value)}} name="name"></input>
        <h2>Email</h2>
        <input type="email" value={Email} onChange={(e)=> {setEmail(e.target.value)}} name="email"></input>
        <h2>Message</h2>
        <textarea type="text" value={Message} onChange={(e)=>{setMessage(e.target.value)}} name="message"></textarea>
        <button onClick={handleFormSubmit}>Send it!</button>
      </form>
      </div>
    )
  }
