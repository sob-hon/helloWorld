import { Box, Typography } from "@material-ui/core";
import React from "react";
import ButtonAppBar from "../../components/common/AppBar/AppBar";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import { showToast } from "./../../core/utils/show-toast";
import { useHistory } from "react-router-dom";
import { useStyles } from './Profile.style';



const Profile = () => {
  const classes = useStyles();
  const history = useHistory();

  const logOutButtonClickedHandler = () => {
    showToast(["لطفا دوباره وارد شوید "], "warning");
    localStorage.clear();
    history.push("/");
  };

  const confirmButtonClickedHandler = () => {
    history.goBack();
  };

  const residualButtonClickedHandler = () => {
    history.push("/subscription");
  };

  return (
    <>
      <ButtonAppBar isOnProfilePage={true}></ButtonAppBar>
      <Box
        style={{
          width: "400px",
          margin: " 70px auto",
          paddingBottom: "100px",
          border: "1px solid #ccc",
          boxShadow: "rgb(0 0 0 / 8%) 0px 2px 12px",
          borderRadius: "10px",
        }}
      >
        <PersonIcon
          style={{
            fontSize: "50px",
            margin: "100px auto 20px",
            width: "15%",
            display: "flex",
            justifyContent: "center",
          }}
        />
        <Box
          margin="auto"
          minWidth="300px"
          maxWidth="150px"
          className={classes.alert}
          textAlign="center"
        >
          <Typography style={{ letterSpacing: "3px" }}>
            {localStorage.getItem("phone_number")}
          </Typography>
        </Box>
        <Box ml={2} display="flex" flexDirection="column">
          <Box
            mt={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              style={{ marginLeft: "30px" }}
              variant="contained"
              color="primary"
              onClick={residualButtonClickedHandler}
            >
              خرید دوباره
            </Button>
            <Typography style={{ marginRight: "30px", fontSize: "15px" }}>
              طرح ویژه پیشنهادی
            </Typography>
          </Box>
          <Box mt={3} display="flex" justifyContent="center">
            <Button
              style={{
                marginLeft: "60px",
                backgroundColor: "#d50000",
                color: "white",
              }}
              variant="contained"
              color="primary"
              onClick={logOutButtonClickedHandler}
            >
              خروج از حساب کاربری
            </Button>
            <Button
              style={{
                marginRight: "5px",
                backgroundColor: "#00a152",
                color: "white",
              }}
              variant="outlined"
              onClick={confirmButtonClickedHandler}
            >
              تایید
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
