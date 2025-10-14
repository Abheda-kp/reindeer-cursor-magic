import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function DownloadForButton({ className = "" }) {
  const navigate = useNavigate();

  const [os, setOs] = useState("Unknown");

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (
      userAgent.indexOf("Mac") !== -1 ||
      userAgent.indexOf("Macintosh") !== -1
    ) {
      setOs("Mac");
    } else if (userAgent.indexOf("Linux") !== -1) {
      setOs("Linux");
    }
    //  else if (userAgent.indexOf("Windows") !== -1) {
    //   setOs("Windows");
    // }
  }, []);

  return (
    <Button
      variant="hero"
      size="lg"
      className={`rounded-full px-5 py-3 bg-white text-black hover:bg-gray-100 transition ${className}`}
      onClick={() => navigate("/download")}
    >
      {os ? `Download for ${os}` : "Download"}
      <Download />
    </Button>
  );
}
