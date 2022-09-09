import React from 'react'
import './Footer.css'

const Footer=()=>{
  return(
    <div className="footer-container">
    <hr />
    <div className="footer">
    <div className="social-links">
    <img src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} alt="github"/>
    <img src={'https://cdn-icons-png.flaticon.com/512/717/717392.png'} alt="insta"/>
    <img src={'https://cdn-icons-png.flaticon.com/512/3536/3536569.png'} alt="linkedin"/>
    </div>
    <div className="logo-f">
    <img src={'https://cdn-icons-png.flaticon.com/512/2974/2974977.png'} alt="logo"/>
    </div>
    </div>
    
    <div className="blur footer-blur-1"></div>
    <div className="blur footer-blur-2"></div>
    
    </div>
  )
}

export default Footer;