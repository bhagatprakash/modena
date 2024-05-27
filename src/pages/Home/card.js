import React from "react";
import { FetureData } from "../../assect/Data/fetureData";
function Card() {
  return (
    <div className="container mx-auto relative py-10">
      <div className="my-10">
        <h1 className="text-xl text-center py-2 font-semibold">FEATURED</h1>
        <h1 className="text-3xl text-center font-semibold">
          Best Property Deals
        </h1>
        <p className="my-1 text-[18px] text-center text-gray-400">
          Enjoy this amazing amenitie that has all you need to jump in
        </p>
      </div>
      <div className="bg-accent/20">
        <div className="grid grid-cols-1 gap-6 sm-text-center sm:grid-cols-2 lg:grid-cols-4 px-12">
          {FetureData.map((card, index) => (
            <div
              key={index}
              className="max-w-sm my-6 bg-white rounded-lg shadow-xl border border-gray-300 dark:border-gray-700"
            >
              <div className="h-[225px] overflow-hidden rounded-t-lg">
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover"
                />
              </div>
              <a href="#">
                <h5 className="my-5 text-xl mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                  {card.type}
                </h5>
              </a>
              <p className="mb-3 font-normal mx-4 text-xl text-gray-500 dark:text-gray-400 text-left">
                {card.price}
              </p>
              <p className="mb-3 font-normal mx-4 text-gray-500 dark:text-gray-400 text-left">
                {card.location}
              </p>
              <div className="px-3 pt-4 pb-2 border-t border-gray-300">
                <span className="inline-block px-3 py-1 text-sm font-semibold border p-5 border-gray-300 text-gray-700 mr-2 mb-2 text-left">
                  <i className="fa-solid fa-bed mx-2"></i> {card.bedrooms}{" "}
                  Bedrooms
                </span>
                <span className="inline-block px-3 py-1 text-sm font-semibold border p-5 border-gray-300 text-gray-700 mr-2 mb-2 text-left">
                  <i className="fa-solid fa-sink mx-2"></i>
                  {card.bathrooms} Bathrooms
                </span>
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
