import React from "react";
import "./VideoGallery.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Video1 from "../assets/videos/video1.mp4";
import Video2 from "../assets/videos/video2.mp4";
import Video3 from "../assets/videos/video3.mp4";
import Video4 from "../assets/videos/video4.mp4";

const VideoGallery = () => {
  return (
    <div id="videoGallery" className="videoGallery">
      <h1>Watch Our Video Gallery</h1>
      <Carousel
        className="carousel"
        autoPlay
        showThumbs={false}
        interval="5000"
        transitionTime="5000"
      >
        <div>
          <video src={Video1} muted autoPlay loop></video>
          <p className="legend">Tennis Lessons for Kids</p>
        </div>
        <div>
          <video src={Video2} muted autoPlay loop></video>
          <p className="legend">Practice Tennis AnyTime</p>
        </div>
        <div>
          <video src={Video3} muted autoPlay loop></video>
          <p className="legend">Special Arrangements for Handicapped Players</p>
        </div>
        <div>
          <video src={Video4} muted autoPlay loop></video>
          <p className="legend">Outstanding Tennis Facilities</p>
        </div>
      </Carousel>
    </div>
  );
};

export default VideoGallery;
