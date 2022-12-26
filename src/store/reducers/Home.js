import * as types from "../types/home";
const INITIAL_STATE = {
    search_query : null,
    search_results: []
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
    default:
      return state;
  }
}
