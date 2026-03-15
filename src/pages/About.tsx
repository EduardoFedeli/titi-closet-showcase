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
              <h2 className="text-2xl font-bold text-primary mb-4">A Minha História</h2>
              <p>
                Bem-vindo ao T-Hex Closet! Este é o meu brechó online focado em moda sustentável,
                onde você encontra peças únicas de qualidade com preços justos. Faço toda a 
                curadoria, fotografia, design do site e atendimento sozinho, garantindo atenção a cada detalhe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Por que T-Hex?</h2>
              <p className="mb-4">
                O nome vem de uma brincadeira de amigos. Meu nick sempre foi "Tierspy", o que naturalmente gerou 
                o apelido "Titi". Com o tempo, a criatividade da galera evoluiu isso para "T-Hex", e eu 
                simplesmente adorei a ideia de usar isso como uma identidade visual única e divertida para o 
                meu projeto de desapegos.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">É seguro mesmo comprar aqui?</h2>
              <p className="mb-4">
                Completamente! O site é 100% estático, o que significa que nenhum dado seu (como senhas, e-mails ou 
                informações de cartão) é inserido ou armazenado aqui. Construí o site dessa forma justamente para que 
                você tenha total privacidade enquanto navega pela vitrine.
              </p>
              <p className="mb-4">
                A negociação real acontece diretamente comigo no WhatsApp. Para garantir a segurança de ambos os lados, 
                combinamos como a peça vai chegar até você (entrega em mãos ou envio) e <strong>o Pix só precisa ser feito 
                no momento em que você estiver com o produto!</strong>
              </p>
              <p className="mb-4">
                Ainda desconfiado ou prefere parcelar no cartão de crédito? Sem problemas! Todos os produtos 
                possuem um botão alternativo com link direto para a minha lojinha no <strong>Enjoei</strong>. Lá você tem a segurança da 
                plataforma como intermediária (apenas com um pequeno acréscimo no valor devido às taxas do app).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Moda Sustentável</h2>
              <p className="mb-4">
                Acredito que dar uma segunda vida às roupas é um ato de amor ao planeta.
                Cada peça que você adquire aqui:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Evita o descarte desnecessário no meio ambiente</li>
                <li>Reduz o consumo massivo de recursos naturais</li>
                <li>Promove a economia circular de forma real</li>
                <li>Te deixa com um estilo único, autêntico e sustentável</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Como Comprar?</h2>
              <p className="mb-4">
                É super fácil! Todos os produtos têm fotos reais e descrições detalhadas.
                Quando encontrar algo que gostar:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Clique no produto na página inicial para abrir os detalhes</li>
                <li>Use o botão verde "Comprar no WhatsApp" para negociar diretamente comigo</li>
                <li>Ou use o botão roxo "Ir para o Enjoei" se preferir a segurança/cartão do aplicativo</li>
              </ol>
            </section>
            
            {/* SEÇÃO DO FORMS PARA O SAAS */}
            <section className="bg-secondary/10 rounded-lg p-6 border border-secondary/30 mt-12 shadow-sm">
              <h2 className="text-xl font-bold text-primary mb-3">Quer ter o seu próprio brechó online?</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Estou estudando a possibilidade de transformar toda essa tecnologia que você está vendo em uma 
                plataforma por assinatura (SaaS). A ideia é que qualquer pessoa possa criar seu próprio site de 
                desapegos lindo e intuitivo assim, sem precisar saber escrever uma linha de código!
              </p>
              <p className="mb-4 text-sm text-foreground font-medium">
                Acha a ideia interessante? Me ajudaria demais se você respondesse um formulário super rápido 
                para eu entender se vale a pena tirar esse projeto do papel:
              </p>
              <a 
                href="#" // COLOQUE O LINK DO SEU GOOGLE FORMS AQUI
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm"
              >
                📋 Responder Pesquisa de 1 minuto
              </a>
            </section>

            <section className="bg-primary/5 rounded-lg p-6 border border-primary/20 mt-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Entre em Contato</h2>
              <p className="mb-4">
                Ficou com alguma dúvida? Quer sugerir algo ou saber se aquela peça que você amou ainda está disponível?
              </p>
              
              <a 
                href="https://wa.me/5511999999999" // NÃO ESQUEÇA DE COLOCAR SEU NÚMERO AQUI
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#20b858] transition-colors shadow-md"
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
