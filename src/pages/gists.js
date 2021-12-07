import { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { getGists, gistsSelector, searchGistsByUserName } from "../store/gists";

const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);

const searchGistsDebounsed = debounce((query, dispatch) => {
  dispatch(searchGistsByUserName(query));
}, 500);

export function GistsPage() {
  const {
    gists,
    gistsPending,
    gistsError,
    gistsByName,
    gistsByNamePending,
    gistsByNameError,
  } = useSelector(gistsSelector);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  // const searchGistsDebounsed = useMemo(() => {
  //   return debounce((query) => {
  //     dispatch(searchGistsByUserName(query));
  //   }, 500);
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  useEffect(() => {
    searchGistsDebounsed(value, dispatch);
  }, [value, dispatch]);

  // const [gists, setGists] = useState([]);
  // const [pending, setPending] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const foo = async () => {
  //     try {
  //       setPending(true);
  //       setError(null);

  //       const response = await fetch("https://api.github.com/gists");
  //       const data = await response.json();

  //       setGists(data);
  //     } catch (e) {
  //       setError(e);
  //     } finally {
  //       setPending(false);
  //     }
  //   };

  //   foo();
  // }, []);

  if (gistsError) {
    return <h1>Error gists</h1>;
  }

  // if (gistsByNameError) {
  //   return <h1>Error search</h1>;
  // }

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Gists</h1>

        {buttons.map((button) => (
          <button onClick={() => dispatch(getGists(button))} key={button}>
            {button}
          </button>
        ))}
        <hr />

        {gistsPending ? (
          <h1>Loading ....</h1>
        ) : (
          gists.map((gist, index) => <h3 key={index}>{gist.forks_url}</h3>)
        )}
      </div>

      <div>
        <h1>Gists Search</h1>
        {/* @TODO использовать функцию debounce */}
        <input
          placeholder="Введите имя пользователя"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {gistsByNamePending ? (
          <h1>Loading ....</h1>
        ) : (
          gistsByName.map((gist, index) => (
            <h3 key={index}>{gist.forks_url}</h3>
          ))
        )}
      </div>
    </div>
  );
}
