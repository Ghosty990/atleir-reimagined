import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Electronic Accessories",
    description: "All the electronics you'd ever need",
    image: "https://www.atleirstudio.store/cdn/shop/collections/IMG-7988.jpg?v=1759183870&width=800",
  },
  {
    title: "Appliances",
    description: "Basic decor essentials for every room",
    image: "https://www.atleirstudio.store/cdn/shop/collections/IMG-7990.jpg?v=1759184014&width=800",
  },
  {
    title: "Jewelry",
    description: "Affordable and elegant jewelry pieces",
    image: "https://www.atleirstudio.store/cdn/shop/collections/7B10AC0B-ACD0-4153-820A-8374AF4D4C58.jpg?v=1759183834&width=800",
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Shop by Collection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our thoughtfully curated collections designed for every corner of your home
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-white/90 mb-4">{collection.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all">
                    Explore Collection
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
