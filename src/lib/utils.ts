import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isProductNew(dataCadastro: string, daysThreshold: number = 7): boolean {
  try {
    const [day, month] = dataCadastro.split('/').map(Number);
    const currentYear = new Date().getFullYear();
    const productDate = new Date(currentYear, month - 1, day);
    const now = new Date();
    const diffTime = now.getTime() - productDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= daysThreshold;
  } catch {
    return false;
  }
}

export function getWhatsAppLink(productName: string): string {
  // 1. COLOQUE O SEU NÚMERO AQUI (Apenas números: 55 + DDD + Seu Número)
  // Exemplo: Se for DDD 11 e número 98765-4321, fica "5511987654321"
  const phoneNumber = "5511996923876"; 
  
  // 2. A MENSAGEM DINÂMICA (O ${productName} vai ser substituído automaticamente!)
  const message = `Fala, T-Hex! Vi o produto *${productName}* na sua Garage e tenho interesse. Ainda está disponível?`;
  
  // 3. CODIFICAÇÃO (Transforma os espaços em %20 para o link do WhatsApp não quebrar)
  const encodedMessage = encodeURIComponent(message);
  
  // 4. GERA O LINK FINAL
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
