import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "It was night and day from one batch to another, adoption went from single digits to over 80%. It just spread like wildfire, all the best builders were using Cursor.",
    name: "Diana Hu",
    title: "General Partner, Y Combinator",
    avatar:"https://cdn.sanity.io/images/2hv88549/production/5b975491b9ace97040eca409dfa9819cbb80ab76-84x84.png?auto=format"
  },
  {
    quote:
      "The most useful AI tool that I currently pay for, hands down, is Cursor. It's fast, autocompletes when and where you need it to, handles brackets properly, sensible keyboard shortcuts, bring-your-own-model... everything is well put together.",
    name: "shadcn",
    title: "Creator of shadcn/ui",
  },
  {
    quote:
      "The best LLM applications have an autonomy slider: you control how much independence to give the AI. In Cursor, you can do Tab completion, Cmd+K for targeted edits, or you can let it rip with the full autonomy agentic version.",
    name: "Andrej Karpathy",
    title: "CEO, Eureka Labs",
  },
  {
    quote:
      "Cursor quickly grew from hundreds to thousands of extremely enthusiastic Stripe employees. We spend more on R&D and software creation than any other undertaking, and there's significant economic outcomes when making that process more efficient and productive.",
    name: "Patrick Collison",
    title: "Co‑Founder & CEO, Stripe",
  },
  {
    quote:
      "It's official. I hate vibe coding. I love Cursor tab coding. It's wild.",
    name: "ThePrimeagen",
    title: "@ThePrimeagen",
  },
  {
    quote:
      "It's definitely becoming more fun to be a programmer. It's less about digging through pages and more about what you want to happen. We are at the 1% of what's possible, and it's in interactive experiences like Cursor where models like GPT‑5 shine brightest.",
    name: "Greg Brockman",
    title: "President, OpenAI",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <div className="container space-y-8">
        <h2 className="text-4xl font-semibold leading-snug">The new way to build software.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-[4px] border bg-card-theme text-card-foreground p-6 flex flex-col justify-between min-h-[260px]"
            >
              <p className="text-base leading-relaxed text-foreground/90">{t.quote}</p>
              <div className="flex items-center gap-3 pt-6">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback>{t.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">{t.name}</span>
                  <span className="text-xs text-muted-foreground">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


