import { Button } from "./ui/button";

export default function WatchDemoButton({
  className = "",
  text = "How to ",
}) {
  const handleScrollToVideo = () => {
    const videoElement = document.getElementById("demo-video");
    if (videoElement) {
      const headerOffset = 80;
      const elementPosition = videoElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className={`rounded-full px-8 py-3 transition ${className}`}
      onClick={handleScrollToVideo}
    >
      {text}
    </Button>
  );
}
