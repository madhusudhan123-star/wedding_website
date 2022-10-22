import React from "react";
import blog1 from "../utiles/blog1.svg";
import blog2 from "../utiles/blog2.svg";

const Blog = () => {
  return (
    <div className="blog_main">
      <div className="blog_main_div">
        <div className="blog_one">
          <div className="blog_one_img_div">
            <img src={blog1} className="blog_one_img" />
          </div>
          <div className="blog_one_message">
            <h2 className="blog_one_head">
              Simple & Heartening Delhi Roka Ceremony With A Unique Photo Cake
            </h2>
            <p className="blog_one_para">
              A heartwarming poem written by the groom-to-be for his fiancé, a
              surprise pull-out photo cake (featuring many of their most
              precious memories together) brought in by the bride-to-be, some
              dance, a whole lot of fun and endless love - Shweghna and Divij's
              Roka ceremony was straight out of a Bollywood movie. Yes, it was
              simple and intimate but it was also grand in its own way. It was
              grand because of the couple's grand gestures for each other and it
              was incredibly special because it was the culmination of their
              beautiful college romance that had started almost six years ago!
            </p>
          </div>
        </div>
        <div className="blog_two">
          <div className="blog_two_img_div">
            <img src={blog2} className="blog_two_img" />
          </div>
          <div className="blog_two_message">
            <h2 className="blog_two_head">
              Simple & Heartening Delhi Roka Ceremony With A Unique Photo Cake
            </h2>
            <p className="blog_two_para">
              A heartwarming poem written by the groom-to-be for his fiancé, a
              surprise pull-out photo cake (featuring many of their most
              precious memories together) brought in by the bride-to-be, some
              dance, a whole lot of fun and endless love - Shweghna and Divij's
              Roka ceremony was straight out of a Bollywood movie. Yes, it was
              simple and intimate but it was also grand in its own way. It was
              grand because of the couple's grand gestures for each other and it
              was incredibly special because it was the culmination of their
              beautiful college romance that had started almost six years ago!
            </p>
          </div>
        </div>
        <div className="blog_readmore_btn_div">
          <button className="blog_readmore_btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
