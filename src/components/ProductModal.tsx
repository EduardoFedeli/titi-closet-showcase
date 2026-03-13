import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const total = product.fotosImgur.length;

  const goTo = useCallback(
    (dir: number) => {
      setCurrentPhoto((prev) => {
        const next = prev + dir;
        if (next < 0 || next >= total) return prev;
        return next;
      });
    },
    [total]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goTo(-1);
      if (e.key === "ArrowRight") goTo(1);
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, goTo]);

  const displayPrice = product.precoEnjoei || product.preco;

  return (
    <div 
      /* Substituí modal-overlay por classes Tailwind de fundo escuro fixo */
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-label={product.nome}
    >
      <div
        /* Adicionei animação padrão do Tailwind, sombra, etc */
        className="bg-card border border-border rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Fixo no topo do modal para não sumir no scroll */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery */}
        <div className="relative aspect-[3/4] bg-muted w-full shrink-0">
          <img
            src={product.fotosImgur[currentPhoto]}
            alt={`${product.nome} - foto ${currentPhoto + 1}`}
            className="w-full h-full object-contain bg-white/50"
          />

          {product.isKit && product.desconto && (
            <Badge className="absolute top-3 left-3 bg-red-500 text-white font-bold px-4 py-1.5 shadow-lg text-sm z-10">
              {product.desconto}% OFF
            </Badge>
          )}

          {currentPhoto > 0 && (
            <button
              onClick={() => goTo(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors text-black z-10"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {currentPhoto < total - 1 && (
            <button
              onClick={() => goTo(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors text-black z-10"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs bg-black/60 text-white px-3 py-1 rounded-full backdrop-blur-sm z-10">
            {currentPhoto + 1} / {total}
          </span>
        </div>

        {/* Thumbnails */}
        {total > 1 && (
          <div className="flex gap-2 px-4 py-3 overflow-x-auto bg-muted/30 border-b border-border shrink-0">
            {product.fotosImgur.map((foto, i) => (
              <button
                key={i}
                onClick={() => setCurrentPhoto(i)}
                className={`shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  i === currentPhoto
                    ? "border-primary scale-105"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
                aria-label={`Ver foto ${i + 1}`}
              >
                <img src={foto} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Info */}
        <div className="p-5 sm:p-6 space-y-4 flex-1">
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-semibold">
              {product.categoria} · {product.estado}
              {product.marca && product.marca !== "Genérica" ? ` · ${product.marca}` : ""}
            </span>
            <h2 className="text-2xl font-bold mt-1 text-foreground leading-tight">{product.nome}</h2>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              {product.descricao}
            </p>
            {product.produtosInclusos && product.produtosInclusos.length > 0 && (
              <div className="mt-4 p-3 rounded-lg bg-secondary/20 border border-secondary/30">
                <span className="text-xs uppercase tracking-wider text-primary font-semibold">
                  Incluso no kit:
                </span>
                <ul className="mt-2 space-y-1">
                  {product.produtosInclusos.map((item, i) => (
                    <li key={i} className="text-sm text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-border">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Preço</span>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-3xl font-bold text-primary">R$ {displayPrice.toFixed(2).replace('.', ',')}</p>
              {product.precoEnjoei && product.precoEnjoei !== product.preco && (
                <span className="text-lg text-muted-foreground line-through">
                  R$ {product.preco.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
          </div>

          {product.linkEnjoei && (
            <div className="pt-2">
              <a
                href={product.linkEnjoei}
                target="_blank"
                rel="noopener noreferrer"
                /* Transformei a classe buy-button em classes utilitárias do Tailwind */
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-bold hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-md"
              >
                Comprar no Enjoei
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-muted-foreground mt-3">
                Você será redirecionado para o Enjoei para finalizar a compra com segurança
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
