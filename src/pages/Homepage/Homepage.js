import React, { useEffect } from "react";
import { useGloabalStore } from "store/GlobalStore";

function Homepage() {


  return (
    <div className='bg-blue-500 py-10 flex items-center justify-center'>
      <h1 className='text-3xl font-semibold text-white'>React Starter with Tailwind 3</h1>
    </div>
  )
}

export default Homepage;
