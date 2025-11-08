import FeatureDemo from "@/components/FeatureDemo";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import { TeamPage } from "@/components/TeamPage";
import Testimonials from "@/components/Testimonials";
import UsedBy from "@/components/UsedBy";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // If navigation provided a scroll target, scroll after mount
    // small timeout to allow layout to settle
  const state = (location.state as { scrollTo?: string } | null) ?? null;
  const target = state?.scrollTo;
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
        // clear history state so it doesn't trigger again
        try {
          window.history.replaceState({}, document.title, location.pathname);
        } catch (e) {
          /* noop */
        }
      }, 60);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
