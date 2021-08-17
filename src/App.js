import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Reservation from "./components/pages/Reservation";
import Services from "./components/pages/Services";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/kontakt">
            <Contacts/>
          </Route>
          <Route path="/galerie">
            <Gallery/>
          </Route>
          <Route path="/rezervace">
            <Reservation/>
          </Route>
          <Route path="/sluzby">
            <Services/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
