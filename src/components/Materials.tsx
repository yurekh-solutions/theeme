import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import steelImage from "@/assets/steel-materials.jpg";
import concreteImage from "@/assets/concrete-materials.jpg";
import woodImage from "@/assets/wood-materials.jpg";

const materials = [
  {
    image: steelImage,
    title: "Steel & Metal",
    description: "High-grade steel beams, reinforcement bars, metal sheets, and structural components.",
    items: ["Structural Steel", "Rebar", "Metal Sheets", "Fasteners"],
  },
  {
    image: concreteImage,
    title: "Concrete & Cement",
    description: "Premium cement, ready-mix concrete, blocks, and aggregates for all applications.",
    items: ["Portland Cement", "Ready-Mix", "Concrete Blocks", "Aggregates"],
  },
  {
    image: woodImage,
    title: "Wood & Timber",
    description: "Quality lumber, plywood, engineered wood products, and finishing materials.",
    items: ["Lumber", "Plywood", "Engineered Wood", "Wood Panels"],
  },
];

export const Materials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Materials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive catalog of premium construction materials
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={material.image} 
                  alt={material.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {material.title}
                </h3>
                <p className="text-muted-foreground">
                  {material.description}
                </p>
                <ul className="space-y-2">
                  {material.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 group-hover:scale-150 transition-transform" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                  View Products
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
