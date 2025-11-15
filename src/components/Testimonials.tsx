import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    author: {
      name: "ShamliKhan CP",
      title: "Technical Lead, ScanPay",
      avatar:
        "https://ca.slack-edge.com/T4LJBDMDY-U01C9H7PQ9G-9e2d57556587-192",
    },
    text: "Reindeer has significantly improved my worflow with databases. Saves me a lot of time in writing & debugging SQL queries. It feels like the perfect 'Cursor for databases",
  },
  {
    author: {
      name: "Aparna Haridas",
      title: "Engineering Manager, Cofee",
      avatar:
        "https://ca.slack-edge.com/T4LJBDMDY-UMK26FBMW-e07c7ee29d1c-512",
    },
    text: "Reindeer is like having an expert SQL developer on call whenever I need it. Much recommended!",
  },
  {
    author: {
      name: "Pranav Shridhar",
      title: "SDE II, Yellow.ai",
      avatar:
        "https://pbs.twimg.com/profile_images/1262980203229265920/Xm1WX8bA_400x400.jpg",
    },
    text: "Night and day difference compared to other database tools. Reindeer has become my goto tool for querying my query",
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
