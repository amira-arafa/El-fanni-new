import { axiosInstance } from "../../network/apis";
import toasters from "../../utils/toasters";
import { STORE_SEARCH_RESULT,STORE_CATEGORIES_LIST, STORE_CART_LIST, STORE_PROFILE_INFO, STORE_COURSE_DETAILS, STORE_COLLECTIONS_LIST, STORE_SINGLE_COLLECTION, STORE_FAVOURITES_LIST } from "../types/home";

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
    dispatch({
      type: STORE_COURSE_DETAILS ,
      payload : res.data.data[0]
    })
  } catch (err) {
    console.log(err);
  }
};

export const addNewCollection = (name) => async (dispatch) => {
  try {
    const res = await axiosInstance.post(`/collections`,{
      name
  });
    dispatch(getCollectionsList())
  } catch (err) {
    console.log(err);
  }
};

export const addToCollection = (collectionId , courseId) => async (dispatch) => {
  try {
    const res = await axiosInstance.post(`/collections/add/${collectionId}`,{
      courseId
  });
  res && toasters.Success("Added Succefully")
  } catch (err) {
    console.log(err);
  }
};


export const getCollectionsList = (params) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/collections`,{params});
    dispatch({
      type: STORE_COLLECTIONS_LIST,
      payload : res.data.data
    })
  } catch (err) {
    console.log(err);
  }
};

export const getCollection = (id) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/collections/${id}`);
    dispatch({
      type: STORE_SINGLE_COLLECTION,
      payload : res.data.data
    })
  } catch (err) {
    console.log(err);
  }
};

export const deleteCollection = (id) => async (dispatch) => {
  try {
    const res = await axiosInstance.delete(`/collections/${id}`);
  } catch (err) {
    console.log(err);
  }
};

export const removeFromCollection = (collectionId , courseId) => async (dispatch) => {
  try {
    const res = await axiosInstance.delete(`/collections/remove/${collectionId}`, 
    {data:{ courseId }});
    dispatch(getCollection(collectionId));
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

  export const getFavourites  = (params ) => async (dispatch) => {
    try {
      const res = await axiosInstance.get("/favorites", {params});
      dispatch({
        type:STORE_FAVOURITES_LIST,
        payload: res.data.data
      })
    } catch (err) {
      console.log(err);
    }
  };

  export const removeFromFaviorites  = (courseId) => async (dispatch) => {
    try {
      const res = await axiosInstance.delete(`/favorites/${courseId}`);
      res && dispatch(getFavourites());
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
      toasters.Info("Removed successfully!")
    } catch (err) {
      console.log(err);
    }
  };

  export const addToCart = ( params) => async (dispatch) => {
    try {
      const res = await axiosInstance.post(`/cart/add/${params}`);
      res && dispatch(getCartList());
      toasters.Success("Added Succesfully");
    } catch (err) {
      console.log(err);
    }
  };

  export const addToFav = ( params) => async (dispatch) => {
    try {
      const res = await axiosInstance.post(`/favorites/${params}`);
      toasters.Success("Added Succesfully");
    } catch (err) {
      console.log(err);
    }
  };


  


export const getCategories = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get("/categories");
    dispatch({
      type: STORE_CATEGORIES_LIST ,
      // payload: res.data.data
      payload: res.data.data.filter(cat => !cat.name.includes('Sub'))
    });
  }
  catch (err) {
    console.log(err);
  }

}