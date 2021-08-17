import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          {/*<Route path="/kontakt">*/}
          {/*  <Contacts/>*/}
          {/*</Route>*/}
          {/*<Route path="/galerie">*/}
          {/*  <Gallery/>*/}
          {/*</Route>*/}
          {/*<Route path="/rezervace">*/}
          {/*  <Reservation/>*/}
          {/*</Route>*/}
          {/*<Route path="/sluzby">*/}
          {/*  <Services/>*/}
          {/*</Route>*/}
          {/*<Route path="/about">*/}
          {/*  <About/>*/}
          {/*</Route>*/}
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
