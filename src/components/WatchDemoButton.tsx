import { Button } from "./ui/button";

export default function WatchDemoButton({
  className = "",
  text = "How to setup",
}) {
  return (
    <Button
      asChild
      variant="outline"
      size="lg"
      className={`rounded-full px-8 py-3 transition ${className}`}
    >
      <a
        href="https://youtu.be/jAdXQA8D3L4?feature=shared"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </Button>
  );
}
