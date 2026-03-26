import { useState, useMemo, useRef, useEffect } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Header from "@/components/Header";
import FilterSidebar, { Filters } from "@/components/FilterSidebar";
import About from "./About";
import { Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const CategoryRow = ({ categoria, itens, setProdutoSelecionado }: { categoria: string, itens: any[], setProdutoSelecionado: any }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; 
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  useEffect(() => {
    if (isHovered || itens.length <= 1) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isHovered, itens.length]);

  return (
    <section 
      className="w-full relative" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
        <h2 className="text-xl font-bold text-foreground tracking-tight">
          {categoria}
        </h2>
        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">
          {itens.length} {itens.length === 1 ? 'item' : 'itens'}
        </span>
      </div>

      <div className="relative group">
        {itens.length > 2 && (
          <>
            <button 
              onClick={() => scroll('left')}
              className="absolute left-[-15px] top-1/2 -translate-y-1/2 z-10 bg-background/90 border border-border shadow-md rounded-full p-2 text-[#50808E] hover:bg-[#50808E] hover:text-white transition-colors opacity-0 group-hover:opacity-100 hidden md:flex"
              aria-label="Rolar para esquerda"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 bg-background/90 border border-border shadow-md rounded-full p-2 text-[#50808E] hover:bg-[#50808E] hover:text-white transition-colors opacity-0 group-hover:opacity-100 hidden md:flex"
              aria-label="Rolar para direita"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          
          {itens.map((product, index) => (
            <div key={product.id} className="w-[200px] sm:w-[220px] lg:w-[240px] snap-start shrink-0">
              <ProductCard product={product} index={index} onClick={() => setProdutoSelecionado(product)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

  const produtosAgrupados = useMemo(() => {
    const grupos: Record<string, typeof products> = {};

    produtosFiltrados.forEach(product => {
      // T-HEX FIX: Lógica estrita para forçar os Kits numa categoria única
      const isCategoriaKit = typeof product.categoria === 'string' 
        ? product.categoria.toLowerCase().includes('kit') 
        : Array.isArray(product.categoria) && product.categoria.some(c => c.toLowerCase().includes('kit'));

      let categoriaStr = "Diversos";

      if (product.isKit || isCategoriaKit) {
        categoriaStr = "Kits";
      } else {
        // Pega a primeira categoria antes da vírgula para não poluir os títulos
        const catBase = typeof product.categoria === 'string' 
          ? product.categoria 
          : (Array.isArray(product.categoria) ? product.categoria[0] : 'Diversos');
        
        categoriaStr = catBase.split(',')[0].trim();
      }

      if (!grupos[categoriaStr]) {
        grupos[categoriaStr] = [];
      }
      grupos[categoriaStr].push(product);
    });

    return Object.keys(grupos).sort().reduce((acc, key) => {
      acc[key] = grupos[key];
      return acc;
    }, {} as Record<string, typeof products>);
  }, [produtosFiltrados]);

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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
        <nav className="text-sm text-muted-foreground">
          <span>Catálogo</span>
          {searchTerm && <><span className="mx-2">›</span><span>Resultados para "{searchTerm}"</span></>}
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 pb-24 lg:pb-16">
        {/* T-HEX FIX: "items-start" é o segredo para o sticky funcionar no flex. */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* T-HEX FIX: A largura w-72 aqui (288px) agora combina exatamente com o que a Sidebar precisa. Adicionado overflow-y-auto no pai para rolar dentro do sticky */}
          <div className="hidden lg:block w-72 shrink-0 sticky top-24 h-fit max-h-[calc(100vh-7rem)] overflow-y-auto hide-scrollbar">
            <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
            {SidebarContent}
          </div>
          
          <div className="flex-1 min-w-0 w-full">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{produtosFiltrados.length}</span> produtos encontrados
              </p>
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
              <div className="flex flex-col gap-12">
                {Object.entries(produtosAgrupados).map(([categoria, itens]) => (
                  <CategoryRow 
                    key={categoria} 
                    categoria={categoria} 
                    itens={itens} 
                    setProdutoSelecionado={setProdutoSelecionado} 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="rounded-full h-14 w-14 shadow-2xl bg-[#50808E] hover:bg-[#69A297] text-white flex items-center justify-center p-0">
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
