import logo from './logo.svg';
import './App.css';
import {Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faChevronDown} from '@fortawesome/free-solid-svg-icons'

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

        </div>
    </div>
  );
}

export default App;
