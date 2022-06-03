import React, {Component, useState} from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    // return name === 'firstName' ? setFirstName(value) : setLastName(value);
    if (name === 'Name') {
        return setName(value);
    }
    if (name === 'Email') {
        return setEmail(value);
    }
    if (name === 'Message') {
        return setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    emailjs.sendForm('service_pjde67o', 'template_4cq8j6w', {from_name: Name, reply_to: Email, message: Message}, 'LsudeP0e90Lm51_ZN')
      .then((result) => {
          console.log(result.text);
          setName('');
          setEmail('');
          setMessage('');
      }, (error) => {
          console.log(error.text);
      });

    // Alert the user their first and last name, clear the inputs
  };
    return (
        <div>
        <input name="Name" value={Name} onChange={handleInputChange} className="name"></input>
        <br></br>
        <input name="Email" value={Email} onChange={handleInputChange} className="email"></input>
        <br></br>
        <textarea name="Message" value={Message} onChange={handleInputChange} className="message"></textarea>
        <button onClick={handleFormSubmit} >buuuuuuton</button>
        </div>

    )
}

export default Contact;