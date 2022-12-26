import { axiosInstance } from "../../network/apis";
import { STORE_SEARCH_RESULT,STORE_CATEGORIES_LIST } from "../types/home";

export const searchResult = ( params) => async (dispatch) => {
    try {
      const res = await axiosInstance.get("/courses/search",{params});
      dispatch({
        type: STORE_SEARCH_RESULT ,
        payload: res.data.data
      });
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