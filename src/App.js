import './App.css';
import React, { Component } from 'react'
import {Dropdown,Carousel,CarouselItem} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faChevronDown,faMobileAlt,faFilePdf,faPhoneAlt,faEnvelope,faMapMarker, faMapMarked ,faBars} from '@fortawesome/free-solid-svg-icons'
import carousel1 from './carousel1.jpg'
import puzzle2 from './puzzle2.jpg'
import RackRail from './RackRail.jpg'
import tower from './Tower.jpg';
import doublestacker from './doublestacker.jpg'
import triplestacker from './triplestacker.jpg'
import quadstacker from './quadstacker.jpg'
import singlepost from './Single-Post-Double-Stacker.jpg'
import pitlift from './pitlift.jpg'
import logo from './Ramek Images/last logo.png'
import logoword from './Ramek Images/logo word 1.png'
import youtubeIcon from './Ramek Images/youtube.png'
import twinpost from './Twin-Post Double Stacker.jpg'
import doublestackerscissor from './Double Stacker VSS-7X Scissor Lifter.jpg'
import triplequad from './Triple and Quadruple.jpg'
import background1 from './background1.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  window.addEventListener('scroll',() => {
    let scrolly= window.scrollY;
   
    console.log(scrolly)
    console.log(window.screen.height/1.5)

    const navbar = document.getElementById('nav')
    const navButton= document.getElementById('navbutton')
    const navButton1= document.getElementById('navbutton1')
    const navButton2= document.getElementById('navbutton2')
    // const navButton3= document.getElementById('navbutton3')
    const navButton4= document.getElementById('navbutton4')
    const navButton5= document.getElementById('navbutton5')
    const navButton6= document.getElementById('navbutton6')
    const navButton7= document.getElementById('navbutton7')
    const logoImage = document.getElementById("logo") 
    // const wholelogo = document.getElementById('wholelogo')
    const computStyle = window.getComputedStyle(navbar)

    const element1 = document.getElementById('1')
    // document.getElementById('2').style.background="url(background3.jpg)"
    // document.getElementById('3').style.background="url(background32.jpg)"

    console.log(computStyle.getPropertyValue('top'))
    if(scrolly > window.screen.height/4){
      if(computStyle.getPropertyValue('top') === "10px"){
        // navbar.style.top = "0px"
        navbar.style.animation="colorNavBarAnimation 1s forwards";
      navButton.style.animation = "textColor 1s forwards"
      navButton1.style.animation = "textColor 1s forwards"
      navButton2.style.animation = "textColor 1s forwards"
      // navButton3.style.animation = "textColor 1s forwards"
      navButton4.style.animation = "textColor 1s forwards"
      navButton5.style.animation = "textColor 1s forwards"
      navButton6.style.animation = "textColor 1s forwards"
      navButton7.style.animation = "texrColor 1s forwards"
      logoImage.style.filter ="invert(0)"
      // wholelogo.style.animation="logoAnimation 1s forwards"
      document.documentElement.style
    .setProperty('--white', 'rgb(0, 0, 0)');
      }
    }
    else{
      if(computStyle.getPropertyValue('top') === "0px"){
      
        navbar.style.animation="colorNavBarAnimationBack 1s forwards";
       navButton.style.animation = "textColorBack 1s forwards"
       navButton1.style.animation = "textColorBack 1s forwards"
       navButton2.style.animation = "textColorBack 1s forwards"
      //  navButton3.style.animation = "textColorBack 1s forwards"
       navButton4.style.animation = "textColorBack 1s forwards"
       navButton5.style.animation = "textColorBack 1s forwards"
       navButton6.style.animation = "textColorBack 1s forwards"
       navButton7.style.animation = "texrColorBack 1s forwards"
       navbar.style.top = "10px"
       logoImage.style.filter ="invert(1)"
      //  wholelogo.style.animation="logoAnimationBack 1s forwards"
       document.documentElement.style
       .setProperty('--white', 'white');
      }
    }
    
  
  })


  return (
    <div className="App">

          <nav id="nav" className="navbar"> 
           <img src={logo} className="logo" id="logo"></img>

           <div className="rightSideContainer">
            <ul id="submenu">
              <li className="menuHover"><a href="#" className="navbarButtons"id="navbutton">Home</a></li>
              <li className="menuHover">
                <a href="#" className="navbarButtons" id="navbutton1">About</a>
                {/* <div className="submenu">
                  <a href="#">FAQ'S</a>  
                  <a  href="#">Certifications</a>
                </div>  */}
              </li>
              <li className="menuHover">
                <a href="#" className="navbarButtons" id="navbutton2">Models <FontAwesomeIcon icon={faChevronDown} className="arrowDown"/></a>
                <div className="submenu">
                  <a href="#">Single-Post Double Stacker</a>  
                  <a  href="#">Twin-Post Double Stacker</a>
                  <a  href="#">Double Stacker VSS7-LP Low Rise Ceiling</a>
                  <a  href="#">Double Stacker VSS-7X Scissor Lifter</a>
                  <a href="#">Triple and Quadruple</a>  
                  <a  href="#">Puzzle System</a>
                  <a  href="#">Rotary Smart Parking(Carousel)</a>
                </div> 
              </li>
              {/* <li className="menuHover">
                <a href="#" className="navbarButtons" id="navbutton3">Mechanical <FontAwesomeIcon icon={faChevronDown}  className="arrowDown"/></a>
                <div className="submenu">
                  <a href="#">Double Stacker</a>  
                  <a  href="#">Triple Stacker</a>
                  <a  href="#">Quad Stacker</a>
                  <a  href="#">Pit Lift</a>
                  <a  href="#">Vox Elevator</a>
                </div> 
              </li> */}
              <li className="menuHover"><a href="#" className="navbarButtons" id="navbutton4">Projects</a> </li>
              <li className="menuHover"><a href="#" className="navbarButtons" id="navbutton5">Downloads</a> </li>
              <li className="menuHover"><a href="#" className="navbarButtons" id="navbutton6">Contact</a> </li>
              
             
            </ul>
            <li className="menuHover"><a href="#" className="navbarButtonsBack" id="navbutton7" onClick={() =>{
              const menu = document.getElementById("submenu")
              menu.style.transform="translateX(60px)"
              
            }}><FontAwesomeIcon icon={faBars} size="2x"/></a></li>
          </div>
          </nav>

      <div className="backgroud1">
      <div className="navbarAndmiddleTextContainer">
          <div className="middleText">
            <h1 className="moreParking"><span>More Parking</span> in Less Space</h1>
            <h4 className="firstSentence"><span>Automated</span> and <span>Mechanical</span> Parking Systems to choose from.</h4>
            <h4 className="secondSentence"><span>Ramec-Egypt</span> is a full-service provider.</h4>
          </div>
      </div>
        </div>

     
    </div>
  );
}

export default App;
