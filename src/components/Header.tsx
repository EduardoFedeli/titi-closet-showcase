import SearchBar from "./SearchBar";
import { Info, Home } from "lucide-react";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  currentPage?: 'home' | 'about';
  onNavigate?: (page: 'home' | 'about') => void;
}

export default function Header({ searchTerm, onSearchChange, currentPage = 'home', onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
        
        {/* Container: Em col no celular, alinhado horizontalmente no desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* LADO ESQUERDO: BRANDING EXATAMENTE COMO NA IMAGEM */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <div 
              className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => onNavigate?.('home')}
            >
              <img 
                src="/Logo.jpg" 
                alt="Logo T-Hex Garage" 
                className="h-12 w-auto object-contain rounded-md" 
              />
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-xl text-primary leading-tight">
                  T-Hex Garage
                </h1>
                <p className="text-sm font-medium text-muted-foreground leading-tight">
                  Desapegos sustentáveis
                </p>
              </div>
            </div>

            {/* Ícones de Navegação no Mobile (Ficam na mesma linha da logo) */}
            <nav className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onNavigate?.('home')}
                className={`p-2 rounded-full text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
                }`}
              >
                <Home className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate?.('about')}
                className={`p-2 rounded-full text-sm font-medium transition-colors ${
                  currentPage === 'about' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
                }`}
              >
                <Info className="w-5 h-5" />
              </button>
            </nav>
          </div>

          {/* CENTRO: BARRA DE BUSCA (Fica ao lado no desktop) */}
          <div className="flex-1 w-full lg:max-w-xl lg:mx-6">
            <SearchBar value={searchTerm} onChange={onSearchChange} />
          </div>

          {/* LADO DIREITO: NAVEGAÇÃO DESKTOP */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => onNavigate?.('home')}
              className={`text-sm font-medium transition-colors pb-1 ${
                currentPage === 'home' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => onNavigate?.('about')}
              className={`text-sm font-medium transition-colors pb-1 ${
                currentPage === 'about' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Sobre
            </button>
          </nav>

        </div>
      </div>
    </header>
  );
}
