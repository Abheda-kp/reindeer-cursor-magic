import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    author: {
      name: "Diana Hu",
      title: "General Partner, Y Combinator",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "It was night and day from one batch to another, adoption went from single digits to over 80%. It just spread like wildfire, all the best builders were using Cursor.",
  },
  {
    author: {
      name: "shadcn",
      title: "Creator of shadcn/ui",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
    },
    text: "The most useful AI tool that I currently pay for, hands down, is Cursor. It's fast, autocompletes when and where you need it to, handles brackets properly, sensible keyboard shortcuts, bring-your-own-model... everything is well put together.",
  },
  {
    author: {
      name: "Andrej Karpathy",
      title: "CEO, Eureka Labs",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    text: "The best LLM applications have an autonomy slider: you control how much independence to give the AI. In Cursor, you can do Tab completion, Cmd+K for targeted edits, or you can let it rip with the full autonomy agentic version.",
  },
  {
    author: {
      name: "Patrick Collison",
      title: "Co-Founder & CEO, Stripe",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Cursor quickly grew from hundreds to thousands of extremely enthusiastic Stripe employees. We spend more on R&D and software creation than any other undertaking, and there's significant economic outcomes when making that process more efficient and productive.",
  },
  {
    author: {
      name: "ThePrimeagen",
      title: "@ThePrimeagen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: [
      "It's official.",
      "I hate vibe coding.",
      "I love Cursor tab coding.",
      "It's wild.",
    ],
  },
  {
    author: {
      name: "Greg Brockman",
      title: "President, OpenAI",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    },
    text: "It's definitely becoming more fun to be a programmer. It's less about digging through pages and more about what you want to happen. We are at the 1% of what's possible, and it's in interactive experiences like Cursor where models like GPT-5 shine brightest.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="text-foreground py-6 sm:py-12 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-6 sm:gap-10 md:gap-14 lg:gap-16 text-center">
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          <h2 className="max-w-[90%] sm:max-w-[720px] text-2xl sm:text-3xl md:text-4xl font-semibold-custom leading-snug-custom text-color-primary">
            A new way to experience databases.
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-2">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
