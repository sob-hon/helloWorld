import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 300,
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
            height: "400px",
            zIndex: "10000",
            textAlign: "center",
          }}
        >
          <h4 style={{ color: "#7f8fc9" }}>طرح ویژه</h4>
          <div class="price-card">
            <div class="price-card--header">
              <h4>Premium</h4>
            </div>

            <div class="price-card--price">
              <div class="price-card--price-text">
                <div
                  class="price-card--price-number toggle-price-content odometer"
                  data-price-monthly="2,499"
                  data-price-yearly="2,250"
                >
                  2,250
                </div>
              </div>
              <div class="price-card--price-conditions">
                <div
                  class="toggle-price-content"
                  data-price-monthly="Billed Monthly"
                  data-price-yearly="Billed Annually"
                >
                  Billed Annually
                </div>
              </div>
            </div>

            <div class="price-card--features">
              <ul class="price-card--features--list">
                <li class="price-card--features--item has-tooltip">
                  Sales & Marketing Platform
                  <div class="tooltip-container">
                    <strong>Sales & Marketing Platform</strong>
                    <p>
                      Vendasta's end-to-end sales solution for companies that
                      serve local businesses, and want to grow digital revenue.
                    </p>
                  </div>
                </li>
                <li class="price-card--features--item has-tooltip">
                  Snapshot & Campaigns
                  <div class="tooltip-container">
                    <strong>Snapshot & Campaigns</strong>
                  </div>
                </li>
              </ul>
              <button class="btn">Get started</button>
            </div>

            <div class="price-card--mobile-features-toggle"></div>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SubscriptionCard;
