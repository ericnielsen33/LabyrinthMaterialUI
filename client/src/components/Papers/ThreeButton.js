import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    border: "1px solid black",
    borderRadius: 25,
    background: "linear-gradient(45deg, #E0F2F1 30%, #64FFDA 90%)"
  },
  paper: {
    border: 1,
    borderRadius: 5,
    boxShadow: "0 3px 5px 2px #E0E0E0",
    color: theme.palette.text.secondary,
    maxHeight: "100%",
    overflow: "auto",
    padding: theme.spacing.unit * 2,
    textAlign: "center"
  }
});

class ThreeButton extends Component {
  constructor(props) {
    super(props);
    this.selectPost = this.selectPost.bind(this);
    this.state = { blogPost: "" };
  }

  selectPost(e) {
    e.preventDefault();
    const blogPost = e.target.value;
    this.setState(() => ({ blogPost }));
    console.log(this.state);
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} s={12} m={6} l={6} xl={6}>
            <Paper className={classes.paper}>
              <Grid container direction="column">
                <Grid item>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    direction="row"
                  >
                    <Grid item>
                      <Button
                        onClick={this.selectPost}
                        className={classes.button}
                        value="cat"
                      >
                        Button
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        onClick={this.selectPost}
                        className={classes.button}
                        value="dog"
                      >
                        Button
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        onClick={this.selectPost}
                        className={classes.button}
                        value="rabbit"
                      >
                        Button
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row">
                    <Grid item>
                      <Typography variant="headline">
                        Blog Post Title
                      </Typography>
                    </Grid>
                    <Typography
                      align="justify"
                      variant="body1"
                      paragraph={true}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </Typography>
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

export default withStyles(styles)(ThreeButton);
