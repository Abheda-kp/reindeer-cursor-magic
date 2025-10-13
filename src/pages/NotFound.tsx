import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout showFooter={false}>
      <div className="flex min-h-[calc(100vh-var(--site-header-height))] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold">404</h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Oops! Page not found
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
