import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ title, poster, id }) => {
  const navigate = useNavigate();
  const [movieImg, setMovieImg] = useState("");

  useEffect(() => {
    if (poster === "N/A") {
      setMovieImg("../assets/notavailable.jpg");
    } else {
      setMovieImg(poster);
    }
  }, []);

  function goToDesc() {
    navigate(`${id}`);
  }

  return (
    <>
      <div className="movie" onClick={() => goToDesc()}>
        <img src={movieImg} alt="" className="movie__img" />
        <div className="movie__title">{title}</div>
      </div>
    </>
  );
};

export default Movie;
