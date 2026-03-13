import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { getWhatsAppLink } from "@/lib/utils"; // <-- Importamos a função do WhatsApp aqui!

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

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
    >
      <div
        className="bg-card border border-border rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

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
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {currentPhoto < total - 1 && (
            <button
              onClick={() => goTo(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors text-black z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs bg-black/60 text-white px-3 py-1 rounded-full backdrop-blur-sm z-10">
            {currentPhoto + 1} / {total}
          </span>
        </div>

        {total > 1 && (
          <div className="flex gap-2 px-4 py-3 overflow-x-auto bg-muted/30 border-b border-border shrink-0">
            {product.fotosImgur.map((foto, i) => (
              <button
                key={i}
                onClick={() => setCurrentPhoto(i)}
                className={`shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  i === currentPhoto ? "border-primary scale-105" : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <img src={foto} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

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
          </div>

          {/* SESSÃO DE OPÇÕES DE COMPRA (WPP vs ENJOEI) */}
          <div className="pt-4 border-t border-border space-y-4">
            
            {/* Opção 1: WhatsApp (Mais Barato) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-secondary/10 p-4 rounded-xl border border-secondary/30">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Comprar direto comigo</span>
                <p className="text-3xl font-bold text-primary">R$ {product.preco.toFixed(2).replace('.', ',')}</p>
              </div>
              <a
                href={getWhatsAppLink(product.nome)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-lg font-bold hover:bg-[#20b858] hover:scale-[1.02] transition-all shadow-md w-full sm:w-auto text-sm"
              >
                💬 Comprar no WhatsApp
              </a>
            </div>

            {/* Opção 2: Enjoei (Com Taxas) - Só aparece se houver link do enjoei */}
            {product.linkEnjoei && product.precoEnjoei && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-border bg-muted/20">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Comprar pelo Enjoei (com taxas)</span>
                  <p className="text-xl font-bold text-muted-foreground">R$ {product.precoEnjoei.toFixed(2).replace('.', ',')}</p>
                </div>
                <a
                  href={product.linkEnjoei}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-background text-foreground border border-border px-5 py-3 rounded-lg font-semibold hover:bg-muted transition-all w-full sm:w-auto text-sm"
                >
                  Ir para o Enjoei <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
