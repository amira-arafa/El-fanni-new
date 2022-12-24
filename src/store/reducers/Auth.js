import * as types from "../types/auth";
const INITIAL_STATE = {
  user_data: localStorage.getItem("user-data")
    ? JSON.parse(localStorage.getItem("user-data"))
    : null,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  sucess_sign_in: false,
  loading: false,
  success_forget_pass: false,
  success_reset_pass: false,
  sucess_logout: false
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.STORE_SIGN_UP_DATA:
      return {
        ...state,
        token: action.payload.token,
        user_data: action.payload.data.user,
      };
    case types.SUCESS_SIGN_IN:
      return {
        ...state,
        sucess_sign_in: action.payload,
      };
    case types.LOADER_ON:
      return {
        ...state,
        loading: action.payload,
      };
    case types.SUCESS_FORGET_PASS:
      return {
        ...state,
        success_forget_pass: action.payload,
      };
    case types.SUCESS_RESET_PASS:
      return {
        ...state,
        success_reset_pass: action.payload,
      };
    case types.SUCESS_LOG_OUT:
      return {
        ...state,
        sucess_logout: action.payload,
      };
    default:
      return state;
  }
}
