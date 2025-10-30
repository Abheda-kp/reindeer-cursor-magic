import { Button } from "./ui/button";

export default function WatchDemoButton({
  className = "",
  text = "Watch demo",
}) {
//   const navigate = useNavigate();
  return (
    <Button
      variant="outline"
      size="lg"
      className={`rounded-full px-8 py-3 transition ${className}`}
      //   onClick={() => navigate("/download")}
    >
      {text}
    </Button>
  );
}
