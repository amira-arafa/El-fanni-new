import { type } from "@testing-library/user-event/dist/type";
import * as types from "../types/home";
const INITIAL_STATE = {
  search_query: null,
  search_results: [],
  categories_list: [],
  cart_list: [],
  total_payment : 0,
  profile_info: {},
  course_info: {}
};

export default function home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.STORE_SEARCH_QUERY:
      return {
        ...state,
        search_query: action.payload,
      };
    case types.STORE_SEARCH_RESULT:
      return {
        ...state,
        search_results: action.payload,
      };
    case types.STORE_CATEGORIES_LIST:
      return {
        ...state,
        categories_list: action.payload,
      };
    case types.STORE_CART_LIST:
      return {
        ...state,
        cart_list: action.payload.courses,
        total_payment : action.payload.totalPayment
      };
    case types.STORE_PROFILE_INFO:
      return {
        ...state,
        profile_info: action.payload,
      };
    case types.STORE_COURSE_DETAILS:
      return {
        ...state,
        course_info: action.payload,
      };
    default:
      return state;
  }
}
