import "./App.css";
import Login from "./views/Login/Login";
import CodeLogin from './views/LoginCode/LoginCode';
import {Switch,Route}  from "react-router-dom"

import React,{createContext,useState} from "react"

export const PhoneContext = createContext(null)

function App() {

  const [phoneNum,setPhoneNum] = useState()

  return(
    <>
    <PhoneContext.Provider value={
      {
        phoneNum,
        setPhone: (value) => setPhoneNum(value)
      }
    }>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/verificatioCode" component={CodeLogin}/>
      </Switch>
    </PhoneContext.Provider>
    </>
  ) ;
}

export default App;
