import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    author: {
      name: "ShamliKhan CP",
      title: "Technical Lead, ScanPay",
      avatar:
        "https://ca.slack-edge.com/T4LJBDMDY-U01C9H7PQ9G-9e2d57556587-192",
    },
    text: "Reindeer saves me a lot of time in writing & debugging SQL queries. \n\nIt feels like the perfect 'Cursor for databases'",
    href: "https://in.linkedin.com/in/shamlikhancp",
  },
  {
    author: {
      name: "Aparna Haridas",
      title: "Engineering Manager, Cofee",
      avatar:
        "https://ca.slack-edge.com/T4LJBDMDY-UMK26FBMW-e07c7ee29d1c-512",
    },
    text: "Reindeer is like having an expert SQL developer on call whenever I need it.\n\nMuch recommended!",
    href: "https://in.linkedin.com/in/aparna-haridas-b0187287",
  },
   {
    author: {
      name: "Vivek R",
      title: "CTO, winfunc (YC S24)",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQH7d7eRwtpGgg/profile-displayphoto-scale_200_200/B4DZex9zLJGgAc-/0/1751037459177?e=2147483647&v=beta&t=B7jK0qk7WtuL9asr0ZQVTcSFNsmQFqMgeWgJxTUArNM",
    },
    text: "Reindeer feels like the future of database work. Fast, intuitive, and extremely helpful for complex queries.",
    href: "https://www.linkedin.com/in/123vivekr/",
  },
  {
    author: {
      name: "Ky-Name",
      title: "24 y/o founder",
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQHW5qAnwgnC9w/profile-displayphoto-scale_200_200/B56ZlGgWCgHAAY-/0/1757824509046?e=1764806400&v=beta&t=6YfIjqyB5Ne0GKdAJSmd0hLFve6vHat-fMiVBR7CSUE",
    },
    text: "Excited, This is a killer tool for devs",
    href: "https://www.linkedin.com/in/withkynam/",
  },
  {
    author: {
      name: "Deven Yuvraj",
      title: "CEO, Hirly",
      avatar:
        "https://media.licdn.com/dms/image/v2/D5603AQEiVFaLgutMdA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724188833694?e=1764806400&v=beta&t=3Yv3a7TR2cBFnIHL09q9HbplSR45P9knjOH5uzWiG4k",
    },
    text: "Reindeer is a game-changer! Excited for its launch and smoother SQL workflows",
    href: "https://www.linkedin.com/in/devenyuvraj/",
  },
  {
    author: {
      name: "Pranav Shridhar",
      title: "SDE II, Yellow.ai",
      avatar:
        "https://pbs.twimg.com/profile_images/1262980203229265920/Xm1WX8bA_400x400.jpg",
    },
    text: "Night and day difference compared to other database tools. Reindeer has become my goto tool for querying my query",
    href: "https://x.com/pranavmodx",
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
