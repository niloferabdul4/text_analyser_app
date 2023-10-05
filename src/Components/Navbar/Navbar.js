import React from 'react'
import './nav.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Navbar = () => {
  return (
    <div>
         <nav className="navbar">
      <div className="container">
        <div className="nav-elements">
          <span className="app-title">Text Analyser</span>
          <ul className="social-links">
            <li>
              <a href="https://github.com/niloferabdul4" target="_blank" rel="noreferrer">
              <GitHubIcon fontSize='large'/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Basit_Miyanji" target="_blank" rel="noreferrer">
            <TwitterIcon  fontSize='large'/>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdulbasitprofile/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon  fontSize='large'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
