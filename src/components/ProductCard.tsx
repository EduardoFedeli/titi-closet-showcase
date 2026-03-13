import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  index: number;
}

const ProductCard = ({ product, onClick, index }: ProductCardProps) => {
  // Segurança contra erros de imagem
  const image =
    product?.fotosImgur && product.fotosImgur.length > 0
      ? product.fotosImgur[0]
      : "/placeholder.svg";

  const price = product.precoEnjoei ?? product.preco ?? 0;

  return (
    <article
      className="product-card animate-fade-in-up group cursor-pointer"
      style={{ animationDelay: `${index * 0.06}s` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes de ${product.nome}`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={image}
          alt={product.nome}
          className="product-card-image object-cover w-full h-full"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {product.isKit && product.desconto && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white font-bold px-3 py-1">
            {product.desconto}% OFF
          </Badge>
        )}
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
          <span className="text-2xl font-bold text-primary">
            R$ {price.toFixed(2)}
          </span>

          {product.precoEnjoei && (
            <span className="text-sm text-muted-foreground line-through">
              R$ {product.preco.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
