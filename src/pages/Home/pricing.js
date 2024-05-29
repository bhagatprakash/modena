import React from "react";
import { pricingData } from "../../assect/Data/pricingData";

function Pricing() {
  return (
    <div>
      <div className="container mx-auto relative py-10 px-4">
        <div className="my-10 text-center">
          <h1 className="text-xl py-1 font-semibold">PRICING</h1>
          <h1 className="text-3xl py-2 font-semibold">Simple Plans Pricing</h1>
          <p className="my-1 text-lg text-gray-400">
            Enjoy this amazing amenity that has all you need to jump in
          </p>
        </div>
        <div className="bg-accent/20 ">
          <div
            className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  "
            data-aos="fade-up"
          >
            {pricingData.map((plan, index) => (
              <div
                key={index}
                className="max-w-sm mx-auto my-6 bg-white border-t p-5 rounded-lg shadow-xl border border-gray-300 dark:border-gray-700"
              >
                <a href="#">
                  <h5 className="my-5 text-lg mx-4 text-left font-semibold tracking-tight text-gray-900 dark:text-white">
                    {plan.title}
                  </h5>
                </a>
                <p className="mb-3 mx-4 text-4xl text-left font-bold text-green-500 dark:text-gray-400">
                  {plan.price}
                </p>
                <p className="mb-3 text-lg font-normal mx-4 text-gray-500 dark:text-gray-400">
                  {plan.description}
                </p>
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="px-3 pt-4 pb-2 border-t border-gray-300"
                  >
                    <h1 className="text-left text-xl text-gray-750">
                      <i className="fa-solid text-green-500 fa-circle-check"></i>{" "}
                      {feature}
                    </h1>
                    <p className="text-left text-lg text-gray-500 mx-6">
                      Enjoy an all day solar heated pool.
                    </p>
                    {featureIndex < plan.features.length - 1 && (
                      <hr className="h-px my-3 bg-gray-400 border-0" />
                    )}
                  </div>
                ))}
                <div className="px-3 pt-4 pb-2 border-t mx-auto border-gray-300">
                  <button className="font-semibold text-green-500 h-12 w-full border border-green-500 hover:bg-green-500 hover:text-white duration-1000">
                    Choose this Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
          <hr className="h-px my-10 bg-gray-400 border-0" />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
