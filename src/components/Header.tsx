import SearchBar from "./SearchBar";
import { Info, Home } from "lucide-react"; // Importando ícones para o mobile

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
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            
            {/* ÁREA DA LOGO */}
            <div 
              className="flex items-center gap-2 shrink-0 cursor-pointer transition-transform active:scale-95"
              onClick={() => onNavigate?.('home')}
            >
              <img 
                src="/Logo.jpg" 
                alt="Logo T-Hex Garage" 
                className="h-10 w-auto object-contain rounded-lg" 
              />
              <div className="hidden xs:block">
                <h1 className="font-bold text-lg text-primary leading-none">T-Hex Garage</h1>
              </div>
            </div>

            {/* NAVEGAÇÃO MOBILE (ÍCONES) + DESKTOP (TEXTO) */}
            <nav className="flex items-center gap-2">
              <button
                onClick={() => onNavigate?.('home')}
                className={`p-2 rounded-full md:rounded-none md:px-2 md:py-1 text-sm font-medium transition-colors ${
                  currentPage === 'home' 
                    ? 'bg-primary/10 text-primary md:bg-transparent md:border-b-2 md:border-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                <span className="hidden md:inline">Início</span>
                <Home className="w-5 h-5 md:hidden" />
              </button>
              
              <button
                onClick={() => onNavigate?.('about')}
                className={`p-2 rounded-full md:rounded-none md:px-2 md:py-1 text-sm font-medium transition-colors ${
                  currentPage === 'about' 
                    ? 'bg-primary/10 text-primary md:bg-transparent md:border-b-2 md:border-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                <span className="hidden md:inline">Sobre</span>
                <Info className="w-5 h-5 md:hidden" />
              </button>
            </nav>
          </div>

          {/* BARRA DE BUSCA */}
          <div className="w-full">
            <SearchBar value={searchTerm} onChange={onSearchChange} />
          </div>
        </div>
      </div>
    </header>
  );
}
