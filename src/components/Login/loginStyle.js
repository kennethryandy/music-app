import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  login: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    "& a": {
      [theme.breakpoints.only("xl")]: { padding: 20 },
      [theme.breakpoints.down("sm")]: { padding: 10, fontWeight: 400 },
      backgroundColor: "#1DB954",
      padding: 15,
      borderRadius: 99,
      fontWeight: 800,
      color: "#fafafa",
      textDecoration: "none",
      marginBottom: "8rem",
    },
    "& h4": {
      textAlign: "center",
      [theme.breakpoints.down("sm")]: { fontSize: "1.5rem" },
    },
    "& p": {
      margin: "8px auto 15px auto",
    },
  },
}));
