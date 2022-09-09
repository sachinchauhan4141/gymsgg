import React ,{useRef}from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join=()=>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0u87cun', 'template_iah1e0m', form.current, 'IQVL8sHRO218k1NrG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return(
    <div className="join" id="join-us">
    
    <div className="left-j">
    
    <hr />
    <div>
    <span className="stroke-text">Ready To</span>
    <span>Level Up</span>
    </div>
    
    <div>
    <span>Your Body</span>
    <span className="stroke-text">With Us</span>
    </div>
    
    </div>
    
    <div className="right-j">
    <form ref={form} className="email-container" onSubmit={sendEmail}>
    <input type="email" name="user-email" placeholder="enter your email"/>
    <button className="btn btn-j">Join now</button>
    </form>
    </div>
    
    </div>
 )
}

export default Join;