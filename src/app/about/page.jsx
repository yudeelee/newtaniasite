import React from "react";
import AboutPage from "../components/about/aboutPage";
import HeaderMenu from "../components/headerMenu/HeaderMenu";
import Footer from "../components/footer/Footer";

export const metadata = {
  title:
    "Аудит Консультант та Бухгалтер Консультант — комплексний супровід бізнесу",
  description:
    "Ми допомагаємо закрити всі фінансові, бухгалтерські, податкові та юридичні питання бізнесу. Повний бек-офіс під ключ: аудит, облік, податки, юридичний супровід — все в одній команді експертів.",
};

const page = () => {
  return (
    <div>
      <HeaderMenu active="about" />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default page;
