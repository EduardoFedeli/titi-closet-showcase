import SearchBar from "./SearchBar";

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
        <div className="flex items-center gap-4 lg:gap-6">
          
          {/* ÁREA DA LOGO */}
          <div 
            className="flex items-center gap-3 shrink-0 cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => onNavigate?.('home')}
            title="Ir para o Início"
          >
            {/* A imagem da logo referenciando a pasta public */}
            <img 
              src="/Logo.jpg" // SE SUA LOGO FOR JPG OU SVG, MUDE A EXTENSÃO AQUI (ex: /logo.svg)
              alt="Logo T-Hex Closet" 
              className="h-12 w-auto object-contain rounded-md" 
            />
            
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-primary leading-none">T-Hex Closet</h1>
              <p className="text-xs text-muted-foreground mt-0.5">Desapegos sustentáveis</p>
            </div>
          </div>

          {/* NAVEGAÇÃO */}
          <nav className="hidden md:flex gap-4 ml-4">
            <button
              onClick={() => onNavigate?.('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => onNavigate?.('about')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'about' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Sobre
            </button>
          </nav>

          <div className="flex-1">
            <SearchBar value={searchTerm} onChange={onSearchChange} />
          </div>
        </div>
      </div>
    </header>
  );
}
