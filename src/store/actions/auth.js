import { axiosInstance } from "../../network/apis";
// import { deviceDetect } from "react-device-detect";
// import toasters from "../../utils/toasters";
// import history from "../../routes/History";
import {
  STORE_SIGN_UP_DATA,
  SUCESS_SIGN_IN,
  LOADER_ON,
  SUCESS_FORGET_PASS,
  SUCESS_RESET_PASS,
  SUCESS_LOG_OUT,
} from "../types/auth";

export const addLoader = () => ({
  type: LOADER_ON,
  payload: true,
});

export const removeLoader = () => ({
  type: LOADER_ON,
  payload: false,
});

export const storeFCMtocken = (body) => async (dispatch) => {
  try {
    await axiosInstance.post("/fcm-token", body, {
      handlerEnabled: true,
    });
  } catch (err) {
    console.log(err);
  }
};

const redirectUser = (res, dispatch) => {
  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user-data", JSON.stringify(res.data.data.user));

  dispatch({
    type: STORE_SIGN_UP_DATA,
    payload: res?.data,
  });
  dispatch({
    type: SUCESS_SIGN_IN,
    payload: true,
  });
  localStorage.getItem("firebaseToken") &&
    dispatch(
      storeFCMtocken({ fcmToken: localStorage.getItem("firebaseToken") })
    );
};

export const signUp = (data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/signup", data);
    redirectUser(res, dispatch);
  } catch (err) {
    console.log(err);
  }
};

export const signIn = (data, params) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/login", data, { params });
    redirectUser(res, dispatch);
  } catch (err) {
    console.log(err);
  }
};

export const Logout = () => async (dispatch) => {
  try {
    await axiosInstance.get("/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("user-data");
    dispatch({
      type: SUCESS_LOG_OUT,
      payload: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ForgetPassword = (data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/forgotPassword", data);
    res &&
      dispatch({
        type: SUCESS_FORGET_PASS,
        payload: true,
      });
  } catch (err) {
    console.log(err);
  }
};

export const ResetPassword = (data, token) => async (dispatch) => {
  try {
    const res = await axiosInstance.patch(`/resetPassword/${token}`, data);
    res &&
      dispatch({
        type: SUCESS_RESET_PASS,
        payload: true,
      });
  } catch (err) {
    console.log(err);
  }
};

export const loginWithFacebook = (body) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/auth/facebook/token", body);
    redirectUser(res, dispatch);
  } catch (err) {
    console.log(err);
  }
};

export const loginWithGoogle = (body) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/auth/google/token", body);
    redirectUser(res, dispatch);
  } catch (err) {
    console.log(err);
  }
};

// export const getNotificationList = (params) => async (dispatch) => {
//   try {
//     const res = await axiosInstance.get("/api/v1/users/notifications", {
//       handlerEnabled: true,
//       params
//     });
//     dispatch({
//       type : STORE_NOTIFICATIONS_LIST,
//       payload : res?.data
//     })
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const storeFCMtocken = (body) => async (dispatch) => {
//   try {
//     await axiosInstance.put("/api/v1/fcm-tokens", body , {
//       handlerEnabled: true,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const clearFCMtoken = (body) => async (dispatch) => {
//   try {
//     const res = await axiosInstance.delete("/api/v1/fcm-tokens" , {data : body} , {
//       handlerEnabled: true,
//       body
//     });
//     if(res){
//       dispatch({
//         type : "CLEAR_LOGINData",
//         payload : true
//       })
//       localStorage.removeItem("token");
//       localStorage.removeItem("loginMicrosoftMsal");
//       localStorage.removeItem("loginApiUserData");
//       localStorage.removeItem("microsoftLoginData");
//         history.push({
//           pathname: "/",
//           state: {
//             from: "logout",
//           },
//         });
//     }
//   } catch (err) {
//     localStorage.removeItem("token");
//     localStorage.removeItem("loginMicrosoftMsal");
//     localStorage.removeItem("loginApiUserData");
//     localStorage.removeItem("microsoftLoginData");
//       history.push({
//         pathname: "/",
//         state: {
//           from: "logout",
//         },
//       });
//     console.log(err);
//   }
// };

export const Auth = {
  getAuth() {
    const isAuthenticated = localStorage.getItem("token") ? true : false;
    return isAuthenticated;
  },
};
