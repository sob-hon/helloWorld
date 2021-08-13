import axios from "axios";
import { useMutation } from "react-query";

const mainURL = process.env.REACT_APP_BASE_URL;
const signUpUrl = mainURL + "/account/signup/";

const SignUpQuery = async (value) => {
  const options = {
    method: "post",
    headers: new Headers({'content-type': 'application/json'}),
    mode: 'no-cors',
    body:JSON.stringify(value)
};
  return await fetch(signUpUrl,options).then((res) => {
    if(res.ok){
      return JSON.parse(res)
    }else{
      throw Error("fuckkkk")
    }
  })
 
};

const SignUpUseQuery = () => {
  return useMutation(SignUpQuery);
};

export default SignUpUseQuery;