import { useState } from "react";
import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye, ExternalLink } from "lucide-react";
import { isProductNew, getWhatsAppLink } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  index: number;
}

export default function ProductCard({ product, onClick, index }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const mainImage = product?.fotosImgur?.[0] || "/placeholder.svg";
  const displayPrice = product.precoEnjoei ?? product.preco ?? 0;
  const isNew = isProductNew(product.dataCadastro);

  return (
    <article
      className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl 
                 transition-all duration-300 cursor-pointer border hover:border-primary animate-fade-in-up"
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity">
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
          <Button size="sm" variant="secondary" className="absolute top-3 right-14" onClick={(e) => { e.stopPropagation(); onClick(); }}>
            <Eye className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">Ver detalhes</span>
          </Button>
        </div>

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && <Badge className="bg-green-500 text-white shadow-lg">✨ Novo!</Badge>}
          {product.isKit && product.desconto && <Badge className="bg-red-500 text-white font-bold shadow-lg">{product.desconto}% OFF</Badge>}
          {product.precoEnjoei && <Badge variant="secondary" className="shadow-lg">No Enjoei</Badge>}
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); setIsFavorite(!isFavorite); }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-all opacity-0 group-hover:opacity-100 shadow-lg"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base leading-tight line-clamp-2">{product.nome}</h3>
            <p className="text-xs text-muted-foreground mt-1">{product.marca} • {product.tamanho}</p>
          </div>
          <Badge variant="outline" className="shrink-0 text-[10px] uppercase">{product.estado}</Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.descricao}</p>
        <div className="h-px bg-border" />
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">R$ {displayPrice.toFixed(2).replace('.', ',')}</span>
          {product.precoEnjoei && <span className="text-sm text-muted-foreground line-through">R$ {product.preco.toFixed(2).replace('.', ',')}</span>}
        </div>
        <div className="flex gap-2 pt-1">
          <Button className="flex-1" size="sm" onClick={(e) => { e.stopPropagation(); window.open(getWhatsAppLink(product.nome), '_blank'); }}>
            💬 WhatsApp
          </Button>
          {product.linkEnjoei && (
            <Button variant="outline" size="sm" className="px-3" onClick={(e) => { e.stopPropagation(); window.open(product.linkEnjoei, '_blank'); }}>
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
