import React from "react";
import HeaderMenu from "../components/headerMenu/HeaderMenu";
import Footer from "../components/footer/Footer";
import ContactPage from "../components/contact/ContactPage";

export const metadata = {
  title: "Замовити аудиторські чи бухгалтерські послуги",
  description:
    "Залиште заявку, щоб отримати персональну консультацію. Ми підготуємо рішення, що відповідатиме потребам вашого бізнесу!",
};

const page = () => {
  return (
    <div>
      <HeaderMenu active="contact" />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default page;
