import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Truck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Construction materials warehouse" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Premium Construction Materials Procurement
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for high-quality construction materials. Fast delivery, competitive pricing, exceptional service.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Request Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View Catalog
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 justify-center pt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-primary">
              <Package className="h-5 w-5 text-primary animate-float" />
              <span className="text-sm font-medium">Wide Selection</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-primary" style={{ animationDelay: "0.1s" }}>
              <Truck className="h-5 w-5 text-primary animate-float" style={{ animationDelay: "0.3s" }} />
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-primary" style={{ animationDelay: "0.2s" }}>
              <Shield className="h-5 w-5 text-primary animate-float" style={{ animationDelay: "0.6s" }} />
              <span className="text-sm font-medium">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
