import React from "react";

const SkeletonDescription = () => {
  return (
    <div className="skeleton--desc">
      <img className="skeleton__poster--desc" alt=""></img>
      <div className="skeleton__info">
        <div className="skeleton__title--desc"></div>
        <ul className="skeleton__details">
          <li className="skeleton__genre"></li>
          <li className="skeleton__runtime"></li>
          <li className="skeleton__rating"></li>
        </ul>
        <div className="skeleton__plot"></div>
        <div className="skeleton__plot--two"></div>
      </div>
    </div>
  );
};

export default SkeletonDescription;
