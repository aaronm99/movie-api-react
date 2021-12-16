import React from "react";
import Movie from "../components/UI/Movie";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";
import { Link } from "react-router-dom";

const Results = ({ searchValue }) => {
  const [loading, setLoading] = useState();
  const [movie, setMovie] = useState([]);

  async function fetchMovie() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=6a434c95&s=${searchValue}`
    );

    setMovie(data.Search);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <Link to="/">
            <button className="back--btn">← Back</button>
          </Link>
          <div className="movies">
            {loading
              ? new Array(10)
                  .fill(0)
                  .map((_, index) => <Skeleton key={index} />)
              : (movie &&
                  movie.map((item, index) => (
                    <Movie
                      title={item.Title}
                      poster={item.Poster}
                      key={index}
                      id={item.imdbID}
                    />
                  ))) || (
                  <div className="empty__container">
                    <figure className="empty__state">
                      <img
                        className="empty__state--img"
                        src="../assets/video.svg"
                        alt=""
                      />
                    </figure>
                    <p className="empty__state--txt">
                      No Results. Try Searching again!
                    </p>
                  </div>
                )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
