import React from "react";
import "./Hero.css";
import arrow from "/Users/mac/Desktop/React Project/web/src/assets/arrow_btn.png";
import play_icon from "/Users/mac/Desktop/React Project/web/src/assets/play_icon.png";
import pause_icon from "/Users/mac/Desktop/React Project/web/src/assets/pause_icon.png";

const Hero = ({
  heroData,
  setheroCount,
  heroCount,
  setplayStatus,
  playStatus,
}) => {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <p>{heroData}</p>
          <p>{heroData}</p>
        </div>
        <div className="hero-explore">
          <p>Explore the features</p>
          <img src={arrow} alt="" />
        </div>
        <div className="hero-dot-play">
          <ul className="hero-dots">
            <li
              onClick={() => setheroCount(0)}
              className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
            ></li>
            <li
              onClick={() => setheroCount(1)}
              className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
            ></li>
            <li
              onClick={() => setheroCount(2)}
              className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
            ></li>
          </ul>
          <div className="hero-play">
            <img
              onClick={() => setplayStatus(!playStatus)}
              src={playStatus ? pause_icon : play_icon}
            ></img>
            <p>see video</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
