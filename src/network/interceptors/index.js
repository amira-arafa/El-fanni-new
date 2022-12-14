import history from "../../routes/History";
import toasters from "../../utils/toasters";
export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled ? false : true;
};

export const requestHandler = request => {
  if (isHandlerEnabled(request)) {
    request.headers["Authorization"] = `Bearer ${localStorage.getItem('token')}`;
    request.headers["Accept-Language"] = localStorage.getItem('lang');
  }
  return request;
};

export const successHandler = response => {
  if (isHandlerEnabled(response)) {
    // handle succes 
  }
  return response;
};

export const errorHandler = error => {
  console.log("Eeee",error,error.response?.data?.message)
  if (isHandlerEnabled(error.config)) {
    if(error.response?.data?.message) {
      toasters.Error(error.response?.data?.message)
    }
    // handle errors
    // if(error.response.status === 401) {
    //   localStorage.removeItem("token");
    //   history.push({
    //     pathname: "/",
    //     state: {
    //       from: "logout",
    //     },
    //   });

    // }
  }
  return Promise.reject({ ...error });
};