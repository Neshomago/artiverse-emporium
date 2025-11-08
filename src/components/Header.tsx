import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ArtMarket
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">
            Gallery
          </a>
          <a href="#categories" className="text-foreground hover:text-primary transition-colors font-medium">
            Categories
          </a>
          <a href="#custom" className="text-foreground hover:text-primary transition-colors font-medium">
            Custom Logo
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
            About
          </a>
        </nav>

        {/* Cart Button */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
              0
            </span>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-6 mt-8">
                <a href="#gallery" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Gallery
                </a>
                <a href="#categories" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Categories
                </a>
                <a href="#custom" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Custom Logo
                </a>
                <a href="#about" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  About
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
