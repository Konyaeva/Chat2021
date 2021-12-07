import {
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  GET_GISTS_ERROR,
  SEARCH_GISTS_BY_NAME_SUCCESS,
  SEARCH_GISTS_BY_NAME_ERROR,
  SEARCH_GISTS_BY_NAME_START,
} from "./types";

const initialState = {
  gists: [],
  gistsPending: false,
  gistsError: null,

  gistsByName: [],
  gistsByNamePending: false,
  gistsByNameError: null,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return {
        ...state,
        gistsPending: true,
        gistsError: null,
      };

    case GET_GISTS_SUCCESS:
      return {
        ...state,
        gistsPending: false,
        gists: action.payload,
      };

    case GET_GISTS_ERROR:
      return {
        ...state,
        gistsPending: false,
        gistsError: action.payload,
      };

    case SEARCH_GISTS_BY_NAME_START:
      return {
        ...state,
        gistsByNamePending: true,
        gistsError: null,
      };

    case SEARCH_GISTS_BY_NAME_SUCCESS:
      return {
        ...state,
        gistsByNamePending: false,
        gistsByName: action.payload,
      };

    case SEARCH_GISTS_BY_NAME_ERROR:
      return {
        ...state,
        gistsByNamePending: false,
        gistsByNameError: action.payload,
      };

    default:
      return state;
  }
};
