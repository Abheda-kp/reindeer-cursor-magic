import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    author: {
      name: "Sarah Johnson",
      handle: "@sarahj",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Luva has transformed how I manage my inbox. I can now listen to emails while commuting and respond instantly with voice commands.",
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@mchen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "As a founder, time is everything. This tool helps me stay on top of emails without being glued to my screen. The calendar integration is brilliant!",
  },
  {
    author: {
      name: "Emily Rodriguez",
      handle: "@emilyrod",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Customer support has never been easier. I can handle urgent emails hands-free and the AI perfectly structures my responses.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className=" text-foreground py-12 sm:py-24 md:py-32 px-0 border-b"
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16 px-4 sm:px-8">
        <div className="flex flex-col items-center gap-4 px-2 sm:gap-8">
          <h2 className="max-w-[720px] text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight sm:leading-tight text-white">
            Loved by professionals worldwide
          </h2>
          <p className="text-sm sm:text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            See what our users have to say about Reindeer
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:0.5rem] sm:[--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] flex-row animate-scroll group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#14120B] via-[#14120B]/80 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#14120B] via-[#14120B]/80 to-transparent sm:block" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
