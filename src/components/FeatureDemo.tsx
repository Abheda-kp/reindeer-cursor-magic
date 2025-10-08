import React from "react";
import FixWithAI from "@/assets/videos/fix-with-ai.mp4";

const featureDemos = [
  {
    title: "AI-powered query autocomplete",
    description:
      "Get real-time SQL suggestions as you type, making queries faster and error-free.",
    videoSrc: FixWithAI,
  },
  {
    title: "Real-time collaboration",
    description:
      "Work together with your team in real-time. See changes as they happen and collaborate on complex database operations seamlessly.",
    videoSrc: FixWithAI,
  },
  {
    title: "Intelligent schema design",
    description:
      "Design and visualize your database schema with AI assistance. Get recommendations for indexes, relationships, and optimizations.",
    videoSrc: FixWithAI,
  },
];

const FeatureDemo = () => {
  return (
    <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
        <div className="text-4xl flex items-center mb-5">Features</div>
        {featureDemos.map((feature, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-16 items-center mb-32 last:mb-0 bg-[#1b1a13] p-2"
          >
            {/* Video/Demo - Always on Left */}
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

            {/* Description - Always on Right */}
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
