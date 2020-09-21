import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  form: {
    margin: 15,
  },
  input: {
    "&:focus": { outline: "none" },
    padding: 8,
    borderRadius: 999,
    border: "none",
  },
  profile: {
    margin: 15,
  },
}));
