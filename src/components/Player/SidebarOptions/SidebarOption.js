import React from "react";
import sidebarOptionStyle from "./sidebarOptionStyle";
import { CTX } from "../../../contextApi/StateProvider";

function SidebarOption({ title, Icon, item, spotify }) {
  const [{ selectedPlaylist }, dispatch] = CTX();
  const classes = sidebarOptionStyle();
  const handleClick = () => {
    if (item) {
      spotify.getPlaylistTracks(item.id).then((track) =>
        dispatch({
          type: "SET_SELECTED_LIST",
          payload: {
            playlist: track?.items?.filter((s) => s.track.preview_url),
            img: item.images,
            name: title,
          },
        })
      );
    } else {
      return;
    }
  };
  console.log(selectedPlaylist);
  return (
    <div className={classes.sidebarOption} onClick={handleClick}>
      {Icon && <Icon className={classes.icon} />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
