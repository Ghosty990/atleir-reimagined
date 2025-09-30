import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const FeatureBanner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://www.atleirstudio.store/cdn/shop/files/wooden-bench-and-table-in-the-sun.jpg?v=1759182052&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-8 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Chic Modern Essentials</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Transform your home with our thoughtfully designed furniture
          </h2>

          <p className="text-lg text-white/90 max-w-xl">
            Experience the perfect harmony of form and function with our carefully selected pieces that bring warmth and sophistication to your space.
          </p>

          <Button size="lg" variant="secondary" className="group">
            Shop Now
            <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
