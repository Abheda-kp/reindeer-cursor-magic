import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-card-theme backdrop-blur-md py-40">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-[72px] font-semibold">Try Reindeer now.</h2>
          <Button
            variant="hero"
            size="lg"
            className="mt-4 rounded-full px-5 py-3 h-10 gap-1 bg-white text-black hover:bg-gray-100 transition"
            onClick={() => navigate("/download")}
          >
            Download for Linux
            <Download />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

