import backgroundImage from "@/assets/image/background.jpeg";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DownloadForButton from "./DownloadForButton";
import WatchDemoButton from "./WatchDemoButton";

const Heading = () => {
  const sectionHeight = "calc(100vh - var(--site-header-height) - 8rem)";
  const imageHeight = "calc(100vh - var(--site-header-height) - 16rem)";
  const navigate = useNavigate();
  return (
    <section className="text-white" style={{ minHeight: sectionHeight }}>
      {/* <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-40" />
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(217,91%,60%,0.1),transparent_50%)]" /> */}
      <div
        className="flex flex-col justify-center items-center text-center pt-4"
        style={{ minHeight: "calc(100vh - var(--site-header-height) - 8rem)" }}
      >
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="flex flex-row justify-center items-center text-[22px] leading-snug-custom font-semibold-custom text-color-secondary gap-2 cursor-pointer hover:text-color-primary transition-all duration-300">
              <span className="">Product hunt launch 🎉 </span>
              <ArrowRight />
            </span>
            <h1 className="text-[100px] leading-snug-custom font-semibold-custom text-color-primary">
              Cursor for Databases.
            </h1>
            <p className="text-size-md leading-snug-custom font-normal-custom text-color-secondary text-center max-w-[800px] justify-self-center">
              {
                "Reindeer understands your database schema, generates production-ready SQL in seconds, autocompletes, and fixes without ever leaving your IDE."
              }
            </p>
          </div>
          <div className="flex flex-row gap-6 justify-center">
            <WatchDemoButton className="text-lg font-semibold" />
            <DownloadForButton
              text="Download now"
              className="text-lg font-semibold"
            />
          </div>
        </div>
        <div
          className="mt-16 rounded-sm flex-1 p-3"
          style={{
            // Background image is applied to the whole card
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: imageHeight,
          }}
        >
          <video
            src="/videos/Reindeer_Demo.mp4"
            autoPlay
            loop
            muted
            controls
            className="w-full h-full object-cover border-opacity-0"
            style={{
              minHeight: imageHeight,
              aspectRatio: "16/9",
            }}
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
};
export default Heading;
