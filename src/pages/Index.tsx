import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import CustomLogoCTA from "@/components/CustomLogoCTA";

// Mock product data
import sample1 from "@/assets/sample-1.jpg";
import sample2 from "@/assets/sample-2.jpg";
import sample3 from "@/assets/sample-3.jpg";
import sample4 from "@/assets/sample-4.jpg";
import sample5 from "@/assets/sample-5.jpg";
import sample6 from "@/assets/sample-6.jpg";

const products = [
  { id: 1, title: "Kawaii Magic Girl", artist: "SakuraArt", price: 45, image: sample1, category: "Character Design" },
  { id: 2, title: "Geometric Flow", artist: "ModernMinds", price: 35, image: sample2, category: "Logo Design" },
  { id: 3, title: "Dreamy Cloudscape", artist: "CloudNine", price: 65, image: sample3, category: "Landscape" },
  { id: 4, title: "Happy Mascot", artist: "CuteCreations", price: 40, image: sample4, category: "Character Design" },
  { id: 5, title: "Anime Portrait", artist: "FanArtist99", price: 55, image: sample5, category: "Fan Art" },
  { id: 6, title: "Action Hero", artist: "ComicPro", price: 50, image: sample6, category: "Comic Style" },
];

const Index = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <CustomLogoCTA />
      
      <main className="container mx-auto px-6 py-12" id="gallery">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar 
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />
          
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Illustrations</h2>
              <p className="text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'artwork' : 'artworks'} available
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">No artworks match your filters</p>
                <p className="text-muted-foreground">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-muted/30 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent" />
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ArtMarket
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your destination for unique illustrations and custom artwork
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Shop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">All Artworks</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Best Sellers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Licensing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ArtMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
