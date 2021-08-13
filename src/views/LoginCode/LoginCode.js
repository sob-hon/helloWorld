import React, { useContext } from "react";
import { Timer } from "./components/Timer/Timer";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Box,
  IconButton,
  Typography,
} from "@material-ui/core";
import { styles } from "./LoginCode.style";
import { SectionWrapper } from "../../components/Wrapper/SectionWrapper/SectionWrapper";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { TextInput } from "../../components/common";
import { useTimer } from "react-timer-hook";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios'

const LoginCode = () => {
  let history = useHistory();
  const data = useSelector((state) => state.registerReducer);
  const paperStyle = {
    padding: 20,
    width: 280,
    margin: "200px auto",
    direction: "rtl",
  };

  const classes = styles();

  const stopWatchOffset = new Date();
  const startTime = stopWatchOffset.setSeconds(
    stopWatchOffset.getSeconds() + 10
  );

  const { seconds, minutes, isRunning, restart } = useTimer({
    expiryTimestamp: startTime,
  });

  

  return (
    <>
      <Grid>
        <SectionWrapper style={paperStyle}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton aria-label="delete" onClick={() => history.push("/")}>
              <ArrowBackIcon />
            </IconButton>
          </Box>
          <Box
            className={classes.alert}
            display="flex"
            justifyContent="center"
            my={3}
          >
            <Typography>{data.phoneNumber}</Typography>
          </Box>

          <TextInput title="کد تایید" />
          <Box display="flex" justifyContent="space-between" my={4}>
            <Button type="submit" color="primary" variant="contained">
              ارسال کد
            </Button>
            {isRunning ? (
              <Timer seconds={seconds} minutes={minutes} />
            ) : (
              <Box>Hello</Box>
            )}
          </Box>
        </SectionWrapper>
      </Grid>
    </>
  );
};

export default LoginCode;
