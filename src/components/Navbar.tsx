import { Search, ShoppingBag, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <a href="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-semibold tracking-tight">fterö</h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#shop" className="text-sm hover:text-primary transition-colors">
              Shop All
            </a>
            <a href="#collections" className="text-sm hover:text-primary transition-colors">
              Collections
            </a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <a href="#shop" className="block py-2 text-sm hover:text-primary transition-colors">
              Shop All
            </a>
            <a href="#collections" className="block py-2 text-sm hover:text-primary transition-colors">
              Collections
            </a>
            <a href="#about" className="block py-2 text-sm hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="block py-2 text-sm hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
