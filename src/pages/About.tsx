export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
        <div className="bg-card rounded-2xl border shadow-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-6xl">🦖</span>
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">T-Hex Closet</h1>
            <p className="text-xl text-muted-foreground">Desapegos com pegada jurássica 🦖</p>
          </div>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Nossa História</h2>
              <p>
                Bem-vindo ao T-Hex Closet! Somos um brechó online focado em moda sustentável,
                onde você encontra peças únicas de qualidade com preços acessíveis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Por que T-Hex?</h2>
              <p className="mb-4">
                O nome vem do meu apelido "Tierspy" (que alguns amigos chamam de T-Hex),
                e representa a ideia de que cada peça aqui é única e tem história pra contar
                - assim como os dinossauros que marcaram época!
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Moda Sustentável</h2>
              <p className="mb-4">
                Acreditamos que dar uma segunda vida às roupas é um ato de amor ao planeta.
                Cada peça que você adquire aqui:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Evita descarte desnecessário no meio ambiente</li>
                <li>Reduz o consumo de recursos naturais</li>
                <li>Promove economia circular</li>
                <li>Te deixa com um estilo único e autêntico</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Como Comprar?</h2>
              <p className="mb-4">
                É super fácil! Todos os produtos têm fotos reais e descrições detalhadas.
                Quando encontrar algo que goste:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Clique no produto para ver todas as fotos e detalhes</li>
                <li>Use o botão "WhatsApp" para entrar em contato direto</li>
                <li>Ou clique em "Ver no Enjoei" para comprar com segurança na plataforma</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Garantia de Qualidade</h2>
              <p>
                Todas as peças são cuidadosamente selecionadas e higienizadas.
                Descrevemos o estado real de cada item (Novo, Seminovo ou Usado)
                para que você saiba exatamente o que está adquirindo.
              </p>
            </section>

            <section className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h2 className="text-2xl font-bold text-primary mb-4">Entre em Contato</h2>
              <p className="mb-4">
                Dúvidas? Sugestões? Quer saber se aquela peça ainda está disponível?
              </p>
              
              <a 
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                💬 Fale comigo no WhatsApp
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
