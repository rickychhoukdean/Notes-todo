import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import Signup from "./views/Signup/Signup";
import Home from "./views/Home/Home";

const App = (props: any) => {
  return (
    <Router>
      <div>
        <Route exact path="/login">
          <Login {...props} />
        </Route>
        <Route exact path="/signup">
          <Signup {...props} />
        </Route>
        <Route exact path="/">
          <Home {...props} />
        </Route>
      </div>
    </Router>
  );
};

export default App;
