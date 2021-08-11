import './App.css';
import Logo from "./components/Logo";
import MuaBanner from "./components/MuaBanner";
import MenuBanner from "./components/MenuBanner";

function App() {
  return (
    <div className="App">
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
        <div className="burger">burger</div>
        <div className="gallery">gallery</div>
        <div className="reservation">reservation</div>
      </div>
    </div>
  );
}

export default App;
