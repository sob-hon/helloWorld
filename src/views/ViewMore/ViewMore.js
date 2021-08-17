import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import AppBar from "../../components/common/AppBar/AppBar.jsx";
import ApplicationCard from "./components/ApplicationCard/ApplicationCard";
import { useStyles } from "./ViewMore.style.js";

const ViewMore = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar></AppBar>
      <Box className={classes.header} mt={8}>
        <Typography  variant="h4" className={classes.headerText}>
          برنامه‌های پیشنهادی برای شما
        </Typography>
      </Box>

      <Box width="90%" className={classes.cardWrapper}>
        <Box mt={3}>
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <ApplicationCard />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ViewMore;
