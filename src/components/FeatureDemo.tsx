const cardHeight = "calc(100vh - var(--site-header-height) - 20rem)";

const featureDemos = [
  {
    title: "Magically accurate autocomplete",
    description:
      "Get real-time SQL suggestions as you type, making queries faster and error-free.",
    linkText: "Learn about tab →",
    linkHref: "#",
    videoSrc: "/videos/autocomplete.mp4",
    position: "left",
  },
  {
    title: "Fix with AI",
    description:
      "Corrects syntax and logic errors in your query automatically, saving time and reducing debugging effort.",
    linkText: "See how AI fixes SQL queries →",
    linkHref: "#",
    videoSrc: "/videos/fix-with-ai.mp4",
    position: "right",
  },
  {
    title: "Inline Chat",
    description:
      "The inline chat feature allows you to simply type what you need in natural language, and it instantly generates the appropriate query for you.",
    linkText: "Explore natural language queries →",
    linkHref: "#",
    videoSrc: "/videos/inline-chat.mp4",
    position: "left",
  },
];

const FeatureDemo = () => {
  return (
    <section id="features" className="py-6 sm:py-8 md:py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        {featureDemos.map((feature, index) => (
          <div
            key={index}
            className="feature-card flex flex-col lg:flex-row relative mb-20 sm:mb-28 lg:mb-40 last:mb-0 lg:h-[var(--card-height)]"
            style={
              {
                "--card-height": cardHeight,
              } as React.CSSProperties
            }
          >
            <div
              className={`${
                feature.position === "left" ? "lg:order-1" : "lg:order-2"
              } w-full lg:w-1/3 flex flex-col justify-center max-w-prose px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-0`}
              style={{ position: "relative", zIndex: 2 }}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl md:text-size-lg leading-snug-custom font-semibold-custom text-color-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-size-md leading-snug-custom font-normal-custom text-color-secondary">
                    {feature.description}
                  </p>
                </div>
                <a
                  href={feature.linkHref}
                  className="feature-link text-sm sm:text-base"
                >
                  {feature.linkText}
                </a>
              </div>
            </div>
            <div
              className={`${
                feature.position === "left" ? "lg:order-2" : "lg:order-1"
              } w-full lg:w-2/3 overflow-hidden flex items-center justify-center`}
              style={{
                position: "relative",
              }}
            >
              <video
                src={feature.videoSrc}
                autoPlay
                loop
                muted
                controls={false}
                className="w-full h-auto lg:h-full object-contain lg:object-fill"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureDemo;

//bg-card
