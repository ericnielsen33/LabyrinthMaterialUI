import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Divider from 'material-ui/Divider';
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 10
  },
});

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "title",
      post: ""
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="column">
          <Grid item xs={12} >
            <Typography variant="headline">This is a blog post!</Typography>
          </Grid>
          <Grid item xs={12} l={10}>
            <Typography align="justify" paragraph={true} variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </Typography>
            <Typography align="justify" paragraph={true} variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </Typography>
            <Typography align="justify" paragraph={true} variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </Typography>
            <Typography align="justify" paragraph={true} variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </Typography>
          </Grid>
        </Grid>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles)(BlogPost);
