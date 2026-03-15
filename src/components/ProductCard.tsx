import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  index: number;
}

export default function ProductCard({ product, onClick, index }: ProductCardProps) {
  const mainImage = product?.fotosImgur?.[0] || "/placeholder.svg";
  
  const displayPrice = product.preco ?? 0;

  return (
    <article
      className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl 
                 transition-all duration-300 cursor-pointer border hover:border-primary animate-fade-in-up flex flex-col h-full"
      style={{ animationDelay: `${index * 0.06}s` }}
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={mainImage}
          alt={product.nome}
          {/* Voltamos para object-cover e tiramos o bg-white para preencher o card! */}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"; }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute bottom-3 left-3 flex gap-2">
            {product.fotosImgur.slice(0, 3).map((foto, i) => (
              <div key={i} className="w-14 h-14 rounded border-2 border-white/80 overflow-hidden">
                <img src={foto} alt="" className="object-cover w-full h-full" />
              </div>
            ))}
            {product.fotosImgur.length > 3 && (
              <div className="w-14 h-14 rounded border-2 border-white/80 bg-black/50 flex items-center justify-center text-white text-xs font-semibold">
                +{product.fotosImgur.length - 3}
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isKit && product.desconto && (
            <Badge className="bg-red-500/90 text-white font-bold shadow-lg">
              {product.desconto}% OFF
            </Badge>
          )}
        </div>
      </div>

      <div className="p-4 space-y-3 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base leading-tight line-clamp-2">{product.nome}</h3>
            <p className="text-xs text-muted-foreground mt-1">{product.marca} • {product.tamanho}</p>
          </div>
          <Badge variant="outline" className="shrink-0 text-[10px] uppercase">{product.estado}</Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{product.descricao}</p>
        
        <div className="h-px bg-border mt-auto" />
        
        <div className="flex flex-col pt-1">
          <span className="text-2xl font-bold text-primary">R$ {displayPrice.toFixed(2).replace('.', ',')}</span>
          {product.precoEnjoei && product.precoEnjoei !== product.preco && (
            <span className="text-xs text-muted-foreground font-medium">
              No Enjoei: <span className="line-through">R$ {product.precoEnjoei.toFixed(2).replace('.', ',')}</span>
            </span>
          )}
        </div>
        
        <div className="pt-2">
          <Button className="w-full font-semibold shadow-sm" size="sm" onClick={(e) => { e.stopPropagation(); onClick(); }}>
            Ver detalhes e comprar
          </Button>
        </div>
      </div>
    </article>
  );
}
