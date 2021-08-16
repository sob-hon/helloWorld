import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: 300,
    direction: "rtl",
  },
  cardContent: {
    boxShadow: "0 2px 12px rgb(0 0 0 / 8%)",
  },
  cardWrapper: {
    backgroundColor: "#ffffff",
    zIndex: "10000",
    textAlign: "center",
  },
  priceCardHeader: {
    margin: " 0",
    padding: "20px 0",
    textAlign: "center",
    "& h4": {
      margin: "0",
      padding: "0",
      fontSize: "28px",
      color: "#7f8fc9",
      fontWeight: "700",
    },
  },
  cardPrice: {
    color: "#2d2b2c",
    fontSize: "15px",
    fontWeight: "bold",
  },
  cardPricePeriod: {
    color: "#8d9395",
    fontSize: "10px",
    marginTop: "6px",
  },
  itemWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  itemList: {
    listStyle: "none",
    textAlign: "right",
  },
  itemIcon: {
    margin: "6px",
    color: "#bcc8cd",
  },
  itemDescription: {
    display: "inline",
    color: "#70706f",
    fontSize: "13.5px",
  },
  lineBreak: {
    border: "none",
    borderTop: "2.5px solid #ebeaef",
  },
  buyButton: {
    marginBottom: "-10px",
  },
});
