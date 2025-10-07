import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Get in touch with our team for a personalized quote and expert consultation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-primary-foreground text-foreground transition-all duration-300 focus:scale-105"
            />
            <Button size="lg" variant="secondary" className="whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Get Quote
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="flex flex-col items-center gap-2 animate-fade-in group cursor-pointer" style={{ animationDelay: "0.5s" }}>
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-foreground/20">
                <Phone className="h-6 w-6" />
              </div>
              <p className="font-medium">Call Us</p>
              <p className="opacity-90 group-hover:opacity-100 transition-opacity">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center gap-2 animate-fade-in group cursor-pointer" style={{ animationDelay: "0.6s" }}>
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-foreground/20">
                <Mail className="h-6 w-6" />
              </div>
              <p className="font-medium">Email Us</p>
              <p className="opacity-90 group-hover:opacity-100 transition-opacity">sales@procurement.com</p>
            </div>
            <div className="flex flex-col items-center gap-2 animate-fade-in group cursor-pointer" style={{ animationDelay: "0.7s" }}>
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-foreground/20">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="font-medium">Visit Us</p>
              <p className="opacity-90 group-hover:opacity-100 transition-opacity">123 Industrial Ave</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
