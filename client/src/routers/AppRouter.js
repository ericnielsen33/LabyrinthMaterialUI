import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "../views/About";
import PageFooter from "../components/PageFooter";
// import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Home from "../views/Home";
import NotFoundPage from "../views/NotFoundPage";
import Blog from "../views/Blog";

const AppRouter = () => (
  
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/blog" component={Blog} exact={true} />
            <Route path="/about" component={About} exact={true} />
            <Route component={NotFoundPage} />
          </Switch>
          <PageFooter />
        </div>
      </BrowserRouter>
    
);
export default AppRouter;
