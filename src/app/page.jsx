import HeaderMenu from "./components/headerMenu/HeaderMenu";
import Carusel from "./components/rekl/carusel";
import Footer from "./components/footer/Footer";
import MainServices from "./components/mainServices/MainServices";
import MainHero from "./components/mainHero/MainHero";
import MainYoutube from "./components/mainYoutube/MainYoutube";
import MainProposition from "./components/mainProposition/MainProposition";
import MainFishki from "./components/mainFishki/MainFishki";
import MainMessage from "./components/mainMessage/MainMessage";
import "react-quill/dist/quill.snow.css";

export const metadata = {
  title: "Бухгалтер Консультант",
  description:
    'ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ "АУДИТ КОНСУЛЬТАНТ" та ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ "БУХГАЛТЕР КОНСУЛЬТАНТ" працює в сферах фінансових, аудиторських, юридичних та бухгалтерських послуг та надає повний спектр послуг супроводу бізнесу більше 300 підприємцям і підприємствам по всій території України. ',
};

export default async function Home() {
  const { photos, main, services } = await getData();

  const newBuh = services.services.filter((s) => s.category == "buh");
  const newYur = services.services.filter((s) => s.category == "yur");
  const newBlock = services.services.filter((s) => s.category == "block");
  const newFin = services.services.filter((s) => s.category == "fin");
  const newFinBlock = services.services.filter((s) => s.category == "finblock");

  return (
    <div className="site">
      <HeaderMenu active="home" />
      <div className="container">
        <MainHero data={main} />
        <MainMessage data={main} />
        <MainYoutube data={main} />
        <MainProposition data={main} photos={photos} />
        <MainFishki data={main} />
        <MainServices
          buh={newBuh}
          yur={newYur}
          block={newBlock}
          fin={newFin}
          finblock={newFinBlock}
        />
        <Carusel className="mt100" />
      </div>
      <Footer />
    </div>
  );
}

async function getData() {
  try {
    const res = await fetch("https://consulting.lviv.ua/api/aboutpage", {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const photos = await res.json();
    const res1 = await fetch("https://consulting.lviv.ua/api/mainpage", {
      next: { revalidate: 10 },
    });
    if (!res1.ok) {
      throw new Error("Failed to fetch data");
    }
    const main = await res1.json();
    const res2 = await fetch("https://consulting.lviv.ua/api/servicepage", {
      next: { revalidate: 10 },
    });
    if (!res2.ok) {
      throw new Error("Failed to fetch data");
    }
    const services = await res2.json();
    console.log("qqqq");
    return { photos, main, services };
  } catch (error) {
    return error;
  }
}
