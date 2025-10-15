import React from "react";
import ServicePage from "../components/services/ServicePage";
import HeaderMenu from "../components/headerMenu/HeaderMenu";
import Footer from "../components/footer/Footer";

export const metadata = {
  title: "Пакети фінансових послуг — стратегічне управління фінансами бізнесу",
  description:
    "Готові пакети фінансових послуг для малого та середнього бізнесу. Управлінський облік, фінансове планування, аналіз прибутковості та підготовка до масштабування.",
};

export default async function Page() {
  const data = await getData();
  const newData = { services: [] };
  newData.services = data.services.filter((pos) => pos.category === "finblock");
  return (
    <div>
      <HeaderMenu active="services" />
      <ServicePage data={newData} title="Пакети фінансових послуг" />
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
    console.log("qqqq");
    return posts;
  } catch (error) {
    return error;
  }
}
