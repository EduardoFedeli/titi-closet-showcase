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
        {/* Container Principal: Em col no mobile, em grid no desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr,auto,1fr] lg:items-center gap-4 lg:gap-6">
          
          {/* LADO ESQUERDO: LOGO + TEXTO (O look que você ama) */}
          <div 
            className="flex items-center gap-3 shrink-0 cursor-pointer transition-transform lg:active:scale-95 lg:hover:scale-[1.02] justify-center lg:justify-start"
            onClick={() => onNavigate?.('home')}
          >
            {/* O Container Largo e Arredondado do Dinossauro */}
            <div className="bg-muted/10 rounded-xl px-4 py-2 flex items-center justify-center w-28 h-16 shadow-inner">
              <img 
                src="/Logo.jpg" 
                alt="Logo T-Hex Garage" 
                className="h-10 lg:h-12 w-auto object-contain" 
              />
            </div>
            
            {/* O Texto: Nome e Slogan empilhados */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-bold text-lg lg:text-xl text-primary leading-none">T-Hex Garage</h1>
              <p className="text-[10px] lg:text-xs text-muted-foreground mt-0.5 uppercase tracking-wider font-medium">
                Desapegos Sustentáveis
              </p>
            </div>
          </div>

          {/* CENTRO (Grid col 2): BARRA DE BUSCA (Ajustada para o desktop) */}
          <div className="flex-1 max-w-2xl w-full lg:mx-auto">
            <SearchBar value={searchTerm} onChange={onSearchChange} />
          </div>

          {/* LADO DIREITO (Grid col 3): NAVEGAÇÃO */}
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
