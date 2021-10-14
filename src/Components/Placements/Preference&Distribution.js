import React from "react";
import "./Preference&Distribution.css"
import image1 from "./Assets/3.png"
import image2 from "./Assets/4.png";
function LastPart() {
  return (
    <>

      <div className="container_images">
        <div className="image-holder-left">
          <h5 className="heading_left">Program Preference</h5>
          <img className="image1" src={image1} alt="" />
        </div>
        <div className="image-holder-right">
          <h5 className="heading_right">
            Country wise distribution of Post Graduate Students
          </h5>
          <img className="image2" src={image2} alt="" />
        </div>
      </div>
    </>
  );
}

export default LastPart;