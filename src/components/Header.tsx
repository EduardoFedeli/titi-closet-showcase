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
        
        {/* Container Principal: Stack no mobile, flex justify-between no desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* NOVO GRUPO DESKTOP (Logo + Nav) */}
          <div className="flex items-center gap-4 lg:gap-10">
            
            {/* LADO ESQUERDO: BRANDING */}
            <div 
              className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => onNavigate?.('home')}
            >
              <img 
                src="/Logo.png" 
                alt="Logo T-Hex Garage" 
                className="h-10 lg:h-12 w-auto object-contain rounded-md" 
              />
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-lg lg:text-xl text-primary leading-tight">
                  T-Hex Garage
                </h1>
                <p className="text-sm font-medium text-muted-foreground leading-tight">
                  Desapegos sustentáveis
                </p>
              </div>
            </div>

            {/* Links de Navegação Desktop (Colados no Branding) */}
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

          {/* LADO DIREITO DESKTOP: BARRA DE BUSCA (Empurrada totalmente para a direita) */}
          <div className="flex-1 w-full lg:max-w-md lg:ml-auto">
            <SearchBar value={searchTerm} onChange={onSearchChange} />
          </div>

          {/* Ícones de Navegação Mobile (permanecem inalterados e funcionando) */}
          <nav className="flex items-center gap-2 lg:hidden absolute top-4 right-4">
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
      </div>
    </header>
  );
}
