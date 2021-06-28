import './App.css';
import React, { Component } from 'react'
import {Dropdown,Carousel,CarouselItem} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faChevronDown,
  faMobileAlt,faFilePdf,faPhoneAlt,
  faEnvelope,faMapMarker, faMapMarked ,faFilePowerpoint,faFileWord,
  faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
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
import zohor1 from './Zohor/1.jpeg'
import zohor2 from './Zohor/2.jpeg'
import zohor3 from './Zohor/3.jpeg'
import zohor4 from './Zohor/4.jpeg'
import zohor5 from './Zohor/5.jpeg'
import zohor6 from './Zohor/6.jpeg'
import zohor7 from './Zohor/7.jpeg'
import zohor8 from './Zohor/8.jpeg'
import zohor9 from './Zohor/9.jpeg'
import zohor10 from './Zohor/10.jpeg'
import zohor11 from './Zohor/11.jpeg'
import zohor12 from './Zohor/12.jpeg'
import zohor13 from './Zohor/13.jpeg'
import location from './location.png'
import merryland1 from './Merryland/1.jpeg'
import merryland2 from './Merryland/2.jpeg'
import merryland3 from './Merryland/3.jpeg'
import merryland4 from './Merryland/4.jpeg'
import merryland5 from './Merryland/5.jpeg'
import merryland6 from './Merryland/6.jpeg'
import merryland7 from './Merryland/7.jpeg'
import merryland8 from './Merryland/8.jpeg'
import merryland9 from './Merryland/9.jpeg'
// import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"


import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

SwiperCore.use([EffectCoverflow,Pagination]);

function App() {

  const [isOpened,setIsOpened] = React.useState(false)
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
        navbar.style.top = "0px"
        navbar.style.animation="colorNavBarAnimation 1s forwards";
      navButton.style.animation = "textColor 1s forwards"
      navButton1.style.animation = "textColor 1s forwards"
      navButton2.style.animation = "textColor 1s forwards"
      // navButton3.style.animation = "textColor 1s forwards"
      navButton4.style.animation = "textColor 1s forwards"
      // navButton5.style.animation = "textColor 1s forwards"
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
      //  navButton5.style.animation = "textColorBack 1s forwards"
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
            <ul id="submenu" className="submenuIcon">
              <li className="menuHover"><a className="navbarButtons"id="navbutton" onClick={()=> window.scrollTo({

                top : 0,
                behavior:'smooth'
              })}>Home</a></li>
              
              <li className="menuHover">
                <a className="navbarButtons" id="navbutton2" onClick={()=> window.scrollTo({

                top : window.innerHeight*1,
                behavior:'smooth'
              })}>Models <FontAwesomeIcon icon={faChevronDown} className="arrowDown"/></a>
                {/* <div className="submenu">
                  
                  <a href="#">Single-Post Double Stacker</a>  
                  <a  href="#">Twin-Post Double Stacker</a>
                  <a  href="#">Double Stacker VSS7-LP Low Rise Ceiling</a>
                  <a  href="#">Double Stacker VSS-7X Scissor Lifter</a>
                  <a href="#">Triple and Quadruple</a>  
                  <a  href="#">Puzzle System</a>
                  <a  href="#">Rotary Smart Parking(Carousel)</a>
                </div>  */}
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
              <li className="menuHover"><a className="navbarButtons" onClick={()=> {
                  if(window.screen.width>798 && window.screen.width<1274){
             window.scrollTo({
                top : window.innerHeight*4.1,
                behavior:'smooth'
              })
                  }
                  else if(window.screen.width<798){
            window.scrollTo({
                top : 5250,
                behavior:'smooth'
              })}
              else{
                window.scrollTo({
                  top : window.innerHeight*2.9 ,
                  behavior:'smooth'
                })
              }
                  }
              
              }id="navbutton4">Projects</a> </li>
              <li className="menuHover">
                <a className="navbarButtons" id="navbutton1" onClick={()=> {
                  if(window.screen.width>798 && window.screen.width<1274){
             window.scrollTo({
                top : window.innerHeight*4.1+window.innerHeight*1.33,
                behavior:'smooth'
              })
                  }
                  else if(window.screen.width<798){
            window.scrollTo({
                top : 5250+window.innerHeight*1.33,
                behavior:'smooth'
              })}
              else{
                window.scrollTo({
                  top : window.innerHeight*2.9 +window.innerHeight*1.33,
                  behavior:'smooth'
                })
              }
                  }
              
              } >About</a>
                {/* <div className="submenu">
                  <a href="#">FAQ'S</a>  
                  <a  href="#">Certifications</a>
                </div>  */}
              </li> 
              <li className="menuHover"><a className="navbarButtons" id="navbutton6" onClick={()=> {
                  if(window.screen.width>798 && window.screen.width<1274){
             window.scrollTo({
                top : window.innerHeight*4.1+window.innerHeight*1.33+window.innerHeight*1.1,
                behavior:'smooth'
              })
                  }
                  else if(window.screen.width<798){
            window.scrollTo({
                top : 5250+window.innerHeight*1.33+window.innerHeight*1.1,
                behavior:'smooth'
              })}
              else{
                window.scrollTo({
                  top : window.innerHeight*2.9 +window.innerHeight*1.33+window.innerHeight*1.1,
                  behavior:'smooth'
                })
              }
                  }
              
              } >Contact</a> </li>
              
             
            </ul>
            <li className="menuHover">
              {
                !isOpened ? (
      <a  className="navbarButtonsBack" id="navbutton7" onClick={() =>{
        if(window.screen.width <=  798){
          const menu = document.getElementById("submenu")
              menu.style.transform="translateX(-210px)"
              setIsOpened(true)
        }
         else{
             const menu = document.getElementById("submenu")
              menu.style.transform="translateX(0px)"
          }
            }} ><FontAwesomeIcon icon={faBars} size="2x"/></a>
                ):(
        <a  className="navbarButtonsBack" id="navbutton7" onClick={() =>{
          if(window.screen.width <=  798){
            const menu = document.getElementById("submenu")
              menu.style.transform="translateX(60px)"
              setIsOpened(false)
          }
          else{
             const menu = document.getElementById("submenu")
              menu.style.transform="translateX(0px)"
          }
            }} ><FontAwesomeIcon icon={faTimes} size="2x"/></a>)
            
              }

              </li>
          </div>
          </nav>

      <div className="backgroud1">
      <div className="navbarAndmiddleTextContainer">
          <div className="middleText">
            <h1 className="moreParking">Less Space, <span>More Parking</span></h1>
            <h4 className="firstSentence"><span>Automated</span> and <span>Mechanical</span> Parking Systems to choose from.</h4>
            <h4 className="secondSentence"><span>Ramec-Egypt</span> is a full-service provider.</h4>
          </div>
      </div>
        </div>

      
        <div className="background2">
            <h1 className="automatedParkingSystem"><span>Models</span></h1>
            <div className="gridView">
                <div className="gridItem">
                     <div className="insideGridItem">
                       <div className="imageContainer">
                          <img src={carousel1} className="images" alt="images"/>
                       </div>

                       <div className="detailsAndButton">
                          <h3>Rotary Smart Parking(Carousel)</h3>
                          <p>
                          Our most popular system. The Carousel is the perfect solution to park the maximum number of cars in the least amount of space.
                          </p>
                       </div>

                       <div className="buttonContainer">
                       <a href='Rotary.pptx' download="Rotary.pptx" className="learnmore"><div className="iconMargin"><FontAwesomeIcon icon={faFilePowerpoint} size="1x"/> </div>Learn More</a>
                       </div>
                    </div>
                </div>

                <div className="gridItem">
                    <div className="insideGridItem">
                      <div className="imageContainer">
                            <img src={puzzle2} className="images" alt="images"/>
                      </div>

                      <div className="detailsAndButton">
                          <h3>Puzzle System</h3>
                          <p>
                          The Puzzle is a great solution for podium style buildings. The Puzzle is similar to a Stacker system, except that each space is independently accessible, and does not require a valet attendant.
                          </p>

                      </div>

                      
                      <div className="buttonContainer">
                      <a href='Puzzle.pptx' download="Puzzle.pptx" className="learnmore"><div className="iconMargin"><FontAwesomeIcon icon={faFilePowerpoint} size="1x"/> </div>Learn More</a>
                         </div>
                    </div>
                </div>

                <div className="gridItem">
                     <div className="insideGridItem">
                       <div className="imageContainer">
                          <img src={doublestacker} className="images" alt="images"/>
                       </div>

                       <div className="detailsAndButton">
                          <h3>Double Stacker VSS7-LP Low Rise Ceiling</h3>
                          <p>
                          The Double Stacker is the best solution to immediately double your parking capacity. Best for use in valet attended type parking.
                          </p>
                       </div>

                       <div className="buttonContainer">
                       <a href='Two Post.pptx' download="Two Post.pptx" className="learnmore"><div className="iconMargin"><FontAwesomeIcon icon={faFilePowerpoint} size="1x"/> </div>Learn More</a>
                       </div>
                    </div>
                </div>

                {/* <div className="gridItem">
                     <div className="insideGridItem">
                       <div className="imageContainer">
                          <img src={singlepost} className="images" alt="images"/>
                       </div>

                       <div className="detailsAndButton">
                          <h3>Single-Post Double Stacker</h3>
                          <p>
                          The Double Stacker is the best solution to immediately double your parking capacity. Best for use in valet attended type parking.
                          </p>
                       </div>

                       <div className="buttonContainer">
                             <button>Learn More</button>
                       </div>
                    </div>
                </div> */}

                <div className="gridItem">
                     <div className="insideGridItem">
                       <div className="imageContainer">
                          <img src={twinpost} className="images" alt="images"/>
                       </div>

                       <div className="detailsAndButton">
                          <h3>Twin-Post Double Stacker</h3>
                          <p>
                          The Double Stacker is the best solution to immediately double your parking capacity. Best for use in valet attended type parking.
                          </p>
                       </div>

                       <div className="buttonContainer">
                       <a href='Two Post.pptx' download="Two Post.pptx" className="learnmore"><div className="iconMargin"><FontAwesomeIcon icon={faFilePowerpoint} size="1x"/> </div>Learn More</a>
                       </div>
                    </div>
                </div>

                <div className="gridItem">
                     <div className="insideGridItem">
                       <div className="imageContainer">
                          <img src={doublestackerscissor} className="images" alt="images"/>
                       </div>

                       <div className="detailsAndButton">
                          <h3>Double Stacker VSS-7X Scissor Lifter</h3>
                          <p>
                          The Double Stacker is the best solution to immediately double your parking capacity. Best for use in valet attended type parking.
                          </p>
                       </div>

                       <div className="buttonContainer">
                       <a href='Scissor Lift.pptx' download="Scissor Lift.pptx" className="learnmore"><div className="iconMargin"><FontAwesomeIcon icon={faFilePowerpoint} size="1x"/> </div>Learn More</a>
                       </div>
                    </div>
                </div>

                <div className="gridItem">
                     <div className="insideGridItem">
                       <div className="imageContainer">
                          <img src={triplequad} className="images" alt="images"/>
                       </div>

                       <div className="detailsAndButton">
                          <h3>Triple and Quadruple</h3>
                          <p>
                          The Triple Stacker allows you to park three cars, in the space of one. Best for use in valet attended type parking. Then, The Quad Stacker allows you to park four cars in the space of one. Best for use in valet attended type parking.
                          </p>
                       </div>

                       <div className="buttonContainer">
                       <a href='Triple and Quadruple.pptx' download="Triple and Quadruple.pptx" className="learnmore"><div className="iconMargin"><FontAwesomeIcon icon={faFilePowerpoint} size="1x"/> </div>Learn More</a>
                       </div>
                    </div>
                </div>

            </div>


            {/* ................... */}
            {/* <h1 className="automatedParkingSystem"><span>Mechanical</span> Parking Systems</h1>
            <div className="gridView">
                <div className="gridItem">
                     <div className="insideGridItem">
                       <div className="imageContainer">
                          <img src={doublestacker} className="images" alt="images"/>
                       </div>

                       <div className="detailsAndButton">
                          <h3>DOUBLE STACKER</h3>
                          <p>
                          The Double Stacker is the best solution to immediately double your parking capacity. Best for use in valet attended type parking.
                          </p>
                       </div>

                       <div className="buttonContainer">
                             <button>Learn More</button>
                       </div>
                    </div>
                </div>

                <div className="gridItem">
                    <div className="insideGridItem">
                      <div className="imageContainer">
                            <img src={triplestacker} className="images" alt="images"/>
                      </div>

                      <div className="detailsAndButton">
                          <h3>TRIPLE STACKER</h3>
                          <p>
                          The Triple Stacker allows you to park three cars, in the space of one. Best for use in valet attended type parking.
                          </p>

                      </div>

                      
                      <div className="buttonContainer">
                             <button>Learn More</button>
                         </div>
                    </div>
                </div>

                <div className="gridItem">
                    <div className="insideGridItem">
                      <div className="imageContainer">
                              <img src={quadstacker} className="images" alt="images"/>
                        </div>

                        <div className="detailsAndButton">
                              <h3>QUAD STACKER</h3>
                              <p>
                              The Quad Stacker allows you to park four cars in the space of one. Best for use in valet attended type parking.
                              </p>
                          
                        </div>
                        <div className="buttonContainer">
                                <button>Learn More</button>
                          </div>
                      </div>
                </div>

                <div className="gridItem">
                   <div className="insideGridItem">
                    <div className="imageContainer">
                              <img src={pitlift} className="images" alt="images"/>
                        </div>
                        <div className="detailsAndButton">
                           <h3>PIT LIFT</h3>
                           <p>
                           The Pit Lift is designed to lower vehicles underground to one level, where the top level can be camouflaged with ground level landscaping.
                           </p>
          
                        </div>

                        <div className="buttonContainer">
                                <button>Learn More</button>
                              </div>

                  </div>
                </div>
            </div> */}


        </div>

      <div className="SwiperContainer">
            <h1 className="automatedParkingSystem" style={{alignSelf:"center"}}><span>Projects</span></h1>

            <div className="projectContainer"> 
              <div className="projectImages">
                  <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                      "rotate": 50,
                      "stretch": 0,
                      "depth": 100,
                      "modifier": 1,
                      "slideShadows": true
                    }} pagination={true} className="mySwiper">
                      <SwiperSlide><img src={zohor1} /></SwiperSlide>
                      {/* <SwiperSlide><img src={zohor2}/></SwiperSlide>
                      <SwiperSlide><img src={zohor3}/></SwiperSlide>
                      <SwiperSlide><img src={zohor4}/></SwiperSlide>
                      <SwiperSlide><img src={zohor5}/></SwiperSlide> */}
                      {/* <SwiperSlide><img src={zohor6}/></SwiperSlide> */}
                      <SwiperSlide><img src={zohor7}/></SwiperSlide>
                      <SwiperSlide><img src={zohor8}/></SwiperSlide>
                      {/* <SwiperSlide><img src={zohor9}/></SwiperSlide> */}
                      {/* <SwiperSlide><img src={zohor10}/></SwiperSlide> */}
                      {/* <SwiperSlide><img src={zohor11}/></SwiperSlide>
                       <SwiperSlide><img src={zohor12}/></SwiperSlide>
                       <SwiperSlide><img src={zohor13}/></SwiperSlide> */}
                  </Swiper>
              </div>

              <div className="projectData">
                      <h1 className="locationName"> El Zohour Sporting Club</h1>
                      <a href="https://goo.gl/maps/vfWgtTdE5ydjE93f9" target="_blank" className="locationDiv">
                        <img src={location} className="locationIcon"/>
                       <h4 className="locationDetails">Youssef Abbas Street, Al Estad, Nasr City, Cairo Governorate</h4>
                       </a>
              </div>
            </div>

            <div className="projectContainer"> 
              <div className="projectImages">
                  <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                      "rotate": 50,
                      "stretch": 0,
                      "depth": 100,
                      "modifier": 1,
                      "slideShadows": true
                    }} pagination={true} className="mySwiper">
                     
                      {/* <SwiperSlide><img src={zohor2}/></SwiperSlide>
                      <SwiperSlide><img src={zohor3}/></SwiperSlide>
                      <SwiperSlide><img src={zohor4}/></SwiperSlide>
                      <SwiperSlide><img src={zohor5}/></SwiperSlide> */}
                      <SwiperSlide><img src={merryland2}/></SwiperSlide>
                   
                      <SwiperSlide><img src={merryland4}/></SwiperSlide>
                    
                      <SwiperSlide><img src={merryland6}/></SwiperSlide>
                      <SwiperSlide><img src={merryland7}/></SwiperSlide>
                       <SwiperSlide><img src={merryland8}/></SwiperSlide>
                   
                  </Swiper>
              </div>

              <div className="projectData">
                      <h1 className="locationName">Nehro Street behind Merryland Garden</h1>
                      <a href="https://goo.gl/maps/LzyGhHLyZCCGXZNs5" target="_blank" className="locationDiv">
                        <img src={location} className="locationIcon"/>
                       <h4 className="locationDetails">32 Nehro, El-Montaza, Heliopolis, Cairo Governorate</h4>
                       </a>
              </div>
            </div>
            
      </div>


      <div className="background3">
          <div className="abovebackground3">
                <div className="emptydiv">

                </div>

                <div className="divWithText">
                      <h2 className="aboutParkmtic">About Ramec-Egypt</h2>
                      <p className="firstp">Ramec-Egypt, The first Egyptian company specialized in manufacturing smart parking systems. <br></br>Different models introduced by Ramec-Egypt represent an efficient and more valuable alternative for traditional parking systems. <br></br>The factory also introduce installation and after sales services.</p>
                      <p className="secondp">At Ramec-Egypt, we believe that our clients can have the best Creative Design, Cost Efficiency, and Exceptional Client Service. Our company focuses on maximum parking efficiencies at the most cost savings.  </p>
                     
                        <a href='Ramec_Egypt_Presentation.pdf' download="Ramec Egypt Presentation.pdf"><div className="iconMargin"><FontAwesomeIcon icon={faFilePdf} size="1x"/> </div>Learn More</a>
                     
                </div>
          </div>
      </div>

      {/* <div className="projectContainer">
        <div className="projectImageContainer" id="1" style={{backgroundImage:`url(${background1})`}}>
            
         <img src={background1} className="imageBackground"/> 
         <img src={background1} className="imageBackground"/>
         <img src={background1} className="imageBackground"/>
        </div>

      
      </div> */}

<div className="background32">
          <div className="abovebackground3">
          <div className="divWithText2">
                      <h2 className="aboutParkmtic">Why Ramec-Egypt ?</h2>
                      <p className="firstp">Ramec-Egypt is manfucturing and developing with international qualtiy and standrization using Korean techologies.<br></br>It offers free installment to the system and free engineering and mechanical consultancy.<br></br>It offers excellent after sale services and 10 years insurance to the metallic sekeleton.</p>
                      <a href='flyer.pdf' download="Flyer.pdf"><div className="iconMargin"><FontAwesomeIcon icon={faFilePdf} size="1x"/> </div>Learn More</a>
                     
                </div>
                <div className="emptydiv2">

                </div>
          </div>
      </div>

<div className="forAnyMoreContact">
<img src={logoword} className="logoword1"/>

<div className="contactDetailsContainer">
<h4>Contact Us: </h4>
<h5 className="contactDetails"><div className="iconMargin"><FontAwesomeIcon icon={faEnvelope} size="1x"/></div><a href = "mailto: info@ramec-eg.com">info@ramec-eg.com</a></h5>
<h5 className="contactDetails"><div className="iconMargin"><FontAwesomeIcon icon={faPhoneAlt} size="1x"/></div><a href="tel:+20226989511">+202 26989511</a></h5>
<h5 className="contactDetails"><div className="iconMargin"><FontAwesomeIcon icon={faMobileAlt} size="1x"/></div><a href="tel:+201113649876">+2 01113649876</a></h5>
<h5 className="contactDetails"><div className="iconMargin"><FontAwesomeIcon icon={faMobileAlt} size="1x"/></div><a href="tel:+201005396718">+2 01005396718</a></h5>
</div>
</div>
    </div>
  );
}

export default App;
