import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ={["/"]}>
            <Home/>
          </Route>
          <Route exact path ={["/portfolio"]}>
            <Portfolio/>
          </Route>
          <Route exact path ={["/contact"]}>
            <Contact/>
          </Route>
          <Route exact path ={["/resume"]}>
            <Resume/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
