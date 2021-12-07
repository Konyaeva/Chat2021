import {
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  GET_GISTS_ERROR,
  SEARCH_GISTS_BY_NAME_SUCCESS,
  SEARCH_GISTS_BY_NAME_ERROR,
  SEARCH_GISTS_BY_NAME_START,
} from "./types";

export const gistsStart = () => ({
  type: GET_GISTS_START,
});

export const gistsSuccess = (gists) => ({
  type: GET_GISTS_SUCCESS,
  payload: gists,
});

export const gistsError = (error) => ({
  type: GET_GISTS_ERROR,
  payload: error,
});

export const searchGistsByUserNameStart = () => ({
  type: SEARCH_GISTS_BY_NAME_START,
});

export const searchGistsByUserNameSuccess = (gists) => ({
  type: SEARCH_GISTS_BY_NAME_SUCCESS,
  payload: gists,
});

export const searchGistsByUserNameError = (error) => ({
  type: SEARCH_GISTS_BY_NAME_ERROR,
  payload: error,
});
