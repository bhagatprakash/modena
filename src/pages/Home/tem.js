import React from "react";
import { teamMembers } from "../../assect/Data/temData";

function Team() {
  return (
    <div className="container mx-auto relative my-5 ">
      <div className="my-10">
        <h1 className="text-[13px] text-center py-2  font-bold">TEAM</h1>
        <h1 className="text-[30px] text-center font-semibold">
          Our Company Team
        </h1>
        <p className="my-1 text-[15px] text-center text-gray-400">
          Enjoy this amazing amenity that has all you need to jump in
        </p>
      </div>
      <div className="bg-accent/20">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto  bg-white rounded-lg shadow-xl border border-gray-300 dark:border-gray-700"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 w-[300px] my-10 mx-12 bg-white  bg-opacity-75 p-4 flex flex-col justify-center items-center"
                  data-aos="fade-up"
                >
                  <h1 className="text-2xl my-2">{member.name}</h1>
                  <div className="flex justify-center">
                    <hr className="h-[3px] bg-green-500 border-0 w-[100px]" />
                  </div>
                  <p className="font-semibold my-3">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
