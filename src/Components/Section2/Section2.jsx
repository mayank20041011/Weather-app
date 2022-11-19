import "./Section2.css"
import S2 from "./S2"


function Section2(props) {
    return(
        <> <div className="temp">{props.temp}°</div>

        <div className="br"></div>
<div className="S2prent">
<S2 tempDuringDayIcon={props.tempDuringDay?.[6].icon}  tempDuringDay={props.tempDuringDay?.[6].temp} time ={"Morning"}/>
<S2 tempDuringDayIcon={props.tempDuringDay?.[12].icon} tempDuringDay={props.tempDuringDay?.[12].temp} time ={"Day"}/>
<S2 tempDuringDayIcon={props.tempDuringDay?.[18].icon} tempDuringDay={props.tempDuringDay?.[18].temp} time ={"Evening"}/>
<S2 tempDuringDayIcon={props.tempDuringDay?.[23].icon} tempDuringDay={props.tempDuringDay?.[23].temp} time ={"Night"}/>

        </div>
        </>
        )
    }
    
    export default Section2;