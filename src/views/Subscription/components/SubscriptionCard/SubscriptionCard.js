import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { CustomButton } from "../../../../components/common/Form/Button/Button";

const useStyles = makeStyles({
  root: {
    width: 300,
    direction: "rtl",
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
  lineBreak: {
    border: "none",
    borderTop: "2.5px solid #ebeaef",
  },
  buyButton: {
    marginBottom: "-10px",
  },
});

const SubscriptionCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent boxShadow="0 2px 12px rgb(0 0 0 / 8%)">
        <Box
          style={{
            backgroundColor: "#ffffff",
            zIndex: "10000",
            textAlign: "center",
          }}
        >
          <div class="price-card">
            <div className={classes.priceCardHeader}>
              <h4>طرح ویژه</h4>
            </div>
            <Box display="flex" justifyContent="center">
              <Typography
                style={{
                  color: "#2d2b2c",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                200000تومان
              </Typography>
              <Typography
                style={{ color: "#8d9395", fontSize: "10px", marginTop: "6px" }}
              >
                /ماهانه
              </Typography>
            </Box>
            <hr className={classes.lineBreak} />
            <ul style={{ listStyle: "none", textAlign: "right" }}>
              <li>
                <Box
                  mr={-5}
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CheckCircleRoundedIcon
                    style={{ margin: "6px", color: "#bcc8cd" }}
                  />
                  <Typography>پلتفرم بازاریابی و فروش:</Typography>
                </Box>
                <Typography
                  style={{
                    display: "inline",
                    color: "#70706f",
                    fontSize: "13.5px",
                  }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                </Typography>
              </li>
              <li>
                <Box
                  mr={-5}
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CheckCircleRoundedIcon
                    style={{ margin: "6px", color: "#bcc8cd" }}
                  />
                  <Typography>پلتفرم بازاریابی و فروش:</Typography>
                </Box>
                <Typography
                  style={{
                    display: "inline",
                    color: "#70706f",
                    fontSize: "13.5px",
                  }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                </Typography>
              </li>
              <li>
                <Box
                  mr={-5}
                  mt={2}
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CheckCircleRoundedIcon
                    style={{ margin: "6px", color: "#bcc8cd" }}
                  />
                  <Typography>پلتفرم بازاریابی و فروش:</Typography>
                </Box>
                <Typography
                  style={{
                    display: "inline",
                    color: "#70706f",
                    fontSize: "13.5px",
                  }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                </Typography>
              </li>
            </ul>
            <CustomButton
              className={classes.buyButton}
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              text="خرید"
            />
            <div class="price-card--mobile-features-toggle"></div>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;
