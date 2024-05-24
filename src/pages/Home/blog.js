import React from "react";
import Blogs from "../../assect/Images/blog-1.jpg";
import Blog1 from "../../assect/Images/blog-2.jpg";
import Blog2 from "../../assect/Images/blog-3.jpg";
import banner from "../../assect/Images/banner-Image.png";

function Blog() {
  return (
    <div>
      <div className="container mx-auto relative py-10">
        <p className="text-left text-[18px] font-bold ml-12">BLOG</p>
        <h1 className="text-left text-4xl my-5 font-semibold ml-12">
          Stay Updated
        </h1>
        <div className="bg-accent/20">
          <div className="grid grid-cols-1 gap-6 sm-text-center sm:grid-cols-2 lg:grid-cols-3 px-12">
            {/* card-1  */}
            <div className="max-w-sm my-6 bg-white  ">
              <div className="h-[225px] overflow-hidden ">
                <img
                  src={Blogs}
                  alt="card"
                  className="w-full h-full object-cover"
                />
              </div>
              <a href="#">
                <h5 className="my-3 text-2xl mx-4 font-semibold tracking-tight text-gray-700 dark:text-white text-left">
                  How To Remodel Your House
                </h5>
              </a>
              <p className="mb-3 font-normal mx-4 text-[18px] text-gray-500 dark:text-gray-400 text-left">
                —Home Building
              </p>
            </div>

            {/* card-2  */}
            <div className="max-w-sm my-6 bg-white  ">
              <div className="h-[225px] overflow-hidden ">
                <img
                  src={Blog1}
                  alt="card"
                  className="w-full h-full object-cover"
                />
              </div>
              <a href="#">
                <h5 className="my-3 text-2xl mx-4 font-semibold tracking-tight text-gray-700 dark:text-white text-left">
                  Find Your Dream Home
                </h5>
              </a>
              <p className="mb-3 font-normal mx-4 text-[18px] text-gray-500 dark:text-gray-400 text-left">
                —Luxury living
              </p>
            </div>

            {/* card-3  */}
            <div className="max-w-sm my-6 bg-white  ">
              <div className="h-[225px] overflow-hidden ">
                <img
                  src={Blog2}
                  alt="card"
                  className="w-full h-full object-cover"
                />
              </div>
              <a href="#">
                <h5 className="my-3 text-2xl mx-4 font-semibold tracking-tight text-gray-700 dark:text-white text-left">
                  We Visited An Art Museum
                </h5>
              </a>
              <p className="mb-3 font-normal mx-4 text-[18px] text-gray-500 dark:text-gray-400 text-left">
                —Luxury living
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center my-5">
          <hr className="h-[1px] bg-gray-500 border-0 w-[700px] my-4 mx-5" />
          <img src={banner} alt="blog img" className="h-[30px]" />
          <hr className="h-[1px] bg-gray-500 border-0 w-[700px] my-4 mx-5" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
