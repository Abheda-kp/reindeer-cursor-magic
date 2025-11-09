import About from "@/components/About";
import FeatureDemo from "@/components/FeatureDemo";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import { TeamPage } from "@/components/TeamPage";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    // If navigation provided a scroll target, scroll after mount
    // small timeout to allow layout to settle
    const state = (location.state as { scrollTo?: string } | null) ?? null;
    const target = state?.scrollTo;

    if (target && !hasScrolledRef.current) {
      hasScrolledRef.current = true;
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          const headerOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
        // clear history state so it doesn't trigger again
        try {
          window.history.replaceState({}, document.title, location.pathname);
        } catch (e) {
          /* noop */
        }
        hasScrolledRef.current = false;
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  return (
    <Layout>
      <div className="container pt-20 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-10 md:pb-12 lg:pb-16 space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
        <Heading />
        <TrustedBy />
        <FeatureDemo />
        <Testimonials />
        <About />
        <TeamPage />
      </div>
    </Layout>
  );
};

export default Index;
