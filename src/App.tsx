import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./views/Login/Login"
import { connect} from 'react-redux'
import Signup from "./views/Signup/Signup"
import Home from "./views/Home/Home"
import * as actions from "./store/actions/auth"


const App:React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state: { token: null; }) =>{
  return {
    isAuthenticated:state.token !==null
  }
}

const mapDispatchToProps = (dispatch: (arg0: any) => void) =>{
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);