import './Home.css';
import Logo from "../Logo";
import MuaBanner from "../MuaBanner";
import MenuBanner from "../MenuBanner";
import Burger from "../Burger";
import Menu from "../Menu";

const Home = () => {
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
        <div className="burger"><Burger/></div>
        <div className="gallery">gallery</div>
        <div className="reservation">reservation</div>
    </div>
  )
};

export default Home;
