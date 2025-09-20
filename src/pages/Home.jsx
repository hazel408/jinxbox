import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LookingFor from "../components/LookingFor";
import Reviews from "../components/Reviews";
import Songs from "../components/Songs";
import MusicBoxes from "../components/MusicBoxes";
import Gifts from "../components/Gifts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LookingFor />
      <Reviews />
      <Songs />
      <MusicBoxes />
      <Gifts />
      <Footer />
      
    </>
  );
}
