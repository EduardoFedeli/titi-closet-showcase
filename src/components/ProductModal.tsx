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
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={product.nome}>
      <div
        className="animate-scale-in bg-card border border-border rounded-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <div className="flex justify-end p-3">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gallery */}
        <div className="relative aspect-[3/4] bg-background/50">
          <img
            src={product.fotosImgur[currentPhoto]}
            alt={`${product.nome} - foto ${currentPhoto + 1}`}
            className="w-full h-full object-contain"
          />

          {product.isKit && product.desconto && (
            <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground font-bold px-4 py-1.5 shadow-lg text-sm">
              {product.desconto}% OFF
            </Badge>
          )}

          {currentPhoto > 0 && (
            <button
              onClick={() => goTo(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm shadow-lg hover:bg-card border border-border transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {currentPhoto < total - 1 && (
            <button
              onClick={() => goTo(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 backdrop-blur-sm shadow-lg hover:bg-card border border-border transition-colors"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs bg-card/80 text-foreground px-3 py-1 rounded-full backdrop-blur-sm border border-border">
            {currentPhoto + 1} / {total}
          </span>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 px-4 py-3 overflow-x-auto">
          {product.fotosImgur.map((foto, i) => (
            <button
              key={i}
              onClick={() => setCurrentPhoto(i)}
              className={`shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                i === currentPhoto
                  ? "thumbnail-active"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
              aria-label={`Ver foto ${i + 1}`}
            >
              <img src={foto} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Info */}
        <div className="px-5 pb-6 pt-2 space-y-4">
          <div className="gold-divider" />
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-body font-medium">
              {product.categoria} · {product.estado}
              {product.marca && product.marca !== "Genérica" ? ` · ${product.marca}` : ""}
            </span>
            <h2 className="font-display text-2xl font-bold mt-1 text-foreground">{product.nome}</h2>
            <p className="text-muted-foreground text-sm mt-2 font-body leading-relaxed">
              {product.descricao}
            </p>
            {product.produtosInclusos && product.produtosInclusos.length > 0 && (
              <div className="mt-3 p-3 rounded-lg bg-secondary/50 border border-border">
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-body font-medium">
                  Incluso no kit:
                </span>
                <ul className="mt-1.5 space-y-1">
                  {product.produtosInclusos.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground font-body">• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">Preço</span>
            <div className="flex items-center gap-3">
              <p className="font-display text-3xl font-bold gold-text">R$ {displayPrice.toFixed(2)}</p>
              {product.precoEnjoei && product.precoEnjoei !== product.preco && (
                <span className="text-lg text-muted-foreground line-through font-body">
                  R$ {product.preco.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {product.linkEnjoei && (
            <a
              href={product.linkEnjoei}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-button"
            >
              Comprar no Enjoei
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <p className="text-center text-xs text-muted-foreground font-body">
            Você será redirecionado para o Enjoei para finalizar a compra com segurança
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
