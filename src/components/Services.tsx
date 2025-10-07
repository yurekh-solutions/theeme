import { Card, CardContent } from "@/components/ui/card";
import { Building2, Cog, Clock, Headphones } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Bulk Orders",
    description: "Special pricing for large-scale construction projects with flexible payment terms.",
  },
  {
    icon: Cog,
    title: "Custom Solutions",
    description: "Tailored material packages designed specifically for your project requirements.",
  },
  {
    icon: Clock,
    title: "Just-in-Time Delivery",
    description: "Scheduled deliveries to keep your project on track and minimize storage costs.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert team available round the clock to assist with orders and queries.",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive procurement solutions for all your construction material needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
