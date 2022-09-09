import React from 'react'
import './Reasons.css'

const Reasons=()=>{
  return(
    <div className="reasons" id="reasons">
    
    <div className="left-r">
    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXYNbP3AaDSvQgf1g1fIahrgxJBetBIEkHg&usqp=CAU'} alt="image1"/>
    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWGgGcLoHGMqFSB6nUfy8LTOkMHBWPKUM-A&usqp=CAU'} alt="image2"/>
    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJT9D4-r6jT69y1YZ51bnwlj3ecU04Y7Ii9w&usqp=CAU'} alt="image3"/>
    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmFfV1xC3rDND1RVUh6bzN60vgAvPD81_3Q&usqp=CAU'} alt="image4"/>
    </div>
    
    <div className="right-r">
    <span>some reasons</span>
    
    <div>
    <span className="stroke-text">why</span>
    <span> choose us</span>
    </div>
    
    <div className="details-r">
    
    <div>
    <img src={'https://cdn-icons-png.flaticon.com/512/3442/3442166.png'} alt="coach"/>
    <span>over 140+ expert coaches</span>
    </div>
    
    <div>
    <img src={'https://cdn-icons-png.flaticon.com/512/10/10699.png'} alt="training"/>
    <span>train smarter and faster than before</span>
    </div>
    
    <div>
    <img src={'https://cdn-icons-png.flaticon.com/512/1007/1007975.png'} alt="free"/>
    <span>1 free program for new member</span>
    </div>
    
    <div>
    <img src={'https://cdn-icons-png.flaticon.com/512/4415/4415928.png'} alt="brand"/>
    <span>reliable partners</span>
    </div>
    
    </div>
    
    <span
      style={{
        color:"gray",
        fontWeight:"normal",
      }}
    >
    our partners
    </span>
    
    <div className="partners">
    <img src={'https://cdn-icons-png.flaticon.com/512/732/732084.png'} alt="nike"/>
    <img src={'https://cdn-icons-png.flaticon.com/512/731/731962.png'} alt="adidas"/>
    <img src={'https://cdn-icons-png.flaticon.com/512/47/47137.png'} alt="puma"/>
    </div>
    
    </div>
    
    </div>
 )
}

export default Reasons