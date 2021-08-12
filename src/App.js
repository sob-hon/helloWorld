import "./App.css";
import Login from "./views/Login/Login";
import CodeLogin from './views/LoginCode/LoginCode';
import {Switch,Route}  from "react-router-dom"
import React from "react"
import Slider from './views/HomePage/components/Slider/Slider'
import HomePage from "./views/HomePage/HomePage.jsx"

function App() {



  return(
    <>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/verificatioCode" component={CodeLogin}/>
        <Route exact path="/homepage" component={HomePage}/>
      </Switch>
    </>
  ) ;
}

export default App;
