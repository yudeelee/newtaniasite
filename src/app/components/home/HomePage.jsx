import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.scss";
import Carusel from "../rekl/carusel";
import Footer from "../footer/Footer";
import MainServices from "../mainServices/MainServices";
import MainHero from "../mainHero/MainHero";
import MainYoutube from "../mainYoutube/MainYoutube";
import MainProposition from "../mainProposition/MainProposition";
import MainFishki from "../mainFishki/MainFishki";
import MainMessage from "../mainMessage/MainMessage";

const HomePage = ({ photos, main, services }) => {    

  const newBuh = services.services.filter((s) => s.category == "buh");
  const newYur = services.services.filter((s) => s.category == "yur");
  const newBlock = services.services.filter(
    (s) => s.category == "block"
  );
  const newFin = services.services.filter((s) => s.category == "fin");
  const newFinBlock = services.services.filter(
    (s) => s.category == "finblock"
  );
  
 return (
    <div className={styles.home}>      
      <div className="container">
        <MainHero data={main}/>      
        <MainYoutube data={main}/> 
        <MainProposition data={main} photos={photos} />       
        <MainFishki data={main}/>      
        <MainServices buh={newBuh} yur={newYur} block={newBlock} fin={newFin} finblock={newFinBlock}/> 
        <Carusel className="mt100"/>        
        <MainMessage data={main}/>
      </div>    
      <Footer />
    </div>
  );
};

export default HomePage;
