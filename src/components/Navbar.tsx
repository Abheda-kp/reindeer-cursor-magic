import { Button } from "@/components/ui/button";
import reindeerLogo from "@/assets/reindeer-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <img src={reindeerLogo} alt="Reindeer" className="h-8 w-8" />
            <span className="text-xl font-semibold">Reindeer</span>
          </a>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button variant="hero" size="sm">
              Download
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
