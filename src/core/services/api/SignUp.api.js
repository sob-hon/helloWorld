import axios from "axios";
import { useMutation } from "react-query";

const mainURL = process.env.REACT_APP_BASE_URL;
const signUpUrl = mainURL + "/account/signup/";

const SignUpQuery = async (value) => {
  return axios.post(signUpUrl,value)
};

const SignUpUseQuery = () => {
  return useMutation(SignUpQuery);
};

export default SignUpUseQuery;