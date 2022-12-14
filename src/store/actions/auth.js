import { axiosInstance } from "../../network/apis";
// import { deviceDetect } from "react-device-detect";
// import toasters from "../../utils/toasters";
import history from "../../routes/History";
import { STORE_SIGN_UP_DATA } from "../types/auth";

export const signUp = (data) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/signup",data);
    localStorage.setItem("token",res.data.token);
    localStorage.setItem("user-data",JSON.stringify(res.data.data.user));
    dispatch({
      type : STORE_SIGN_UP_DATA,
      payload : res?.data
    })
    res && history.push("/");
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
    const isAuthenticated =
     localStorage.getItem("token") ? true : false;
    return isAuthenticated;
  }
};