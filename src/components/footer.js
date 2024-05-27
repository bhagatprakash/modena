import React from "react";
import banner from "../assect/Images/banner-Image.png";
import card1 from "../assect/Images/card-1.jpg";
import card2 from "../assect/Images/card-2.jpg";
import card3 from "../assect/Images/card-3.jpg";

function Footer() {
  return (
    <>
      <div className="bg-green-800">
        <div className="max-w-[1520px] flex flex-col mx-auto sm:flex-row">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 text-center md:text-left lg:grid-cols-5 my-10 px-5 gap-6">
            <div className="cursor-pointer text-white">
              <img
                src={banner}
                alt="blog img"
                className="h-[30px] text-white my-6 mx-auto md:mx-0"
              />
              <h1 className="text-2xl font-semibold">MODENA</h1>
              <p className="text-[20px] my-3">
                Modena is a Real Estate Webflow template that was thought to be
                easy to customize and easy to create your property listings.
              </p>
              <div className="space-x-3 text-center lg:text-left  py-3">
                <i className="text-[16px] fa-brands fa-instagram "></i>
                <i className="text-[16px] fa-brands fa-whatsapp"></i>
                <i className="text-[16px] fa-brands fa-facebook"></i>
                <i className="text-[16px] fa-brands fa-twitter"></i>
                <i className="text-[16px] fa-brands fa-youtube"></i>
                <i className="text-[16px] fa-brands fa-tiktok"></i>
              </div>
            </div>
            <div className="cursor-pointer text-white">
              <h1 className="text-[20px] font-semibold my-5">MENU</h1>
              <p className="text-[20px] py-1">Home</p>
              <p className="text-[20px] py-1">Services</p>
              <p className="text-[20px] py-1">About Us</p>
              <p className="text-[20px] py-1">Properties</p>
              <p className="text-[20px] py-1">Faq</p>
              <p className="text-[20px] py-1">Blog</p>
              <p className="text-[20px] py-1">Contact Us</p>
            </div>
            <div className="cursor-pointer text-white">
              <h1 className="text-[20px] font-semibold my-5">SOCIAL</h1>
              <p className="text-[20px] py-1">Facebook</p>
              <p className="text-[20px] cursor-pointer">Twitter</p>
              <p className="text-[20px] py-1">Instagram</p>
              <p className="text-[20px] py-1">Linkedin</p>
            </div>
            <div className="cursor-pointer text-white">
              <h1 className="text-[20px] font-semibold my-5">CONTACT</h1>
              <p className="text-[20px] py-1">Evergreen 27</p>
              <p className="text-[20px] cursor-pointer">San Francisco, Cal</p>
              <p className="text-[20px] py-1">800 123-456</p>
              <p className="text-[20px] py-1">abc@shivay.com</p>
            </div>
            <div className="cursor-pointer text-white">
              <h1 className="text-[20px] font-semibold my-5">
                LATEST PROPERTIES
              </h1>
              <div className="grid gap-4">
                <div className=" w-full lg:max-w-[250px] lg:flex  shadow-md rounded-lg overflow-hidden">
                  <img
                    src={card1}
                    alt="Property"
                    className="h-48 w-full lg:h-auto lg:w-20 sm:h-[100px] object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between leading-normal">
                    <div>
                      <p className="text-white font-bold">HOUSE</p>
                      <div className="text-white text-left text-xl mb-2">
                        $290,000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex  justify-center">
                  <hr className="h-[1px] bg-gray-500 border-0 w-full" />
                </div>
                <div className="max-w-sm w-full lg:max-w-[250px] lg:flex  shadow-md rounded-lg overflow-hidden">
                  <img
                    src={card2}
                    alt="Property"
                    className="h-48 w-full lg:h-auto lg:w-20 sm:h-[100px] object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between leading-normal">
                    <div>
                      <p className="text-white font-bold">HOUSE</p>
                      <div className="text-white text-left text-xl mb-2">
                        $500,000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex  justify-center">
                  <hr className="h-[1px] bg-gray-500 border-0 w-full" />
                </div>
                <div className="max-w-sm w-full lg:max-w-[250px] lg:flex  shadow-md rounded-lg overflow-hidden">
                  <img
                    src={card3}
                    alt="Property"
                    className="h-48 w-full lg:h-auto lg:w-20 sm:h-[100px] object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between leading-normal">
                    <div>
                      <p className="text-white font-bold">HOUSE</p>
                      <div className="text-white text-left text-xl mb-2">
                        $170,000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex  justify-center">
                  <hr className="h-[1px] bg-gray-500 border-0 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="h-[1px] bg-gray-500 border-0 w-[100%] max-w-[1500px]" />
        </div>
        <p className="text-[16px] p-5  md:mx-20 text-white underline">
          Buy Template | Version 1.4 | Image Licensing | Made By Pablo Ramos |
          Visit My Templates | Powered By Webflow
        </p>
      </div>
    </>
  );
}

export default Footer;
