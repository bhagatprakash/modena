import React from "react";

function Like() {
  return (
    <div className="bg-green-400">
      <div className="container mx-auto relative py-10">
        <div className="bg-accent/20">
          <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* card-1  */}
            <div className="max-w-sm mx-auto my-6   ">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className=" animate__animated animate__backInUp">
                  <h1 className="text-4xl my-2 text-white font-bold">$390M</h1>
                  <p className="text-2xl my-2 text-white">Property Sales</p>
                  <p className="my-2 text-white font-semibold">
                    Cras pulvinar ultricies vehicula cras et nulla id lorem
                    vulputate pulvinar eget
                  </p>
                  <p className="font-semibold text-white">non neque.</p>
                </div>
              </div>
            </div>

            {/* card-2  */}
            <div className="max-w-sm mx-auto my-6  ">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className=" animate__animated animate__backInUp">
                  <h1 className="text-4xl my-2 text-white font-bold">+1,290</h1>
                  <p className="text-2xl text-white my-2">Active Listings</p>
                  <p className="my-2 text-white font-semibold">
                    Cras pulvinar ultricies vehicula cras et nulla id lorem
                    vulputate pulvinar eget
                  </p>
                  <p className="font-semibold text-white">non neque.</p>
                </div>
              </div>
            </div>

            {/* card-3  */}
            <div className="max-w-sm mx-auto my-6  ">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className=" animate__animated animate__backInUp">
                  <h1 className="text-4xl my-2 text-white font-bold">210x</h1>
                  <p className="text-2xl text-white my-2">Revenue Growth</p>
                  <p className="my-2 text-white font-semibold">
                    Cras pulvinar ultricies vehicula cras et nulla id lorem
                    vulputate pulvinar eget
                  </p>
                  <p className="font-semibold text-white ">non neque.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Like;
