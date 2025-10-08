import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(217,91%,60%,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto">
            Built to make you extraordinarily productive, Reindeer is the best way to manage databases with AI.
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => window.location.href = '/download'}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Download for Linux
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
