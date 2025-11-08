import FeatureDemo from "@/components/FeatureDemo";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import { TeamPage } from "@/components/TeamPage";
import Testimonials from "@/components/Testimonials";
import UsedBy from "@/components/UsedBy";

const Index = () => {
  return (
    <Layout>
      <div className="container px-4 sm:px-8 pt-24 sm:pt-36 space-y-8 sm:space-y-16">
        <Heading />
        {/* <UsedBy /> */}
        <FeatureDemo />
        <Testimonials />
        <TeamPage />
      </div>
    </Layout>
  );
};

export default Index;
