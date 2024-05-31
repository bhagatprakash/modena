import React from "react";
import banner from "../../assect/Images/banner-Image.png";
import { BlogData } from "../../assect/Data/blogData";

function Blog() {
  return (
    <div>
      <div className="container mx-auto relative py-10 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid  ">
          <p className="text-left text-[15px] font-bold">BLOG</p>
          <h1 className="text-left text-[30px] my-2 font-semibold">
            Stay Updated
          </h1>
        </div>
        <div className="bg-accent/20 p-4 md:p-6 ">
          <div
            className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
            data-aos="fade-up"
          >
            {BlogData.map((blog) => (
              <div
                key={blog.id}
                className="my-6 bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="h-[225px] overflow-hidden">
                  <img
                    src={blog.image}
                    alt="card"
                    className="w-full h-full object-cover hover:scale-125 transition-transform duration-1000"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <a href="#">
                  <h5 className="my-3 text-[22px] mx-4 font-semibold tracking-tight text-gray-700 dark:text-white text-left">
                    {blog.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal mx-4 text-[15px] text-gray-500 dark:text-gray-400 text-left">
                  {blog.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center my-5">
          <hr className="h-[1px] bg-gray-500 border-0 w-[700px] my-4 mx-5" />
          <img src={banner} alt="blog img" className="h-[30px]" />
          <hr className="h-[1px] bg-gray-500 border-0 w-[700px] my-4 mx-5" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
{
  /* <div className="flex justify-center my-5">
  <hr className="h-[1px] bg-gray-500 border-0 w-[700px] my-4 mx-5" />
  <img src={banner} alt="blog img" className="h-[30px]" />
  <hr className="h-[1px] bg-gray-500 border-0 w-[700px] my-4 mx-5" />
</div>; */
}
