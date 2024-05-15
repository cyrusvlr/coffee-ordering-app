import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Coffee doesn't tend to come cheap, at least not beyond the instant ready-to-mix stuff.
                Launched in May of 2024, we challenge that idea with our decent-quality yet affordable brews.
                Today, we stand tall amid a crowded industry, aiming to grow from one location to over 200 branches nationwide.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li>About us</li>
                <li>Delivery</li>
                <li></li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+0912 345 6789</li>
                <li>dailydose@gmail.com</li>
            </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © Dailydose.com - All Rights Reserved.</p>

    </div>
  )
}

export default Footer
