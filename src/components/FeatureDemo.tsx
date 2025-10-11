import FixWithAI from "@/assets/videos/fix-with-ai.mp4";
import InlineChat from "@/assets/videos/inline-chat.mp4";
import AutoComplete from "@/assets/videos/auto-complete.mp4";

const featureDemos = [
  {
    title: "AI-powered query autocomplete",
    description:
      "Get real-time SQL suggestions as you type, making queries faster and error-free.",
    videoSrc: AutoComplete,
  },
  {
    title: "Fix with AI",
    description:
      "Corrects syntax and logic errors in your query automatically, saving time and reducing debugging effort.",
    videoSrc: FixWithAI,
  },
  {
    title: "Inline Chat",
    description:
      "The inline chat feature allows you to simply type what you need in natural language, and it instantly generates the appropriate query for you.",
    videoSrc: InlineChat,
  },
];

const FeatureDemo = () => {
  return (
    <section className="py-24">
      <div className="text-4xl mb-6  ml-60 font-semibold leading-snug">
        Features
      </div>
      <div className="container ">
        {featureDemos.map((feature, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-16 items-center mb-32 last:mb-0 bg-[#1b1a13] p-2"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl aspect-video p-2">
              <video
                src={feature.videoSrc}
                autoPlay
                loop
                muted
                controls={false}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                {feature.title}
              </h2>
              <p className="text-md text-muted-foreground mb-8 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureDemo;
