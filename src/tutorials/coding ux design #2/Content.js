import { Grid } from "@material-ui/core";
import React from "react";
import CoffeCard from "./CoffeCard";

function Content() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <CoffeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard />
      </Grid>
    </Grid>
  );
}

export default Content;
