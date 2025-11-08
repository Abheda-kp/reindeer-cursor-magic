const cardHeight = 'calc(100vh - var(--site-header-height) - 20rem)';

const featureDemos = [
  {
    title: 'Magically accurate autocomplete',
    description:
      'Get real-time SQL suggestions as you type, making queries faster and error-free.',
    linkText: 'Learn about tab →',
    linkHref: '#',
    videoSrc: '/videos/autocomplete.mp4',
    position: 'left',
  },
  {
    title: 'Fix with AI',
    description:
      'Corrects syntax and logic errors in your query automatically, saving time and reducing debugging effort.',
    linkText: 'See how AI fixes SQL queries →',
    linkHref: '#',
    videoSrc: '/videos/fix-with-ai.mp4',
    position: 'right',
  },
  {
    title: 'Inline Chat',
    description:
      'The inline chat feature allows you to simply type what you need in natural language, and it instantly generates the appropriate query for you.',
    linkText: 'Explore natural language queries →',
    linkHref: '#',
    videoSrc: '/videos/inline-chat.mp4',
    position: 'left',
  },
];

const FeatureDemo = () => {
  return (
    <section className="py-3 sm:py-12 border-t" id="features">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold-custom text-color-primary mb-2">
         Features
          </h2>
          <p className="text-color-secondary text-size-md max-w-2xl mx-auto">
            Explore how each feature enhances your SQL experience.
          </p>
        </div>
        {featureDemos.map((feature, index) => (
          <div
            key={index}
            className="feature-card flex flex-col md:flex-row md:items-center md:gap-8 relative md:min-h-[calc(100vh-var(--site-header-height)-20rem)]"
          >
            <div
              className={`${
                feature.position === 'left' ? 'md:order-1' : 'md:order-2'
              } w-full md:w-1/3 flex flex-col justify-center max-w-prose p-4 sm:px-8`}
              style={{ position: 'relative', zIndex: 2 }}
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
                feature.position === 'left' ? 'md:order-2' : 'md:order-1'
              } w-full md:w-2/3 overflow-hidden flex items-center justify-center px-4 sm:px-8`}
            >
              {/* Aspect-ratio wrapper so video scales consistently on tablets (iPad Pro) */}
              <div
                className="relative w-full flex justify-center"
                style={{
                  aspectRatio: '16/9',
                  width: '100%',
                  maxWidth: '720px',
                  maxHeight: 'calc(100vh - var(--site-header-height) - 8rem)',
                }}
              >
                <video
                  src={feature.videoSrc}
                  autoPlay
                  loop
                  muted
                  controls={false}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  preload="metadata"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureDemo;

//bg-card
