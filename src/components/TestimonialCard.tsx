import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import React from "react";

interface TestimonialAuthor {
  name: string;
  title: string;
  avatar: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string | string[];
  href?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  author,
  text,
  href,
  className,
}) => {
  const CardElement = href ? "a" : "div";
  const textArray = Array.isArray(text) ? text : [text];

  return (
    <CardElement
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col justify-between rounded-sm",
        "bg-card-theme",
        "p-4 sm:p-6 md:p-8 lg:p-10 text-start",
        "hover:bg-opacity-90",
        "w-full",
        "min-h-[200px] sm:min-h-[240px] md:min-h-[280px]",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex flex-col gap-3 sm:gap-4">
        {textArray.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm sm:text-base text-color-primary leading-normal-custom"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6">
        <Avatar className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-xs sm:text-sm font-semibold-custom leading-snug-custom text-color-primary">
            {author.name}
          </h3>
          <p className="text-[10px] sm:text-xs text-color-secondary mt-0.5 sm:mt-1 leading-snug-custom">
            {author.title}
          </p>
        </div>
      </div>
    </CardElement>
  );
};
