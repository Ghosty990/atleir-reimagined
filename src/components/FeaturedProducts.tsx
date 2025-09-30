import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "I have a kitchen because it came with the house Kitchen Towel",
    price: "$10.98",
    image: "https://www.atleirstudio.store/cdn/shop/files/KitchenHouse_TowelDesign.png?v=1759184950&width=600",
  },
  {
    title: "0.1-5Ct Test Passed Moissanite Studs Earrings for Women",
    price: "From $17.43",
    image: "https://www.atleirstudio.store/cdn/shop/files/b3f78ffd13a901b918270931512dd7c8.jpg?v=1759150298&width=600",
  },
  {
    title: "Thickened Absorbent Bath Towel - Soft Face Towel for Home",
    price: "From $10.74",
    image: "https://www.atleirstudio.store/cdn/shop/files/6aa1137859644b93ac02c47a49a34200.jpg?v=1759168142&width=600",
  },
  {
    title: "1.0Ct D Color Moissanite Diamond Key Pendant Necklace",
    price: "$84.67",
    image: "https://www.atleirstudio.store/cdn/shop/files/product-image-1520536419.jpg?v=1759185166&width=600",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="shop" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Featured Products</h2>
            <p className="text-muted-foreground text-lg">
              Discover our curated collection of home essentials
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex group">
            View All
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="group">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
