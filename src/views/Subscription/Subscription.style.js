import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  headerWrapper: {
    background: "#6f8ae2",
    textAlign: "center",
    color: "#fcffff",
    paddingTop: "120px",
    flexDirection: "column",
    boxShadow: "border-box",
    height: "65vh",
  },
  header: {
    margin: "0",
  },
  cardWrapper: {
    width: "90%",
    boxSizing: "border-box",
    marginRight: "auto",
    marginLeft: "auto",
  },
  gridContainer: {
    justifyContent: "center",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  cardTop: {
    ["@media (max-width:450px)"]: {
      marginTop: "-100px",
    },
  },
});
