import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const paperStyle = {
    padding: 20,
    height: "30vh",
    width: 280,
    margin: "200px auto",
    direction: "rtl",
  };
  const btnstyle = { margin: "50px 0" };
  const textFieldStyle = { color: "blue", fontSize: 20 };
  
  const numberEnteredHandler = (event) => {
    setPhoneNumber(+event.target.value)
  }
  console.log(typeof phoneNumber);
  return (
    <>
      <AppleIcon />
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <TextField
            onChange={numberEnteredHandler}
            style={textFieldStyle}
            label="شماره همراه"
            placeholder="شماره همراه خود را وارد کنید"
            fullWidth
            required
            InputProps={{
                style: {
                    color: "#000",
                    label: {
                        color: 'yellow'
                    }

                }
            }}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            دریافت کد
          </Button>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
