import React, { useRef} from "react";
import "./Search.css";
import { useState, useEffect } from "react";


function Search(props) {
  const inputRef = useRef(null);
const [item, setitem] = useState();
  useEffect(() => {
    fetch(
      `https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json`
    ).then((response) => response.json().then((cityData) => setitem(cityData)));
  }, []);
  
  const[filteredData,setFilteredData]=useState([]);
  const handleFilter = (event)=>{
    const searchWord = event.target.value;
    const newfilter = item.filter((value)=>{
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    console.log(newfilter)
    
  if (searchWord==""){
setFilteredData([]);
  }
  else
  {
    setFilteredData(newfilter);
  }
}

function clickHandler (){
  props.changeCity(inputRef.current.value)
  setFilteredData([]);
}


  return (
    <>
    <div>
      <div className="search">
    <input
      onChange={handleFilter}
      ref={inputRef}
      type="text"
      id="message"
      className="searchTerm"
      name="message"
      placeholder="Enter Your City"
    />

    <button onClick={clickHandler} className="searchButton" >Search</button>
        </div>
        
        {  filteredData.length!=0 && (<div className="dropdown">
  {filteredData.slice(0,8).map((value,key)=>{
    return <div onClick={()=>{props.changeCity(value.name);setFilteredData([]);}}  className="filteritem">{value.name}</div>
  })}
        </div>
)}
        
        
        </div>
        </>
      )}
      
export default Search
