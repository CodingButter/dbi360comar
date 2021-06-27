import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/HomePage/Home";
import Aboutus from "./pages/Aboutus/Aboutus";
import SignUp from "./pages/SignUp/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Contactus from "./pages/Contactus/Contactus";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" exact component={Aboutus} />
        <Route path="/contactus" exact component={Contactus} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
