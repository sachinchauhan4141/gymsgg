import React from 'react';
import Header from '../Header/Header'
import './Hero.css';
import NumberCounter from 'number-counter';

const Hero=()=>{
  return(
    <div className = "hero" id="home">
 
    <div className="blur hero-blur"></div>
    
    <div className = "left-h">
    <Header/>
  
    <div className = "the-best-ad">
    <div></div>
    
    <span>the best fitness-gym in the town</span>
    </div>
    
    <div className = "hero-text">
    <div>
    <span className="stroke-text">Shape </span>
    <span>your</span>
    </div>
    <div>
    <span>ideal body</span>
    </div>
    <div>
    <span>Push harder. Go longer. ...</span>
    <br/>
    <span>Do something today that your future self will thank you for</span>
    <br/>
    <span>Fall in love with taking care of yourself</span>
    <br/>
    </div>
    </div>
    
    <div className = "figures">
    <div>
    <span>
    <NumberCounter end={140} start={100} delay='4' preFix="+"/>
    </span>
    <span>expert coaches</span>
    </div>
    <div>
    <span>
    <NumberCounter end={900} start={800} delay='4' preFix="+"/>
    </span>
    <span>members joined</span>
    </div>
    <div>
    <span>
    <NumberCounter end={50} start={40} delay='4' preFix="+"/>
    </span>
    <span>fitness programs</span>
    </div>
    </div>  
    
    <div className="hero-buttons">
    <button className="btn">Get Started</button>
    <button className="btn">Learn More</button>
    </div>
    
    </div>
    
    <div className = "right-h">
    <button className="btn">Join Now</button>
    
    <div className="heart-rate">
    <span>Heart Rate</span>
    <span>120 bpm</span>
    </div>
    
    <div className="calories">
    <div>
    <span>Calories Burned</span>
    <span>400 kcal</span>
    </div>
    </div>
    
    </div>
    </div>
    )
}

export default Hero;