import "./Section3.css"
import S3card from "./S3card"
function Section3(props){
    return (
    <>
    
<div className="card">
              
<S3card day ={props?.days?.[0]} />
              <div className="S3br"></div>
<S3card day ={props?.days?.[1]}/>
              <div className="S3br"></div>
<S3card day ={props?.days?.[2]}/>
              <div className="S3br"></div>
<S3card day ={props?.days?.[3]}/>
              <div className="S3br"></div>
<S3card day ={props?.days?.[4]}/>
              <div className="S3br"></div>
<S3card day ={props?.days?.[5]}/>
              <div className="S3br"></div>
<S3card day ={props?.days?.[6]}/>

              
            </div>
    
    </>
)
}

export default Section3
