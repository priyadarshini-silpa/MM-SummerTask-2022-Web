import React from 'react'
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon/>
            <FacebookIcon/>
            <GitHubIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
        </div>
        <p>&copy; 2022 Monday Morning</p>
    </div>
  )
}

export default Footer