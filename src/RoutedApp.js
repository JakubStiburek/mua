import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Reservation from "./pages/Reservation";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleSingle from "./pages/ArticleSingle";

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
          <Route path="/clanky">
            <Articles />
          </Route>
          <Route path="/clanek/:id">
            <ArticleSingle />
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

