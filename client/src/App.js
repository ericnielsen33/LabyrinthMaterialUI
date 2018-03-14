import React, { Component } from "react";
import "typeface-roboto";
import "./App.css";
import Reboot from "material-ui/Reboot";
import { createMuiTheme } from "material-ui/styles";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Layout from "../src/components/Layout";

// colors
const lab_Bittersweet = '#FC6255';
const lab_paleTurquoise = '#BFF4ED';


const lab_almostWhite = '#FAFAFA';
const lab_white = '#FFFFFF';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#FC6255',
      main: '#00D3B7',
      dark: '#171928',
      contrastText: '#FAFAFA',
    },
    secondary: {
      light: '#BFF4ED',
      main: '#FA4132',
      dark: '#51535E',
      contrastText: '#FAFAFA',
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
