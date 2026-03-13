import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export interface Filters {
  priceRange: [number, number];
  categories: string[];
  estados: string[];
}

interface FilterSidebarProps {
  products: Product[];
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export default function FilterSidebar({ products, filters, onChange }: FilterSidebarProps) {
  const allCategories = Array.from(new Set(products.map(p => p.categoria)));
  const allEstados = Array.from(new Set(products.map(p => p.estado)));

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    onChange({ ...filters, categories: newCategories });
  };

  const handleEstadoToggle = (estado: string) => {
    const newEstados = filters.estados.includes(estado)
      ? filters.estados.filter(e => e !== estado)
      : [...filters.estados, estado];
    onChange({ ...filters, estados: newEstados });
  };

  const clearFilters = () => {
    onChange({ priceRange: [0, 1000], categories: [], estados: [] });
  };

  const activeCount = filters.categories.length + filters.estados.length + 
    (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 1000 ? 1 : 0);

  return (
     <aside className="w-72 bg-card rounded-xl border p-6 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg">Filtros</h3>
        {activeCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
            Limpar ({activeCount})
          </Button>
        )}
      </div>

      <div className="mb-8">
        <Label className="text-sm font-semibold mb-3 block">Faixa de Preço</Label>
        <Slider
          value={filters.priceRange}
          onValueChange={(val) => onChange({ ...filters, priceRange: [val[0], val[1]] })}
          min={0}
          max={1000}
          step={10}
          className="mb-3"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>R$ {filters.priceRange[0]}</span>
          <span>R$ {filters.priceRange[1]}</span>
        </div>
      </div>

      <div className="mb-8">
        <Label className="text-sm font-semibold mb-3 block">Categoria</Label>
        <div className="space-y-3">
          {allCategories.map(category => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`cat-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
              />
              <label htmlFor={`cat-${category}`} className="text-sm cursor-pointer flex-1">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <Label className="text-sm font-semibold mb-3 block">Estado</Label>
        <div className="space-y-3">
          {allEstados.map(estado => (
            <div key={estado} className="flex items-center space-x-2">
              <Checkbox
                id={`est-${estado}`}
                checked={filters.estados.includes(estado)}
                onCheckedChange={() => handleEstadoToggle(estado)}
              />
              <label htmlFor={`est-${estado}`} className="text-sm cursor-pointer flex-1">
                {estado}
              </label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
