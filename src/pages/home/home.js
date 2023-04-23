import "./home.css";
import Hero from "../../components/Hero-Area/Hero";
import About from "../../components/AboutSection/About";
import WhoSection from "../../components/WhoSection/Whosection";
import Feature from "../../components/FeatureSection/Feature";
import ContentSection from "../../components/ContentSection/ContentSection";
import Client from "../../components/clients/client";


const Home = () => {
  return (
    <>    
      <Hero />
      <About />
      <WhoSection />
      <Client/>
      <Feature />      
      <ContentSection />
      
    </>
  );
};

export default Home;
