import React from "react";
import AboutPage from "../../components/about/aboutPage";
import HeaderMenu from "../../components/headerMenuen/HeaderMenu";
import Footer from "../../components/footeren/Footer";

const page = () => {
  return (
    <div>
      <HeaderMenu active="about" />
      <AboutPage eng={true} />
      <Footer />
    </div>
  );
};

export default page;
