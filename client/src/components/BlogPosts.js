import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import BlogPost from "./BlogPost";

const styles = {
  root: {
    margin: "0% 20% 0% 20%",
  }
};
class BlogPosts extends Component {
  render() {
    const { classes } = this.props;
    return (

      <div className={classes.root}>
        <BlogPost />
        <BlogPost />
      </div>
    );
  }
}

export default withStyles(styles)(BlogPosts); 
