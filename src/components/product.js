import React from 'react';

const products = [
    {
      id: 1,
      title: "Air Purifier with True HEPA H14 Filter",
      price: 489.00,
      originalPrice: 610.00,
      discount: 15,
      imageUrl: "https://s3-alpha-sig.figma.com/img/bcc9/fee8/4862352d71b0e1bd97b35ba684f74001?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kbl5f9RzMCIiJmbdWrWdvvz93fXm9A4mxNc5ICHOB8xnSjRr24a7Y8H-hTrXlWu4Jks2AUPePAiKeujalAyXdX32kuSIunrEaMN1ao8IPG-iGJGto0hlEipdvQnV6Yxj~eTOM9do482i3pqydETjpGCS~fHDLV6Cktog2gzpmHKanEhv0yo2tDSk70mmF4LxA8Oy~zZmZ03aP3F2dyAyn73n-IcJMmNfUdsKzOIPCaQuROtw3kIMiJlr97pZHofsQi4QrTDwECtnHZcHxy~wyHiZNwijdC9SmyFkWRozmhf3CBp6rgyCTKUbkwWPoleC9T6jTwsvzIvYridCQgWfAg__",
      sold: 24,
      totalStock: 80,
      rating: 4.0,
      reviewsCount: 5,
    },
    {
      id: 2,
      title: "Sona QLED Ultra HD 4K Smart Android TV 55\"",
      price: 1759.00,
      originalPrice: 2069.00,
      discount: 15,
      imageUrl: "https://s3-alpha-sig.figma.com/img/aff1/d1da/6d073a010a4a3c2dde9f96642fbb6981?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YCDX9BiSGUeEMnPqk0X0GovJ~uRUJwsbDD5RIvVo2VieMJfZ-P87NFnHO7kk~ndO~XvX1hckcWXyj0UIMvqe3APyx2rScHxm8ImKUTBmhTSWo61AQJkJ2-tJ74hCKH1S5jc8fMDKfYPAY6YgbFnACH7qldWJYgvSjQCm88JYDdwcLxhexMO6O7M0gZuSDIZIkp8-SLN4zFv1SOyDL55Ips5vt8dTOLU-NZznQBltKI5XrHBeg2kbfVoTccnZFk8NMCZlVaeXucUatsErGu~JOJPEueHO1Kya-pDDVKTki4VLVu-sxAugxJv5WC4-Ps6kgEMVsea~CZcY9Spw50dSxg__",
      sold: 7,
      totalStock: 85,
      rating: 5.0,
      reviewsCount: 2,
    },
    {
      id: 3,
      title: "Air Purifier with True HEPA H13 Filter",
      price: 488.00,
      originalPrice: 619.00,
      discount: 15,
      imageUrl: "https://s3-alpha-sig.figma.com/img/8473/d487/639d45c9cbf705874035d25cece12f73?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMGZ2noIPpQig-~JwBo~WqpM8kSQksvGKA8wa802ZbB-sGAoy9XY2zbcHSlIJl17UZN83bQzrbM7j0w5TcM9MHtZyod9-KULA3Hnen1aLbqAQg0o8zniK2JRTJkGrZfwa82kUsywc2EH1uGxUYTIuIyw0DwX5AVq9h0c1r-VINonjJNRIMPpZQdvMrEvjnzwuUENenmyhCzC0mpweBdL9ZMP2THcd-fU3NQGBsBRDqhUxkX7jIEJ6cj2NxYVfk-PfMhFY75~lQpXEjSpGDFBZ-ptmdNTZPFBRB66ad2YEDTGiiAsQVzlA0ywzJQrCDvVJp51l5nTLWNpBlqaudf4bg__",
      sold: 24,
      totalStock: 80,
      rating: 3.5,
      reviewsCount: 5,
    },
    {
      id: 4,
      title: "Duraton Manual Espresso Machine, Latte, Cappuccino Maker & Espresso Machine",
      price: 489.00,
      originalPrice: 619.00,
      discount: 15,
      imageUrl: "https://s3-alpha-sig.figma.com/img/2807/d971/09ffe67191079dbad6f0cbb03bfe6192?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwWHm14rXJH-7x2kEjg3RfVTNjIip01ArlqhhQ74F9jbcthQQWyGQJ1IX6Fnb07RN-yjaKgFLD655gsTQraiHSjWPl9Od3NIHLSpTd7o3c9DA2ISgsy3~Z0w0q5tDA2S9XjHvzNFVKs3erdhYXnenKTM4rYoP2CVqH1vWwkpFrcLKA7TyNGxnlcOPma01eNyl6wtiqstUcZY9pBupVUgXWw02Fo7N4FthJ-Vx1AmSr~KZm2E6BzaWRdNodFNOS9uwttij8GOZcxY5TkIRq~9ViNsDHnsAb3ohZ4WopLYPkAFjxOi5JCfaQc6o21f6x0jvQrPeyMraTg3TVRhMJk-7g__",
      sold: 82,
      totalStock: 100,
      rating: 4.0,
      reviewsCount: 34,
    },
    {
      id: 5,
      title: "Shark Robot Vacuum with Self-Empty Base",
      price: 325.00,
      originalPrice: 428.00,
      discount: "pre-order",
      imageUrl: "https://s3-alpha-sig.figma.com/img/5a8b/35e9/fff594abf5764db21edd0c2b315be449?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WNRF9-14u1FK9YQbl7l4zorrZfkNaR8~Wh~RW-uNwWsl9EEdsujaflstJpOHX8ZKFJSk6R6YEsYjqZm3tB4r5rJaYilpHZjZAFnRowXrh5wOx7J7JYgJdcn3QULWEBioEn~-26m8Ywd1FLnYIoldcA-6yITJeMbVu2tLqLOnu5WCxMyQuxN7hqUxh3VAt68og7I66ZyTQd~rZGe7mZZSFhVcqghoH0wRc0uCcv0MvpyaO341FSiKOhLOqhTtw4hOLn9qDyJKv54IjQAG2ns7GsK0eFcWLtbkEevIi64uhgoyTDmy-LgPfRczzmQyyWMvswEdqA6O~mgZmWO~jssYLQ__",
      sold: 1,
      totalStock: 10,
      rating: 4.0,
      reviewsCount: 1,
    },
    {
      id: 6,
      title: "Portable Fan Tower with HEPA Filter",
      price: 325.00,
      originalPrice: 428.00,
      discount: 15,
      imageUrl: "https://s3-alpha-sig.figma.com/img/dd7e/4496/8a4c6ea7d76ec860caa57ec46c5fb903?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D40Nw9OyIBSWua6OMHKBhji8dcZJ8-VSknGGvxFQLJv2Yd20B0hQhpZd7EwkpHyghE-AKslTAtLlzH07erDrdzUbBan4s1sNtDZ~ASlCjz-5TGpQuBg27Fz5QaOV3S25jCului1bkyJf4YWyHXp23PpCu67RayNFc8II03lrK8XstTmUpUgKLO-46n~7hKaSbhPtQHSpqJzcC3oRsogUnpbBsOJtNn4QVwXr3ZtpjDl4v~ya4O5wKRzHRTAyiaM~fsLyLHKQgXaXe7UHHh3nRbpnXftgxzuaQ3sUN2RvvHmIADJaWVQ6dxj~m6IPuZgvZUF6JZL7GP-2LjqRcSqHGw__",
      sold: 1,
      totalStock: 50,
      rating: 4.5,
      reviewsCount: 5,
    },
    {
      id: 7,
      title: "Canon DSLR Camera with 18-55mm Lens",
      price: 325.00,
      originalPrice: 428.00,
      discount: 5,
      imageUrl: "https://s3-alpha-sig.figma.com/img/0822/c5b1/4d9d992f91be3bc2124678bfc616006e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fEE9wd3GdeYI-RqN~P5dzGBEdORHNUCG2zBr8nCCmElLlLITqNYLdtfolzFwXJjzdwBeuSnTLGlxR-xWTBwxHR9Y3jYa9y~lqgUNIBLpp~TB4g9AKqrARz3hw7eDDAhoHpPznkqa~At3SC1LWTeKAIfhb-e~7LMUjvuZEPmW86dtri-2cUZx8Y7R3Bxx-eOFTX1NSTnlY-7BtvMkog69eCNhQUCZO6fIVTYp4yna2f1o2Hst4rfs~SERVA41nHJbxqYIV8RIdYD0FK-zvOxD06-sVFkZnIa1yDLnpyY5qxaWUZ7yWrMAUkavugigxdgyhIPdY41YmSubmV~EnJS1mA__",
      sold: 1,
      totalStock: 10,
      rating: 4.8,
      reviewsCount: 23,
    },
  ];
  

  function ProductList() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const soldPercentage = (product.sold / product.totalStock) * 100;
  
          return (
            <div
              key={product.id}
              className="w-[350.59px] bg-white rounded-lg overflow-hidden h-auto border border-[#999999] ml-3 mb-4 "
            >
              <div className="mt-5 mb-5 mr-5 ml-5">
                <div className="relative">
                  <div className="bg-transparent text-red-500 border border-red-500 text-xs font-bold px-2 py-1 rounded-full absolute top-[0px] right-[100px] mr-24">
                    0% Installment
                  </div>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-[350px] h-[300px] object-cover"
                  />
                  <button className="top-[0px] left-[200px] bg-purple-500 text-white rounded-full w-[30px] h-[30px] absolute ml-16">
                    <i className="fa fa-heart text-white text-xl"></i>
                  </button>
                </div>
  
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {product.discount}% OFF
                    </div>
                  </div>
  
                  <h2 className="text-gray-800 text-lg font-bold mt-2">
                    {product.title}
                  </h2>
  
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }, (_, index) => {
                      const starRating = index + 1;
                      return (
                        <i
                          key={index}
                          className={`fa fa-star ${
                            starRating <= product.rating
                              ? 'text-green-500'
                              : 'text-gray-500'
                          } w-4 h-4`}
                        ></i>
                      );
                    })}
                    <span className="text-gray-600 text-sm ml-2">
                      ({product.reviewsCount})
                    </span>
                  </div>
  
                  <div className="flex items-baseline mt-2">
                    <span className="text-red-500 text-xl font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-gray-500 line-through ml-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3 mb-[10%]">
                    <div
                      className="bg-[#4B3EC4] h-2.5 rounded-full"
                      style={{ width: `${soldPercentage}%` }}
                    ></div>
                    <span className="text-gray-600 text-sm mt-2">
                      Sold: {product.sold}/{product.totalStock}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default ProductList;