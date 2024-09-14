import React, { useEffect } from 'react';
import { useApi } from '../context/apiContext';
function PopularCat() {
  const {category}=useApi();
  // useEffect(()=>{

  // },[category])

console.log("ttttt",category)

  return (
    <div className="mx-8 my-4 ml-[15%] md:ml-[5%] mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Popular Categories</h2>
        <a className="text-sm text-blue-600 hover:underline">
          View All
        </a>
      </div>
      <div className="flex overflow-x-hidden mt-4 space-x-4 ml-[0.5%] justify-around">
      {category.map((cat, index) => (
  <div key={index} className="flex flex-col items-center justify-around">
    <img 
      src={cat.image} 
      alt={cat.name} 
      className="w-[110px] h-[110px] object-cover rounded-full" 
    />
    <button className="text-sm font-bold mt-2 text-center">
      {cat.name}
    </button>
    <p className="text-xs text-gray-500 mt-1">
      {cat.numberOfBooks} books
    </p>
  </div>
))}

      </div>
    </div>
  );
}

export default PopularCat;