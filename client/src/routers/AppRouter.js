import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Grid from "material-ui/Grid";
import About from "../views/About";
import PageFooter from "../components/PageFooter";
import Navigation from "../components/Navigation";
import Home from "../views/Home";
import NotFoundPage from "../views/NotFoundPage";
import Blog from "../views/Blog";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navigation />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/blog" component={Blog} exact={true} />
            <Route path="/about" component={About} exact={true} />
            <Route component={NotFoundPage} />
          </Switch>
        </Grid>
        <Grid item xs={12}>
          <PageFooter />
        </Grid>
      </Grid>
    </div>
  </BrowserRouter>
);
export default AppRouter;
