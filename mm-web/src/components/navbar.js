import React from 'react'
import Logo from "../media/mm-logo-no-text.jpg";
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function navbar() {
  return (
    <div className="navbar">
        <div className="leftSide">
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
          <button>
            <ReorderIcon/>
          </button>
        </div>
    </div>
  )
}

export default navbar