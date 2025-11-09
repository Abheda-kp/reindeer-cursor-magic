import { useNavigate } from "react-router-dom";
import DownloadForButton from "./DownloadForButton";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-card-theme backdrop-blur-md py-8 sm:py-16 md:py-24 lg:py-40">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-6 md:gap-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] font-semibold px-4">
            Try Reindeer now.
          </h2>

          <DownloadForButton className="sm:px-6 md:px-8 text-base  sm:text-lg md:text-xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
