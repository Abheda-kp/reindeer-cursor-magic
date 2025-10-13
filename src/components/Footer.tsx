import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t bg-background/95 backdrop-blur-md py-16">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Try Reindeer now
          </h2>
          <Button
            variant="hero"
            size="lg"
            onClick={() => navigate("/download")}
          >
            <Download className="mr-2 h-5 w-5" />
            Download
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

