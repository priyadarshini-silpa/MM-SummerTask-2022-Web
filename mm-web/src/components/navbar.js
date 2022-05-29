import React, { useState } from 'react'
import Logo from "../media/mmLogo.png";
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {

  const [showLinks, setShowLinks] = useState(false);

  const showNavbar = () => {
      setShowLinks(!showLinks);
  }
  return (
    <div className="navbar">
        <div className="leftSide" id={showLinks ? "open" : "close" }>
          <img src={Logo}/>
          <div className='hiddenLinks'>
            <Link to ="/"> Home</Link>
            <Link to ="/about"> About</Link>
            <Link to ="/trending"> Trending</Link>
            <Link to ="/contact"> Contact Us</Link> 
          </div>
        </div>
        <div className="rightSide">
          <Link to ="/"> Home</Link>
          <Link to ="/about"> About</Link>
          <Link to ="/trending"> Trending</Link>
          <Link to ="/contact"> Contact Us</Link>
          <button onClick ={showNavbar}>
            <ReorderIcon/>
          </button>
        </div>
    </div>
  )
}

export default Navbar;