import reindeerInterface from "@/assets/image/reindeer-interface.png";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Heading = () => {
  const navigate = useNavigate();

  return (
    <section
      className="text-white"
      style={{ minHeight: "calc(100vh - var(--site-header-height) - 8rem)" }}
    >
      {/* <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(217,91%,60%,0.1),transparent_50%)]" /> */}

      <div
        className="container mx-auto flex flex-col"
        style={{ minHeight: "calc(100vh - var(--site-header-height) - 8rem)" }}
      >
        <div className="space-y-6 py-6">
          <h1 className="text-size-md-lg leading-snug-custom font-semibold-custom text-color-primary">
            Reindeer: Transforming How You Query <br />
            Databases with AI.
          </h1>

          <Button
            variant="hero"
            size="lg"
            className="rounded-full px-6 py-2 h-10 bg-white text-black hover:bg-gray-100 transition"
            onClick={() => navigate("/download")}
          >
            Download for Linux
            <Download className="" />
          </Button>
        </div>
        <div
          className="rounded-sm shadow-2xl bg-card flex-1"
          style={{ minHeight: "0" }}
        >
          <img
            src={reindeerInterface}
            alt="Reindeer Database Management Interface"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Heading;
