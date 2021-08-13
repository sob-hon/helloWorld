import "./App.css";
import SignUp from "./views/SignUp/SignUp";
import CodeLogin from './views/LoginCode/LoginCode';
import {Switch,Route}  from "react-router-dom"
import React from "react"
import HomePage from "./views/HomePage/HomePage.jsx"

function App() {



  return(
    <>
      <Switch>
        <Route exact path="/" component={SignUp}/>
        <Route exact path="/verificatioCode" component={CodeLogin}/>
        <Route exact path="/homepage" component={HomePage}/>
      </Switch>
    </>
  ) ;
}

export default App;
