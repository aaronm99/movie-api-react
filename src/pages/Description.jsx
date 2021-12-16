import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Desc from "../components/UI/Desc";
import SkeletonDescription from "../components/UI/SkeletonDescription";

const Description = () => {
  const { id } = useParams();
  const [info, setInfo] = useState("");
  const [ratingColor, setRatingColor] = useState("");
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  async function getInfo() {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=6a434c95&i=${id}`
    );
    setInfo(data);

    if (data.imdbRating > 7) {
      setRatingColor("#00ff00");
    } else if (data.imdbRating > 5) {
      setRatingColor("#fff959");
    } else {
      setRatingColor("red");
    }

    setLoading(false);
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <button
            className="back--btn--desc"
            onClick={() => navigate("/results")}
          >
            ← Back
          </button>
          <div className="desc__container">
            {loading ? (
              <SkeletonDescription />
            ) : (
              <Desc
                poster={info.Poster}
                title={info.Title}
                year={info.Year}
                genre={info.Genre}
                runtime={info.Runtime}
                rating={info.imdbRating}
                plot={info.Plot}
                ratingColor={ratingColor}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
