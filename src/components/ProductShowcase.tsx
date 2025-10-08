import reindeerInterface from "@/assets/image/reindeer-interface.png";

const ProductShowcase = () => {
  return (
    <section className="relative">
      <div className="container mx-auto px-6">
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 blur-3xl -z-10" />
          
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
            <img 
              src={reindeerInterface} 
              alt="Reindeer Database Management Interface" 
              className="w-full h-auto"
            />
          </div>

          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/10 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
