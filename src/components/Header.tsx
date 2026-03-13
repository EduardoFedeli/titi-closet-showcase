import SearchBar from "./SearchBar";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function Header({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🦖</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-primary leading-none">T-Hex Closet</h1>
              <p className="text-xs text-muted-foreground mt-0.5">Desapegos sustentáveis</p>
            </div>
          </div>
          <div className="flex-1">
            <SearchBar value={searchTerm} onChange={onSearchChange} />
          </div>
        </div>
      </div>
    </header>
  );
}
