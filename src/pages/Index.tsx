import { useState } from "react"
import { products } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import ProductModal from "@/components/ProductModal"

export default function Index() {

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos")
  const [produtoSelecionado, setProdutoSelecionado] = useState(null)

  // gerar categorias automaticamente
  const categorias = [
    "todos",
    ...Array.from(new Set(products.map((p) => p.categoria)))
  ]

  const produtosFiltrados =
    categoriaSelecionada === "todos"
      ? products
      : products.filter((p) => p.categoria === categoriaSelecionada)

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* HEADER */}
      <section className="py-12 text-center border-b">
        <h1 className="text-4xl font-bold">Titi Closet</h1>
        <p className="text-muted-foreground mt-2">
          Peças selecionadas disponíveis para venda
        </p>
      </section>

      {/* CATEGORIAS */}
      <section className="flex justify-center gap-3 py-6 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={`px-4 py-2 rounded-lg border transition capitalize
            ${
              categoriaSelecionada === cat
                ? "bg-primary text-white"
                : "bg-transparent hover:bg-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* PRODUTOS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        {produtosFiltrados.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            Nenhum produto encontrado.
          </div>
        )}

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {produtosFiltrados.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={() => setProdutoSelecionado(product)}
            />
          ))}

        </div>

      </section>

      {/* MODAL */}
      {produtoSelecionado && (
        <ProductModal
          product={produtoSelecionado}
          open={!!produtoSelecionado}
          onClose={() => setProdutoSelecionado(null)}
        />
      )}

    </main>
  )
}
