import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-border">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-serif font-bold">Stay in Touch</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for exclusive offers and design inspiration
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold">fterö</h2>
            <p className="text-sm text-muted-foreground">
              Curating modern elegance for your home since 2024.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h4 className="font-semibold">Collections</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Electronic Accessories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Appliances</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Jewelry</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Home Decor</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 fterö. All rights reserved. Crafted with care for modern living.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
