import abhedaImage from "@/assets/team/abheda.png";
import alexImage from "@/assets/team/alex.png";
import anandhuImage from "@/assets/team/anandhu.png";
import joyalImage from "@/assets/team/joyal.png";
import meenakshiImage from "@/assets/team/meenakshi.png";
import muzammilImage from "@/assets/team/muzammil.png";
import nikhinImage from "@/assets/team/nikhin.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Joyal A Johney",
    role: "Senior Software Engineer",
    image: joyalImage,
    linkedin: "https://www.linkedin.com/in/joyalajohney",
  },
  {
    name: "Nikhil Raj K",
    role: "Staff Engineer",
    image: nikhinImage,
    linkedin: "https://www.linkedin.com/in/nikhinrajkk/",
  },
  {
    name: "Anandu S",
    role: "Associate Software Engineer",
    image: anandhuImage,
    linkedin: "https://www.linkedin.com/in/anandukch/",
  },
  {
    name: "Muzammil KT",
    role: "Senior Software Engineer",
    image: muzammilImage,
    linkedin: "https://www.linkedin.com/in/muhammed-muzammil-kt-69b0b8218/",
  },
  {
    name: "Meenakshi Ravi",
    role: "Senior Software Engineer",
    image: meenakshiImage,
    linkedin: "https://www.linkedin.com/in/meenakshi-ravi-426777160/",
  },
  {
    name: "Abheda K P",
    role: "Associate Software Engineer",
    image: abhedaImage,
    linkedin: "https://www.linkedin.com/in/abheda-k-p/",
  },
  {
    name: "Alexander Ouseph",
    role: "Associate Software Engineer",
    image: alexImage,
    linkedin: "https://www.linkedin.com/in/alexander-ouseph-03a6a47b/",
  },
];

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
  style?: React.CSSProperties;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  className,
  style,
}) => {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("block h-full", className)}
      style={style}
    >
      <div
        className={cn(
          "flex h-full w-full flex-col items-center gap-3 sm:gap-3.5",
          "p-4 sm:p-5 md:p-6",
          "hover:bg-card-theme hover:shadow-lg transition-all duration-300",
          "group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "justify-center"
        )}
      >
        <div className="relative">
          <Avatar className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 border border-border/70 shadow-sm">
            <AvatarImage
              src={member.image}
              alt={member.name}
              className="object-cover rounded-full"
            />
            <AvatarFallback className="text-lg sm:text-xl md:text-2xl font-semibold-custom bg-muted text-color-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex flex-1 gap-1 flex-col items-center text-center w-full">
          <div className="flex flex-row items-center gap-1.5 w-full justify-center">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold-custom leading-snug-custom text-color-primary">
              {member.name}
            </h3>
          </div>
          <div
            className="mt-auto w-full flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm md:text-base text-color-secondary leading-normal-custom"
            aria-label={`Visit ${member.name}'s LinkedIn profile`}
          >
            <span className="font-medium text-color-secondary/90">
              {member.role}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export const TeamPage = () => {
  const cardSizingStyle = React.useMemo<React.CSSProperties>(
    () => ({
      flex: "0 0 calc((100% - (var(--team-columns, 2) - 1) * var(--team-gap, 1rem)) / var(--team-columns, 2))",
      maxWidth:
        "calc((100% - (var(--team-columns, 2) - 1) * var(--team-gap, 1rem)) / var(--team-columns, 2))",
    }),
    []
  );

  return (
    <section
      id="team"
      className="text-foreground py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 sm:gap-8 md:gap-14">
        <div className="flex flex-col items-center gap-2 sm:gap-2.5 text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold-custom leading-snug-custom text-color-primary">
            Meet the Team
          </h2>
        </div>

        <div
          className={cn(
            "w-full",
            "flex flex-wrap items-stretch justify-center",
            "[--team-gap:0.75rem]",
            "[--team-columns:2]",
            "[gap:var(--team-gap)]",
            "sm:[--team-gap:0.875rem]",
            "md:[--team-gap:1rem]",
            "md:[--team-columns:3]",
            "lg:[--team-gap:1.125rem]",
            "xl:[--team-columns:4]"
          )}
        >
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              className="h-full"
              style={cardSizingStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
