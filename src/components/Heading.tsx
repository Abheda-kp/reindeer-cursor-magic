import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Heading = () => {
  return (
    <section className="relative min-h-[40vh] flex items-center  text-white">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(217,91%,60%,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-2xl md:text-4xl font-semibold leading-snug">
            Reindeer: Transforming How You Query Databases with AI.
          </h1>

          <Button
            variant="hero"
            size="lg"
            className="mt-4 rounded-full px-6 py-3 bg-white text-black hover:bg-gray-100 transition"
            onClick={() => (window.location.href = "/download")}
          >
            <Download className="mr-2 h-5 w-5" />
            Download
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Heading;
