import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Box } from "@material-ui/core";
import useStyles from './ApplicationCard.style'

const ApplicationCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent} justifyContent="center" alignItems="center">
        <Box display="flex" justifyContent="start" alignItems="center">
          <img src="/image/game1.png" className={classes.cardImage} />
          <Box mr={2} display="flex" flexDirection="column">
            <h3 className={classes.cardHeader}>
              نرم‌افزار 1
            </h3>
            <span className={classes.cardCategory}> دسته </span>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ApplicationCard;
