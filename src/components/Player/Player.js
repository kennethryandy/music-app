import React from "react";
import Body from "./Body/Body";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import { Grid, Hidden } from "@material-ui/core";

function Player({ spotify }) {
  return (
    <div>
      <Grid container>
        <Hidden only="xs">
          <Grid item sm={3} md={2}>
            <Sidebar spotify={spotify} />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} md={10}>
          <Body />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Player;
