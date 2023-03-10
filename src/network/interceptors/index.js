import store from "../../store";
import { addLoader, removeLoader } from "../../store/actions/auth";
import toasters from "../../utils/toasters";
export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = (request) => {
  if (
    !(
      (request.url === "/categories" || request.url === "/cart") &&
      (window.location.pathname === "/" ||
        window.location.pathname === "/about-us")
    )
  ) {
    store.dispatch(addLoader());
  }
  if (isHandlerEnabled(request)) {
    if (localStorage.getItem("token")) {
      request.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
    }
    request.headers["Accept-Language"] = localStorage.getItem("lang");
  }
  return request;
};

export const successHandler = (response) => {
  store.dispatch(removeLoader());
  if (isHandlerEnabled(response)) {
    // handle succes
  }
  return response;
};

export const errorHandler = (error) => {
  store.dispatch(removeLoader());
  if (isHandlerEnabled(error.config)) {
    if (error.response?.data?.message) {
      toasters.Error(error.response?.data?.message);
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
