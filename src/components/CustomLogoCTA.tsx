import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CustomLogoCTA = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    style: "",
    colors: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll contact you soon with your custom logo design.",
    });
    setOpen(false);
    setFormData({
      name: "",
      email: "",
      businessType: "",
      style: "",
      colors: "",
      description: "",
    });
  };

  return (
    <section className="my-20 px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-2xl shadow-[var(--shadow-soft)]">
        <div className="bg-card rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Custom Design Service</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
                Need a Custom Logo?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Work directly with our talented artists to create a unique logo that perfectly represents your brand
              </p>
            </div>
            
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                  <Palette className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Custom Logo Request</DialogTitle>
                  <DialogDescription>
                    Tell us about your vision and we'll create something amazing
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input 
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business/Project Type *</Label>
                    <Input 
                      id="businessType"
                      required
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      placeholder="e.g., Tech Startup, Coffee Shop, Gaming Channel"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="style">Preferred Style *</Label>
                    <Select 
                      value={formData.style}
                      onValueChange={(value) => setFormData({...formData, style: value})}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minimalist">Minimalist</SelectItem>
                        <SelectItem value="modern">Modern</SelectItem>
                        <SelectItem value="vintage">Vintage</SelectItem>
                        <SelectItem value="playful">Playful</SelectItem>
                        <SelectItem value="elegant">Elegant</SelectItem>
                        <SelectItem value="bold">Bold & Colorful</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="colors">Preferred Colors</Label>
                    <Input 
                      id="colors"
                      value={formData.colors}
                      onChange={(e) => setFormData({...formData, colors: e.target.value})}
                      placeholder="e.g., Blue and Gold, Pastel Pink, Dark Theme"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea 
                      id="description"
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Tell us about your project, what you want to convey, target audience, etc."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                    Submit Request
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomLogoCTA;
