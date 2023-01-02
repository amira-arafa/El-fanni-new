import { axiosInstance } from "../../network/apis";
import { STORE_SEARCH_RESULT,STORE_CATEGORIES_LIST, STORE_CART_LIST, STORE_PROFILE_INFO, STORE_COURSE_DETAILS } from "../types/home";

export const searchResult = ( params) => async (dispatch) => {
    try {
      const res = await axiosInstance.get("/courses",{params});
      dispatch({
        type: STORE_SEARCH_RESULT ,
        payload: res.data.data
      });
    } catch (err) {
      console.log(err);
    }
  };

export const getCourseDetails = (id) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/courses/${id}`);
    console.log("ssss",res.data.data[0])
    dispatch({
      type: STORE_COURSE_DETAILS ,
      payload : res.data.data[0]
    })
  } catch (err) {
    console.log(err);
  }
};

  export const submitEditProfile  = ( data) => async (dispatch) => {
    try {
      const res = await axiosInstance.patch("/profile/update",data);
      localStorage.setItem("user-data",JSON.stringify(res.data.data.user));
    } catch (err) {
      console.log(err);
    }
  };

  export const submitEditPassword  = ( data) => async () => {
    try {
      const res = await axiosInstance.patch("/profile/updatePassword",data);
      localStorage.setItem("user-data",JSON.stringify(res.data.data.user));
      localStorage.setItem("token",res.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  export const getProfile  = ( data) => async (dispatch) => {
    try {
      const res = await axiosInstance.get("/profile",data);
      dispatch({
        type: STORE_PROFILE_INFO,
        payload: res.data.data
      })
    } catch (err) {
      console.log(err);
    }
  };

  export const getFavourites  = ( ) => async (dispatch) => {
    try {
      const res = await axiosInstance.get("/favorites");
    } catch (err) {
      console.log(err);
    }
  };

  export const getCollections  = ( ) => async (dispatch) => {
    try {
      const res = await axiosInstance.get("/collections");
     console.log("heheehe,",res)
    } catch (err) {
      console.log(err);
    }
  };

  

  export const getCartList = () => async (dispatch) => {
    try {
      const res = await axiosInstance.get("/cart");
      dispatch({
        type: STORE_CART_LIST,
        payload: res.data.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const deleteCourse = (id, body) => async (dispatch) => {
    try {
      const res = await axiosInstance.post(`/cart/remove/${id}`,body);
      res && dispatch(getCartList());
    } catch (err) {
      console.log(err);
    }
  };

  

  export const addToCart = ( params) => async (dispatch) => {
    try {
      const res = await axiosInstance.post(`/cart/add/${params}`);
      res && dispatch(getCartList());
    } catch (err) {
      console.log(err);
    }
  };

  export const addToFav = ( params) => async (dispatch) => {
    try {
      const res = await axiosInstance.post(`/favorites/${params}`);
    } catch (err) {
      console.log(err);
    }
  };


  


export const getCategories = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get("/courses/categories");
    dispatch({
      type: STORE_CATEGORIES_LIST ,
      payload: res.data.data
    });
  }
  catch (err) {
    console.log(err);
  }

}