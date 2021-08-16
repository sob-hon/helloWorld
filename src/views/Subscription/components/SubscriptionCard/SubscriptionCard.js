import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { CustomButton } from "../../../../components/common/Form/Button/Button";
import { useStyles } from "./SubscriptionCard.style";

const SubscriptionCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Box className={classes.cardWrapper}>
          <Box>
            <Box className={classes.priceCardHeader}>
              <h4>طرح ویژه</h4>
            </Box>
            <Box display="flex" justifyContent="center">
              <Typography className={classes.cardPrice}>200000تومان</Typography>
              <Typography className={classes.cardPricePeriod}>
                /ماهانه
              </Typography>
            </Box>
            <hr className={classes.lineBreak} />
            <ul className={classes.itemList}>
              <li>
                <Box className={classes.itemWrapper} mr={-5}>
                  <CheckCircleRoundedIcon className={classes.itemIcon} />
                  <Typography>پلتفرم بازاریابی و فروش:</Typography>
                </Box>
                <Typography className={classes.itemDescription}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                </Typography>
              </li>
              <li>
                <Box className={classes.itemWrapper} mr={-5}>
                  <CheckCircleRoundedIcon className={classes.itemIcon} />
                  <Typography>پلتفرم بازاریابی و فروش:</Typography>
                </Box>
                <Typography className={classes.itemDescription}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                </Typography>
              </li>
              <li>
                <Box className={classes.itemWrapper} mr={-5} mt={2}>
                  <CheckCircleRoundedIcon className={classes.itemIcon} />
                  <Typography>پلتفرم بازاریابی و فروش:</Typography>
                </Box>
                <Typography className={classes.itemDescription}>
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
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;
