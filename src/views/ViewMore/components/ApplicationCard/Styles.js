import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    fontFamily: "BNazanin",
    boxShadow: "-2px 2px 10px rgb(0 0 0 / 10%)",
    "&:hover": {
      transition: "all ease-in 0.4s",
      borderBottom: "5px solid #0ea960",
      marginBottom: "-5px",
      boxShadow: "-3px 3px 10px rgb(0 0 0 / 25%)",
      outline: "none",
      transform: "scale(1.09)",
    },
  },
  title: {
    fontSize: 14,
  },
  cardHeader: {
    color: "#2a2a2a",
    fontSize: "17px",
    marginBottom: "0",
  },
  cardImage: {
    width: "100px",
    height: "100px",
  },
  cardCategory: {
    color: "#8a8a8a",
  },
}));

export default styles;
