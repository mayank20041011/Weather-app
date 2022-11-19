import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Search from "./Components/Search/Search";
function App() {
  const [data, setData] = useState(0);
  const [city, setCity] = useState("India");
function fetchCity(){
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      // setLoc({ lati: lat, longi: long });
console.log({lat, long});
      fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.dc64fb8cff756f2f79a1e29f127bbcf2&lat=${lat}&lon=${long}&format=json`
      ).then((response) =>
        response.json().then((data) => setCity(data?.address?.city))
      );
    });

}
  useEffect(() => {
fetchCity();    
  }, []);
 

  useEffect(() => {
    if (typeof city == "undefined") {
    fetchCity();
    } else {
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=days%2Ccurrent%2Chours&key=UT36N2ZZHCQ3BZRNQ2PK3MVQZ&contentType=json`
      ).then((response) => response.json().then((data) => setData(data)));
    }
  }, [city]);

  function dynamicBG() {
    // let currentTime = moment().add(0, "hours").format("HH:mm A");
    let currentTime = data?.currentConditions?.datetime;
    currentTime > "00:00:00 " && currentTime < "05:00:00 "
      ? (i = "full-night")
      : currentTime > "05:00:00 " && currentTime < "10:00:00 "
      ? (i = "morning")
      : currentTime > "10:00:00 " && currentTime < "16:00:00 "
      ? (i = "sun")
      : currentTime > "16:00:00 " && currentTime < "19:00:00 "
      ? (i = "sun-set")
      : currentTime > "19:00:00 " && currentTime < "21:00:00 "
      ? (i = "night")
      : (i = "full-night");
  }
  let i = 2;
  dynamicBG();
  var sectionStyle = {
    backgroundImage: `url(./Resources/background2/${i}.jpg)`,
  };

  function changeCity(newCity) {
    setCity(newCity);
    console.log(city);
  }

  return (
    <div className="App">
      <div style={sectionStyle} className="bg">
        <div className="Main">
          <Search changeCity={changeCity} />
          <div className="display">
            <div className="section1 section">
              <Section1
                city={data?.address}
                wind={data?.currentConditions?.windspeed}
                humidity={data?.currentConditions?.humidity}
                icon={data?.currentConditions?.icon}
                visibility={data?.currentConditions?.visibility}
                datetime={data?.currentConditions?.datetime}
              />
            </div>
            <div className="section2 section">
              <Section2
                temp={data?.currentConditions?.temp}
                tempDuringDay={data?.days?.[0]?.hours}
              />
            </div>
            <div className="section3 section">
              <Section3 days={data?.days} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
