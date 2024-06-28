import React from 'react'
import { Link } from "react-router-dom"
import Line from "../GlobalComponents/Line"
import "../componentStyles/Footer.css"
export default function Footer() {
  return (
    <div className='Footer'>
        <div className='Footer_container'>
            <div className='Main_footer'>
                <div className='FooterMassage'>
                    <p><i>There’s <span>no locks</span> to our creativity.</i></p>
                </div>
                <div className='FooterLinks'> 
                   <div className='Links'>
                      <p>Links</p>
                      <Link className='FooterRoutes' to="/">Home</Link>
                      <Link className='FooterRoutes' to="/service">Service</Link>
                      <Link className='FooterRoutes' to="/about">About</Link>
                      <Link className='FooterRoutes' to="/work">Work</Link>
                      <Link className='FooterRoutes' to="/contact">Contact</Link>
                   </div> 
                   <div className='Contact_Footer'>
                      <p>Contact Us</p>
                      <address>Aftab.alam35520@gmail.com</address>
                      <address>8383016014</address>
                   </div>
                </div>
            </div>
        </div>
        <div className='CopyRights'>
          <Line/>
          <div>
              <p>@ All CopyRight Reserved</p>
              <p>Privacy Policy <span>Terms  "" &  Condition</span></p>
          </div>
        </div>   
    </div>
  )
}
