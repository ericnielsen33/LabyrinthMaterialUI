import React, { Component } from "react";
import "typeface-roboto";
import "./App.css";
import Reboot from "material-ui/Reboot";
import { createMuiTheme } from "material-ui/styles";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Layout from "../src/components/Layout";


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <Reboot />
        <MuiThemeProvider theme={theme}>
          <Layout />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
