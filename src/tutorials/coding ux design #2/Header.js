import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { AcUnitRounded } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles(() => ({
  JustifyBetween: {
    justifyContent: "space-between",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.JustifyBetween}>
        <Typography>Header</Typography>
        <AcUnitRounded />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
