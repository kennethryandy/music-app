import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    height: 90,
    width: "100%",
    backgroundColor: "#303030",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
  },
  right: {
    "& svg": { margin: "0 10px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  icon: {
    "&:hover": { color: "white" },
    color: "#b3b3b3",
    cursor: "pointer",
    transition: "200ms color ease-in",
  },
  icons: {
    display: "flex",
    margin: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 260,
    [theme.breakpoints.only("xs")]: {
      maxWidth: "100%",
      justifyContent: "space-evenly",
    },
  },
  center: { alignSelf: "center" },
  playIcon: {
    "&:hover": {
      transition: "transform 200ms ease-in-out",
      transform: "scale(1.2)",
    },
    fontSize: "2.5rem",
  },
  slider: {
    maxWidth: "30%",
    marginRight: "15px",
    color: "green",
  },
  left: {
    "& img": {
      height: "auto",
      maxHeight: 60,
      objectFit: "contain",
      margin: "0 15px",
      borderRadius: 4,
    },
    display: "flex",
    alignItems: "center",
  },
  info: {
    maxWidth: 300,
  },
}));
