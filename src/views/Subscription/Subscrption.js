import { Box, Grid } from "@material-ui/core";
import React from "react";
import SubscriptionCard from "./components/SubscriptionCard/SubscriptionCard";

const Subscription = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        boxShadow="border-box"
        height="50vh"
        style={{ background: "#6f8ae2", textAlign: "center", color: "#fcffff" }}
      >
        <h1 style={{ margin: "0" }}>برنامه‌های منعطف و قیمت‌های مناسب</h1>
        <p style={{ margin: "0" }}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
      </Box>
      <Grid display="flex" justifyContent='center' container spacing={3} style={{marginTop: '-100px', }}>
        <Grid  display="flex" justifyContent='center'sm={12} md={3} item>
          <SubscriptionCard></SubscriptionCard>
        </Grid>
        <Grid display="flex" justifyContent='center'sm={12} md={3} item>
          <SubscriptionCard></SubscriptionCard>
        </Grid>
        <Grid display="flex" justifyContent='center'sm={12} md={3} item>
          <SubscriptionCard></SubscriptionCard>
        </Grid>
    
      </Grid>
    </>
  );
};

export default Subscription;
