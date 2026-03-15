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
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
        {/* Container Principal: Em col no mobile, em row no desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* LADO ESQUERDO: LOGO + SLOGAN */}
          <div 
            className="flex items-center gap-3 shrink-0 cursor-pointer transition-transform active:scale-95 lg:hover:scale-[1.02]"
            onClick={() => onNavigate?.('home')}
          >
            <img 
              src="/Logo.jpg" 
              alt="Logo T-Hex Garage" 
              className="h-10 lg:h-12 w-auto object-contain rounded-lg" 
            />
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-lg lg:text-xl text-primary leading-none">T-Hex Garage</h1>
              <p className="hidden sm:block text-[10px] lg:text-xs text-muted-foreground mt-0.5 uppercase tracking-wider font-medium">
                Desapegos Sustentáveis
              </p>
            </div>
          </div>

          {/* CENTRO: BARRA DE BUSCA (Larga no desktop, cheia no mobile) */}
          <div className="flex-1 max-w-2xl w-full">
            <SearchBar value={searchTerm} onChange={onSearchChange} />
          </div>

          {/* LADO DIREITO: NAVEGAÇÃO */}
          <nav className="flex items-center gap-1 lg:gap-4 absolute top-3 right-4 lg:static">
            <button
              onClick={() => onNavigate?.('home')}
              className={`flex items-center gap-2 p-2 lg:px-3 lg:py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'home' 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="hidden lg:inline">Início</span>
            </button>
            
            <button
              onClick={() => onNavigate?.('about')}
              className={`flex items-center gap-2 p-2 lg:px-3 lg:py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === 'about' 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <Info className="w-5 h-5" />
              <span className="hidden lg:inline">Sobre</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
