import React from 'react';

export default function Trending() {
  const trendingItems = [
    'Vacuum Robot', 'Bluetooth Speaker', 'Oled TV', 'Security Camera', 'Macbook M1',
    'Smart Washing Machine', 'iPad Mini 2023', 'PS5', 'Earbuds', 
    'Air Condition Inverter', 'Flycam', 'Electric Bike', 'Gaming Computer',
    'Smart Air Purifier', 'Apple Watch'
  ];

  return (
    <div className="p-6 mt-80">
      <h2 className="text-3xl font-bold mb-4 text-black">Trending Search</h2>
      <div className="flex flex-wrap gap-2 mt-5">
        {trendingItems.map((item, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-base font-medium">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
