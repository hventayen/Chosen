
import { useState } from "react";
import "./index.css";
import main from './assets/olivemain.jpeg';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    return (
    
    <div className="container">

        <div class="testing">
        <img class="olivemain" src={main} alt="logo" height="120px"/>
        <div class="landing">
            <h1 id="landingText">We arise and take our position for a destiny-driven 
            life in Christ Jesus - a calling for in depth Sacred Scripture study to benefit the poorest of the poor.</h1>
            <a href= "www.google.com" id="landingLearn">
                <h3 id="landingLearnText">Learn More</h3>
            </a>
        </div>
        </div>

        <section class="about">
            <div class="header-container">
                <h1 id="header-title">Test</h1>
                <p1 id="header-p">Lorems ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p1>
            </div>
            <div class="header-img">
            <img src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg" class= "head-img"></img>
            </div>
        </section>
        
        <section class="intro-content">
            <div class="intro-text">
                <h1 id="intro-title">Test</h1>
                <p1 id="intro-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p1>
            </div>
            <div class="header-img">
            <img src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg" class= "head-img"></img>
            </div>
        </section>

    <section class="current-work">
        <h2>Test Title</h2>
        <div class="work-content">
            
            <div class="text-content">

                <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p1>
            </div>
        
            
        </div>
    </section>
            
    <section class="social-links">
    </section>
            <div className="footer">
                <h1></h1>
            </div>
        </div>
    
    )
}
