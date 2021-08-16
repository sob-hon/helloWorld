import React, { useEffect } from "react";
import { Timer } from "./components/Timer/Timer";
import { Grid, Box, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./LoginCode.style";
import { SectionWrapper } from "../../components/Wrapper/SectionWrapper/SectionWrapper";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { TextInput } from "../../components/common";
import { useTimer } from "react-timer-hook";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import LoginUseQuery from "./../../core/services/api/Login.api";
import SignUpUseQuery from "./../../core/services/api/SignUp.api";
import { CustomButton } from "../../components/common/Form/Button/Button";
import { showToast } from "./../../core/utils/show-toast";
import { useLayoutEffect } from "react";

const LoginCode = () => {
  const login = LoginUseQuery();
  const signUp = SignUpUseQuery();

  let history = useHistory();
  const data = useSelector((state) => state.registerReducer);

  useLayoutEffect(() => {
    if (!data.phone_number) {
      showToast(["لطفا ابتدا وارد شوید "], "info");
      history.push("/");
    }
  }, []);

  console.log("data", data);

  const classes = useStyles();

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
        <SectionWrapper className={classes.paperStyle}>
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
            <Typography>{data.phone_number}</Typography>
          </Box>
          <Formik
            initialValues={{ code: "" }}
            onSubmit={(values) => {
              login.mutate(
                { ...values, phone_number: data.phone_number },
                {
                  onSuccess: (result) => {
                    showToast([result.data.message], "success");
                    localStorage.setItem("token", result.data.token);
                    history.push("/homepage");
                  },
                }
              );
            }}
          >
            <Form>
              <TextInput name="code" title="کد تایید" />

              <Box display="flex" justifyContent="space-between" my={4}>
                <CustomButton
                  color="primary"
                  variant="contained"
                  text="ارسال کد"
                  loading={login.isLoading}
                />
                {isRunning ? (
                  <Timer seconds={seconds} minutes={minutes} />
                ) : (
                  <CustomButton
                    type="text"
                    color="primary"
                    variant="contained"
                    text="ارسال مجدد کد"
                    loading={signUp.isLoading}
                    onClick={() => {
                      signUp.mutate(data, {
                        onSuccess: (result) => {
                          showToast([result.data.message], "success");
                          restart(startTime);
                        },
                      });
                    }}
                  />
                )}
              </Box>
            </Form>
          </Formik>
        </SectionWrapper>
      </Grid>
    </>
  );
};

export default LoginCode;
