import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='footer'>

      <div className="footer-icons">
        <a href="https://www.facebook.com/NetflixIN/" target='_blank' rel='noopener noreferrer'><img src={facebook_icon} alt="" /></a>
        <a href="https://www.instagram.com/Netflix_IN/" target='_blank' rel='noopener noreferrer'><img src={instagram_icon} alt="" /></a>
        <a href="https://x.com/netflixindia" target='_blank' rel='noopener noreferrer'><img src={twitter_icon} alt="" /></a>
        <a href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg" target='_blank' rel='noopener noreferrer'><img src={youtube_icon} alt="" /></a>
      </div>

      <ul>
        <li><Link to="/audio-description">Audio Description</Link></li>
        <li><Link to="/help-centre">Help Centre</Link></li>
        <li><Link to="/gift-cards">Gift Cards</Link></li>
        <li><Link to="/media-centre">Media Centre</Link></li>
        <li><Link to="/investor-relations">Investor Relations</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/terms">Terms of Use</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
        <li><Link to="/legal">Legal Notices</Link></li>
        <li><Link to="/cookies">Cookie Preferences</Link></li>
        <li><Link to="/corporate-info">Corporate Information</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <p className='copyright-text'>@ 1997-2023 Netflix, Inc.</p>
      
    </div>
  )
}

export default Footer