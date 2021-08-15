import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import SubscriptionCard from "./components/SubscriptionCard/SubscriptionCard";

const useStyles = makeStyles({
  cardTop: {
    ["@media (max-width:450px)"]: {
      marginTop: "-100px",
    },
  },
});

const Subscription = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        paddingTop="120px"
        flexDirection="column"
        boxShadow="border-box"
        height="65vh"
        style={{ background: "#6f8ae2", textAlign: "center", color: "#fcffff" }}
      >
        <h1 style={{ margin: "0" }}>برنامه‌های منعطف و قیمت‌های مناسب</h1>
        <p style={{ margin: "0" }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است.
        </p>
      </Box>
      <Box
        width="90%"
        boxSizing="border-box"
        marginRight="auto"
        marginLeft="auto"
      >
        <Box className={classes.cardTop} mt={-20}>
          <Grid container style={{ justifyContent: "center" }} spacing={3}>
            <Grid
              item
              style={{ display: "flex", justifyContent: "center" }}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <SubscriptionCard />
            </Grid>
            <Grid
              item
              style={{ display: "flex", justifyContent: "center" }}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <SubscriptionCard />
            </Grid>
            <Grid
              item
              style={{ display: "flex", justifyContent: "center" }}
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
