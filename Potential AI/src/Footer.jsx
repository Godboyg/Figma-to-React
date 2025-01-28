import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
    <div className="footer-main">
        <div className="footer-container">
            <div className="container-img">
                <img src="https://images.pexels.com/photos/30309178/pexels-photo-30309178/free-photo-of-vibrant-parrot-perched-on-a-balcony-railing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            </div>
            <div className="container-name">
                <span id='fname'>M</span>
                <span id='lname'>umair</span>
            </div>
        </div>
        <div className="container-about">
            <p>Home</p>
            <p>About Me</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Testimonials</p>
            <p>Contact</p>
        </div>
        <div className="footer-social-handle">
            <p id='src'><a href=""><img id='im' src="https://images.pexels.com/photos/15406295/pexels-photo-15406295/free-photo-of-close-up-of-a-smartphone-displaying-linkedin-application.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a></p>
            <p id='src'><a href=""><img id='im' src="https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a></p>
            <p id='src'><a href=""><img id='im' src="https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a></p>
            <p id='src'><a href=""><img id='im' src="https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a></p>
        </div>
        <div className="footer">
            <p>c</p>
            <p>2023</p>
            <p id='footer-name'>Mumair</p>
            <p>All Right Reserved , Inc.</p>
        </div>
    </div>
    </>
  )
}

export default Footer