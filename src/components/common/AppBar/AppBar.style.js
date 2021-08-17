import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  toolbar: {
    background: "#fefefe",
    color: "#000",
    boxShadow: "0 2px 12px rgb(0 0 0 / 8%)",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "#717485",
    fontFamily: "BNazanin",
  },
  creditBtn: {
    borderRadius: "7px",
    backgroundColor: "#544e4e",
    color: "#fff",
    "&:hover": {
      transition: "all ease-in-out 0.5s",
      backgroundColor: "#eee",
      color: "#000",
    },
  },
  profileButton: {
    color: "rgb(117, 117, 117)",
    minWidth: "15px",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
    marginRight: "10px",
  },
}));
