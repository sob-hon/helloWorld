import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import { useHistory } from "react-router-dom";
import { useStyles } from './AppBar.style'


const ButtonAppBar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  let inProfilePage = {};
  if (props.isOnProfilePage) {
    inProfilePage = { backgroundColor: "#99b7d3", color: "#28253b" };
  }

  const profileButtonClickedHandler = () => {
    history.push("/profile");
  };

  const creditButtonClickedHandler = () => {
    history.push("/subscription");
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ boxShadow: "none" }} position="static">
        <Toolbar className={classes.toolbar}>
          <AppleIcon edge="end" color="black" aria-label="menu" />
          <Box mr={3}>
            <Button
              className={classes.creditBtn}
              color="primary"
              onClick={creditButtonClickedHandler}
            >
              خرید اعتبار
            </Button>
          </Box>
          <Typography variant="h6" className={classes.title}>
            درصد اعتبار باقیمانده 25%
          </Typography>
          <Button className={classes.profileButton}>
            <SearchIcon edge="end" color="inherit" aria-label="menu" />
          </Button>
          <Button
            className={classes.profileButton}
            onClick={profileButtonClickedHandler}
            style={inProfilePage}
          >
            <PersonIcon edge="end" color="inherit" aria-label="menu" />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
