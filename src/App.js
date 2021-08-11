import "./App.css";
import Login from "./views/Login/Login";
import CodeLogin from './views/LoginCode/LoginCode';
import {Switch,Route}  from "react-router-dom"

function App() {
  return(
    <>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/verificatioCode" component={CodeLogin}/>
    </Switch>
    </>
  ) ;
}

export default App;
