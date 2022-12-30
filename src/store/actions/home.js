import { axiosInstance } from "../../network/apis";
import { STORE_SEARCH_RESULT,STORE_CATEGORIES_LIST, STORE_CART_LIST } from "../types/home";

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