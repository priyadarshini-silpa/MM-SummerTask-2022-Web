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
            
            <a target="_blank" href="https://www.instagram.com/mondaymorningnitrofficial/?hl=en"><InstagramIcon/></a>
            <a target="_blank" href="https://www.linkedin.com/company/monday-morning-the-official-student-media-body-of-nit-rourkela/mycompany/"><LinkedInIcon/></a>
            <a target="_blank" href="https://www.facebook.com/mondaymorningnitr/"><FacebookIcon/></a>
            <a target="_blank" href="https://github.com/Monday-Morning"><GitHubIcon/></a>
            <a target="_blank" href="https://twitter.com/mmnitrkl?lang=en"><TwitterIcon/></a>
        </div>
        <p>&copy; 2022 Monday Morning</p>
    </div>
  )
}

export default Footer;