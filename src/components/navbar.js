import React from 'react';
import { CiHeart } from "react-icons/ci";




function Navbar() {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-white">
  
      <div className="flex items-center space-x-4">
        <div className="relative ml-36 mt-9">
          <select className="appearance-none rounded-l-full border border-r-0 border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:outline-none w-[140px] h-[45px] ">
            <option>All Categories 🠗  </option>
            
            
            
            
          </select>
          <input
            type="text"
            placeholder="Search anything..."
            className="border border-gray-300 bg-white px-3 py-2 rounded-r-full text-sm focus:outline-none w-[239px] h-[45px]"
          />
          <button className="absolute right-0 top-0 ml-4 h-[40px] w-[40px] px-3 bg-purple-900 text-white rounded-full">
            <svg
              class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"
              
            >
              <path
                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='bg-gray-300 rounded-full w-[45px] h-[45px] ml-96 mt-3'/>

      <div className="flex items-center space-x-6">
      <div className="block items-center space-x-2 mr-96 pt-5">

          
          <a className="text-lg text-black font-semibold  font-[400]size-[13px]">Hotline 24/7</a>
          <a href="tel:(025) 3686 2516" className="text-2xl font-[700] text-purple-900 size-[20px]"><br/>
            (025) 3686 25 16
          </a>
        </div>
        <div className='absolute left-[85%]'>
        <CiHeart className='h-[24px] w-[24px]' />
        
        
        <div className="relative">
        
        
        
          <span className="absolute mr-48 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-purple-900 text-white text-xs bottom-3 left-3">
            2
          </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
