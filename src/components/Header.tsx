import SearchBar from "./SearchBar";
import { Info, Home, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  currentPage?: 'home' | 'about';
  onNavigate?: (page: 'home' | 'about') => void;
}

export default function Header({ searchTerm, onSearchChange, currentPage = 'home', onNavigate }: HeaderProps) {
  // Estado para controlar se o modo escuro está ativo
  const [isDark, setIsDark] = useState(false);

  // Efeito que verifica se o site já estava no modo escuro quando a página carrega
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  // Função do interruptor
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* LADO ESQUERDO: BRANDING E LINKS */}
          <div className="flex items-center gap-4 lg:gap-10">
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

          {/* LADO DIREITO: BUSCA E DARK MODE (Desktop) */}
          <div className="flex-1 w-full lg:max-w-md lg:ml-auto flex items-center gap-3">
            <div className="flex-1">
              <SearchBar value={searchTerm} onChange={onSearchChange} />
            </div>
            
            {/* BOTÃO DARK MODE - DESKTOP */}
            <button
              onClick={toggleTheme}
              className="hidden lg:flex p-2.5 rounded-full text-muted-foreground hover:bg-muted transition-colors hover:text-foreground border border-transparent hover:border-border"
              aria-label="Alternar tema"
              title="Alternar tema"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* NAVEGAÇÃO MOBILE (Ícones + Dark Mode) */}
          <nav className="flex items-center gap-2 lg:hidden absolute top-4 right-4">
            {/* BOTÃO DARK MODE - MOBILE */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-muted-foreground hover:bg-muted transition-colors"
              aria-label="Alternar tema"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5" />}
            </button>

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
