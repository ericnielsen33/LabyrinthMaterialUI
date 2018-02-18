import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Divider from 'material-ui/Divider';
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = this.props.classes;
    console.log(this.props);
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12} m={6}>
            <Paper className={classes.paper}>
              <Typography variant="headline">Two</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} m={6}>
            <Paper className={classes.paper}>
              <Typography variant="headline">One</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Blog);