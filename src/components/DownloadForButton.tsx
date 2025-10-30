import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function DownloadForButton({
  className = "",
  text = "Download",
}) {
  const navigate = useNavigate();
  return (
    <Button
      variant="hero"
      size="lg"
      className={`rounded-full px-5 py-3 bg-white text-black hover:bg-primary/90 transition ${className}`}
      onClick={() => navigate("/download")}
    >
      {text}
    </Button>
  );
}
