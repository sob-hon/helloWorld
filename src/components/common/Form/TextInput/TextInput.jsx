import React from "react";
import { Box, FormControl, InputLabel } from "@material-ui/core";
import { Field } from "formik";
import { CustomTextInput } from "./TextInput.style";

const TextInput = ({ title, name, ...other }) => {
  return (
    <FormControl fullWidth>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
            <>
            <InputLabel shrink htmlFor="bootstrap-input" style={{right:0,left:"unset",fontFamily:"BNazanin",fontSize:"18px"}}>
              {title}
            </InputLabel>
            <CustomTextInput
              fullWidth
              className={meta.touched && meta.error ? "" : ""}
              {...field}
              {...other}
            />
            {meta.touched && meta.error && (
              <div className={""}>{meta.error}</div>
            )}
            </>
        )}
      </Field>
    </FormControl>
  );
};

export { TextInput };
