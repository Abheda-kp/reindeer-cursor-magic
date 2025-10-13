import AutoComplete from "@/assets/videos/auto-complete.mp4";
import FixWithAI from "@/assets/videos/fix-with-ai.mp4";
import InlineChat from "@/assets/videos/inline-chat.mp4";

const featureDemos = [
  {
    title: "AI-powered query autocomplete",
    description:
      "Get real-time SQL suggestions as you type, making queries faster and error-free.",
    linkText: "Try autocomplete for databases ↗",
    linkHref: "#",
    videoSrc: AutoComplete,
    position: "left",
  },
  {
    title: "Fix with AI",
    description:
      "Corrects syntax and logic errors in your query automatically, saving time and reducing debugging effort.",
    linkText: "See how AI fixes SQL queries ↗",
    linkHref: "#",
    videoSrc: FixWithAI,
    position: "right",
  },
  {
    title: "Inline Chat",
    description:
      "The inline chat feature allows you to simply type what you need in natural language, and it instantly generates the appropriate query for you.",
    linkText: "Explore natural language queries ↗",
    linkHref: "#",
    videoSrc: InlineChat,
    position: "left",
  },
];

const FeatureDemo = () => {
  return (
    <section className="py-12">
      <div className="text-4xl mb-8 font-semibold leading-snug">Features</div>
      <div className="container space-y-12">
        {featureDemos.map((feature, index) => (
          <div
            key={index}
            className="feature-card flex"
            style={{
              minHeight: "calc(100vh - var(--site-header-height) - 10rem)",
            }}
          >
            <div
              className={`${
                feature.position === "left" ? "order-1" : "order-2"
              } w-1/3 flex flex-col justify-center max-w-prose`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-size-md leading-snug-custom font-semibold-custom text-color-primary">
                    {feature.title}
                  </h3>
                  <p className="text-size-md leading-normal-custom font-normal-custom text-color-secondary">
                    {feature.description}
                  </p>
                </div>
                <a href={feature.linkHref} className="feature-link">
                  {feature.linkText}
                </a>
              </div>
            </div>
            <div
              className={`${
                feature.position === "left" ? "order-2" : "order-1"
              } w-2/3 rounded-2xl overflow-hidden shadow-2xl bg-card flex items-center`}
              style={{
                minHeight: "calc(100vh - var(--site-header-height) - 10rem)",
              }}
            >
              <video
                src={feature.videoSrc}
                autoPlay
                loop
                muted
                controls={false}
                className="w-full object-contain"
                style={{
                  minHeight: "calc(100vh - var(--site-header-height) - 10rem)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureDemo;
