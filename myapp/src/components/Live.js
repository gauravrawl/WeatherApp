import React, { useEffect, useState } from 'react'
import './style.css'

const Live = () => {
  
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");
  

  useEffect(()=>{
    const fetchApi = async ()=>{
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1f006765b13a3bd024d5d435fcac52f3`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    }; 
    fetchApi();

  },[search])

  

  

  return (
  <>
    <div className="box">
      <div className='inputData'>
        <input type='search' value={search} className='inputbar' placeholder='Search location...'  onChange={(event)=>{setSearch(event.target.value)}}  />  
        <i className="fa-solid fa-globe fa-spin"></i>
        <h1 className='live'> Live weather </h1>
        <img id='weather' src='/weather.png' alt='noimage' />
        
      
    
        
      
{!city ? (
  <>
  <h1>no data found </h1>
<i  className="fa-solid fa-face-frown" />
</>) : (
  <div className='info'>

<div>
        <h2 className='location'>
        <i className="fa-solid fa-street-view fa-fade fa-2xl "  ></i>&nbsp; {search}</h2><br/>  
        <h1 className='temperature'> {city.temp} ° C</h1> <br/>
        <h1 className='feels'> Feels like: {city.feels_like} ° C</h1> <br/>

        <div className='max_min'>
          <h3 className='temp2'>Min: {city.temp_min}° C&nbsp;</h3>|
           <h3 className='temp3'> &nbsp; Max: {city.temp_max}° C</h3>
        </div>
  </div>
  
        
</div>
)}
</div>
 </div>    
  </>
)
}

export default Live
