import React from 'react'
import "./header.css"
import 'remixicon/fonts/remixicon.css'

function Header() {

    const handleDownload = ()=>{
        const fileUrl = '\Users\HP\Downloads\CV.pdf'; // Update this with the actual path to your resume

    // Create a temporary anchor element and trigger download
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = 'CV.pdf'; // The name for the downloaded file
        a.click();
    }

  return (
    <>
    <div className="main">
    <div className="container">
        <div className="first">
            <div className="img">
                <img id='im' src="https://images.pexels.com/photos/30309178/pexels-photo-30309178/free-photo-of-vibrant-parrot-perched-on-a-balcony-railing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            </div>
            <div className="">
                <span className='m'>M</span>
                <span className='m1'>umair</span>
            </div>
        </div>
        <div className="second">
            <p className='active'>Home</p>
            <p>About Me</p>
            <p>Services</p>
            <p>Projects</p>
            <p>Testimonials</p>
            <p>Contact</p>
            <button className='btn' onClick={handleDownload}>Download CV</button>
            <i class="ri-menu-3-line"></i>
        </div>
    </div>
    </div>
    </>
  )
}

export default Header