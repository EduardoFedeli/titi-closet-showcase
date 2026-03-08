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
      className="product-card animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes de ${product.nome}`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={product.fotos[0]}
          alt={product.nome}
          className="product-card-image"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display text-lg font-semibold leading-tight">
            {product.nome}
          </h3>
          <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground font-body">
            {product.estado}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3 font-body">
          {product.descricao}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold">
            {formatPrice(product.preco)}
          </span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider font-body">
            {product.categoria}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
