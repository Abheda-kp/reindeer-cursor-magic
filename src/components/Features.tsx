import { Database, Sparkles, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Queries",
    description: "Write SQL naturally with AI assistance that understands your intent and suggests optimizations.",
  },
  {
    icon: Database,
    title: "Multi-Database Support",
    description: "Connect to PostgreSQL, MySQL, and more. Manage all your databases from one beautiful interface.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with intelligent caching and query execution for instant results.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, role-based access control, and audit logs to keep your data safe.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to manage databases
          </h2>
          <p className="text-xl text-muted-foreground">
            Built with modern developers in mind, Reindeer combines powerful features with an intuitive interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
