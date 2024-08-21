import React from 'react';

function Subscribe() {
  return (
    <div className="bg-purple-950 text-white py-6 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <p className="text-lg md:text-2xl font-semibold mr-72">
          <span className="font-bold ">Subscribe</span> & Get 
          <span className="text-blue-400 "> 10% OFF </span> 
          for first order
        </p>
        <form className="flex items-center mt-4 md:mt-0 ">
          <div className="relative">
            <input
              type="email"
              className="p-3 px-6 pl-12 rounded-full text-black focus:outline-none"
              placeholder="Enter your email address"
            />
            <span className="absolute left-3 top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25m19.5 0V6.75A2.25 2.25 0 0021.75 6H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v10.5"
                />
              </svg>
            </span>
          </div>
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-full  hover:bg-gray-800 absolute  right-56"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
