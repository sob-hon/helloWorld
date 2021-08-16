import React, { useState, useContext } from "react";
import {
  Grid,
  Box,
  Typography,
} from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import { SectionWrapper } from "../../components/Wrapper/SectionWrapper/SectionWrapper";
import { TextInput } from "../../components/common";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerAction } from "../../Redux/Register/action";
import { Formik, Form } from "formik";
import SignUpUseQuery from "../../core/services/api/SignUp.api.js";
import { CustomButton } from "../../components/common/Form/Button/Button";
import { showToast } from "./../../core/utils/show-toast";
import { useStyles } from './SignUp.style';

const SignUp = () => {
  const signUp = SignUpUseQuery();
  const dispatch = useDispatch();
  const classes = useStyles();
  let history = useHistory();

  return (
    <>
      <AppleIcon />
      <Grid>
        <Box py={2}>
          <SectionWrapper className={classes.paperStyle}>
            <Typography
              className={classes.signInText}
              align="center"
              color="primary"
            >
              {" "}
              ثبت‌نام / ورود{" "}
            </Typography>
            <Formik
              initialValues={{ phone_number: "" }}
              onSubmit={(values) => {
                signUp.mutate(values, {
                  onSuccess: (result) => {
                    dispatch(registerAction(values));
                    showToast([result.data.message], "success");
                    localStorage.setItem("phone_number", values.phone_number);
                    history.push("/verificatioCode");
                  },
                });
              }}
            >
              <Form>
                <TextInput name="phone_number" title="شماره همراه" />
                <CustomButton
                  className={classes.signInBtn}
                  type="submit"
                  color="primary"
                  variant="contained"
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
