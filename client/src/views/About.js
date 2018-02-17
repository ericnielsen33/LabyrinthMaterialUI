import React, { Component } from "react";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

class About extends Component {

  componentDidMount(props){
    console.log(props) 
   }

  render(){
    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={4}>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your
              application.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}


export default About;
