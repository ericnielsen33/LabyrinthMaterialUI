import React, { Component } from "react";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from 'material-ui/styles/getMuiTheme';




class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppRouter />
      </MuiThemeProvider>
    );
  }
}

export default App;
