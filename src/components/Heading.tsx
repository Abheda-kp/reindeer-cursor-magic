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
        className="flex flex-col justify-center items-center text-center pt-4 px-4 sm:px-6 lg:px-8"
        style={{ minHeight: "calc(100vh - var(--site-header-height) - 8rem)" }}
      >
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="space-y-3 sm:space-y-4">
            <a 
              href="https://www.producthunt.com/products/reindeer?launch=reindeer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center text-sm sm:text-lg md:text-[22px] leading-snug-custom font-semibold-custom text-color-secondary gap-2 cursor-pointer hover:text-color-primary transition-all duration-300"
            >
              <span className="">Product hunt launch 🎉 </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[100px] leading-snug-custom font-semibold-custom text-color-primary px-2">
              Cursor for Databases.
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-snug-custom font-normal-custom text-color-secondary text-center max-w-[90%] sm:max-w-[600px] lg:max-w-[800px] mx-auto">
              {
                "Reindeer understands your database schema, generates production-ready SQL in seconds, autocompletes, and fixes without ever leaving your IDE."
              }
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <WatchDemoButton className="text-sm sm:text-base lg:text-lg font-semibold w-full sm:w-auto" />
            <DownloadForButton
              text="Download now"
              className="text-sm sm:text-base lg:text-lg font-semibold w-full sm:w-auto"
            />
          </div>
        </div>
        <div
          id="demo-video"
          className="mt-8 sm:mt-12 lg:mt-16 flex-1 overflow-hidden w-full rounded-lg sm:rounded-xl p-4"
          style={{
            // Background image is applied to the whole card
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <video
            src="/videos/Reindeer_Demo_1.mp4"
            autoPlay
            loop
            muted
            controls
            className="w-full object-cover"
            style={{
              aspectRatio: "16/9",
              height: "auto",
              minHeight: "250px",
              maxHeight: imageHeight,
            }}
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
};
export default Heading;
