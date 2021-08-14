import { ADD_PHONENUMBER } from "./action";

const initialState = {
  phone_number: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHONENUMBER:
      return { ...action.payLoad };
    default:
      return state;
  }
};

export default registerReducer;
