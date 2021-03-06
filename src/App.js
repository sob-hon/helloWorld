import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "./theme.js";
import SignUp from "./views/SignUp/SignUp";
import CodeLogin from "./views/LoginCode/LoginCode";
import HomePage from "./views/HomePage/HomePage";
import Subscription from "./views/Subscription/Subscrption";
import ViewMore from "./views/ViewMore/ViewMore";
import Profile from "./views/Profile/Profile";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <ToastContainer
            autoClose={3000}
            newestOnTop
            closeOnClick
            rtl={true}
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
            <Route excat path="/profile" component={Profile} />
          </Switch>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
