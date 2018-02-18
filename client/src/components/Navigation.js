import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

const Navigation = (props) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Labyrinth Digital
          </Typography>
          <Button href="/about" color="inherit">About</Button>
          <Button href="/blog" color="inherit">Blog</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;