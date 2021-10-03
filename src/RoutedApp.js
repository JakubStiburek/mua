import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contacts from "./components/pages/Contacts";
import Gallery from "./components/pages/Gallery";
import Reservation from "./components/pages/Reservation";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

const RoutedApp = () => {
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
  )
};

export default RoutedApp;

