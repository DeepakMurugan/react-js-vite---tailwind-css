import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
// import Industries from "../components/Industries";
import Indus from "../components/Indus"
import Expertise from "../components/Expertise";
import CoreValue from "../components/CoreValue";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyFooterCTA from "../components/StickyFooterCTA";
import RecognitionCarousel from "../components/RecognitionCarousel";
import Expert from "../components/Expert";

import homeBg from "../assets/home-bg.png";


export default function Home() {
  return (
    // <div className="bg-[url('../assets/home-bg.png')] bg-cover  bg-no-repeat"> 

     <div
      style={{ backgroundImage: `url(${homeBg})` }}
      className="bg-contain bg-center bg-repeat"
    >
   

        <main>
          <Header />
          <Hero />
          <About />
          <Stats />
          {/* <Industries /> */}
          <Indus />
          <Expert />
          <CoreValue />
          <RecognitionCarousel />
          <Expertise />
          <Footer />
          <StickyFooterCTA />
        </main>

      {/* </div> */}
    </div>
  );
}
