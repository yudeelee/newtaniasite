import React from "react";
import ServicePage from "../components/services/ServicePage";
import HeaderMenu from "../components/headerMenu/HeaderMenu";
import Footer from "../components/footer/Footer";

export const metadata = {
  title: "Аудиторські послуги — перевірка та оцінка фінансової звітності",
  description:
    "Професійний аудит для компаній: фінансова перевірка, аналіз ризиків, підтвердження звітності та рекомендації для стабільного розвитку бізнесу.",
};

export default async function Page() {
  const data = await getData();
  const newData = { services: [] };
  newData.services = data.services.filter((pos) => pos.category === "fin");
  return (
    <div>
      <HeaderMenu active="services" />
      <ServicePage data={newData} title="Аудиторські послуги" />
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
    // const newPosts = [...posts];
    // // const newPost = newPosts.filter((pos) => pos.category === "buh");
    // console.log(newPost);
    // console.log("qqqq");
    return posts;
  } catch (error) {
    return error;
  }
}
