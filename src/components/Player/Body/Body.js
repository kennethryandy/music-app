import React from "react";
import bodyStyle from "./bodyStyle";
import { CTX } from "../../../contextApi/StateProvider";
import Header from "./Header/Header";
import TrackLists from "./TrackLists/TrackLists";
//material-ui
import { Divider, List, Typography } from "@material-ui/core";

function Body() {
  const [{ selectedPlaylist }] = CTX();
  const classes = bodyStyle();
  console.log(selectedPlaylist?.playlist?.items);
  return (
    <div className={classes.body}>
      <Header />
      {selectedPlaylist.playlist && (
        <>
          <div className={classes.hero}>
            {selectedPlaylist.img && (
              <img
                alt=""
                src={selectedPlaylist.img[0]?.url}
                className={classes.albumImage}
              />
            )}
            <div className={classes.titles}>
              <Typography variant="body2" className={classes.playlistTitle}>
                PLAYLIST
              </Typography>
              <Typography variant="h1" className={classes.playlistType}>
                {selectedPlaylist.name}
              </Typography>
            </div>
          </div>
          <Divider />
          <List className={classes.lists}>
            {selectedPlaylist?.playlist?.map(({ track }) => (
              <TrackLists key={track.id} track={track} />
            ))}
          </List>
        </>
      )}
    </div>
  );
}

export default Body;
