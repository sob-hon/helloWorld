import { ADD_PHONENUMBER } from "./action";

const initialState = {
  phoneNumber: "",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHONENUMBER:
      return { phoneNumber: action.payLoad };
    default:
      return state;
  }
};

export default registerReducer;
