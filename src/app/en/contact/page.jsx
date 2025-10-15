import React from "react";
import HeaderMenu from "../../components/headerMenuen/HeaderMenu";
import Footer from "../../components/footeren/Footer";
import ContactPage from "../../components/contact/ContactPage";

export const metadata = {
  title: "Order Audit or Accounting Services",
  description:
    "Submit a request to receive a personalized consultation. We’ll prepare a solution tailored to your business needs!",
};

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
