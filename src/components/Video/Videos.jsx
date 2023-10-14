import React from "react";
import "./_video.scss";

const Videos = () => {
  return (
    <div className="video">
      <div className="video_top">
        <img
          src="https://i.ytimg.com/vi/leXBPkcRC9I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAc7aSs1fXCA45WcNr76j__6u_icA"
          alt="thumbnail"
        />
        <span>45:67</span>
      </div>
      <div className="video_title">
        <img
          src="https://yt3.ggpht.com/y6CgrLx1GSmph4i88wbDCPQtPrN889Z1axRccaeYg63li7x5Mc9xbfZRhHcHR-_2T0NPMKLIpIo=s68-c-k-c0x00ffffff-no-rj"
          alt="icon"
        />
        I will never solo queue again after this
      </div>

      <div className="video_channel">
        <p>tarik</p>
      </div>
      <div className="video_details">
        <span>5m Views • 6 days ago</span>
      </div>
    </div>
  );
};

export default Videos;
