import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

import {
  Code,
  Build,
  Poll,
  BusinessCenter,
  AttachMoney,
  Functions,
  DirectionsWalk,
  Group
} from "material-ui-icons";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  attention: {
    backgroundColor: theme.palette.primary.dark,
    padding: "5%"
  },
  attentionPaper: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.dark,
    fontColor: theme.palette.secondary.light,
    border: "solid",
    borderColor: theme.palette.primary.main,
    borderRadius: 15,
    borderWidth: 1,
    margin: 10,
    padding: '2em',
    minHeight: 210
  },
  headline: {
    fontColor: theme.palette.secondary.main
  },
  process: {
    backgroundColor: theme.palette.primary.main,
    padding: "5%"
  },
  processPaper: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    fontColor: theme.palette.secondary.dark,
    border: "solid",
    borderColor: theme.palette.primary.dark,
    borderRadius: 15,
    borderWidth: 1,
    margin: 10,
    padding: '2em',
    minHeight: 210
  },
  icons: {
    color: theme.palette.secondary.light,
    height: 48,
    width: 48
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          className={classes.attention}
          container
          spacing={24}
          alignContent="center"
        >
          <Grid align="left" item xs={12}>
            <Typography color="textSecondary" variant="display3">
              Cultivate intelligence from analytics to build effective marketing
              strategies.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.attentionPaper}>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography color="primary" variant="display2" align="center">
                    Let's get started
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    alignContent="center"
                    justify="space-around"
                    spacing={8}
                  >
                    <Grid item xs={12} md={6} l={5} xl={4}>
                      <Paper className={classes.attentionPaper}>
                        <Grid
                          container
                          justify="space-between"
                          alignItems="center"
                        >
                          <Grid item xs={12}>
                            <Typography color="primary" variant="display1">
                              Discovery
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={2}>
                            <BusinessCenter className={classes.icons} />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography align="left">
                              We sit down with you and understand your business
                              and marketing objectives.
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={2}>
                            <AttachMoney className={classes.icons} />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography align="left">
                              We design a plan that fits your budget and needs.
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} l={5} xl={4}>
                      <Paper className={classes.attentionPaper}>
                        <Grid
                          container
                          justify="space-between"
                          alignItems="center"
                        >
                          <Grid item xs={12}>
                            <Typography color="primary" variant="display1">
                              Audit
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={2}>
                            <DirectionsWalk className={classes.icons} />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography align="left">
                              We begin by understanding your customer journey.
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={2}>
                            <Code className={classes.icons} />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography align="left">
                              Perform a full audit of your digital presence and
                              current marketing tactics.
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={24} className={classes.process}>
          <Grid item xs={12}>
            <Paper className={classes.processPaper}>
              <Grid container direction="column" spacing={24}>
                <Grid item xs={12}>
                  <Typography color="inherit" variant="display2" align="center">
                    And never stop
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    justify="space-around"
                    spacing={8}
                  >
                    <Grid item xs={12} md={6} l={5} xl={4}>
                      <Paper className={classes.processPaper}>
                        <Grid container alignItems="center">
                          <Grid item xs={12}>
                            <Typography color="inherit" variant="display1">
                              Measure
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={2}>
                            <Functions className={classes.icons} />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography align="left" color="inherit">
                              Deploy analytics and measure data no matter the
                              channel.
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={2}>
                            <Poll className={classes.icons} />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography align="left" color="inherit">
                              Determine marketing performance benchmarks, and
                              decide appropriate ad spend based on ROI.
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                    <Grid xs={12} md={6} l={5} xl={4}>
                      <Paper className={classes.processPaper}>
                        <Grid container alignItems="center">
                          <Grid item xs={12}>
                            <Typography color="inherit" variant="display1">
                              Optimize
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={2}>
                            <Build className={classes.icons} />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography align="left" color="inherit">
                                Gain insight from analytics to enhance and refine your marketing strategy.
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={2}>
                            <Group className={classes.icons} />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography align="left" color="inherit">
                                Continue working together to ensure success in a changing world.
                            </Typography>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Home);
