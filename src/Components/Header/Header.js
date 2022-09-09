import React,{useState} from 'react';
import './Header.css';
import {Link} from 'react-scroll';

const Header=()=>{
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened,setMenuOpened] = useState(false);
  
  return(
    <div className = "header">
    <img src={'https://cdn-icons-png.flaticon.com/512/2974/2974977.png'} alt="logo"/>
    {(menuOpened===false && mobile===true) ? (
    <div
    style={{
      backgroundColor:'gray',
      borderRadius:'5px',
      padding:'0.5rem'
    }}
    
    onClick={()=>setMenuOpened(true)}
    >
    <img src={'https://cdn-icons-png.flaticon.com/512/6015/6015685.png'} alt="Menu" 
    style={{width:'1.5rem',height:'1.5rem'}} 
    />
    </div>
    ) : (
    <ul className = "header-menu">
    
    <li><Link
    onClick={()=>setMenuOpened(false)}
    to='home'
    activClass = 'active'
    span={true}
    smooth={true}
    >Home</Link></li>
    
    <li><Link
    onClick={()=>setMenuOpened(false)}
    to='programs'
    span={true}
    smooth={true}
    >Programs</Link></li>
    
    <li><Link
    onClick={()=>setMenuOpened(false)}
    to='reasons'
    span={true}
    smooth={true}
    >Why-Us</Link></li>
    
    <li><Link
    onClick={()=>setMenuOpened(false)}
    to='plans'
    span={true}
    smooth={true}
    >Plans</Link></li>
    
    <li><Link
    onClick={()=>setMenuOpened(false)}
    to='testimonials'
    span={true}
    smooth={true}
    >Testimonials</Link></li>
    
    </ul>
    )}
    
    </div>
    )
}

export default Header;