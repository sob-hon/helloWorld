import "./App.css";
import SignUp from "./views/SignUp/SignUp";
import CodeLogin from "./views/LoginCode/LoginCode";
import { Switch, Route } from "react-router-dom";
import React from "react";
import HomePage from "./views/HomePage/HomePage.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import ViewMore from './views/ViewMore/ViewMore';
import Subscription from './views/Subscription/Subscrption';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles/createMuiTheme';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import theme from "./theme.js"
const queryClient = new QueryClient();


function App() {
 
  return (
    <>
    <QueryClientProvider client={queryClient}>
   
        <ThemeProvider
          theme={theme}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
      <ToastContainer
          autoClose={3000}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
      />
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/verificatioCode" component={CodeLogin} />
        <Route exact path="/homepage" component={HomePage} />
        <Route excat path="/viewmore" component={ViewMore} />
        <Route excat path="/subscription" component={Subscription} />
      </Switch>
   
      </ThemeProvider>
 
    </QueryClientProvider>
  
    </>
  );
}

export default App;
