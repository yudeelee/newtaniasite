import React from "react";
import AboutPage from "../../components/about/aboutPage";
import HeaderMenu from "../../components/headerMenuen/HeaderMenu";
import Footer from "../../components/footeren/Footer";

export const metadata = {
  title:
    "Audit Consultant and Accountant Consultant — Comprehensive Business Support",
  description:
    "We help businesses manage all financial, accounting, tax, and legal matters. A complete back-office solution: audit, accounting, taxation, and legal support — all in one team of experts.",
};

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
