import React from "react";
import { CTX } from "../../../contextApi/StateProvider";
import spotifyImg from "../../../assets/spotify.svg";
import sidebarStyle from "./sidebarStyle";
import SidebarOption from "../SidebarOptions/SidebarOption";
//material-ui
import { Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusic";

function Sidebar({ spotify }) {
  const [{ playlist }] = CTX();
  const classes = sidebarStyle();
  return (
    <div className={classes.sidebar}>
      <div className={classes.header}>
        <img alt="" src={spotifyImg} />
        <Typography variant="h5">Musicle</Typography>
      </div>
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryIcon} />
      <br />
      <Typography variant="body2" className={classes.playlistTitle}>
        PLAYLIST
      </Typography>
      <hr className={classes.hr} />
      {playlist?.items?.map((list) => (
        <SidebarOption
          spotify={spotify}
          item={list}
          title={list.name}
          key={list.id}
        />
      ))}
    </div>
  );
}

export default Sidebar;
