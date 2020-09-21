import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sidebar: {
    backgroundColor: "#040404",
    height: "100vh",
  },
  header: {
    "& img": {
      height: "auto",
      maxHeight: "2.8rem",
      margin: "0 8px 0 12px",
      [theme.breakpoints.only("xs")]: { maxHeight: "2rem" },
    },
    "& h5": {
      fontWeight: 800,
      fontSize: "1.4rem",
      [theme.breakpoints.only("xs")]: { fontSize: "1rem" },
      [theme.breakpoints.only("sm")]: { fontSize: "1.3rem" },
    },
    display: "flex",
    alignItems: "center",
    padding: "20px 0",
  },
  playlistTitle: {
    fontWeight: 600,
    margin: "0 10px",
  },
  hr: {
    border: "1px solid #282828",
    width: "90%",
    margin: "10px auto",
  },
}));
