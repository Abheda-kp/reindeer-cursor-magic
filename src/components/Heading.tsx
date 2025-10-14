import reindeerInterface from "@/assets/image/reindeer-interface.png";
import { useNavigate } from "react-router-dom";
import DownloadForButton from "./DownloadForButton";
const Heading = () => {
  const sectionHeight = "calc(100vh - var(--site-header-height) - 8rem)";
  const imageHeight = "calc(100vh - var(--site-header-height) - 16rem)";
  const navigate = useNavigate();
  return (
    <section className="text-white" style={{ minHeight: sectionHeight }}>
      {/* <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-40" />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(217,91%,60%,0.1),transparent_50%)]" /> */}
      <div
        className="container mx-auto flex flex-col"
        style={{ minHeight: "calc(100vh - var(--site-header-height) - 8rem)" }}
      >
        <div className="space-y-6 py-6">
          <h1 className="text-size-md-lg leading-snug-custom font-semibold-custom text-color-primary">
            Built to make you extraordinarily productive, <br />
            Cursor for Databases.
          </h1>
          <DownloadForButton />
        </div>
        <div
          className="mt-10 rounded-sm shadow-2xl bg-card flex-1"
          style={{ minHeight: "0" }}
        >
          <img
            src={reindeerInterface}
            alt="Reindeer Database Management Interface"
            className="w-full object-fill rounded-sm"
            style={{ height: imageHeight }}
          />
        </div>
      </div>
    </section>
  );
};
export default Heading;
