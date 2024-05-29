import React, { useEffect } from "react";
import HeaderImage from "../assect/Images/HEADER IMAGE.png";

function Header() {
  useEffect(() => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  }, []);
  return (
    <>
      <header>
        <nav className="flex flex-wrap  justify-between my-5 px-5 lg:px-20  ">
          <div>
            <img
              src={HeaderImage}
              className="h-[24px] my-3"
              alt="header-image"
            />
          </div>
          <div className="flex md:hidden">
            <button id="hamburger">
              <img
                className="toggle block"
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="40"
                height="40"
              />
              <img
                className="toggle hidden"
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="40"
                height="40"
              />
            </button>
          </div>
          <div className="toggle hidden w-full md:w-auto md:flex  row-gap-25 text-bold mt-5 md:mt-0  md:border-none">
            <a
              href="#"
              className="block md:inline-block lg:text-[16px] md:text-[12px] font-bold px-2  lg:[px-3] py-3 "
            >
              PROPERTIES<i className="fa-solid fa-angle-right mx-2"></i>
            </a>
            <a
              href="#"
              className="block md:inline-block   lg:text-[16px]  md:text-[12px] font-bold  px-2  lg:[px-3] py-3 "
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="block md:inline-block   px-2  lg:[px-3] py-3 lg:text-[15px] md:text-[12px] font-bold  "
            >
              SERVICES
            </a>
            <a
              href="#"
              className="block md:inline-block  px-2  lg:[px-3] py-3 lg:text-[16px] md:text-[12px] font-bold   "
            >
              FAQ
            </a>
            <a
              href="#"
              className="block md:inline-block  px-2  lg:[px-3] py-3 lg:text-[15px] md:text-[12px] font-bold   "
            >
              BLOG
            </a>
            <a
              href="#"
              className="block md:inline-block px-2  lg:[px-3] py-3 lg:text-[16px] md:text-[12px] font-bold    "
            >
              CONTACT US
            </a>
            <a
              href="#"
              className="block md:inline-block px-2  lg:[px-3] py-3 lg:text-[16px] md:text-[12px] font-bold    "
            >
              PAGES<i className="fa-solid fa-angle-right mx-2"></i>
            </a>
            <a
              href="#"
              className="block md:inline-block   px-2  lg:[px-3] py-3 lg:text-[16px] md:text-[12px] font-bold    "
            >
              <i className="fa-brands fa-whatsapp text-green-500 font-semibold text-[25px] md:text-[18px] "></i>{" "}
              CALL US TODAY <span className="text-green-500">899-504-629</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
