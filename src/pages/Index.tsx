import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Header from "@/components/Header";
import FilterSidebar, { Filters } from "@/components/FilterSidebar";
import About from "./About";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [filters, setFilters] = useState<Filters>({ priceRange: [0, 1500], categories: [], estados: [] });
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  const produtosFiltrados = useMemo(() => {
    return products.filter((product) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = searchTerm === '' || 
        product.nome.toLowerCase().includes(searchLower) ||
        product.marca.toLowerCase().includes(searchLower) ||
        product.descricao.toLowerCase().includes(searchLower);

      const price = product.preco; 
      const matchesPrice = price >= filters.priceRange[0] && price <= filters.priceRange[1];
      
      const matchesCategory = filters.categories.length === 0 || filters.categories.some(cat => 
        product.categoria.includes(cat) || (cat === 'Kits' && product.isKit)
      );
      
      const matchesEstado = filters.estados.length === 0 || filters.estados.includes(product.estado);

      return matchesSearch && matchesPrice && matchesCategory && matchesEstado;
    });
  }, [searchTerm, filters]);

  const SidebarContent = <FilterSidebar products={products} filters={filters} onChange={setFilters} />;

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm}
          currentPage={currentPage}
          onNavigate={setCurrentPage}
        />
        <About />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
        <nav className="text-sm text-muted-foreground">
          <span>Início</span>
          {searchTerm && <><span className="mx-2">›</span><span>Resultados para "{searchTerm}"</span></>}
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 pb-24 lg:pb-16">
        <div className="flex gap-6">
          {/* Sidebar visível apenas em Desktop */}
          <div className="hidden lg:block">{SidebarContent}</div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{produtosFiltrados.length}</span> produtos encontrados
              </p>
              
              {/* Botão de Filtro em linha - visível apenas em Desktop (opcional) */}
              <div className="hidden lg:block">
                {/* Espaço reservado ou botões de ordenação futura */}
              </div>
            </div>

            {produtosFiltrados.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h3>
                <p className="text-muted-foreground mb-6">Tente ajustar os filtros ou buscar por outro termo</p>
                <Button variant="outline" onClick={() => { setSearchTerm(''); setFilters({ priceRange: [0, 1500], categories: [], estados: [] }); }}>
                  Limpar filtros
                </Button>
              </div>
            ) : (
              {/* Mobile: 2 colunas. Tablet: 3 colunas. Desktop (lg): 4 colunas. Telas Giga (xl): 5 colunas. */}
        <div className="grid gap-3 sm:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {produtosFiltrados.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} onClick={() => setProdutoSelecionado(product)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BOTÃO DE FILTRO FLUTUANTE - MOBILE APENAS */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-2xl bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center p-0">
              <Filter className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto">
            <div className="py-4">
              {SidebarContent}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {produtoSelecionado && (
        <ProductModal product={produtoSelecionado} open={!!produtoSelecionado} onClose={() => setProdutoSelecionado(null)} />
      )}
    </div>
  );
}
