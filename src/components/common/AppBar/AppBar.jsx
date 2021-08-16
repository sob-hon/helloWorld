import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },

  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "#717485",
    fontFamily: "BNazanin",
  },
  creditBtn: {
    borderRadius: "7px",
    backgroundColor: "black",
    color: "#fff",
  },
  profileButton : {
    color: "rgb(117, 117, 117)",
    minWidth: "15px",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
    marginRight: '10px',
    
  }
}));

const ButtonAppBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const profileButtonClickedHandler = () => {
    history.push('/profile');
  }

  return (
    <div className={classes.root}>
      <AppBar style={{ boxShadow: "none" }} position="static">
        <Toolbar
          style={{
            background: "#fefefe",
            color: "#000",
            boxShadow: "0 2px 12px rgb(0 0 0 / 8%)",
          }}
        >
          <AppleIcon
            edge="end"
            className={classes.menuButton}
            color="black"
            aria-label="menu"
          />
          <Box mr={3}>
            <Button className={classes.creditBtn} variant="outlined">
              خرید اعتبار
            </Button>
          </Box>
          <Typography variant="h6" className={classes.title}>
            درصد اعتبار باقیمانده 0%
          </Typography>
          <Button className={classes.profileButton}>
            <SearchIcon
              edge="end"
              color="inherit"
              aria-label="menu"
            />
          </Button>
          <Button className={classes.profileButton} onClick={profileButtonClickedHandler}>
            <PersonIcon
              edge="end"
              color="inherit"
              aria-label="menu"
            />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
