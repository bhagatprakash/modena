import React from "react";
import { FetureData } from "../../assect/Data/fetureData";
import { Link } from "react-router-dom";
function Card() {
  return (
    <div className="max-w-[1320px]  mx-auto relative">
      <div className="my-5">
        <h1 className="text-[14px] text-center py-2 font-bold">FEATURED</h1>
        <h1 className="text-[30px] text-center ">Best Property Deals</h1>
        <p className="my-1 text-[15px] text-center text-gray-400">
          Enjoy this amazing amenitie that has all you need to jump in
        </p>
      </div>
      <div className="bg-accent/20">
        <div className="max-w-[1320px] grid grid-cols-1 gap-6 sm-text-center sm:grid-cols-2 lg:grid-cols-4 px-12">
          {FetureData.map((card, index) => (
            <div
              key={index}
              className="my-6 bg-white rounded-lg shadow-xl border border-gray-300 dark:border-gray-700"
            >
              <div className="h-[225px] overflow-hidden rounded-t-lg relative">
                <Link to={"/home_sectoin"}>
                  <img
                    src={card.image}
                    alt="card"
                    className="w-full h-full object-cover hover:scale-125 duration-1000 "
                    style={{ objectFit: "cover" }}
                  />
                  <span className="absolute top-0 right-0 bg-green-500 m-2 p-1 text-[10px] font-semibold text-white ">
                    For Sale
                  </span>
                </Link>
              </div>

              <a href="#">
                <h5 className="my-2 text-[14px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                  {card.type}
                </h5>
              </a>
              <p className="mb- font-normal mx-4 text-[22px] text-gray-500 dark:text-gray-400 text-left">
                {card.price}
              </p>
              <p className="mb-3 font-[14px] mx-4 text-gray-500 dark:text-gray-400 text-left">
                {card.location}
              </p>
              <div className="pt-4 ml-[8px] pb-2 border-t border-gray-300">
                <div className="flex justify-between">
                  <span className="inline-block px-3 py-1 text-[12px] font-semibold border p-5 border-gray-300 text-gray-700 mr-2 mb-2 text-left">
                    <i className="fa-solid fa-bed mx-2"></i> {card.bedrooms}{" "}
                    Bedrooms
                  </span>
                  <span className="inline-block px-3 py-1 text-[12px] font-semibold border p-5 border-gray-300 text-gray-700 mr-2 mb-2 text-left">
                    <i className="fa-solid fa-sink mx-2"></i> {card.bathrooms}{" "}
                    Bathrooms
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="h-px my-10 bg-gray-400 border-0" />
      </div>
    </div>
  );
}

export default Card;
