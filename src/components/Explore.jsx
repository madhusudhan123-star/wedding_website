import React from "react";
import image from "../utiles/explore.svg";

const explore = () => {
  return (
    <div>
      <div className="explore_main_div">
        <div className="explore_header_div">
          <h1 className="explore_header">
            Browse 1000+ bridal style & find you dream outfit
          </h1>
          <button className="explore_button">Explore</button>
        </div>
        <div className="explore_img_div">
          <img src={image} className="explore_img" />
        </div>
      </div>
    </div>
  );
};

export default explore;
