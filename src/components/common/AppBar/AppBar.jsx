import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  creditBtn: {
    color: '#000'
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ boxShadow: 'none'}} position="static">
        <Toolbar style={{background: "#fefefe", color: '#000',boxShadow: "0 2px 12px rgb(0 0 0 / 8%)"}}>
          <AppleIcon edge="end" className={classes.menuButton} color="black" aria-label="menu" />
          <Box mr={3}>
            <Button className={classes.creditBtn} variant="outlined" >
                خرید اعتبار
            </Button>
          </Box>
          <Typography variant="h6" className={classes.title}>
            درصد اعتبار باقیمانده 0%
          </Typography>
          <SearchIcon edge="end" className={classes.menuButton} color="inherit" aria-label="menu" />
          <PersonIcon edge="end" className={classes.menuButton} color="inherit" aria-label="menu" />
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
