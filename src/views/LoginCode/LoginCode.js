import React from "react";
import Timer from "./components/Timer/Timer";
import { Grid, Paper, TextField, Button } from "@material-ui/core";

const LoginCode = () => {
  const paperStyle = {
    padding: 20,
    height: "30vh",
    width: 280,
    margin: "200px auto",
    direction: "rtl",
  };
  const btnstyle = { margin: "50px 0" };
  const textFieldStyle = { color: "blue", fontSize: 20 };
  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <TextField
            style={textFieldStyle}
            label="شماره همراه"
            placeholder="شماره همراه خود را وارد کنید"
            fullWidth
            required
            InputProps={{
              style: {
                color: "#000",
                label: {
                  color: "yellow",
                },
              },
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
      <Timer initialMinute="2" initialSeconds="" />
    </>
  );
};

export default LoginCode;
