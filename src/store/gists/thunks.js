import {
  gistsStart,
  gistsError,
  gistsSuccess,
  searchGistsByUserNameStart,
  searchGistsByUserNameSuccess,
  searchGistsByUserNameError,
} from "./actions";

export const getGists =
  (page = 1) =>
  async (dispatch, _, api) => {
    try {
      dispatch(gistsStart());

      const { data } = await api.getGistsApi(page);

      dispatch(gistsSuccess(data));
    } catch (e) {
      dispatch(gistsError(e));
    }
  };

export const searchGistsByUserName =
  (name = "") =>
  async (dispatch, _, api) => {
    try {
      dispatch(searchGistsByUserNameStart());

      const { data } = await api.searchGistsByUserNameApi(name);

      dispatch(searchGistsByUserNameSuccess(data));
    } catch (e) {
      dispatch(searchGistsByUserNameError(e));
    }
  };
