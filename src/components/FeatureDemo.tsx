import AutoComplete from "@/assets/videos/auto-complete.mp4";
import FixWithAI from "@/assets/videos/fix-with-ai.mp4";
import InlineChat from "@/assets/videos/inline-chat.mp4";

const featureDemos = [
  {
    title: "AI-powered query autocomplete",
    description:
      "Get real-time SQL suggestions as you type, making queries faster and error-free.",
    videoSrc: AutoComplete,
    position: "left",
  },
  {
    title: "Fix with AI",
    description:
      "Corrects syntax and logic errors in your query automatically, saving time and reducing debugging effort.",
    videoSrc: FixWithAI,
    position: "right",
  },
  {
    title: "Inline Chat",
    description:
      "The inline chat feature allows you to simply type what you need in natural language, and it instantly generates the appropriate query for you.",
    videoSrc: InlineChat,
    position: "left",
  },
];

const FeatureDemo = () => {
  return (
    <section className="py-24">
      <div className="text-4xl mb-6 font-semibold leading-snug">Features</div>
      <div className="container">
        {featureDemos.map((feature, index) => (
          <div key={index} className="feature-card flex gap-8">
            <div
              className={`${
                feature.position === "left" ? "order-1" : "order-2"
              } w-1/3 space-y-6 flex flex-col justify-center`}
            >
              <h2 className="text-xl md:text-2xl font-bold">{feature.title}</h2>
              <p className="text-md text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
            <div
              className={`${
                feature.position === "left" ? "order-2" : "order-1"
              } w-2/3 rounded-2xl overflow-hidden shadow-2xl bg-card h-[500px]`}
            >
              <video
                src={feature.videoSrc}
                autoPlay
                loop
                muted
                controls={false}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureDemo;
