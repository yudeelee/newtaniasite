import HeaderMenu from "../components/headerMenuen/HeaderMenu";
import Carusel from "../components/rekl/carusel";
import Footer from "../components/footer/Footer";
import MainServices from "../components/mainServices/MainServices";
import MainHero from "../components/mainHero/MainHero";
import MainYoutube from "../components/mainYoutube/MainYoutube";
import MainProposition from "../components/mainProposition/MainProposition";
import MainFishki from "../components/mainFishki/MainFishki";
import MainMessage from "../components/mainMessage/MainMessage";
import "react-quill/dist/quill.snow.css";

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
        <MainHero data={main} eng={true} />
        <MainYoutube data={main} eng={true} />
        <MainProposition data={main} photos={photos} eng={true} />
        <MainFishki data={main} eng={true} />
        <MainServices
          buh={newBuh}
          yur={newYur}
          block={newBlock}
          fin={newFin}
          finblock={newFinBlock}
          eng={true}
        />
        <Carusel className="mt100" eng="true" />
        <MainMessage data={main} eng="true" />
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
    return { photos, main, services };
  } catch (error) {
    return error;
  }
}
