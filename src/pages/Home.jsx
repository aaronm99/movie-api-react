import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = ({ setSearchValue }) => {
  const navigate = useNavigate();

  function onSearch() {
    navigate("/results");
  }

  useEffect(() => {}, []);

  return (
    <>
      <div className="center search__container">
        <h1 className="search__header">
          Search for your favourite Movies and TV shows!
        </h1>

        <div className="search-box">
          <input
            type="text"
            className="search-txt"
            placeholder="Search"
            onChange={event => setSearchValue(event.target.value)}
            onKeyPress={event => event.key === "Enter" && onSearch()}
          />
          <div className="search-btn" onClick={() => onSearch()}>
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
