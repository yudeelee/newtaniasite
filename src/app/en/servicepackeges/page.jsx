import React from "react";
import ServicePage from "../../components/services/ServicePage";
import HeaderMenu from "../../components/headerMenuen/HeaderMenu";
import Footer from "../../components/footeren/Footer";

export const metadata = {
  title: "Legal Service Packages — Ready-Made Solutions for Your Business",
  description:
    "Choose a convenient legal service package for your company. We provide ongoing legal support, document preparation, consultations, and representation of your interests.",
};

export default async function Page() {
  const data = await getData();
  const newData = { services: [] };
  newData.services = data.services.filter((pos) => pos.category === "block");
  return (
    <div>
      <HeaderMenu active="services" />
      <ServicePage data={newData} title="Legal Services Packages" eng={true} />
      <Footer />
    </div>
  );
}

async function getData() {
  try {
    const res = await fetch("https://consulting.lviv.ua/api/servicepage", {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const posts = res.json();
    return posts;
  } catch (error) {
    return error;
  }
}
