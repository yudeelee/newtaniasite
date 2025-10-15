import React from "react";
import ServicePage from "../components/services/ServicePage";
import HeaderMenu from "../components/headerMenu/HeaderMenu";
import Footer from "../components/footer/Footer";

export const metadata = {
  title: "Юридичні послуги для бізнесу — правова підтримка компаній",
  description:
    "Повний юридичний супровід бізнесу: від реєстрації компанії та договірного права до кадрових питань, ЗЕД, інтелектуальної власності та резидентства Дія.City.",
};

export default async function Page() {
  const data = await getData();
  const newData = { services: [] };
  newData.services = data.services.filter((pos) => pos.category === "yur");
  return (
    <div>
      <HeaderMenu active="services" />
      <ServicePage data={newData} title="Юридичні послуги" />
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
