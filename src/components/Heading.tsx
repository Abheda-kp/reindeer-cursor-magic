import backgroundImage from "@/assets/image/background.jpeg";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DownloadForButton from "./DownloadForButton";
import WatchDemoButton from "./WatchDemoButton";

const Heading = () => {
  const navigate = useNavigate();
  return (
    <section className="text-white min-h-[calc(100vh-var(--site-header-height))] px-4 sm:px-6 lg:px-8">
      <div
        className="flex flex-col items-center text-center min-h-[calc(100vh-var(--site-header-height))]"
      >
        <div className="space-y-8 sm:space-y-10 max-w-7xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            <span className="inline-flex justify-center items-center text-sm sm:text-base md:text-[22px] leading-snug-custom font-semibold-custom text-color-secondary gap-2 cursor-pointer hover:text-color-primary transition-all duration-300">
              <span>Product hunt launch 🎉</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[100px] leading-tight sm:leading-snug-custom font-semibold-custom text-color-primary">
              Cursor for Databases.
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal-custom text-color-secondary text-center max-w-[95%] sm:max-w-[800px] mx-auto">
              {
                "Reindeer understands your database schema, generates production-ready SQL in seconds, autocompletes, and fixes without ever leaving your IDE."
              }
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
            <WatchDemoButton className="text-base sm:text-lg font-semibold w-full sm:w-auto" />
            <DownloadForButton
              text="Download now"
              className="text-base sm:text-lg font-semibold w-full sm:w-auto"
            />
          </div>
        </div>
        <div
          className="mt-12 sm:mt-20 w-full max-w-7xl mx-auto rounded-lg sm:rounded-xl overflow-hidden"
        >
          {/* Use CSS aspect-ratio + max-height so the video scales correctly on large tablets (e.g. iPad Pro) */}
          <div
            className="relative w-full"
            style={{
              aspectRatio: '16/9',
              maxHeight: 'calc(100vh - var(--site-header-height) - 6rem)',
            }}
          >
            <video
              src="/videos/Reindeer_Demo.mp4"
              autoPlay
              loop
              muted
              controls
              className="absolute inset-0 w-full h-full object-cover"
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Heading;
