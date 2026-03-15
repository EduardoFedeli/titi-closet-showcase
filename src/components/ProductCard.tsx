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
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"; }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute bottom-3 left-3 flex gap-2">
            {product.fotosImgur.slice(0, 3).map((foto, i) => (
              <div key={i} className="w-10 h-10 sm:w-14 sm:h-14 rounded border-2 border-white/80 overflow-hidden">
                <img src={foto} alt="" className="object-cover w-full h-full" />
              </div>
            ))}
            {product.fotosImgur.length > 3 && (
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded border-2 border-white/80 bg-black/50 flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold">
                +{product.fotosImgur.length - 3}
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isKit && product.desconto && (
            <Badge className="bg-red-500/90 text-white font-bold shadow-lg text-[10px] sm:text-xs px-1.5 py-0 sm:px-2 sm:py-0.5">
              {product.desconto}% OFF
            </Badge>
          )}
        </div>
      </div>

      {/* Diminuímos o padding interno no mobile para ganhar espaço */}
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 flex-1 flex flex-col">
        
        {/* Nova organização: Título em cima, Marca + Tag embaixo */}
        <div className="flex flex-col gap-1 sm:gap-1.5">
          <h3 className="font-semibold text-sm sm:text-base leading-tight line-clamp-2" title={product.nome}>
            {product.nome}
          </h3>
          <div className="flex items-center flex-wrap gap-1.5 mt-0.5">
            <span className="text-[10px] sm:text-xs text-muted-foreground">
              {product.marca} • {product.tamanho}
            </span>
            {/* Tag minúscula, não briga com o título */}
            <Badge variant="outline" className="text-[8px] sm:text-[9px] px-1 sm:px-1.5 py-0 h-3.5 sm:h-4 leading-none uppercase bg-muted/30 text-muted-foreground shrink-0 border-muted-foreground/20">
              {product.estado}
            </Badge>
          </div>
        </div>

        <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2 flex-1">{product.descricao}</p>
        
        <div className="h-px bg-border mt-auto" />
        
        <div className="flex flex-col pt-1">
          {/* Preço ajustado para não estourar a tela no celular */}
          <span className="text-lg sm:text-2xl font-bold text-primary leading-none">
            R$ {displayPrice.toFixed(2).replace('.', ',')}
          </span>
          {product.precoEnjoei && product.precoEnjoei !== product.preco && (
            <span className="text-[9px] sm:text-xs text-muted-foreground font-medium mt-1">
              No Enjoei: <span className="line-through">R$ {product.precoEnjoei.toFixed(2).replace('.', ',')}</span>
            </span>
          )}
        </div>
        
        <div className="pt-1.5 sm:pt-2">
          {/* Botão com texto que diminui e não quebra de linha */}
          <Button 
            className="w-full font-semibold shadow-sm h-8 sm:h-9 px-1 sm:px-3 text-[9px] xs:text-[10px] sm:text-sm" 
            onClick={(e) => { e.stopPropagation(); onClick(); }}
          >
            <span className="truncate w-full text-center">Ver detalhes</span>
          </Button>
        </div>
      </div>
    </article>
  );
}
