import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sidebarOption: {
    color: "grey",
    height: 40,
    cursor: "pointer",
    transition: "200ms color ease-in",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      color: "white",
    },
    "& p": {
      margin: "10px 20px",
      fontSize: 14,
    },
  },
  icon: {
    margin: "0 10px",
  },
}));
