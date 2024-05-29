import React from "react";
import { cardData } from "../assect/Data/likeData";

function Like() {
  return (
    <div className="bg-green-600">
      <div className="container mx-auto relative py-10">
        <div className="bg-accent/20">
          <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((card) => (
              <div key={card.id} className="max-w-sm mx-auto my-6">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div data-aos="fade-up">
                    <h1 className="text-4xl my-2 text-white font-bold">
                      {card.amount}
                    </h1>
                    <p className="text-2xl my-2 text-white">{card.title}</p>
                    <p className="my-2 text-white font-semibold">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Like;
