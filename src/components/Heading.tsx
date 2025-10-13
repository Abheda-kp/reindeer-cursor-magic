import reindeerInterface from "@/assets/image/reindeer-interface.png";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Heading = () => {
  const navigate = useNavigate();

  return (
    <section className=" text-white">
      {/* <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(217,91%,60%,0.1),transparent_50%)]" /> */}

      <div className="container mx-auto flex">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold leading-snug">
            Reindeer: Transforming How You Query Databases with AI.
          </h1>

          <Button
            variant="hero"
            size="sm"
            className="mt-4 rounded-full px-6 py-3 bg-white text-black hover:bg-gray-100 transition"
            onClick={() => navigate("/download")}
          >
            Download
            <Download className="h-5 w-5" />
          </Button>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-card h-[500px]">
          <img
            src={reindeerInterface}
            alt="Reindeer Database Management Interface"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Heading;
