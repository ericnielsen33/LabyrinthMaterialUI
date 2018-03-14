import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import BlogPosts from '../components/BlogPosts';


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding:20,
    backgroundColor:theme.palette.secondary.dark,
  }
});

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid alignItems="center" container>
          <BlogPosts />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Blog);