import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import ProductShowcase from "@/components/ProductShowcase";
import FeatureDemo from "@/components/FeatureDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Heading />
      <ProductShowcase />
      <FeatureDemo />
    </div>
  );
};

export default Index;
