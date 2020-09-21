import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  //   buttonStyle: {
  //     color: (props) => (props.cool ? "blue" : "red"),
  //   },
  //   textStyle: (props) => {
  //     return {
  //       color: props.cool ? "green" : "yellow",
  //     };
  //   },
  buttonStyle: {
    color: "blue",
    [theme.breakpoints.up("md")]: {
      color: "yellow",
    },
  },
  buttonBackground: {
    backgroundColor: "gray",
  },
}));

const ButtonForTuto = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button
        fullWidth
        className={classNames(classes.buttonStyle, classes.buttonBackground)}
      >
        Small Button
      </Button>
      <h1 className={classes.textStyle}>This is Text</h1>
    </React.Fragment>
  );
};

export default ButtonForTuto;
