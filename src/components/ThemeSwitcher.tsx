import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes = [
  { id: "walnut", name: "Dark Walnut", desc: "Rich brown & cream" },
  { id: "concrete", name: "Concrete Modern", desc: "Industrial gray & white" },
  { id: "rust", name: "Construction Rust", desc: "Warm rust & sand" },
  { id: "charcoal", name: "Charcoal Premium", desc: "Deep charcoal & stone" },
  { id: "terracotta", name: "Terracotta Earth", desc: "Clay red & ivory" },
  { id: "slate", name: "Slate Professional", desc: "Blue-gray & warm white" },
  { id: "forest", name: "Forest Sustainable", desc: "Deep green & stone" },
  { id: "mahogany", name: "Mahogany Luxury", desc: "Deep brown & gold" },
  { id: "sand", name: "Sand Dune", desc: "Desert sand & beige" },
  { id: "copper", name: "Copper Metallic", desc: "Copper tones & cream" },
  { id: "stone", name: "Stone Gray", desc: "Cool stone & white" },
  { id: "ivory", name: "Ivory Cream", desc: "Soft ivory & warm tones" },
  { id: "espresso", name: "Espresso Dark", desc: "Dark espresso & latte" },
  { id: "clay", name: "Clay Red", desc: "Terracotta & natural tones" },
  { id: "granite", name: "Granite Dark", desc: "Dark granite & fog" },
  { id: "limestone", name: "Limestone Light", desc: "Light stone & cream" },
  { id: "bronze", name: "Bronze Industrial", desc: "Bronze & industrial tones" },
  { id: "oak", name: "Oak Warm", desc: "Warm oak & amber" },
  { id: "steel", name: "Steel Blue", desc: "Steel blue & gray" },
  { id: "sandstone", name: "Sandstone Natural", desc: "Natural sandstone & tan" },
];

export const ThemeSwitcher = () => {
  const setTheme = (themeId: string) => {
    document.documentElement.setAttribute("data-theme", themeId);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 right-4 z-50">
          <Palette className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 max-h-[400px] overflow-y-auto">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className="cursor-pointer transition-all duration-200 hover:scale-105"
          >
            <div className="flex flex-col">
              <span className="font-medium">{theme.name}</span>
              <span className="text-xs text-muted-foreground">{theme.desc}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
