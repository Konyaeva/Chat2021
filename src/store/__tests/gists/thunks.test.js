import { getGists, gistsStart, gistsSuccess, gistsError } from "../../gists";

describe("getGists thunk", () => {
  it("getGists success", async () => {
    const PAGE = 2;

    const dispatch = jest.fn();
    const getGistsApi = jest.fn().mockResolvedValue({ data: "ok" });

    const thunk = getGists(PAGE);

    await thunk(dispatch, null, { getGistsApi });

    expect(getGistsApi).toBeCalledWith(PAGE);
    expect(getGistsApi).toBeCalledTimes(1);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, gistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, gistsSuccess("ok"));
  });

  it("getGists error", async () => {
    const PAGE = 2;

    const dispatch = jest.fn();
    const getGistsApi = jest.fn().mockRejectedValue({ error: "error" });

    const thunk = getGists(PAGE);

    await thunk(dispatch, null, { getGistsApi });

    expect(getGistsApi).toBeCalledWith(PAGE);
    expect(getGistsApi).toBeCalledTimes(1);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, gistsStart());
    expect(dispatch).toHaveBeenNthCalledWith(2, gistsError({ error: "error" }));
  });
});

describe("searchGistsByUserName thunk", () => {});
