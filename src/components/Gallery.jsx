import React from "react";
import gal1 from "../utiles/gal1.svg";
import gal2 from "../utiles/gal2.svg";
import gal3 from "../utiles/gal3.svg";
import gal4 from "../utiles/gal4.svg";
import gal5 from "../utiles/gal5.svg";
import gal6 from "../utiles/gal6.svg";
import gal7 from "../utiles/gal7.svg";

const Gallery = () => {
  return (
    <div>
      <div className="gallery_main">
        <h1 className="gallery_main_heading">Gallery to Look for</h1>
        <div className="gallery_main_div">
          <div className="gallery_type_div_1 gallery_div">
            <img src={gal1} className="gallery_img" />
            <h4 className="gallery_title">Outfits</h4>
          </div>
          <div className="gallery_type_div_2 gallery_div">
            <img src={gal2} className="gallery_img" />
            <h4 className="gallery_title">Blouse Designs</h4>
          </div>
          <div className="gallery_type_div_3 gallery_div">
            <img src={gal3} className="gallery_img" />
            <h4 className="gallery_title">Wedding Sarees</h4>
          </div>
          <div className="gallery_type_div_4 gallery_div">
            <img src={gal4} className="gallery_img" />
            <h4 className="gallery_title">bridal-lehenga</h4>
          </div>
          <div className="gallery_type_div_5 gallery_div">
            <img src={gal5} className="gallery_img" />
            <h4 className="gallery_title">pre wedding shoot</h4>
          </div>
          <div className="gallery_type_div_6 gallery_div">
            <img src={gal6} className="gallery_img" />
            <h4 className="gallery_title">wedding photoshoot </h4>
          </div>
          <div className="gallery_type_div_7 gallery_div">
            <img src={gal7} className="gallery_img" />
            <h4 className="gallery_title">mehndi-designs</h4>
          </div>
          <div className="gallery_button_more_div">
            <h1 className="gallery_button_more">More...</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
