import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../GlobalComponents/Button'
import "./Global.css"
function ProjectInMind() {
  return (
    <div className='Project_Routes'>
        <div className='Project_R_container'>
            <div>
                <h3>Have a project in mind?</h3>
                <p>Let’s talk</p>          
            </div>
            <div>
            <Link to={"/contact"} className='FooterRoutes'><Button value={"More ➤"}/></Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectInMind
