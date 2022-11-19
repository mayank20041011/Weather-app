import "./Section1.css";
import React from "react";
import moment from "moment";
function Section1(props) {
  let img = `./Resources/3D Weather Icons Pack/3d weather icons/${props.icon}.png`;
  return (
    <>
      <div >
        <div className="text location">{props.city} </div>
        <div className="text timedate">
          {" "}
          {moment().format("DD/MM/YYYY") + " " + props.datetime}
        </div>
      </div>
     
      <div className="otherDetail">
        <div className="detail first">
          <div className="text">
            <div>Wind</div>
            <div className="details">{props.wind} km/h</div>
          </div>
        </div>
          <div className="br1"></div>
        <div className="detail second">
          <div className="text">
            <div>Visibility</div>
            <div className="details">{props.visibility} km/h</div>
          </div>
        </div>
          <div className="br1"></div>
        <div className="detail third">
          <div className="text">
            <div>Humidity</div>
            <div className="details">{props.humidity}%</div>
          </div>
        </div>
      </div>
    
      <img className="mainImg" src={img} alt="" />
         
    </>
  );
}

export default Section1;
