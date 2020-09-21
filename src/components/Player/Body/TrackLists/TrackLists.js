import React from "react";
import trackListsStyle from "./tracklistsStyle";
import { CTX } from "../../../../contextApi/StateProvider";
import { msToMins } from "../../../../utils/msToMins";
//material ui
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import MusicIcon from "@material-ui/icons/MusicNoteOutlined";

function TrackLists({ track }) {
  const [{}, dispatch] = CTX();
  const classes = trackListsStyle();
  const handleClickItem = () => {
    dispatch({
      type: "SET_TRACK",
      payload: track,
    });
  };
  return (
    <ListItem button className={classes.listitem} onClick={handleClickItem}>
      <ListItemIcon classes={{ root: classes.musicIcon }}>
        <MusicIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText
        primary={track.name}
        secondary={
          track.artists.length - 1 === 0
            ? track.artists[0].name + " • " + track.album.name
            : track.artists.map((artist) => artist.name) +
              ", • " +
              track.album?.name
        }
      />
      <ListItemSecondaryAction>
        <ListItemText primary="" secondary={msToMins(track?.duration_ms)} />
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TrackLists;
