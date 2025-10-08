import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import FeatureDemo from "@/components/FeatureDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Features />
      <FeatureDemo />
    </div>
  );
};

export default Index;
