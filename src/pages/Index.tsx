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

  // NOVO: Lógica para agrupar os produtos filtrados por categoria
  const produtosAgrupados = useMemo(() => {
    const grupos: Record<string, typeof products> = {};

    produtosFiltrados.forEach(product => {
      // Extrai a categoria principal para ser o título da prateleira
      const categoriaStr = typeof product.categoria === 'string' 
        ? product.categoria 
        : (Array.isArray(product.categoria) ? product.categoria[0] : 'Diversos');

      if (!grupos[categoriaStr]) {
        grupos[categoriaStr] = [];
      }
      grupos[categoriaStr].push(product);
    });

    // Ordena as categorias em ordem alfabética para melhor apresentação
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
    <div className="min-h-screen bg-background text-foreground">
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
        <div className="flex gap-6">
          {/* Sidebar visível apenas em Desktop */}
          <div className="hidden lg:block w-64 shrink-0">{SidebarContent}</div>
          
          <div className="flex-1 min-w-0"> {/* min-w-0 evita que o flex-1 "quebre" o layout da rolagem */}
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
              // NOVO: Renderização das Prateleiras por Categoria
              <div className="flex flex-col gap-10">
                {Object.entries(produtosAgrupados).map(([categoria, itens]) => (
                  <section key={categoria} className="w-full">
                    {/* Cabeçalho da Categoria */}
                    <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
                      <h2 className="text-xl font-bold text-foreground tracking-tight">
                        {categoria}
                      </h2>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        {itens.length} {itens.length === 1 ? 'item' : 'itens'}
                      </span>
                    </div>

                    {/* Container de Rolagem Horizontal */}
                    <div 
                      className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scroll-smooth hide-scrollbar"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Oculta a barra de rolagem no Firefox e IE
                    >
                      <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
                      
                      {itens.map((product, index) => (
                        // O 'shrink-0' é essencial aqui para os cards não espremerem
                        <div key={product.id} className="w-[180px] sm:w-[220px] lg:w-[240px] snap-start shrink-0">
                          <ProductCard product={product} index={index} onClick={() => setProdutoSelecionado(product)} />
                        </div>
                      ))}
                    </div>
                  </section>
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
