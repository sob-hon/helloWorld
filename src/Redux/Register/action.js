export const ADD_PHONENUMBER = "ADD_PHONENUMBER";

export const registerAction = (phoneNumber) => {
  return {
    type: ADD_PHONENUMBER,
    payLoad: phoneNumber,
  };
};
