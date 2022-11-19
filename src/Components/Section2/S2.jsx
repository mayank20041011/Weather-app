import "./S2.css"
function S2(props){
  
let  img = `./Resources/3D Weather Icons Pack/3d weather icons/${props.tempDuringDayIcon}.png`;
    
  return(
    <div className="s2">
          <div>{props.time}</div>
          <img
            className="s2Img"
            src={img}
            alt="Hello"
          />
          <div className="s2tepm">{props.tempDuringDay}°</div>
        </div>
        )
}
export default S2;