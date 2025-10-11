import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import ProductShowcase from "@/components/ProductShowcase";
import FeatureDemo from "@/components/FeatureDemo";
import { TeamPage } from "@/components/TeamPage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Heading />
      <ProductShowcase />
      <FeatureDemo />
      <TeamPage />
    </div>
  );
};

export default Index;
