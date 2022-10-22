import React from "react";
import img1 from "../utiles/cat1.svg";
import img2 from "../utiles/cat2.svg";
import img3 from "../utiles/cat3.svg";
import img4 from "../utiles/cat4.svg";
import img5 from "../utiles/cat5.svg";
import img6 from "../utiles/cat6.svg";

const weddingcat = () => {
  return (
    <div>
      <div className="weddingcat">
        <div className="weddingcat_main_div">
          <h1 className="weddingcat_main_heading">Wedding Categories</h1>
          <div className="weddingcat_types_div">
            <div className="weddingcat_type_div_1">
              <div className="weddingcat_1_div_header">
                <h1 className="weddingcat_head">Venues</h1>
                <p className="weddingcat_para">
                  Banquet Halls, Lawns / Farmhouses,...
                </p>
              </div>
              <div className="weddingcat_img_div">
                <img src={img1} className="weddingcat_img" />
              </div>
            </div>
            <div className="weddingcat_type_div_2">
              <div className="weddingcat_2_div_header">
                <h1 className="weddingcat_head">Makeup</h1>
                <p className="weddingcat_para">
                  Bridal Makeup, Family Makeup,...
                </p>
              </div>
              <div className="weddingcat_img_div">
                <img src={img2} className="weddingcat_img" />
              </div>
            </div>
            <div className="weddingcat_type_div_3">
              <div className="weddingcat_3_div_header">
                <h1 className="weddingcat_head">Groom Wear</h1>
                <p className="weddingcat_para">
                  Sharwani, Wedding Suits / Tuxes,Sher...
                </p>
              </div>
              <div className="weddingcat_img_div">
                <img src={img3} className="weddingcat_img" />
              </div>
            </div>
            <div className="weddingcat_type_div_4">
              <div className="weddingcat_4_div_header">
                <h1 className="weddingcat_head">Photographers</h1>
                <p className="weddingcat_para">
                  Photographers, Cinema / Vedio, Pro We...
                </p>
              </div>
              <div className="weddingcat_img_div">
                <img src={img4} className="weddingcat_img" />
              </div>
            </div>
            <div className="weddingcat_type_div_5">
              <div className="weddingcat_5_div_header">
                <h1 className="weddingcat_head">Bridal Wear </h1>
                <p className="weddingcat_para">
                  Bridal Lehengas, Kanjeevaram / Slik Sa...
                </p>
              </div>
              <div className="weddingcat_img_div">
                <img src={img5} className="weddingcat_img" />
              </div>
            </div>
            <div className="weddingcat_type_div_6">
              <div className="weddingcat_6_div_header">
                <h1 className="weddingcat_head">Mehndi</h1>
                <p className="weddingcat_para">Mehndi Artist</p>
              </div>
              <div className="weddingcat_img_div">
                <img src={img6} className="weddingcat_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default weddingcat;
