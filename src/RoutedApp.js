import {ThemeProvider} from "styled-components";
import {colorTheme} from "./constants/colorTheme";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticlePage from "./pages/ArticlePage";

const RoutedApp = () => {
  return (
    <Router>
      <ThemeProvider theme={colorTheme}>
        <Switch>
          <Route path="/kontakty">
            <Contacts/>
          </Route>
          <Route path="/galerie">
            <Gallery/>
          </Route>
          <Route path="/sluzby">
            <Services/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/clanky">
            <Articles/>
          </Route>
          <Route path="/clanek/:id">
            <ArticlePage/>
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

