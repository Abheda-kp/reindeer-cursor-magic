import FeatureDemo from "@/components/FeatureDemo";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import { TeamPage } from "@/components/TeamPage";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <Layout>
      <div className="container pt-12 space-y-16">
        <Heading />
        <FeatureDemo />
        <Testimonials />
        <TeamPage />
      </div>
    </Layout>
  );
};

export default Index;
