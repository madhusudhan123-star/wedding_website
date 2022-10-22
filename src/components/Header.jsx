import React from "react";
import { useState } from "react";
import logo from "../utiles/logo.svg";
import hand from "../utiles/hand_barger.svg";
import dir from "../utiles/direction.svg";
import cross from "../utiles/cross.svg";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="header_main">
      <div className="header_div">
        <div className="header_nav">
          <div className="logo_img_div">
            <img src={logo} className="logo_img" />
          </div>
          <div className="manu_div">
            <div>
              <div className="navbar">
                <img
                  src={hand}
                  onClick={showSidebar}
                  className="menu menu-bars"
                />
              </div>
              <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                    <img src={cross} className="menu-bars" />
                  </li>
                  {SidebarData.map((item, index) => {
                    return (
                      <li key={index} className={item.cName}>
                        <div>
                          <span>{item.title}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header_main">
          <div className="header_title_div">
            <h1 className="header_title">Your Wedding Your Way</h1>
            <p className="header_title_message">
              Find the best wedding vendors withthousands of trusted reviews
            </p>
          </div>
          <div className="header_message_main">
            <div className="header_message_div">
              <div className="header_input_div_1">
                <input
                  className="header_input_1"
                  type="input"
                  placeholder="Select vendor type"
                />
                <img src={dir} className="header_input_img_1" />
              </div>
              <div className="header_input_div_2">
                <input
                  className="header_input_2"
                  type="input"
                  placeholder="Select vendor type"
                />
                <img src={dir} className="header_input_img_2" />
              </div>
              <button className="header_button_stated">Get Started</button>
              <div className="header_note">
                <p className="header_note_message">
                  <span className="header_note_head">Popular Searches:</span>
                  Wedding Photographers in IndiaBridal Makeup in IndiaWedding
                  Cards in IndiaWedding Venues in India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
