import React, { useState, useContext } from "react";
import { Grid, Paper, TextField, Button, Box } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import { SectionWrapper } from "../../components/Wrapper/SectionWrapper/SectionWrapper";
import { TextInput } from "../../components/common";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerAction } from "../../Redux/Register/action";
import { Formik, Form } from "formik";
import SignUpUseQuery from "../../core/services/api/SignUp.api.js";

const SignUp = () => {
  const signUp = SignUpUseQuery();
  const dispatch = useDispatch();
  let history = useHistory();
  const paperStyle = {
    padding: 20,
    width: 280,
    margin: "200px auto",
    direction: "rtl",
  };
  const btnstyle = { margin: "40px 0" };

  const numberEnteredHandler = (event) => {
    dispatch(registerAction(event.target.value));
  };

  return (
    <>
      <AppleIcon />
      <Grid>
        <Box py={2}>
          <SectionWrapper style={paperStyle}>
            <Formik
              initialValues={{ phone_number: "" }}
              onSubmit={(values) => {
                signUp.mutate(values, {
                  onSuccess: () => {
                    dispatch(registerAction(values));
                    history.push("/verificatioCode");
                  },
                });
              }}
            >
              <Form>
                <TextInput name="phone_number" title="شماره همراه" />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btnstyle}
                  fullWidth
                >
                  دریافت کد
                </Button>
              </Form>
            </Formik>
          </SectionWrapper>
        </Box>
      </Grid>
    </>
  );
};

export default SignUp;
