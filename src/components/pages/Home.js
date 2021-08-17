import './Home.css';
import Logo from "../Logo";
import MuaBanner from "../MuaBanner";
import MenuBanner from "../MenuBanner";
import Burger from "../Burger";
import Menu from "../Menu";
import {useState} from "react";

const Home = () => {
  const [burgerState, setBurgerState] = useState(false)

  const toggleBurger = () => {
    burgerState ? setBurgerState(false) : setBurgerState(true);
  }

  return (
      <div className="layout">
        <div className="logo">
          <Logo>SOLOMIJA STIBŮRKOVÁ</Logo>
        </div>
        <div className="banner">
          <MuaBanner>Profesionální vizážistka & make-up artist</MuaBanner>
        </div>
        <div className="menu-banner">
          <MenuBanner/>
        </div>
        {/*<Menu/>*/}
        <div className="burger" onClick={toggleBurger}>
          <Burger open={burgerState}/>
        </div>
        <div className="gallery">gallery</div>
        <div className="reservation">reservation</div>
    </div>
  )
};

export default Home;
