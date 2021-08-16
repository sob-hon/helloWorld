import { Box, Grid } from "@material-ui/core";
import React from "react";
import SubscriptionCard from "./components/SubscriptionCard/SubscriptionCard";
import { useStyles } from "./Subscription.style";

const Subscription = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headerWrapper}>
        <h1 className={classes.header}>برنامه‌های منعطف و قیمت‌های مناسب</h1>
        <p className={classes.header}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است.
        </p>
      </Box>
      <Box className={classes.cardWrapper}>
        <Box className={classes.cardTop} mt={-20}>
          <Grid container style={{ justifyContent: "center" }} spacing={3}>
            <Grid
              item
              className={classes.gridItem}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <SubscriptionCard />
            </Grid>
            <Grid
              item
              className={classes.gridItem}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <SubscriptionCard />
            </Grid>
            <Grid
              item
              className={classes.gridItem}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <SubscriptionCard />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Subscription;
