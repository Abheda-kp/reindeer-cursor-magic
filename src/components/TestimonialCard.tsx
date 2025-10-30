import React from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  author,
  text,
  href,
  className
}) => {
  const CardElement = href ? 'a' : 'div';
  
  return (
    <CardElement
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-6 text-start sm:p-8",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[400px] sm:max-w-[420px]",
        "min-h-[280px] sm:min-h-[300px]",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold leading-none">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-lg mt-6 text-base text-muted-foreground leading-relaxed flex-1">
        {text}
      </p>
    </CardElement>
  );
};
