import * as types from "../types/auth";
const INITIAL_STATE = {
  user_data: localStorage.getItem("user-data")
    ? JSON.parse(localStorage.getItem("user-data"))
    : null,
  token: localStorage.getItem("token") ? localStorage.getItem("token"): null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.STORE_SIGN_UP_DATA:
      return {
        ...state,
        token: action.payload.token,
        user_data: action.payload.data.user,
      };
    default:
      return state;
  }
}
