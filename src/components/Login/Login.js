import React from "react";
import { accessUrl } from "../../utils/spotify";
import { Typography } from "@material-ui/core";
import loginStyles from "./loginStyle";

function Login() {
  const classes = loginStyles();
  return (
    <div className={classes.login}>
      <Typography variant="h4">Welcome to spotify clone app.</Typography>
      <Typography variant="body1" color="textSecondary">
        where you can connect your spotify account to listen to all music.
      </Typography>
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
