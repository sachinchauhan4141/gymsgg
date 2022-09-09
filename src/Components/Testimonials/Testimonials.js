import React,{useState} from 'react'
import './Testimonials.css'
import {TestimonialsData} from '../../data/TestimonialsData'

const Testimonials=()=>{
  
  const [selected,setSelected] = useState(0);
  const tLength = TestimonialsData.length;
  
  return(
    <div className="testimonials">
    
    <div className="left-t">
    <span>Testimonials</span>
    <span className="stroke-text">what they</span>
    <span>say about</span>
    <span>{TestimonialsData[selected].review}</span>
    <span>
       <span style={{color:'orange'}}>
          {TestimonialsData[selected].name}
       </span>
       - {TestimonialsData[selected].status}
    </span>
    </div>
    
    <div className="right-t">
    <div></div>
    <div></div>
    <img src={TestimonialsData[selected].image} alt=""/>
    
    <div className="arrows">
    <img
     onClick={()=>{
       selected===0
       ? setSelected(tLength-1)
       : setSelected((prev)=>prev-1);
     }}
     src="https://cdn-icons-png.flaticon.com/512/507/507257.png" alt="arrow-l"/>
    <img 
    onClick={()=>{
       selected===tLength-1
       ? setSelected(0)
       : setSelected((prev)=>prev+1);
     }}
    src={'https://cdn-icons-png.flaticon.com/512/271/271226.png'} alt="arrow-r"/>
    </div>
    
    </div>
    
    </div>
  )
}

export default Testimonials;