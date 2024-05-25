import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer" >
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit unde sint cum repellendus! Non, illum? Nihil id quibusdam autem asperiores dicta optio architecto quam assumenda, consectetur distinctio suscipit fugiat!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="facebook" />
                <img src={assets.linkedin_icon} alt="linkedin" />
                <img src={assets.twitter_icon} alt="twitter" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+1234567890</li>
                <li>example@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copy-rights">Copyright 2024 © Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
