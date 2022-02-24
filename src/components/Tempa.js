import React,{useEffect, useState} from 'react';
import './CSS/style.css';

const Tempa = () => {

    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Raipur");
    useEffect( () => {
        const fatchApi =async () => {
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1c213dbceae47e5c8765e93366bbe93a`
               const response=await fetch(url);
            const resjson= await response.json();
               //console.log(resjson);
               setCity(resjson.main);
        }
        fatchApi();
    },[search] )
    return (
        <>
            <div className="box">
                  <div className="inputData">
                      <input type="search" value={search} placeholder="Search City" className="inputFeild" 
                       onChange= { (event) => {
                        setSearch(event.target.value)   
                       }} />

                  </div>
           {
               !city ? (
                         
                              <p className="error">Oops!! No Data Found</p>
                             
                        
               ):(

                <div className="info">
                <h2 className="location">
                <i className ="fas fa-street-view"></i>{search}
                </h2>
                <h1 className="temp">
                  {city.temp}°Cel
                </h1>
                <h3 className="tempMin-Max">Min : {city.temp_min}°Cel | Max :  {city.temp_max}°Cel</h3>
                <h3>Humidity: {city.humidity}% </h3>
                <h3>Wind: {city.speed}mph </h3>
                </div>
               )}
           
            
            
            </div>         </>
    )
}

export default Tempa
