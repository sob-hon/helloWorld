import "./App.css";
import SignUp from "./views/SignUp/SignUp";
import CodeLogin from "./views/LoginCode/LoginCode";
import { Switch, Route } from "react-router-dom";
import React from "react";
import HomePage from "./views/HomePage/HomePage.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import ViewMore from './views/ViewMore/ViewMore';
import Subscription from './views/Subscription/Subscrption';

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/verificatioCode" component={CodeLogin} />
        <Route exact path="/homepage" component={HomePage} />
        <Route excat path="/viewmore" component={ViewMore} />
        <Route excat path="/subscription" component={Subscription} />
      </Switch>
    </QueryClientProvider>
    </>
  );
}

export default App;
