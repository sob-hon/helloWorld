import axios from "axios";
import { useMutation } from "react-query";

const mainURL = process.env.REACT_APP_BASE_URL;
const loginUrl = mainURL + "/account/login/";

const loginQuery = async (value) => {

  return axios.post(loginUrl,value)
};

const LoginUseQuery = () => {
  return useMutation(loginQuery);
};

export default LoginUseQuery;