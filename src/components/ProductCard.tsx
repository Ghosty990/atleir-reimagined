import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  salePrice?: string;
}

const ProductCard = ({ title, price, image, salePrice }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Add Button */}
        <Button
          size="sm"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Quick Add
        </Button>
      </div>

      <div className="p-6 space-y-3">
        <h3 className="font-medium text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-3">
          {salePrice ? (
            <>
              <span className="text-xl font-semibold text-primary">{salePrice}</span>
              <span className="text-sm text-muted-foreground line-through">{price}</span>
            </>
          ) : (
            <span className="text-xl font-semibold">{price}</span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
