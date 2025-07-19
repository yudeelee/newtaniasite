import React from "react";
import ServicePage from "../../components/services/ServicePage";
import HeaderMenu from "../../components/headerMenuen/HeaderMenu";
import Footer from "../../components/footer/Footer";

export default async function Page() {
  const data = await getData();
  const newData = { services: [] };
  newData.services = data.services.filter((pos) => pos.category === "buh");
  return (
    <div>
      <HeaderMenu active="services" />
      <ServicePage data={newData} title="Accounting services" eng={true} />
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
      throw new Error("Failed to fetch data");
    }
    const posts = res.json();
    return posts;
  } catch (error) {
    return error;
  }
}
