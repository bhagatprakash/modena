import React from "react";

function Footer() {
  return (
    <>
      <div className="max-w-[1320px]   flex flex-col  mx-auto sm:flex-row">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 text-center md:text-left  lg:grid-cols-4  gap-5 my-10 px-5">
          <div className="cursor-pointer">
            <h1 className="text-2xl font-semibold my-5">Company</h1>
            <p className="text-red-500 text-xl">Home</p>
            <p className="text-xl py-1">Services</p>
            <p className="text-xl py-1">About Us</p>
            <p className="text-xl py-1 ">Why Choose Us</p>
            <p className="text-xl py-1">Testimonials</p>
            <p className="text-xl py-1">Contact Us</p>
          </div>
          <div className=" cursor-pointer">
            <h1 className="text-2xl font-semibold my-5">Pages</h1>
            <p className="text-xl py-1">404</p>
            <p className="text-xl py-1">Licensing</p>
            <p className="text-xl py-1">Instructions</p>
            <p className="text-xl py-1">Style Guide</p>
            <p className="text-xl py-1">ChangeLog</p>
            <p className="text-xl py-1">More Templates!</p>
          </div>
          <div className=" cursor-pointer">
            <h1 className="text-2xl font-semibold my-5">Address</h1>
            <p className="text-xl  py-1">
              123 Dental Avenue City Ville State 12345 United States
            </p>
            <p className="text-xl  cursor-pointer">View Maps</p>
            <h1 className="text-2xl font-semibold my-3">Inquiries</h1>
            <p className="text-xl  py-1">(123) 456-7800</p>
            <p className="text-xl  py-1">info@57dentcare.com</p>
          </div>
          <div className=" cursor-pointer">
            <h1 className="text-2xl font-semibold my-5">Newsletter</h1>
            <p className="text-xl  py-1">Stay updated with our latest news</p>
            <div class="relative w-full sm:w-[300px] mt-2">
              <input
                type="text"
                placeholder="Your Email"
                className="border border-gray-600 py-2 h-[45px] w-full px-3 pr-5 rounded-[20px] font-semibold"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="fa-solid fa-arrow-right text-xl"></i>
              </div>
            </div>

            <h1 className="text-2xl font-semibold my-3  ">Follow Us</h1>
            <div className=" space-x-3 sm:text-center  py-1">
              <i className="text-3xl fa-brands fa-instagram"></i>
              <i className="text-3xl fa-brands fa-whatsapp"></i>
              <i className="text-3xl fa-brands fa-facebook"></i>
              <i className="text-3xl fa-brands fa-twitter"></i>
              <i className="text-3xl fa-brands fa-youtube"></i>
              <i className="text-3xl fa-brands fa-tiktok"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
