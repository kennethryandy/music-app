import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  body: {
    overflow: "hidden",
    maxHeight: "100vh",
  },
  hero: {
    display: "flex",
  },
  albumImage: {
    height: "auto",
    width: "100%",
    objectFit: "contain",
    maxHeight: 240,
    maxWidth: 240,
    margin: "30px 10px 30px 30px",
    borderRadius: 4,
    boxShadow: "0 4px 60px rgba(0,0,0,.5);",
  },
  titles: {
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  playlistTitle: {
    fontWeight: 800,
  },
  playlistType: {
    fontWeight: 600,
  },
  lists: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
    maxHeight: 160,
    overflowY: "scroll",
  },
}));
