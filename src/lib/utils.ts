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

export function getWhatsAppLink(productName: string, phoneNumber: string = "5511999999999"): string {
  const message = `Olá! Tenho interesse no produto: ${productName}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
