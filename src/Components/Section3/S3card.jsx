import "./S3card.css";

function S3card(props){
  
  let  img = `./Resources/3D Weather Icons Pack/3d weather icons/${props?.day?.icon}.png`;
 
    return(
        <>
        <div className="S3card">
                <div>{props?.day?.datetime}</div>
                <img
                  className="s3Img"
                  src={img}
                  alt=""
                />
                <div>{props?.day?.conditions}</div>
                <div className="s3temp">{props?.day?.temp}°</div>
              </div>
        </>
    )
}

export default S3card;