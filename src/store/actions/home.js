import { axiosInstance } from "../../network/apis";
import { STORE_SEARCH_RESULT } from "../types/home";

export const searchResult = ( params) => async (dispatch) => {
    try {
      const res = await axiosInstance.get("/courses/search",{params});
      dispatch({
        type: STORE_SEARCH_RESULT ,
        payload: res.data.data
      });
      console.log("rororo",res)
    } catch (err) {
      console.log(err);
    }
  };