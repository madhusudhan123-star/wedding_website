import React from "react";
import app1 from "../utiles/mobile.svg";
import app2 from "../utiles/mobile1.svg";

const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footer_main_div">
        <div className="footer_first">
          <div className="footer_div_2">
            <h2 className="footer_main_heading">
              WedMeGood - Your Personal Wedding Planner
            </h2>
            <p className="footer_main_para_1">Plan your wedding with Us</p>
            <p className="footer_main_para_2">
              WedMeGood is an Indian Wedding Planning Website and app where you
              can find the best wedding vendors, with prices and reviews at the
              click of a button. Whether you are looking to hire wedding
              planners in India, or looking for the top photographers, or just
              some ideas and inspiration for your wedding. WedMeGood can help
              you solve your wedding planning woes through its unique features.
            </p>
            <div className="footer_both">
              <div className="footer_getemail">
                <h2 className="footer_getemail_head">Get in Touch</h2>
                <div className="footer_getemail_input_div">
                  <input
                    className="footer_getemail_input"
                    placeholder="Email"
                  />
                  <button className="footer_getemail_button">Submit</button>
                </div>
                <h2 className="footer_getemail_second_head">
                  Contact us to get best deals
                </h2>
                <p className="footer_getemail_email">
                  vendors@wedmegood.com info@wedmegood.com{" "}
                </p>
                <p className="footer_getemail_number">0124-6812345</p>
              </div>
              <div className="footer_mobile">
                <h1 className="footer_mobile_head">Get The WedMeGood App</h1>
                <div className="footer_mobile_img_div">
                  <img src={app1} className="footer_mobile_img_1" />
                  <img src={app2} className="footer_mobile_img_2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_line"></div>
        <div className="footer_second">
          <div className="footer_navbar1">
            <h3 className="footer_navbar_head">Start Planning</h3>
            <p className="footer_navbar_para">Search By Vendor</p>
            <p className="footer_navbar_para">Search By City</p>
            <p className="footer_navbar_para">Download Our App</p>
            <p className="footer_navbar_para">Top Rated Vendors</p>
            <p className="footer_navbar_para">Destination Wedding</p>
          </div>
          <div className="footer_navbar1">
            <h3 className="footer_navbar_head">Wedding Ideas</h3>
            <p className="footer_navbar_para">Wedding Blog</p>
            <p className="footer_navbar_para">Wedding Inspiration Gallery</p>
            <p className="footer_navbar_para">Real Wedding</p>
            <p className="footer_navbar_para">Submit Wedding</p>
          </div>
          <div className="footer_navbar1">
            <h3 className="footer_navbar_head">Photo Gallery</h3>
            <p className="footer_navbar_para">Bridal Wear</p>
            <p className="footer_navbar_para">Wedding Jewellery</p>
            <p className="footer_navbar_para">Bridal Makeup & Hair</p>
            <p className="footer_navbar_para">Wedding Decor</p>
            <p className="footer_navbar_para">Wedding Photography</p>
            <p className="footer_navbar_para">Groom Wear</p>
            <p className="footer_navbar_para">Invitations & Favors</p>
            <p className="footer_navbar_para">Wedding Accessories</p>
            <p className="footer_navbar_para">Mehendi Designs</p>
          </div>
          <div className="footer_navbar1">
            <h3 className="footer_navbar_head">Home</h3>
            <p className="footer_navbar_para">About WedMeGood</p>
            <p className="footer_navbar_para">Careers</p>
            <p className="footer_navbar_para">Contact Us</p>
            <p className="footer_navbar_para">Site Map</p>
            <p className="footer_navbar_para">Terms & Conditions</p>
            <p className="footer_navbar_para">Privacy PolicyPrivacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
