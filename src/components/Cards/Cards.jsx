import React, { Component } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed);
  if (!confirmed) {
    return "...Loading";
  }
  console.log(confirmed);
  // console.log(props);
  return (
    <div className="styles.container">
      {" "}
      <h1>Cards</h1>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Infected
            </Typography>
            <Typography variant="h5">{confirmed.value}</Typography>
            <Typography color="textSecondary" gutterBottom>
              Real Date{" "}
            </Typography>
            <Typography variant="body2">
              Number of active cases of covide-19{" "}
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Infected
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary" gutterBottom>
              Real Date{" "}
            </Typography>
            <Typography variant="body2">
              Number of Recovered cases of covide-19{" "}
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {" "}
              Infected
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary" gutterBottom>
              Real Date{" "}
            </Typography>
            <Typography variant="body2">
              Number of Death cases of covide-19{" "}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
