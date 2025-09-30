import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeatureBanner from "@/components/FeatureBanner";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <FeatureBanner />
      <Collections />
      <Footer />
    </div>
  );
};

export default Index;
