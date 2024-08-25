import React from 'react';
const product1 = [
  {
    id: "E",
    title: "KO 40Android",
    type: "TV",
    desc1: "Smart Full HD",
    desc2: "Android TV with",
    desc3: "Google Assistant",
    imageUrl: "https://s3-alpha-sig.figma.com/img/8012/bd49/2e326035bc994cb0fb99eb88b79fa1bd?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~D5Pz0lcrkmfgqkgcdTG8qaPgZ-b2hX5NGJPtvZq-oPTHngjECcCFhjvGnBoIWfkBF50RmEbMIju3YartakjH8dXcaiyMgjYilpLs2XBJsNFY1i0fKP-20JczjcJU3jZQcg4yAwmOBy10H~J1l7CZOWOVHrSfNVxsmf5u2lQcs8EMiJLL9J0vNhBWz0tnzl84OTNVFK4m~u15nni9j0gCY~~SOcQWHlkfV9ealYfWWGQKanij7Ln5JcCWBKBA169AdG~xOrcT67jZNogAGVkxrd-QxPBiiLyHv-PBcGYjSJgYn4Y80hs-x4MrEhllla5Ei0Lx0j4Z5F25E6N5BEDQ__",
   
  },
  {
    
    title: "Humidifying Fan",
    type: "From $299",
    
    imageUrl: "https://s3-alpha-sig.figma.com/img/b331/c5f5/83cf29622be77c3b13f08b8f3957775c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D36uXESSNm72BfX8719pwFaNwBBWiPDq6KFCH2PuEQdCbb3ZyAN37IKupSLHGYkTiGVtwg58TLgszErYDh78nrfHVt4ixv1v~nWgpkGPM7dMXI4ThZmwjkAKOQpb1YCo4-mg1dZ4THRxU7ziwUMk-cy5eYBSuNm3mXL7LcjwIo12JJ-T~mwDfciFrdftC9zPl0IiPnK~ohaZYxlRVbr3ess~O8PbUFlhN7ytiI~svKJikvVNZJ8GM0QBxeFbDmxG5h1BjaNvaqCbi8Z9HlXthMv4LWmRORKj7BQa3pVkuRuBDA21tAlBdUv9TPzlbM5~POQoAr2CT9TFRfdWtomwtA__",
   
  },
  {
    id: "iPad mini",
    title: "Mega Power in mini size",
    type: "2022",
  
    imageUrl:"https://s3-alpha-sig.figma.com/img/eb6d/c351/cb0fa9e1c18ac2620f1e035e6cd265ab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=okia-wsUMuliMGslCHwGwiXgyMQ7xLqDs8hPCPxkez~wmGtDyu7xiWldavncBPjKvbyffNGzGlzeuv2kes4KFHK4ORZsYyrP-dgaH5jIhSMASSqEeqP59J090XAAEjZ36yqTP2gCbSvw7-SLbb-5XbfO4TH6Q~71YWJCLcmbHUBYmgaOOwoK0rFnkIp5TiDSdoRSVCspFoh7R9K2KawG28XrHfNVqzY4rG3e7wZS53Irf0tOdQvnDkmwGBrynRU~sPGXe275xgQRRVyw8rtWuFRl6-VWgh7hiWhpy7ROlAGl2LoTtySks~nEnXV9mxE1kGErfeJZzHdk4jESuQuZJQ__",
   
  },
  {
    id: "From",
    title: "AIR",
    title2:"PUFFIER",
    type: "$169",
  
    imageUrl:"https://s3-alpha-sig.figma.com/img/875b/053f/4f6cf7525616e38498527204827c2917?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fzOWhELPv7El0EeH7eemkjbhsN0mDBaAveJ8j6taI3yelt3VroLFJxOFN-POECmW6Chf2ZjIIfeBhkc2ufaMNaKwTAyu2TOU1S3FYlAmh~JyTGLaXjLUYYla3KdZQzlCQSlAc8S3CoiZcRuVB06X8A10uoDLVA4crQkjJy2HkUVvk0T4WDu1BPMn7GXLgZnoD0dZTtRPMCmJzB77DQcv1opaXVrNzLF~lZrwgKN8Qwbkv5o1vOc6DMTL5~--emdM2zqs8Qsd~jfE2DI0eKfqKuYKH0nrCT2RnjqHCKNq1h0idTyh5QrrfCen7jEMpx~tqjUcLbVHgHlIEzWIm45u0Q__",
   
  },
  {
    title: "WASHING MACHINE",
    title2:"ANATICO",
    type: "MAX 2",
  
    imageUrl:"https://s3-alpha-sig.figma.com/img/50a5/4535/fafd06131fa1ff875bd8fe9c42636008?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jN~edOq-7s7SItqEYkmjzuKgo-NSIFdrZ2ChksWQaIGVsJNB-7-5YnIIGCqWDYFHICtly5qW8HsqzJ0OqKPTG6en7N6mDqI3UXvFKHk3j6Tx0xMjx8j-XKYREc53hx7RH-8RCVVMnUf84TJqVAEOITp6XUsO6lV33-XsOnnoJmXRY9DZzLp2ai5BxdMZPwdDGDmafzYWM6vg8i0vhbTR1Lrx5vGnCggYptmRlc5opYPh~pzDIRiPtbHcAE3lbp096k~6cePsaJ9Ou7ck1kGRp6V82vv0T5W04lq5tOQVQEysv8w43~3vHWEXbcIBTOLd8aad1eO0DLctOO2ivsIOcA__",
   
  },
]

function TopStory() {
  return (
    <>
      <div className="flex flex-col bg-white h-[475px] ml-[15%]">
        <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 mt-1">
          
          {/* First Card (EKO 40" Android TV) */}
          <div className="relative flex p-4 rounded-2xl w-full md:w-[60%] h-[500px]">
            <img
              src={product1[0].imageUrl}
              alt="EKO 40 Android TV"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute text-white p-4">
              <div className="text-left ml-7 mt-10 text-3xl md:text-4xl">
                <h3 className="font-thin">{product1[0].id}</h3>
                <h3 className="font-thin">{product1[0].title}</h3>
                <h3 className="font-thin">{product1[0].type}</h3>
              </div>
              <p className="text-gray-200 text-sm md:text-xl mt-7 ml-11">
                <h6>{product1[0].desc1} </h6>
                <h6>{product1[0].desc2}</h6>
                <h6>{product1[0].desc3}</h6>
              </p>
              <button className="bg-[#4B3EC4] border border-[#4B3EC4] text-white mt-6 md:mt-40 px-4 py-2 rounded-full hover:bg-gray-200 hover:border-gray-200 hover:text-[#4B3EC4] ml-12 font-bold w-[150px] h-[40px]">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Second Card (Humidifying Fan) */}
          <div className="relative flex bg-white p-4 rounded-3xl w-full md:w-[30%] h-[500px]">
            <img
              src={product1[1].imageUrl}
              alt="Humidifying Fan"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute text-white p-4 h-[450px] text-center justify-center">
              <h1 className="text-xl md:text-3xl font-bold">{product1[1].title}</h1>
              <p className="text-white text-sm md:text-xl mt-4">{product1[1].type}</p>
              <button className="bg-white text-black px-4 hover:bg-gray-800 hover:text-white w-[189.34px] h-[53px] mt-4 md:mt-9 absolute bottom-[5%] justify-center ml-[3%] transform -translate-x-1/2 rounded-full font-bold">
                DISCOVER
              </button>
            </div>
          </div>
        </div>

        {/* Flex Container for Third, Fourth, and Fifth Cards */}
        <div className="flex flex-wrap md:flex-nowrap  space-y-4 md:space-y-0 md:space-x-4 mt-[30%] absolute left-1 ml-44 ">
          {/* Third Card (iPad mini 2022) */}
          <div className="relative flex  p-4 rounded-3xl w-full md:w-[50%]  ">
            <img
              src={product1[2].imageUrl}
              alt="iPad mini 2022"
              className="w-[800px] h-[280px]  object-cover rounded-xl ml-16 "
            />
            <div className="absolute text-black p-4 h-[450px] text-center justify-center">
              <h1 className="text-sm ml-6 ">{product1[2].id} </h1>
              <h1 className="text-sm ">{product1[2].type}</h1>
              <p className="text-black text-sm md:text-xl mt-4 ml-4">{product1[2].title}</p>
              <button className="bg-gray-900 text-white px-4 hover:bg-gray-800 hover:text-white w-[140.34px] h-[53px] mt-4 md:mt-9 absolute bottom-[45%] justify-center ml-[0%] transform -translate-x-1/2 rounded-full font-bold">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Fourth Card (Air Purifier) */}
          <div className="relative flex  p-4 rounded-3xl w-full md:w-[30%] ">
            <img
              src={product1[3].imageUrl}
              alt="Air Purifier"
              className="w-[330.5px] h-[280px]  absolute ml-16 object-cover rounded-xl "
            />
            <div className="absolute text-black p-4 h-[450px] text-center justify-center ml-20">
            <h3 className="font-semibold text-white text-xl mr-5 mt-4">{product1[3].title}</h3>
            <h3 className="font-semiblod text-xl text-white">{product1[3].title2}</h3>
            <p className="text-gray-500 text-xl md:text-xl  mt-4">{product1[3].id}</p>
            <p className="text-green-600 text-xl md:text-xl font-bold ">{product1[3].type}</p>
                
              
             
            </div>
          </div>

          {/* Fifth Card (Smartwatch) */}
          <div className="relative flex p-4 rounded-3xl w-full md:w-[30%]  ">
            <img
              src={product1[4].imageUrl}
              alt="Smartwatch"
              className="w-[320.5px] h-[280px] top-[1009px] left-[1307px] size-[20px] object-cover rounded-xl ml-10"
            />
            <div className="absolute text-black p-4 h-[450px] text-center justify-center ml-16">
            <h3 className="font-thin text-white">{product1[4].title}</h3>
                <h3 className="font-semiblod text-xl text-white">{product1[4].title2}</h3>
                <h3 className="font-semisbold text-xl text-white">{product1[4].type}</h3>
              
              <button className="bg-white text-black px-4 hover:bg-gray-800 hover:text-white w-[140.34px] h-[53px] mt-4 md:mt-9 absolute bottom-[45%] justify-center ml-[0%] transform -translate-x-1/2 rounded-full font-bold">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default TopStory;
