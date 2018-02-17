import React, { Component } from "react";
import "typeface-roboto";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import Reboot from "material-ui/Reboot";
import { createMuiTheme } from 'material-ui/styles';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <Reboot />
        <MuiThemeProvider theme={theme}>
          <AppRouter />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
