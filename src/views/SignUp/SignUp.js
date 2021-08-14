import React, { useState, useContext } from "react";
import { Grid, Paper, TextField, Button, Box, Typography } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import { SectionWrapper } from "../../components/Wrapper/SectionWrapper/SectionWrapper";
import { TextInput } from "../../components/common";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerAction } from "../../Redux/Register/action";
import { Formik, Form } from "formik";
import SignUpUseQuery from "../../core/services/api/SignUp.api.js";
import { CustomButton } from "../../components/common/Form/Button/Button";
import { showToast } from './../../core/utils/show-toast';

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


  return (
    <>
      <AppleIcon />
      <Grid>
        <Box py={2}>
          <SectionWrapper style={paperStyle}>
            <Typography align="center" color="primary" style={{fontSize:"20px",fontFamily:"BNazanin",margin:"20px 0 35px"}}> ثبت‌نام / ورود </Typography>
            <Formik
              initialValues={{ phone_number: "" }}
              onSubmit={(values) => {
                signUp.mutate(values, {
                  onSuccess: (result) => {
                    dispatch(registerAction(values));
                    showToast([result.data.message],"success")
                    history.push("/verificatioCode");
                  },
                });
              }}
            >
              <Form>
                <TextInput name="phone_number" title="شماره همراه" />
                <CustomButton 
                      type="submit"
                      color="primary"
                       variant="contained"
                       style={btnstyle}
                       fullWidth
                       text="ثبت نام"
                       loading={signUp.isLoading}
                />

              </Form>
            </Formik>
          </SectionWrapper>
        </Box>
      </Grid>
    </>
  );
};

export default SignUp;
