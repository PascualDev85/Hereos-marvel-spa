import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../components";
import { useForm } from "../hooks/useForm";
import { getHereosByName } from "../helpers";

export const Search = () => {
  const { searchText, onInputChange } = useForm({
    searchText: queryString.parse(useLocation().search).q || "",
  });

  const navigate = useNavigate();

  // obtener los query parameters con useLocation
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroesFiltered = getHereosByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroesFiltered.length === 0;

  const onSearchSubmit = (e) => {
    e.preventDefault();

    // query parameters
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1 className=" animate__animated animate__fadeInRight">Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searchin</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-info animate__animated animate__fadeIn"
            style={{ display: showSearch ? "" : "none" }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            There is no a hero with {q}
          </div>
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
