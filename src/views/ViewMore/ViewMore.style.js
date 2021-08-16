import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  header: {
    fontSize: "18px",
    marginRight: "4%",
    boxSizing: "border-box",
  },
  headerText: {
    color: "#212529",
    fontWeight: "200",
  },
  cardWrapper: {
    boxSizing: "border-box",
    marginRight: "auto",
    marginLeft: "auto",
  },
}));
