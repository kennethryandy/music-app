import React from "react";
import headerStyle from "./headerStyle";
import { CTX } from "../../../../contextApi/StateProvider";
//material ui
import { Avatar, Chip } from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";

function Header() {
  const [{ user }] = CTX();
  const classes = headerStyle();
  return (
    <div className={classes.header}>
      <form className={classes.form}>
        <input placeholder="Search songs" className={classes.input} />
        <button type="submit" style={{ display: "none" }}></button>
      </form>
      <div className={classes.profile}>
        <Chip
          avatar={
            user?.images[0] ? (
              <Avatar alt="" src={user?.images[0].url} />
            ) : (
              <FaceIcon />
            )
          }
          label={user?.display_name}
          color="primary"
        />
      </div>
    </div>
  );
}

export default Header;
