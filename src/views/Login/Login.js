import React, { useState,useContext } from "react";
import { Grid, Paper, TextField, Button, Box } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import { SectionWrapper } from "../../components/Wrapper/SectionWrapper/SectionWrapper";
import { TextInput } from "../../components/common";

import {useHistory}  from "react-router-dom"
import { PhoneContext } from './../../App';

const Login = () => {

  let history = useHistory();
  const {setPhone} = useContext(PhoneContext)

  const [phoneNumber, setPhoneNumber] = useState();
  const paperStyle = {
    padding: 20,
    width: 280,
    margin: "200px auto",
    direction: "rtl",
  };
  const btnstyle = { margin: "40px 0" };
  const textFieldStyle = { color: "blue", fontSize: 20 };
  
  const numberEnteredHandler = (event) => {
    setPhoneNumber(event.target.value)
  }

  return (
    <>
      <AppleIcon />
      <Grid>
        <Box py={2}>
          <SectionWrapper style={paperStyle}>
              <TextInput onChange={numberEnteredHandler} title="شماره همراه"/>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                onClick={() => {
                  setPhone(phoneNumber)
                  history.push("/verificatioCode")
                }}
                fullWidth
              >
                دریافت کد
              </Button>
          </SectionWrapper>
        </Box>

      </Grid>
    </>
  );
};

export default Login;
