import React, { useState } from 'react'

const App = () => {

  const [city, setCity] = useState("");
  const [input, setInput] = useState("");

  function handleClick() {
    console.log(city);
  }

  function handleChange(e) {
    setCity(e.target.value)
  }


  return (
    <>
      <div className='flex justify-center' >

        <div className='border-2 border-gray-500 inline-flex  py-3 px-6  justify-center items-center  mt-5 rounded-md flex-col ' >
          <h2 className='  text-3xl font-bold'>Weather App</h2>

          <input type="text" placeholder='Seach City...'
            className=' border-2 border-gray-500 px-2 py-2 mt-4  rounded-sm '
            onChange={handleChange}
            value={city}
          />

          <button className='mt-3 bg-blue-400 px-4 py-2  rounded-sm  text-white cursor-pointer'
            onClick={handleClick}
          >Search</button>

          <p className='mt-3'>{city}</p>

        </div>

      </div>

    </>
  )
}

export default App


