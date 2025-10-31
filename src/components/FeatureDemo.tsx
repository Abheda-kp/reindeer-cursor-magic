const cardHeight = "calc(100vh - var(--site-header-height) - 20rem)";

const featureDemos = [
  {
    title: "Magically accurate autocomplete",
    description:
      "Get real-time SQL suggestions as you type, making queries faster and error-free.",
    linkText: "Learn about tab →",
    linkHref: "#",
    videoSrc: "/videos/autocomplete-v3.mp4",
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
    <section className="py-12">
      <div className="container">
        {featureDemos.map((feature, index) => (
          <div key={index} className="feature-card flex relative ">
            {/* Optional overlay for better clarity on the card content */}
            <div
              style={{
                minHeight: cardHeight,
              }}
            />
            <div
              className={`${
                feature.position === "left" ? "order-1" : "order-2"
              } w-1/3 flex flex-col justify-center max-w-prose`}
              style={{ position: "relative", zIndex: 2 }}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-size-lg leading-snug-custom font-semibold-custom text-color-primary">
                    {feature.title}
                  </h3>
                  <p className="text-size-md leading-snug-custom font-normal-custom text-color-secondary">
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
              } w-full  overflow-hidden  flex items-center justify-center`}
              style={{
                position: "relative",
                // zIndex: 2,

                minHeight: cardHeight,
                // Background image is applied to the whole card
                // backgroundImage: `url(${backgroundImage})`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                // backgroundRepeat: "no-repeat",
              }}
            >
              <video
                src={feature.videoSrc}
                autoPlay
                loop
                muted
                controls={true}
                className="w-full h-full object-fill"
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
