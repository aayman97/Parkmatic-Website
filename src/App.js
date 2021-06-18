import logo from './logo.svg';
import './App.css';
import {Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faChevronDown} from '@fortawesome/free-solid-svg-icons'
import carousel1 from './carousel1.jpg'
import puzzle2 from './puzzle2.jpg'
import RackRail from './RackRail.jpg'
import tower from './Tower.jpg';
import doublestacker from './doublestacker.jpg'
import triplestacker from './triplestacker.jpg'
import quadstacker from './quadstacker.jpg'
import pitlift from './pitlift.jpg'

function App() {
  window.addEventListener('scroll',() => {
    let scrolly= window.scrollY;
   
    console.log(scrolly)
    console.log(window.screen.height/1.5)

    const navbar = document.getElementById('nav')
    const navButton= document.getElementById('navbutton')
    const navButton1= document.getElementById('navbutton1')
    const navButton2= document.getElementById('navbutton2')
    const navButton3= document.getElementById('navbutton3')
    const navButton4= document.getElementById('navbutton4')
    const navButton5= document.getElementById('navbutton5')
    const navButton6= document.getElementById('navbutton6')
    const wholelogo = document.getElementById('wholelogo')
    const computStyle = window.getComputedStyle(navbar)

    console.log(computStyle.getPropertyValue('top'))
    if(scrolly > window.screen.height/4){
      if(computStyle.getPropertyValue('top') === "10px"){
        navbar.style.top = "0px"
        navbar.style.animation="colorNavBarAnimation 1s forwards";
      navButton.style.animation = "textColor 1s forwards"
      navButton1.style.animation = "textColor 1s forwards"
      navButton2.style.animation = "textColor 1s forwards"
      navButton3.style.animation = "textColor 1s forwards"
      navButton4.style.animation = "textColor 1s forwards"
      navButton5.style.animation = "textColor 1s forwards"
      navButton6.style.animation = "textColor 1s forwards"
      wholelogo.style.animation="logoAnimation 1s forwards"
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
       navButton3.style.animation = "textColorBack 1s forwards"
       navButton4.style.animation = "textColorBack 1s forwards"
       navButton5.style.animation = "textColorBack 1s forwards"
       navButton6.style.animation = "textColorBack 1s forwards"
       navbar.style.top = "10px"
       wholelogo.style.animation="logoAnimationBack 1s forwards"
       document.documentElement.style
       .setProperty('--white', 'white');
      }
    }
    
  
  })
  return (
    <div className="App">

          <nav id="nav" className="navbar"> 
            <h1 className="wholeLogo" id="wholelogo"><span className="ThePlogo">P</span>arkmatic</h1>
            <ul>
              <li className="menuHover"><a href="#" className="navbarButtons"id="navbutton" >Home</a></li>
              <li className="menuHover">
                <a href="#" className="navbarButtons" id="navbutton1">About  <FontAwesomeIcon icon={faChevronDown} className="arrowDown"/></a>
                <div className="submenu">
                  <a href="#">FAQ'S</a>  
                  <a  href="#">Certifications</a>
                </div> 
              </li>
              <li className="menuHover">
                <a href="#" className="navbarButtons" id="navbutton2">Automated <FontAwesomeIcon icon={faChevronDown} className="arrowDown"/></a>
                <div className="submenu">
                  <a href="#">Carousel</a>  
                  <a  href="#">Puzzle</a>
                  <a  href="#">Rack and Rail</a>
                  <a  href="#">Tower</a>
                </div> 
              </li>
              <li className="menuHover">
                <a href="#" className="navbarButtons" id="navbutton3">Mechanical <FontAwesomeIcon icon={faChevronDown}  className="arrowDown"/></a>
                <div className="submenu">
                  <a href="#">Double Stacker</a>  
                  <a  href="#">Triple Stacker</a>
                  <a  href="#">Quad Stacker</a>
                  <a  href="#">Pit Lift</a>
                  <a  href="#">Vox Elevator</a>
                </div> 
              </li>
              <li className="menuHover"><a href="#" className="navbarButtons" id="navbutton4">Projects</a> </li>
              <li className="menuHover"><a href="#" className="navbarButtons" id="navbutton5">Downloads</a> </li>
              <li className="menuHover"><a href="#" className="navbarButtons" id="navbutton6">Contact</a> </li>
            </ul>
          </nav>

      <div className="backgroud1">
      <div className="navbarAndmiddleTextContainer">


          <div className="middleText">
            <h1 className="moreParking"><span>More Parking</span> in Less Space</h1>
            <h4 className="firstSentence"><span>Automated</span> and <span>Mechanical</span> Parking Systems with over 40 models to choose from.</h4>
            <h4 className="secondSentence"><span>Parkamtic</span> is a full-service provider with factory pricing.</h4>
          </div>
      </div>
        </div>

        <div className="background2">
            <h1 className="automatedParkingSystem"><span>Automated</span> Parking Systems</h1>
            <div className="gridView">
                <div className="gridItem">
                     <div className="insideGridItem">
                       <div className="imageContainer">
                          <img src={carousel1} className="images" alt="images"/>
                       </div>

                       <div className="detailsAndButton">
                          <h3>Carousel</h3>
                          <p>
                          Our most popular system. The Carousel is the perfect solution to park the maximum number of cars in the least amount of space.
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
                            <img src={puzzle2} className="images" alt="images"/>
                      </div>

                      <div className="detailsAndButton">
                          <h3>Puzzle</h3>
                          <p>
                          The Puzzle is a great solution for podium style buildings. The Puzzle is similar to a Stacker system, except that each space is independently accessible, and does not require a valet attendant.
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
                              <img src={RackRail} className="images" alt="images"/>
                        </div>

                        <div className="detailsAndButton">
                              <h3>Rack and Rail</h3>
                              <p>
                              The Rack and Rail is a fully automated system suitable for large scale projects that can move vehicles by a lift which then transfers it to a waiting cart on one of many levels.
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
                              <img src={tower} className="images" alt="images"/>
                        </div>
                        <div className="detailsAndButton">
                           <h3>Tower</h3>
                           <p>
                           The Tower is a fully automated system designed for vertical design and integration. This system is suitable for medium or large scale buildings with site constraints that require maximum parking spaces and efficiency.
                           </p>
          
                        </div>

                        <div className="buttonContainer">
                                <button>Learn More</button>
                              </div>

                  </div>
                </div>
            </div>


            {/* ................... */}
            <h1 className="automatedParkingSystem"><span>Mechanical</span> Parking Systems</h1>
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
            </div>
        </div>
    </div>
  );
}

export default App;
