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
      <Switch>
        {/*<Route path="/contacts">*/}
        {/*  <Contacts/>*/}
        {/*</Route>*/}
        {/*<Route path="/gallery">*/}
        {/*  <Gallery/>*/}
        {/*</Route>*/}
        {/*<Route path="/reservation">*/}
        {/*  <Reservation/>*/}
        {/*</Route>*/}
        {/*<Route path="/services">*/}
        {/*  <Services/>*/}
        {/*</Route>*/}
        {/*<Route path="/about">*/}
        {/*  <About/>*/}
        {/*</Route>*/}
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
