import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">New Collection 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Elevate Your Living Space
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Curating modern elegance for your home, we provide a seamless blend of style and functionality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Shop All
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Browse Collections
              </Button>
            </div>
          </div>

          {/* Hero Images Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up">
            <div className="space-y-4">
              <img
                src="https://www.atleirstudio.store/cdn/shop/files/not-boring-beige.jpg?v=1759182124&width=800"
                alt="Modern beige furniture"
                className="w-full h-64 object-cover rounded-2xl hover-lift shadow-md"
              />
              <img
                src="https://www.atleirstudio.store/cdn/shop/files/home-decor-minimal-4-middle.jpg?v=1759181786&width=800"
                alt="Minimal home decor"
                className="w-full h-48 object-cover rounded-2xl hover-lift shadow-md"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="https://www.atleirstudio.store/cdn/shop/files/kitchen-living.jpg?v=1759182152&width=800"
                alt="Kitchen living space"
                className="w-full h-48 object-cover rounded-2xl hover-lift shadow-md"
              />
              <img
                src="https://www.atleirstudio.store/cdn/shop/files/home-decor-minimal-1-middle.jpg?v=1759181789&width=800"
                alt="Minimal decor accent"
                className="w-full h-64 object-cover rounded-2xl hover-lift shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
