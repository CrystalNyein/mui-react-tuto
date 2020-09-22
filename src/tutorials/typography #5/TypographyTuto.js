import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { blue, green, purple } from "@material-ui/core/colors";
import React from "react";
const useStyles = makeStyles({
  typographyStyle: {
    color: "blue",
  },
  gutterBottom: {
    marginBottom: "0.6em",
  },
});
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});
const TypographyTuto = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Typography
        // className={classes.typographyStyle}
        classes={{ gutterBottom: classes.gutterBottom }}
        color="secondary"
        align="right"
        // gutterBottom
        noWrap
        variant="h1"
        component="h1"
      >
        Hello World Hello World
      </Typography>
    </ThemeProvider>
  );
};

export default TypographyTuto;
