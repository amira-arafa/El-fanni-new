import * as types from "../types/home";
const INITIAL_STATE = {
    search_query : null,
    search_results: [],
    categories_list: []
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
    default:
      return state;
  }
}
