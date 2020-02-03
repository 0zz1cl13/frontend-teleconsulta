import React, { Component } from "react";
import Routes from "./Routes";
import Header from "./layouts/Dashboard/components/Header";
import SideDrawer from "./layouts/Dashboard/components/SideDrawer";
import Backdrop from "./layouts/Dashboard/components/BackDrop";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import SmallSideDrawer from "./layouts/Dashboard/components/SmallSideDrawer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#209F85"
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  status: {
    danger: "orange"
  }
});

class App extends Component {
  state = {
    SideDrawerOpen: false
  };

  sideDrawerClickHandler = () => {
    this.setState(prevState => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backDrop;

    if (this.state.SideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop = <Backdrop click={this.backDropClickHandler} />;
    }

    return (
      <ThemeProvider theme={theme}>
        <div style={{ height: "100%" }}>
          <Header drawerClickHandler={this.sideDrawerClickHandler} />
          {sideDrawer}
          {backDrop}
          <SmallSideDrawer />;
          <Routes />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
