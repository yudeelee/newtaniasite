import React from "react";
import HeaderMenu from "../../components/headerMenuen/HeaderMenu";
import Footer from "../../components/footeren/Footer";
import ContactPage from "../../components/contact/ContactPage";

const page = () => {
  return (
    <div>
      <HeaderMenu active="contact" />
      <ContactPage eng={true} />
      <Footer />
    </div>
  );
};

export default page;
