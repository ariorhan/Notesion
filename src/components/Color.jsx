import React, { useState } from 'react'

export default function Color() {

  function colorChange(){
    // const [style, setStyle] = useState("");  

    //   function colorChange(){
    //       setStyle("pink");
    //   };

      
  };

  return (
    <div className='palette'>
        <button className='pink' onClick={colorChange}></button>
        <button className='yellow'></button>
        <button className='green'></button>
        <button className='purple'></button>
        <button className='gray'></button>
        <button className='violet'></button>
        <button className='tomato'></button>
    </div>
  )
}
