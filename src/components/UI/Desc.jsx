import React, { useEffect, useState } from "react";

const Desc = ({
  poster,
  title,
  year,
  genre,
  runtime,
  rating,
  plot,
  ratingColor,
}) => {
  const [movieImg, setMovieImg] = useState("");
  const [movieRating, setMovieRating] = useState("");
  useEffect(() => {
    if (poster === "N/A") {
      setMovieImg("../assets/notavailable.jpg");
    } else {
      setMovieImg(poster);
    }

    if (rating === "N/A") {
      setMovieRating("");
    } else {
      setMovieRating(`${rating}/10`);
    }
  }, []);

  return (
    <>
      <figure className="poster--wrapper">
        <img className="poster--wrapper--img" src={movieImg} alt="" />
      </figure>
      <div className="desc__info">
        <div className="desc__title">
          {title} ({year})
        </div>
        <ul className="desc__details">
          <li className="desc__genre">{genre}</li>
          <li className="desc__runtime">{runtime}</li>
          <li className="desc__rating" style={{ color: ratingColor }}>
            {movieRating}
          </li>
        </ul>
        <div className="desc__plot">{plot}</div>
      </div>
    </>
  );
};

export default Desc;
