import React from "react";
import Banner from "./banner";
import Card from "./card";
import AboutUs from "./about-us";
import Properties from "./properties";
import Subscribe from "./subscribe";
import Team from "./tem";
import PropertyDeals from "./property-deals";
import Like from "../like";
import Pricing from "./pricing";
import Testimonials from "./testimonials";
import Images from "../../assect/Images/images.jpg";
import Blog from "./blog";
import Carousal from "./carousal";
// import HomeSection from "./HomeSection";

function index() {
  return (
    <div>
      {/* banner section  */}
      <Banner />
      {/* card section  */}
      <Card />
      {/* about section  */}
      <AboutUs />

      {/* carosal section  */}
      <Carousal />
      {/* Properties section */}
      <Properties />
      {/* Subscribe  */}
      <Subscribe />
      {/* Team section */}
      <Team />
      {/* PropertyDeals SECTION  */}
      <PropertyDeals />
      {/* like section  */}
      <Like />
      {/* pricing section  */}
      <Pricing />
      {/* Testimonials section  */}
      <Testimonials />
      {/* image  */}
      <img
        src={Images}
        alt="Descriptive Alt Text"
        className="w-full h-auto max-h-[500px] my-10 cover"
        style={{ objectFit: "cover" }}
      />
      {/* bolg section  */}
      <Blog />
      {/* <HomeSection /> */}
    </div>
  );
}

export default index;
