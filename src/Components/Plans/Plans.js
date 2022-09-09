import React from 'react'
import './Plans.css'

const Plans=()=>{
  return(
    <div className="plans-container">
    
    <div className="blur plans-blur-1"></div>
    <div className="blur plans-blur-2"></div>
    
    <div className="programs-header" style={{gap:'2rem'}}>
    <span className="stroke-text">Ready to start</span>
    <span>your journey</span>
    <span className="stroke-text">now withus</span>
    </div>
    
    <div className="plans">
    
    <div className="plan">
    <img src={'https://cdn-icons-png.flaticon.com/512/7565/7565974.png'} alt="1"/>
    <span>basic plan</span>
    <span>$ 25</span>
    <div className="features">
    <div className="feature">
    <img src={''} alt=""/>
    <span>
    <ul>
    <li>2 hours of excercises</li>
    <li>free consultation to coaches</li>
    <li>access to the community</li>
    </ul>
    </span>
    </div>
    </div>
    <div>
    <span>see more benefits -></span>
    </div>
    <button className="btn">join now</button>
    </div>
    
    <div className="plan">
    <img src={'https://cdn-icons-png.flaticon.com/512/6517/6517343.png'} alt="2"/>
    <span>premium plan</span>
    <span>$ 30</span>
    <div className="features">
    <div className="feature">
    <img src="" alt=""/>
    <span>
    <ul>
    <li>6 hours of excercises</li>
    <li>free consultation to coaches</li>
    <li>access to the minibar</li>
    </ul>
    </span>
    </div>
    </div>
    <div>
    <span>see more benefits -></span>
    </div>
    <button className="btn">join now</button>
    </div>
    
    <div className="plan">
    <img src={'https://cdn-icons-png.flaticon.com/512/7193/7193801.png'} alt="3"/>
    <span>pro plan</span>
    <span>$ 45</span>
    <div className="features">
    <div className="feature">
    <img src="" alt=""/>
    <span><ul>
    <li>8 hours of excercises</li>
    <li>consultation to private coaches</li>
    <li>Free Fitness Merchandise</li>
    </ul>
    </span>
    </div>
    </div>
    <div>
    <span>see more benefits -></span>
    </div>
    <button className="btn">join now</button>
    </div>
    
    </div>
    
    </div>
 )
}

export default Plans;