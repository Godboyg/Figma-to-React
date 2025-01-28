import React, { useState } from 'react'
import Header from './Header'
import Card from "./Card"
import "./first.css"
import Title from './Title'
import Projectbox from './Projectbox'
import BoxComponent from './BoxComponent'
import Footer from './Footer'
import { motion } from "framer-motion";

function First() {

    const [activeCarouselBox , setactiveCarouselBox] = useState(1)

    const boxes = document.querySelectorAll(".box");
    console.log(boxes);

    boxes.forEach((box,index)=>{
        box.addEventListener("click",()=>{
            console.log("clicked",index);
        })
    })

    const data = [
        {
            img: "https://images.pexels.com/photos/30342212/pexels-photo-30342212/free-photo-of-man-hiking-in-scenic-mountainous-landscape.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.pexels.com/photos/30095379/pexels-photo-30095379/free-photo-of-moody-fashion-portrait-with-neon-lighting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            img: "https://images.pexels.com/photos/905375/pexels-photo-905375.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ]

    const [activeBox, setActiveBox] = useState(2);

    const [value,setValue] = useState(80)

    const handleChange = (e)=>{
        setValue(e.target.value);
    }

    const handleBoxClick = (id)=>{
        setActiveBox(id);
    }

    const RenderComponent = ({index})=>{
        switch (index) {
            case 0: 
                return (
                    <>
                    <BoxComponent img="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Web Design" heading="AirCalling Landing Page Design"/>
                    <BoxComponent img="https://images.pexels.com/photos/276223/pexels-photo-276223.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Web Design" heading="Business Landing Page Design"/>
                    <BoxComponent img="https://images.pexels.com/photos/6373294/pexels-photo-6373294.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Web Design" heading="Ecom Web Page Design"/>
                    <BoxComponent img="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600" Name="App Design" heading="AirCalling Landing Page Design"/>
                    <BoxComponent img="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600" Name="UI/UX Design" heading="AirCalling Landing Page Design"/>
                    <BoxComponent img="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Graphic Design" heading="AirCalling Landing Page Design"/>
                    </>
                )
                break;

            case 1: return <BoxComponent img="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600" Name="UI/UX Design" heading="AirCalling Landing Page Design"/>
                break;

            case 2:
                return (
                    <>
                    <BoxComponent img="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Web Design" heading="AirCalling Landing Page Design"/>
                    <BoxComponent img="https://images.pexels.com/photos/276223/pexels-photo-276223.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Web Design" heading="Business Landing Page Design"/>
                    <BoxComponent img="https://images.pexels.com/photos/6373294/pexels-photo-6373294.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Web Design" heading="Ecom Web Page Design"/>
                    </>
                )

                break;

            case 3: return <BoxComponent img="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600" Name="App Design" heading="AirCalling Landing Page Design"/>
                break;

            case 4: return <BoxComponent img="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600" Name="Graphic Design" heading="AirCalling Landing Page Design"/>
                break;

            default:
                break;
        }
    }


  return (
    <>
    <Header />
    <div className="content">
        <div className="profile">
            <p className='h'>Hi I am </p>
            <p className='name'>Muhammad Umair</p>
            <h1>UI & UX</h1>
            <h1 className='d'>Designer</h1>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat aliquam velit. Phasellus vel quam in risus varius egestas. Curabitur blandit tempus porttitor.</p>
            <button className='hire'>Hire Me</button>
        </div>
        <div className="picture">
            <div className="pic-box">
               <div className="small-box"></div>
               <div className="pic">
                   <img id='im' src="https://images.pexels.com/photos/6265489/pexels-photo-6265489.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
               </div>
            </div>
            <div className="social-handle">
                <p id='src'><a href=""><img id='im' src="https://images.pexels.com/photos/15406295/pexels-photo-15406295/free-photo-of-close-up-of-a-smartphone-displaying-linkedin-application.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a></p>
                <p id='src'><a href=""><img id='im' src="https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a></p>
                <p id='src'><a href=""><img id='im' src="https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a></p>
                <p id='src'><a href=""><img id='im' src="https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></a></p>
            </div>
        </div>
    </div>
    <div className="content">
        <div className="picture">
            <div className="pic-box">
                <div className="small-box"></div>
               <div className="pic">
                   <img id='im' src="https://images.pexels.com/photos/5018465/pexels-photo-5018465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
               </div>
            </div>
        </div>
        <div className="profile">
            <h2>About Me</h2>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat aliquam velit. Phasellus vel quam in risus varius egestas.</p>
            <div className="ability">
                <h3>UX</h3>
                <input id='range' type="range" onChange={handleChange} value={value}/>
                <h3>Website Design</h3>
                <input id='range' type="range" />
                <h3>App Design</h3>
                <input id='range' type="range" />
                <h3>Graphic Design</h3>
                <input id='range'type="range" />
            </div>
        </div>
    </div>
    <div className="page3">
        <Title title="Services"/>
        <div className="lower">
            <Card object={{name: "UI/UX",logo: "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=600"}}/>
            <Card object={{name: "Web Design",logo: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"}}/>
            <Card object={{name: "App Design",logo: "https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg?auto=compress&cs=tinysrgb&w=600"}}/>
            <Card object={{name: "Graphic Design",logo: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"}}/>
        </div>
    </div>
    <div className="page4">
        <Title title="My Projects"/>
        <div className="boxes">
            <Projectbox btnName="All" id={0} isActive={activeBox === 0} onClick={handleBoxClick}/>
            <Projectbox btnName="UI/UX" id={1} isActive={activeBox === 1} onClick={handleBoxClick}/>
            <Projectbox btnName="Web Design" id={2} isActive={activeBox === 2} onClick={handleBoxClick}/>
            <Projectbox btnName="App Design" id={3} isActive={activeBox === 3} onClick={handleBoxClick}/>
            <Projectbox btnName="Graphic Design" id={4} isActive={activeBox === 4} onClick={handleBoxClick}/>
        </div>
        <div className="box-component">
            <RenderComponent index={activeBox}/>
        </div>
    </div>
    <div className="page5">
        <Title title="Testimonials"/>
        <div className="carousel">
            {
                data.map((data,index)=>{

                    const isActive = index === activeCarouselBox;
                    const isPrev = index === (activeCarouselBox - 1 + data.length) % data.length;
                    const isNext = index === (activeCarouselBox + 1) % data.length;

                    return (
                        <>
                        <div className={`carousel-container ${ isActive ? "active" : isPrev || isNext ? "nearby" : "hidden" }`} style={{ left: isActive ? "50%" : isPrev ? "25%" : isNext ? "75%" : "-100%", transform: isActive ? "translateX(-50%)" : ""}}>
                            <div className="carousel-img-container">
                                <img src={data.img} alt="" />
                            </div>
                            <div className="">
                                <p id='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione saepe temporibus enim quam nihil libero repellat ad minus sequi nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, perspiciatis.</p>
                                <p id='name'>Name</p>
                                <p id='spec'>CEO</p>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        <div className="carousel-box">
            {
                data.map((_,index)=>{
                    return (
                        <div className="box" onClick={()=>setactiveCarouselBox(index)} style={{ backgroundColor: activeCarouselBox === index ? "orange" : "grey"}}></div>
                    )
                })
            }
        </div>
    </div>
    <div className="lastPage">
        <Title title="Lets Design Together"/>
        <div className="contact">
            <div className="contactinput">
                <input id="input" type="text" placeholder='Enter Your Email'/>
            </div>
            <div className="contactbtn">Contact Me</div>
        </div>
        <Footer />
    </div>
    </>
  )
}

export default First