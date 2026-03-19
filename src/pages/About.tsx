import { Instagram } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-16">
        <div className="bg-card rounded-2xl border shadow-lg p-8 lg:p-12">
          
          {/* CABEÇALHO COM A LOGO NOVA */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6 transition-transform hover:scale-105">
              <img 
                src="/Logo.png" 
                alt="Logo T-Hex Garage" 
                className="h-24 w-auto object-contain rounded-xl" 
              />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">T-Hex Garage</h1>
            <p className="text-xl text-muted-foreground">Desapegos com pegada jurássica 🦖</p>
          </div>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">A Minha História</h2>
              <p className="mb-4">
                Sabe aquela tentação de escolher o caminho mais fácil e simplesmente jogar fora ou doar de qualquer jeito o que a gente não usa mais? Eu (e muita gente) não curto a ideia desse descarte fácil. 
              </p>
              <p className="mb-4">
                O <strong>T-Hex Garage</strong> nasceu exatamente disso. Criei este espaço online pra deixar linkado nas minhas redes sociais. É a minha vitrine pessoal pra vender meus desapegos com a maior transparência possível e, claro, recuperar uma graninha do que paguei lá atrás.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Por que T-Hex?</h2>
              <p className="mb-4">
                O nome vem de uma brincadeira de amigos. Meu nick sempre foi "Tierspy", o que naturalmente gerou 
                o apelido "Titi". Com o tempo, a criatividade da galera evoluiu isso para "T-Hex", e eu 
                gostei da ideia de usar isso como uma identidade visual única e divertida para o 
                meu projeto de desapegos na minha "garagem" online.
              </p>
            </section>

            <section className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h2 className="text-2xl font-bold text-primary mb-3">Fazendo a Roda Girar ♻️</h2>
              <p className="mb-4">
                Tem um papo sério por trás disso tudo: o Brasil é um dos países que mais gera lixo têxtil e eletrônico no mundo (são milhões de toneladas por ano indo parar em aterros).
              </p>
              <p>
                Acredito que se cada brasileiro se preocupasse em dar uma segunda vida pras coisas que estão paradas em casa, a gente não só ajudaria o planeta, mas movimentaria a economia de forma muito positiva. É a grana trocando de mãos entre pessoas reais. Você economiza comprando algo de qualidade, eu recupero uma parte do meu dinheiro, e todo mundo sai ganhando!
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">É seguro mesmo comprar aqui?</h2>
              <p className="mb-4">
                Completamente! O site é 100% estático, o que significa que nenhum dado seu (como senhas, e-mails ou 
                informações de cartão) é inserido ou armazenado aqui. Construí o site dessa forma justamente para que 
                você tenha total privacidade enquanto navega.
              </p>
              <p className="mb-4">
                A negociação real acontece diretamente comigo no <strong>Direct do Instagram</strong>. Para garantir a segurança de ambos os lados, 
                combinamos como a peça vai chegar até você e <strong>o Pix só precisa ser feito 
                no momento em que você estiver com o produto em mãos!</strong>
              </p>
              <p className="mb-4">
                Prefere parcelar no cartão de crédito? Sem problemas! Todos os produtos 
                possuem um botão alternativo com link direto para a minha lojinha no <strong>Enjoei</strong>. Lá você tem a segurança da 
                plataforma como intermediária (apenas com um pequeno acréscimo no valor devido às taxas do app).
              </p>
            </section>

            <section className="bg-muted/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-primary mb-4">Atenção às Fotos! 📸</h2>
              <p>
                Para te ajudar a visualizar melhor como as peças vestem, <strong>a primeira foto de TODOS os produtos é meramente ilustrativa, gerada por Inteligência Artificial</strong>. O objetivo é apenas te dar uma noção maior do conceito e do caimento. Para ver os detalhes 100% reais de costura, tecido e estado do produto, basta conferir as fotos seguintes na galeria de cada item!
              </p>
            </section>

            <section>
                  <h2 className="text-2xl font-bold text-primary mb-4">Negociação e Entregas</h2>
                  <p className="mb-4">
                    Aqui o papo é reto! Eu <strong>estou super aberto a negociações</strong>. Viu uma peça que amou mas o orçamento apertou? Me chame no Instagram e vamos conversar.
                  </p>
                  
                  <div className="space-y-4 bg-muted/20 p-4 rounded-xl border border-border">
                    <p className="text-sm">
                      <strong>🚚 Para todo o Brasil:</strong> Compre direto pelo meu link do <strong>Enjoei</strong>. Lá a logística é automática e você recebe em casa com seguro e frete reduzido em qualquer estado.
                    </p>
                    <p className="text-sm">
                      <strong>🤝 Para São Paulo (Capital):</strong> Se preferir negociar (com aquele desconto especial), a entrega é feita exclusivamente na região de SP via aplicativos de entrega ou encontros em locais seguros, como estações de metrô. Tudo combinado via Direct!
                    </p>
                  </div>
            </section>
            
            {/* SEÇÃO DO FORMS PARA O SAAS */}
            <section className="bg-secondary/10 rounded-lg p-6 border border-secondary/30 mt-12 shadow-sm">
              <h2 className="text-xl font-bold text-primary mb-3">Quer ter o seu próprio espaço online?</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Estou estudando a possibilidade de transformar toda essa tecnologia que você está vendo em uma 
                plataforma por assinatura (SaaS). A ideia é que qualquer pessoa possa criar sua própria vitrine de 
                desapegos linda e intuitiva assim, sem precisar saber escrever uma linha de código!
              </p>
              <p className="mb-4 text-sm text-foreground font-medium">
                Acha a ideia interessante? Me ajudaria demais se você respondesse um formulário super rápido 
                para eu entender se vale a pena tirar esse projeto do papel:
              </p>
              <a 
                href="https://forms.gle/1jV2PbUa7seKVCR67"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm"
              >
                📋 Responder Pesquisa de 1 minuto
              </a>
            </section>

            {/* SEÇÃO DE CONTATO ATUALIZADA - FOCADA NO INSTAGRAM */}
            <section className="bg-primary/5 rounded-lg p-6 sm:p-8 border border-primary/20 mt-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Entre em Contato</h2>
              <p className="mb-6 text-muted-foreground">
                Ficou com alguma dúvida? Quer fazer uma oferta ou saber se aquele item que você curtiu ainda está disponível? Me chama lá no Direct!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.instagram.com/du.fedeli/" // <--- ATENÇÃO: COLOQUE SEU @ DO INSTAGRAM AQUI!
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg hover:scale-[1.02] text-lg w-full sm:w-auto"
                >
                  <Instagram className="w-6 h-6" />
                  Fale comigo no Instagram
                </a>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
