import {
  Button,
  createMuiTheme,
  IconButton,
  makeStyles,
  Menu,
  Paper,
  ThemeProvider,
  Typography,
  useTheme,
} from "@material-ui/core";
import { blue, cyan, green } from "@material-ui/core/colors";
import { MenuRounded } from "@material-ui/icons";
import React from "react";
const useStyles = makeStyles((theme) => ({
  button: {
    color: "pink",
    [theme.breakpoints.up("sm")]: {
      color: "yellow",
    },
  },
}));
const theme = createMuiTheme({
  typography: {
    fontFamily: "cursive",
  },
  palette: {
    // primary: green,
    // secondary: blue,
    type: "dark",
  },
});

const ThemeTuto = () => {
  const classes = useStyles();
  const theme1 = useTheme(); //gettheme
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Typography variant="h1">Hello Nyein!</Typography>
        <Button color="primary" startIcon={<MenuRounded />} variant="outlined">
          Primary
        </Button>
        <Button
          color="secondary"
          startIcon={<MenuRounded />}
          variant="outlined"
        >
          Secondary
        </Button>
        <Button className={classes.button}>According to Size</Button>
      </Paper>
    </ThemeProvider>
  );
};

export default ThemeTuto;
