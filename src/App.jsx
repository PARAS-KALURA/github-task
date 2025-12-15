import React, { useState } from 'react'

const App = () => {

  const[city, setCity] = useState("");
  const[weather, setWeather] = useState(null);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState("");

 async function getWeather() {
  if(!city.trim()) return;
  
  setLoading(true);
  setError("");

  try{
    const response = await fetch(   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
 );
    
    if(!response.ok) {
      throw new Error("City not found ");
    }

    const data = await response.json();
    setWeather(data);

  }
   catch (err) {

setError(err.message);

  }
    finally {

    setLoading(false);

  }

 }

  function submitChange(e) {
    setCity(e.target.value)
  }

  return (
    <div className='flex justify-center'>
      <div className='border-2 border-gray-500 inline-flex py-4 px-6 mt-5 rounded-md flex-col items-center gap-3'>

        <h2 className='text-3xl font-bold'>Weather App</h2>

        <input
        onChange={submitChange}
        value={city}
          type="text"
          placeholder='Search City...'
          className='border-2 border-gray-500 px-2 py-2 rounded-sm'
         
        />

        <button
        
          className='bg-blue-400 px-4 py-2 rounded-sm text-white cursor-pointer'
         
          onClick={getWeather}

         >
          Search
        </button>

      
        {loading && <p>loading...</p>}

        {error && <p className='text-red-500'>{error}</p>}

        {weather && (
           <div className="text-center">
    <p className="text-xl font-semibold">{weather.name}</p>
    <p>{weather.main.temp} °C</p>
    <p>{weather.weather[0].main}</p>
  </div>
           
        )}

      

      </div>
    </div>
  )
}

export default App
