import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

import ThreeButton from '../components/Papers/ThreeButton';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = this.props.classes;
    console.log(this.props);
    return (
      <div className={classes.root}>
        <ThreeButton />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(About);
