import { useState, useMemo } from "react";
import { Search, ShoppingBag } from "lucide-react";
import { produtos, categorias, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";

const Index = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return produtos.filter((p) => {
      const matchCategory = activeCategory === "Todos" || p.categoria === activeCategory;
      const matchSearch =
        !q || p.nome.toLowerCase().includes(q) || p.descricao.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight italic">
                Desapegos do Titi
              </h1>
              <p className="text-sm text-muted-foreground font-body mt-1">
                Peças únicas com estilo · Entrega em São Paulo - SP
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground font-body shrink-0 mt-2">
              <ShoppingBag className="w-4 h-4" />
              {filtered.length} {filtered.length === 1 ? "item disponível" : "itens disponíveis"}
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nome ou descrição..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md pl-10 pr-4 py-2.5 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${
                  activeCategory === cat ? "filter-pill-active" : "filter-pill-inactive"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-muted-foreground">
              Nenhum produto encontrado
            </p>
            <p className="text-sm text-muted-foreground font-body mt-2">
              Tente buscar com outros termos
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground font-body">
          Vendas pelo Enjoei · Entrega em São Paulo - SP
        </p>
        <p className="text-xs text-muted-foreground font-body mt-1">
          Dúvidas? Entre em contato através do chat do Enjoei
        </p>
      </footer>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Index;
