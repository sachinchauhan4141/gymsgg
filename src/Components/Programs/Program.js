import React from 'react'
import './Program.css'

const Program=()=>{
  return(
    <div className="Programs" id='programs'>
    
    <div className="programs-header">
    <span className="stroke-text">Explore our</span>
    <span>Programs</span>
    <span className="stroke-text">to shape you</span>
    </div>
    
    <div className="programs-categories">
    
    <div className="category">
    <img src={'https://cdn-icons-png.flaticon.com/512/809/809957.png'} alt="1"/>
    <span>Health fitness</span>
    <span>A typical wiki contains multiple pages for the</span>
    <div className="join-now">
    <span>Join-Now</span>
    <img src={'https://cdn-icons-png.flaticon.com/512/2989/2989981.png'} alt="arrow"/>
    </div>
    
    </div>
    
    <div className="category">
    <img src={'https://cdn-icons-png.flaticon.com/512/1616/1616487.png'} alt="2"/>
    <span>Strength training</span>
    <span> A typical wiki contains multiple pages for the</span>
    <div className="join-now"><span>Join-Now</span><img src={'https://cdn-icons-png.flaticon.com/512/2989/2989981.png'} alt="arrow"/></div>
    </div>
    
    <div className="category">
    <img src={'https://cdn-icons-png.flaticon.com/512/7140/7140473.png'} alt="3"/>
    <span>Cardio training</span>
    <span> A typical wiki contains multiple pages for the</span>
    <div className="join-now"><span>Join-Now</span><img src={'https://cdn-icons-png.flaticon.com/512/2989/2989981.png'} alt="arrow"/></div>
    </div>
    
    <div className="category">
    <img src={'https://cdn-icons-png.flaticon.com/512/482/482103.png'} alt="4"/>
    <span>Fat burning</span>
    <span> A typical wiki contains multiple pages for the</span>
    <div className="join-now"><span>Join-Now</span><img src={'https://cdn-icons-png.flaticon.com/512/2989/2989981.png'} alt="arrow"/></div>
    </div>
    
    </div>
    
    </div>
   )
}

export default Program;