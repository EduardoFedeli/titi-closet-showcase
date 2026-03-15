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



      // ANTES ESTAVA ASSIM: const price = product.precoEnjoei ?? product.preco;

      // DEIXE ASSIM:

      

      const price = product.preco; 

      const matchesPrice = price >= filters.priceRange[0] && price <= filters.priceRange[1];

      const matchesCategory = filters.categories.length === 0 || filters.categories.includes(product.categoria);

      const matchesEstado = filters.estados.length === 0 || filters.estados.includes(product.estado);



      return matchesSearch && matchesPrice && matchesCategory && matchesEstado;

    });

  }, [searchTerm, filters]);



  const SidebarContent = <FilterSidebar products={products} filters={filters} onChange={setFilters} />;



  if (currentPage === 'about') {

    return (

      <div className="min-h-screen bg-background">

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

    <div className="min-h-screen bg-background">

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



      <div className="max-w-7xl mx-auto px-4 lg:px-6 pb-16">

        <div className="flex gap-6">

          <div className="hidden lg:block">{SidebarContent}</div>

          

          <div className="flex-1">

            <div className="flex items-center justify-between mb-6">

              <p className="text-sm text-muted-foreground">

                <span className="font-semibold text-foreground">{produtosFiltrados.length}</span> produtos encontrados

              </p>

              <Sheet>

                <SheetTrigger asChild>

                  <Button variant="outline" size="sm" className="lg:hidden">

                    <Filter className="w-4 h-4 mr-2" />Filtros

                  </Button>

                </SheetTrigger>

                <SheetContent side="left" className="w-80 overflow-y-auto">{SidebarContent}</SheetContent>

              </Sheet>

            </div>



            {produtosFiltrados.length === 0 ? (

              <div className="text-center py-20">

                <div className="text-6xl mb-4">🔍</div>

                <h3 className="text-xl font-semibold mb-2">Nenhum produto encontrado</h3>

                <p className="text-muted-foreground mb-6">Tente ajustar os filtros ou buscar por outro termo</p>

                <Button variant="outline" onClick={() => { setSearchTerm(''); setFilters({ priceRange: [0, 1000], categories: [], estados: [] }); }}>

                  Limpar filtros

                </Button>

              </div>

            ) : (

              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {produtosFiltrados.map((product, index) => (

                  <ProductCard key={product.id} product={product} index={index} onClick={() => setProdutoSelecionado(product)} />

                ))}

              </div>

            )}

          </div>

        </div>

      </div>



      {produtoSelecionado && (

        <ProductModal product={produtoSelecionado} open={!!produtoSelecionado} onClose={() => setProdutoSelecionado(null)} />

      )}

    </div>

  );

}
