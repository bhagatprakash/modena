import React from "react";
import Banner from "./banner";
import Card from "./card";
import AboutUs from "./about-us";
import Properties from "./properties";
import Subscribe from "./subscribe";

function index() {
  return (
    <div>
      {/* banner section  */}
      <Banner />
      {/* card section  */}
      <Card />
      {/* about section  */}
      <AboutUs />
      {/* Properties section */}
      <Properties />
      {/* Subscribe  */}
      <Subscribe />
    </div>
  );
}

export default index;
