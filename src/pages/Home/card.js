import React from "react";
import card1 from "../../assect/Images/card-1.jpg";
import card2 from "../../assect/Images/card-2.jpg";
import card3 from "../../assect/Images/card-3.jpg";
import card4 from "../../assect/Images/card-4.jpg";

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
          {/* card-1  */}
          <div className="max-w-sm my-6 bg-white rounded-lg shadow-xl border border-gray-300 dark:border-gray-700">
            <div className="h-[225px] overflow-hidden rounded-t-lg">
              <img
                src={card1}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <a href="#">
              <h5 className="my-5 text-xl mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                OFFICE
              </h5>
            </a>
            <p className="mb-3 font-normal mx-4 text-xl text-gray-500 dark:text-gray-400 text-left">
              $420,000
            </p>
            <p className="mb-3 font-normal mx-4 text-gray-500 dark:text-gray-400 text-left">
              Rodeo Drive, 325.
            </p>
            <div className="px-3 pt-4 pb-2 border-t border-gray-300">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-left">
                <i className="fa-solid fa-bed mx-2"></i> 3 Bedrooms
              </span>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-left">
                <i className="fa-solid fa-sink mx-2"></i> 2 Bathrooms
              </span>
            </div>
          </div>

          {/* card-2  */}
          <div className="max-w-sm my-6 bg-white rounded-lg shadow-xl border border-gray-300 dark:border-gray-700">
            <div className="h-[225px] overflow-hidden rounded-t-lg">
              <img
                src={card2}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <a href="#">
              <h5 className="my-5 text-xl mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                APARTMENT
              </h5>
            </a>
            <p className="mb-3 font-normal mx-4 text-xl text-gray-500 dark:text-gray-400 text-left">
              $330,000
            </p>
            <p className="mb-3 font-normal mx-4 text-gray-500 dark:text-gray-400 text-left">
              Rodeo Drive, 325.
            </p>
            <div className="px-3 pt-4 pb-2 border-t border-gray-300">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-left">
                <i className="fa-solid fa-bed mx-2"></i> 3 Bedrooms
              </span>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-left">
                <i className="fa-solid fa-sink mx-2"></i> 2 Bathrooms
              </span>
            </div>
          </div>

          {/* card-3  */}
          <div className="max-w-sm my-6 bg-white rounded-lg shadow-xl border border-gray-300 dark:border-gray-700">
            <div className="h-[225px] overflow-hidden rounded-t-lg">
              <img
                src={card3}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <a href="#">
              <h5 className="my-5 text-xl mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                APARTMENT
              </h5>
            </a>
            <p className="mb-3 font-normal mx-4 text-xl text-gray-500 dark:text-gray-400 text-left">
              $330,000
            </p>
            <p className="mb-3 font-normal mx-4 text-gray-500 dark:text-gray-400 text-left">
              Rodeo Drive, 325.
            </p>
            <div className="px-3 pt-4 pb-2 border-t border-gray-300">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-left">
                <i className="fa-solid fa-bed mx-2"></i> 3 Bedrooms
              </span>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-left">
                <i className="fa-solid fa-sink mx-2"></i> 2 Bathrooms
              </span>
            </div>
          </div>

          {/* card-4  */}
          <div className="max-w-sm my-6 bg-white rounded-lg shadow-xl border border-gray-300 dark:border-gray-700">
            <div className="h-[225px] overflow-hidden rounded-t-lg">
              <img
                src={card4}
                alt="card"
                className="w-full h-full object-cover"
              />
            </div>
            <a href="#">
              <h5 className="my-5 text-xl mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                HOUSE
              </h5>
            </a>
            <p className="mb-3 font-normal mx-4 text-xl text-gray-500 dark:text-gray-400 text-left">
              $370,000
            </p>
            <p className="mb-3 font-normal mx-4 text-gray-500 dark:text-gray-400 text-left">
              Rodeo Drive, 325.
            </p>
            <div className="px-3 pt-4 pb-2 border-t border-gray-300">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-left">
                <i className="fa-solid fa-bed mx-2"></i> 3 Bedrooms
              </span>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-left">
                <i className="fa-solid fa-sink mx-2"></i> 2 Bathrooms
              </span>
            </div>
          </div>
        </div>
        <hr className="h-px my-10 bg-gray-400 border-0" />
      </div>
    </div>
  );
}

export default Card;
