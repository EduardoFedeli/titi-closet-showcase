import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  index: number;
}

const ProductCard = ({ product, onClick, index }: ProductCardProps) => {
  const formatPrice = (price: number) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <article
      className="product-card animate-fade-in-up group"
      style={{ animationDelay: `${index * 0.08}s` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes de ${product.nome}`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={product.fotos[0]}
          alt={product.nome}
          className="product-card-image"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold leading-tight text-foreground">
            {product.nome}
          </h3>
          <span className="shrink-0 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/15 text-primary font-body font-medium">
            {product.estado}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 font-body leading-relaxed">
          {product.descricao}
        </p>
        <div className="gold-divider my-2" />
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold gold-text">
            {formatPrice(product.preco)}
          </span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-body">
            {product.categoria}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;