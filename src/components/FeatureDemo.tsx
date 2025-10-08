import { Button } from "@/components/ui/button";

const featureDemos = [
  {
    title: "AI-powered query suggestions",
    description: "Write SQL naturally and let AI suggest optimizations and improvements to your queries with striking speed and precision.",
    videoPlaceholder: "database-queries.mp4"
  },
  {
    title: "Real-time collaboration",
    description: "Work together with your team in real-time. See changes as they happen and collaborate on complex database operations seamlessly.",
    videoPlaceholder: "collaboration.mp4"
  },
  {
    title: "Intelligent schema design",
    description: "Design and visualize your database schema with AI assistance. Get recommendations for indexes, relationships, and optimizations.",
    videoPlaceholder: "schema-design.mp4"
  }
];

const FeatureDemo = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {featureDemos.map((feature, index) => (
          <div 
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center mb-32 last:mb-0 ${
              index % 2 === 1 ? 'md:grid-flow-dense' : ''
            }`}
          >
            <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl aspect-video">
                {/* Placeholder video - using a gradient background with animated elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/30 animate-pulse" />
                    <p className="text-muted-foreground text-sm">Demo Video: {feature.videoPlaceholder}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
              <h2 className="text-4xl font-bold mb-6">{feature.title}</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {feature.description}
              </p>
              <Button variant="link" className="text-accent p-0 h-auto text-lg">
                Learn more →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureDemo;
