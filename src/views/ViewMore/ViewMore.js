import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import AppBar from "../../components/common/AppBar/AppBar.jsx";
import ApplicationCard from "./components/ApplicationCard/ApplicationCard";

const ViewMore = () => {
  return (
    <>
      <AppBar></AppBar>
      <Box mt={8} boxSizing='border-box' style={{ fontSize: "18px", marginRight: '4%'}}>
        <Typography
          component="h2"
          variant=""
          color="#212529"
          fontWeight="200"
        >
          برنامه‌های پیشنهادی برای شما
        </Typography>
      </Box>
      
      <Box width="90%"  boxSizing="border-box" marginRight="auto" marginLeft="auto" >
        <Box mt={3} >
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
