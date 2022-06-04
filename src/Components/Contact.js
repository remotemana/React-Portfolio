import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";
export default function Contact() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   // refactoring wet code for styling purposes
//    let reach = document.getElementById("reach");
//    const Reach = reach.style
   // ==================end==================
   
   const handleFormSubmit = () => {
       // Preventing the default behavior of the form submit (which is to refresh the page)
       if (email && name && message) {
           const serviceID = "service_pjde67o"
           const templateID = "template_v6du5pv"
           const publicKey = "LsudeP0e90Lm51_ZN"
           const templateParams = { name, email, message }
           // handling the email send off
           emailjs.send(serviceID, templateID, templateParams, publicKey)
               .then(function (response) {
                   alert("Your email was successfully sent!");
                   console.log('SUCCESS!', response.status, response.text);
               }, function (error) {
                   console.log('FAILED...', error);
               });
               
       } else {
           // updating the field to alert user of validation
                   document.getElementById("reach").innerHTML = "All fields are required!";
                   document.getElementById("reach").style.backgroundColor = "#091540";
                   document.getElementById("reach").style.color = "antiquewhite";
                   document.getElementById("reach").style.width = "40%";
                   document.getElementById("reach").style.marginLeft = "125px"
                   function writeName() {
                       document.getElementById("reach").innerHTML ="Reach me below"
                       document.getElementById("reach").style.backgroundColor = ""
                       document.getElementById("reach").style.width = ""
                       document.getElementById("reach").style.color = "black"
                       document.getElementById("reach").style.marginLeft = ""
                   }
                    setTimeout(writeName, 1500)
       }
       setName('');
       setEmail('');
       setMessage('');
   };
   const validateName = (e) => {
       console.log("validate Name triggered")
       e.preventDefault();
       if (e.target && e.target.value) {
           setName(e.target.value);
       } else {
           document.getElementById("reach").innerHTML = "Need a Name!"
           document.getElementById("reach").style.backgroundColor = "#091540"
           document.getElementById("reach").style.color = "antiquewhite"
           function writeName() {
               document.getElementById("reach").innerHTML ="Reach me below!"
               document.getElementById("reach").style.backgroundColor = ""
               document.getElementById("reach").style.color = "black"
           }
            setTimeout(writeName, 1500)
       }
   }
   const validateEmail = (e) => {
       console.log("validate Email triggered")
       e.preventDefault();
       if (e.target && e.target.value) {
           var pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
           isEmail()
           function isEmail(str) {
               var output = str.match(pattern);
               console.log(output)
           }
           
           setEmail(e.target.value);
       } else {
           document.getElementById("reach").innerHTML = "Need an Email!"
           document.getElementById("reach").style.backgroundColor = "#091540"
           document.getElementById("reach").style.color = "antiquewhite"
           function writeName() {
               document.getElementById("reach").style.innerHTML ="Reach me below!"
               document.getElementById("reach").style.backgroundColor = ""
               document.getElementById("reach").style.color = "black"
           }
           setTimeout(writeName, 1500)
       }
   }
   const validateMessage = (e) => {
       console.log("validate Message triggered")
       e.preventDefault();
       if (e.target && e.target.value) {
           setName(e.target.value);
       } else {
           document.getElementById("reach").innerHTML = "Message Required!"
           document.getElementById("reach").style.backgroundColor = "#091540"
           document.getElementById("reach").style.color = "antiquewhite"
           document.getElementById("reach").style.width = "40%"
           document.getElementById("reach").style.marginLeft = "125px"
           function writeName() {
               document.getElementById("reach").innerHTML ="Reach me below! "
               document.getElementById("reach").style.backgroundColor = ""
               document.getElementById("reach").style.color = "black"
               document.getElementById("reach").style.width = ""
               document.getElementById("reach").style.marginLeft = ""
            }
            setTimeout(writeName, 1500)
       }
   }
   return (
       <div>
           <h1 id="reach2" >Got a project?</h1>
           <h1 id="reach1">Need a sleek custom site?</h1>
           <h1 id="reach">Reach me below!</h1>
           
           <img id="think" src="/thinkman.png" alt="thinkingperson"></img>
           {/* Review forms in React for this portion. Include an email form with a comment & name section */}
           <form className="form" id="contact">
               <h4>Name</h4>
               <input value={name} name="name" onChange={(e) => { setName(e.target.value) }} type="text" onBlur={validateName} placeholder="Your Name"/>
               <br/>
               <h4>Email</h4>
               <input value={email} name="email" onChange={(e) => { setEmail(e.target.value) }} type="email" onBlur={validateEmail} placeholder="Your Email"/>
               <br/>
               <h4>Message</h4>
               <textarea value={message} name="message" onChange={(e) => { setMessage(e.target.value) }} type="text" onBlur={validateMessage} placeholder="Your Message" rows="10"/>
               <br/>
               <button type="button" onClick={handleFormSubmit}>
                   Submit
               </button>
               <p1 id="formValidate"></p1>
           </form>
       </div>
   );
}