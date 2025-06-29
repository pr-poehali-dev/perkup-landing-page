import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import TakeAway from "@/components/TakeAway";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Menu />
      <TakeAway />
      <About />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
