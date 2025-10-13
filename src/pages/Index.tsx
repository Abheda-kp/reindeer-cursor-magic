import FeatureDemo from "@/components/FeatureDemo";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import { TeamPage } from "@/components/TeamPage";

const Index = () => {
  return (
    <Layout>
      <div className="container pt-first-element space-y-16">
        <Heading />
        <FeatureDemo />
        <TeamPage />
      </div>
    </Layout>
  );
};

export default Index;
