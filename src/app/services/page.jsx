import React from "react";
import ServicePage from "../components/services/ServicePage";
import HeaderMenu from "../components/headerMenu/HeaderMenu";
import Footer from "../components/footer/Footer";

export const metadata = {
  title: "Бухгалтерські послуги для бізнесу — повний бухгалтерський супровід",
  description:
    "Комплексне бухгалтерське обслуговування для компаній різних форм власності. Ведення обліку, звітність, кадровий облік, оптимізація оподаткування та фінансовий контроль.",
};

export default async function Page() {
  const data = await getData();
  const newData = { services: [] };
  newData.services = data.services.filter((pos) => pos.category === "buh");
  return (
    <div>
      <HeaderMenu active="services" />
      <ServicePage data={newData} title="Бухгалтерські послуги" />
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
