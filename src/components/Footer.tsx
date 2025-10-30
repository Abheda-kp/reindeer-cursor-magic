import { useNavigate } from "react-router-dom";
import DownloadForButton from "./DownloadForButton";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-card-theme backdrop-blur-md py-40">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-[72px] font-semibold">Try Reindeer now.</h2>

          <DownloadForButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
