// src/data/products.ts
// Atualizado: 15/03/2026 - Catálogo Completo T-Hex Closet

export interface Product {
  id: string;
  nome: string;
  categoria: string;
  marca: string;
  tamanho: string;
  estado: string;
  preco: number;
  precoEnjoei?: number;
  status: string;
  linkEnjoei?: string;
  dataCadastro: string;
  fotosImgur: string[];
  dataVenda?: string;
  descricao: string;
  isKit?: boolean;
  desconto?: number;
  produtosInclusos?: string[];
}

export const products: Product[] = [
  {
    id: "CAL001",
    nome: "Calça Jogger Marrom Elástico",
    categoria: "Calças",
    marca: "JDY",
    tamanho: "G (44/46)",
    estado: "Seminovo",
    preco: 50.00,
    precoEnjoei: 58.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/hiWeJIz.png",
      "https://i.imgur.com/ZGu1pfG.jpeg",
      "https://i.imgur.com/yraRvJM.jpeg",
      "https://i.imgur.com/kqIcdiv.jpeg",
      "https://i.imgur.com/3PHvxV5.jpeg"
    ],
    descricao: "Calça jogger marrom com ajuste elástico na cintura, marca JDY. Modelo confortável e versátil, ideal para uso casual ou esportivo. Tecido resistente com caimento moderno. Estado seminovo, conservada, sem defeitos. Tamanho G (44/46).",
    linkEnjoei: ""
  },
  {
    id: "CAL002",
    nome: "Calça Jogger Bege Elástico",
    categoria: "Calças",
    marca: "JDY",
    tamanho: "G (44/46)",
    estado: "Seminovo",
    preco: 40.00,
    precoEnjoei: 46.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/Fp0XCl6.png",
      "https://i.imgur.com/oTk0MWE.jpeg",
      "https://i.imgur.com/6T50fqu.jpeg",
      "https://i.imgur.com/qwlSXsT.jpeg"
    ],
    descricao: "Calça jogger bege com cintura elástica ajustável, marca JDY. Design casual e prático, perfeita para o dia a dia. Tecido confortável e durável. Estado seminovo, bem conservada. Tamanho G (44/46).",
    linkEnjoei: ""
  },
  {
    id: "CAL003",
    nome: "Calça Cargo Cinza Bolsos Laterais",
    categoria: "Calças",
    marca: "Nicoboco",
    tamanho: "40",
    estado: "Usado",
    preco: 60.00,
    precoEnjoei: 70.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/hj0EEdM.png",
      "https://i.imgur.com/oZEUXc0.jpeg",
      "https://i.imgur.com/FWmOl9f.jpeg",
      "https://i.imgur.com/4WxveDG.jpeg",
      "https://i.imgur.com/AimovT4.jpeg"
    ],
    descricao: "Calça cargo cinza com múltiplos bolsos utilitários, marca Nicoboco. Estilo urbano funcional, ideal para atividades ao ar livre ou look streetwear. Tecido resistente. Estado usado, bom estado geral. Tamanho 40.",
    linkEnjoei: ""
  },
  {
    id: "CAL004",
    nome: "Calça Jeans Azul Clássica",
    categoria: "Calças",
    marca: "Ecko Unltd",
    tamanho: "44",
    estado: "Seminovo",
    preco: 50.00,
    precoEnjoei: 58.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/ezbiiTW.png",
      "https://i.imgur.com/2w6uqIq.jpeg",
      "https://i.imgur.com/6dvw2Fi.jpeg",
      "https://i.imgur.com/xjw8uVb.jpeg"
    ],
    descricao: "Calça jeans azul clássica, marca Ecko Unltd Oficial. Modelagem tradicional atemporal, versátil para diversas ocasiões. Denim de qualidade com acabamento premium. Estado seminovo, excelente conservação. Tamanho 44.",
    linkEnjoei: ""
  },
  {
    id: "CAL005",
    nome: "Calça Cargo Bege com Cordão",
    categoria: "Calças",
    marca: "JDY",
    tamanho: "G (44/46)",
    estado: "Usado",
    preco: 60.00,
    precoEnjoei: 70.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/sAPhul3.png",
      "https://i.imgur.com/GPzewRp.jpeg",
      "https://i.imgur.com/iRieaqD.jpeg"
    ],
    descricao: "Calça cargo bege com ajuste por cordão na cintura, marca JDY. Modelo utilitário com bolsos funcionais, estilo casual moderno. Tecido resistente e confortável. Estado usado, bem cuidada. Tamanho G (44/46).",
    linkEnjoei: ""
  },
  {
    id: "CAL006",
    nome: "Calça Jogger Cinza Escuro",
    categoria: "Calças",
    marca: "Centauro",
    tamanho: "G (44/46)",
    estado: "Usado",
    preco: 40.00,
    precoEnjoei: 46.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/TUMWZj8.png",
      "https://i.imgur.com/mQ9tjtx.jpeg",
      "https://i.imgur.com/1FGkLny.jpeg",
      "https://i.imgur.com/hwU20G2.jpeg"
    ],
    descricao: "Calça jogger cinza escuro, marca Centauro. Design esportivo com elástico na barra, perfeita para treinos ou look casual. Material leve e respirável. Estado usado, boa conservação. Tamanho G (44/46).",
    linkEnjoei: ""
  },
  {
    id: "CAL007",
    nome: "Calça Cargo Preta Streetwear",
    categoria: "Calças",
    marca: "Shein",
    tamanho: "M (40/42)",
    estado: "Usado",
    preco: 40.00,
    precoEnjoei: 46.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/c1iRJIh.png",
      "https://i.imgur.com/2ePoi1s.jpeg",
      "https://i.imgur.com/3tdToJ4.jpeg",
      "https://i.imgur.com/z6uZaCd.jpeg"
    ],
    descricao: "Calça cargo preta estilo skate streetwear retro com elástico, marca Shein. Visual urbano moderno com múltiplos bolsos. Acabamento jogger nas barras. Estado usado, bem mantida. Tamanho M (40/42).",
    linkEnjoei: ""
  },
  {
    id: "CAL008",
    nome: "Calça Jeans Azul Escuro",
    categoria: "Calças",
    marca: "Nicoboco",
    tamanho: "46",
    estado: "Seminovo",
    preco: 65.00,
    precoEnjoei: 76.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/uCe0gfq.png",
      "https://i.imgur.com/TkjyI9d.jpeg",
      "https://i.imgur.com/YlSADNQ.jpeg"
    ],
    descricao: "Calça jeans azul escuro, marca Nicoboco. Lavagem clássica com caimento confortável, ideal para uso diário. Denim de boa qualidade e durabilidade. Estado seminovo, impecável. Tamanho 46.",
    linkEnjoei: ""
  },
  {
    id: "CAL009",
    nome: "Calça Chino Verde Militar",
    categoria: "Calças",
    marca: "Náutica",
    tamanho: "38",
    estado: "Novo",
    preco: 100.00,
    precoEnjoei: 117.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/T9KwPBV.jpeg",
      "https://i.imgur.com/QjontZO.jpeg",
      "https://i.imgur.com/cP0bQNp.jpeg"
    ],
    descricao: "Calça chino verde militar, marca Náutica. Estilo elegante casual, perfeita para looks mais arrumados. Tecido premium com excelente caimento. Estado novo, nunca usada. Tamanho 38.",
    linkEnjoei: ""
  },
  {
    id: "CAM001",
    nome: "Camiseta Amarela Básica",
    categoria: "Camisas",
    marca: "Hering",
    tamanho: "M",
    estado: "Novo",
    preco: 40.00,
    precoEnjoei: 46.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/DVom5pV.jpeg",
      "https://i.imgur.com/d5SS4Gu.jpeg",
      "https://i.imgur.com/uW0gWl8.jpeg",
      "https://i.imgur.com/QJdKFrg.jpeg",
      "https://i.imgur.com/nni0OYO.png"
    ],
    descricao: "Camiseta amarela básica 100% algodão, marca Hering. Modelagem clássica confortável, perfeita para o dia a dia. Tecido macio de alta qualidade. Estado novo, etiqueta preservada. Tamanho M. Cor vibrante e versátil.",
    linkEnjoei: ""
  },
  {
    id: "CAM002",
    nome: "Camiseta Roxa Streetwear",
    categoria: "Camisas",
    marca: "Shein",
    tamanho: "G",
    estado: "Novo",
    preco: 30.00,
    precoEnjoei: 35.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/RUQPEnc.png",
      "https://i.imgur.com/R6Tjipo.png",
      "https://i.imgur.com/bpkBmaf.jpeg",
      "https://i.imgur.com/DehCLPD.jpeg",
      "https://i.imgur.com/ARVn2lh.jpeg"
    ],
    descricao: "Camiseta unissex roxa 100% algodão estilo streetwear, marca Shein. Design moderno e confortável, ideal para looks casuais. Tecido respirável de qualidade. Estado novo. Tamanho G. Tom roxo diferenciado.",
    linkEnjoei: ""
  },
  {
    id: "CAM003",
    nome: "Camiseta Preta Básica",
    categoria: "Camisas",
    marca: "Nexstar",
    tamanho: "M",
    estado: "Usado",
    preco: 30.00,
    precoEnjoei: 35.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/irj5gP2.jpeg",
      "https://i.imgur.com/1pfmd9h.jpeg",
      "https://i.imgur.com/QROEXhi.jpeg"
    ],
    descricao: "Camiseta preta básica essencial, marca Nexstar. Peça coringa do guarda-roupa, combina com tudo. Modelagem confortável tradicional. Estado usado, bem conservada. Tamanho M. Clássico atemporal.",
    linkEnjoei: ""
  },
  {
    id: "CAM004",
    nome: "Camiseta Preta Lisa",
    categoria: "Camisas",
    marca: "SSB Brand",
    tamanho: "M",
    estado: "Usado",
    preco: 20.00,
    precoEnjoei: 23.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/sPDdvxf.jpeg",
      "https://i.imgur.com/Eha1dHU.jpeg",
      "https://i.imgur.com/Cf4tytt.jpeg"
    ],
    descricao: "Camiseta preta lisa básica, marca SSB Brand. Essencial versátil para qualquer ocasião. Tecido de algodão confortável. Estado usado, ótima conservação. Tamanho M. Perfeita para compor looks.",
    linkEnjoei: ""
  },
  {
    id: "CAM005",
    nome: "Camiseta Branca Fit Slim",
    categoria: "Camisas",
    marca: "Shein",
    tamanho: "M",
    estado: "Seminovo",
    preco: 22.00,
    precoEnjoei: 25.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/DuOVV7A.jpeg",
      "https://i.imgur.com/3BOTKFW.jpeg",
      "https://i.imgur.com/1cHXXEG.jpeg"
    ],
    descricao: "Camiseta branca masculina fit slim, marca Shein. Modelagem ajustada moderna e confortável. Tecido de qualidade que valoriza o shape. Estado seminovo, impecável. Tamanho M. Corte contemporâneo elegante.",
    linkEnjoei: ""
  },
  {
    id: "CAM006",
    nome: "Camiseta Cinza Claro Básica",
    categoria: "Camisas",
    marca: "SSB Brand",
    tamanho: "M",
    estado: "Usado",
    preco: 20.00,
    precoEnjoei: 23.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/KYhUC3x.jpeg",
      "https://i.imgur.com/gddRJos.jpeg",
      "https://i.imgur.com/XQAwK0K.jpeg"
    ],
    descricao: "Camiseta cinza claro básica lisa, marca SSB Brand. Tom neutro versátil, combina facilmente. Tecido confortável de uso diário. Estado usado, excelente estado. Tamanho M. Peça essencial básica.",
    linkEnjoei: ""
  },
  {
    id: "CAM007",
    nome: "Camiseta Azul Marinho Básica",
    categoria: "Camisas",
    marca: "SSB Brand",
    tamanho: "M",
    estado: "Usado",
    preco: 20.00,
    precoEnjoei: 23.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/pSh7qSF.jpeg",
      "https://i.imgur.com/XTZ9UBw.jpeg",
      "https://i.imgur.com/k1eKRx0.jpeg"
    ],
    descricao: "Camiseta azul marinho básica lisa, marca SSB Brand. Cor clássica elegante para o dia a dia. Algodão macio e durável. Estado usado, bem conservada. Tamanho M. Essencial masculino atemporal.",
    linkEnjoei: ""
  },
  {
    id: "CAM008",
    nome: "Camiseta Vermelha Básica",
    categoria: "Camisas",
    marca: "SSB Brand",
    tamanho: "M",
    estado: "Usado",
    preco: 20.00,
    precoEnjoei: 23.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/sOV2wKP.jpeg",
      "https://i.imgur.com/SpRDd1d.jpeg",
      "https://i.imgur.com/f1cn9eU.jpeg"
    ],
    descricao: "Camiseta vermelha básica lisa, marca SSB Brand. Tom vibrante que destaca, versátil para combinar. Tecido de qualidade confortável. Estado usado, ótimo estado. Tamanho M. Adiciona cor ao visual.",
    linkEnjoei: ""
  },
  {
    id: "CAM009",
    nome: "Camiseta Marrom Oversized",
    categoria: "Camisas",
    marca: "Sem marca",
    tamanho: "M",
    estado: "Usado",
    preco: 25.00,
    precoEnjoei: 29.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/ITqlUTR.jpeg",
      "https://i.imgur.com/nlAHYNE.jpeg",
      "https://i.imgur.com/POaIPi5.jpeg"
    ],
    descricao: "Camiseta marrom oversized básica. Modelagem ampla moderna e confortável, estilo streetwear. Tom terra neutro diferenciado. Estado usado, bem mantida. Tamanho M. Caimento oversized atual.",
    linkEnjoei: ""
  },
  {
    id: "CAM010",
    nome: "Regata Preta Básica",
    categoria: "Camisas",
    marca: "SSB Brand",
    tamanho: "M",
    estado: "Usado",
    preco: 15.00,
    precoEnjoei: 17.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/bAHWO29.jpeg",
      "https://i.imgur.com/J89VoLN.jpeg",
      "https://i.imgur.com/pScdM5s.jpeg"
    ],
    descricao: "Regata preta básica masculina, marca SSB Brand. Ideal para academia, praia ou looks casuais. Tecido leve e confortável. Estado usado, boa conservação. Tamanho M. Essencial para dias quentes.",
    linkEnjoei: ""
  },
  {
    id: "CAM011",
    nome: "Regata Branca Básica",
    categoria: "Camisas",
    marca: "SSB Brand",
    tamanho: "M",
    estado: "Usado",
    preco: 15.00,
    precoEnjoei: 17.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/un6TloE.png",
      "https://i.imgur.com/MhPMTeO.jpeg",
      "https://i.imgur.com/kc4cJrY.jpeg"
    ],
    descricao: "Regata branca básica lisa, marca SSB Brand. Versátil para treinos ou verão, essencial masculino. Material leve respirável. Estado usado, bem cuidada. Tamanho M. Clássico funcional.",
    linkEnjoei: ""
  },
  {
    id: "CAM012",
    nome: "Regata Cinza Básica",
    categoria: "Camisas",
    marca: "SSB Brand",
    tamanho: "M",
    estado: "Usado",
    preco: 15.00,
    precoEnjoei: 17.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/6H7qbtq.png",
      "https://i.imgur.com/tMxLmZv.jpeg",
      "https://i.imgur.com/bjfl3s7.jpeg"
    ],
    descricao: "Regata mescla cinza, marca SSB Brand. Tom neutro moderno, ideal para academia ou casual. Tecido confortável de algodão. Estado usado, conservada. Tamanho M. Visual clean despojado.",
    linkEnjoei: ""
  },
  {
    id: "CAM013",
    nome: "Regata Branca Básica 02",
    categoria: "Camisas",
    marca: "SSB Brand",
    tamanho: "M",
    estado: "Usado",
    preco: 15.00,
    precoEnjoei: 17.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/QqaNje0.png",
      "https://i.imgur.com/pxKt8MM.jpeg",
      "https://i.imgur.com/nUBpIGx.jpeg"
    ],
    descricao: "Regata branca mescla básica 100% algodão, marca SSB Brand. Textura diferenciada elegante, versátil para diversas ocasiões. Material de qualidade. Estado usado, ótimo estado. Tamanho M.",
    linkEnjoei: ""
  },
  {
    id: "CAM014",
    nome: "Camiseta Cinza Fit Slim",
    categoria: "Camisas",
    marca: "Shein",
    tamanho: "M",
    estado: "Seminovo",
    preco: 22.00,
    precoEnjoei: 25.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/9u8jPVA.jpeg",
      "https://i.imgur.com/LpkorlE.jpeg",
      "https://i.imgur.com/x9pK7nS.jpeg"
    ],
    descricao: "Camiseta cinza performance dry-fit fit slim, marca Shein. Tecnologia que afasta umidade, ideal para treinos. Tecido respirável de secagem rápida. Estado seminovo, impecável. Tamanho M. Perfeita para esportes.",
    linkEnjoei: ""
  },
  {
    id: "CAM015",
    nome: "Camiseta Cinza Ondulada",
    categoria: "Camisas",
    marca: "Sem marca",
    tamanho: "M",
    estado: "Seminovo",
    preco: 30.00,
    precoEnjoei: 35.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/VUuki4N.jpeg",
      "https://i.imgur.com/a7JTDvp.jpeg",
      "https://i.imgur.com/syXhuw2.jpeg"
    ],
    descricao: "Camiseta cinza fit com estampa ondulada moderna. Design diferenciado que se destaca, modelagem ajustada. Tecido de qualidade confortável. Estado seminovo, excelente. Tamanho M. Visual contemporâneo único.",
    linkEnjoei: ""
  },
  {
    id: "CAM016",
    nome: "Camiseta Azul Marinho Fit",
    categoria: "Camisas",
    marca: "Mizuno",
    tamanho: "M",
    estado: "Usado",
    preco: 35.00,
    precoEnjoei: 40.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/3Djbm9c.jpeg",
      "https://i.imgur.com/K34ql9d.jpeg",
      "https://i.imgur.com/lWVF7Ff.jpeg"
    ],
    descricao: "Camiseta azul marinho fit slim, marca Mizuno. Modelagem esportiva ajustada de alto desempenho. Material técnico de qualidade premium. Estado usado, bem conservada. Tamanho M. Design atlético profissional.",
    linkEnjoei: ""
  },
  {
    id: "CAM017",
    nome: "Camiseta Azul Umbro Gola V",
    categoria: "Camisas",
    marca: "Umbro",
    tamanho: "M",
    estado: "Seminovo",
    preco: 35.00,
    precoEnjoei: 40.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/bHEYeGi.jpeg",
      "https://i.imgur.com/HrvfxIk.jpeg",
      "https://i.imgur.com/tYoJMik.jpeg"
    ],
    descricao: "Camiseta azul Umbro gola V com faixas brancas fit slim. Estilo esportivo elegante, marca tradicional. Tecido de performance confortável. Estado seminovo, ótima conservação. Tamanho M. Visual esportivo refinado.",
    linkEnjoei: ""
  },
  {
    id: "CAM018",
    nome: "Regata Azul Marinho Bordado",
    categoria: "Camisas",
    marca: "Reserva",
    tamanho: "M",
    estado: "Usado",
    preco: 35.00,
    precoEnjoei: 40.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/ssvM8rw.jpeg",
      "https://i.imgur.com/cmfkV7J.jpeg",
      "https://i.imgur.com/yCswWvo.jpeg"
    ],
    descricao: "Regata azul marinho básica com bordado discreto, marca Reserva. Detalhe sofisticado sutil, qualidade premium. Tecido nobre confortável. Estado usado, bem cuidada. Tamanho M. Estilo casual elegante.",
    linkEnjoei: ""
  },
  {
    id: "CAM019",
    nome: "Camiseta Térmica Manga Longa",
    categoria: "Camisas",
    marca: "Lecimar",
    tamanho: "P",
    estado: "Usado",
    preco: 20.00,
    precoEnjoei: 23.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/bNQMmlR.jpeg",
      "https://i.imgur.com/r10Z7XO.jpeg",
      "https://i.imgur.com/kdh3hJ4.jpeg"
    ],
    descricao: "Camiseta térmica manga longa azul marinho canelada, marca Lecimar. Segunda pele aquece sem volume, ideal para frio. Tecido elástico confortável. Estado usado, ótimo. Tamanho P. Funcional para inverno.",
    linkEnjoei: ""
  },
  {
    id: "CAM020",
    nome: "Camiseta Manga Longa Degradê",
    categoria: "Camisas",
    marca: "MCD",
    tamanho: "M",
    estado: "Usado",
    preco: 30.00,
    precoEnjoei: 35.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/p1sabnr.png",
      "https://i.imgur.com/bPdF3Vt.jpeg",
      "https://i.imgur.com/6Z6SPNa.jpeg",
      "https://i.imgur.com/Tnn8D4Q.jpeg"
    ],
    descricao: "Camiseta manga longa degradê azul cinza, marca MCD. Efeito visual moderno sofisticado, estilo surf urbano. Tecido confortável de qualidade. Estado usado, bem conservada. Tamanho M. Design diferenciado autoral.",
    linkEnjoei: ""
  },
  {
    id: "CAM021",
    nome: "Polo Preta Manga Longa Zíper",
    categoria: "Camisas",
    marca: "Shein",
    tamanho: "M",
    estado: "Usado",
    preco: 60.00,
    precoEnjoei: 70.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/9LagMmI.png",
      "https://i.imgur.com/dUTc3uA.jpeg",
      "https://i.imgur.com/toBAGAW.jpeg",
      "https://i.imgur.com/TIufh85.jpeg",
      "https://i.imgur.com/COn17wl.jpeg"
    ],
    descricao: "Camiseta polo manga longa preta com gola de zíper retrô, marca Shein. Design vintage diferenciado, elegante casual. Detalhes que destacam. Estado usado, ótima conservação. Tamanho M. Estilo único sofisticado.",
    linkEnjoei: ""
  },
  {
    id: "CAM022",
    nome: "Camiseta Polo Laranja Texturizada",
    categoria: "Camisas",
    marca: "Five",
    tamanho: "M",
    estado: "Seminovo",
    preco: 40.00,
    precoEnjoei: 46.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/WeE6bwY.jpeg",
      "https://i.imgur.com/LfZvDXn.jpeg",
      "https://i.imgur.com/mcpCti8.jpeg"
    ],
    descricao: "Polo laranja texturizada, marca Five. Tecido diferenciado com relevo elegante, cor vibrante. Modelagem tradicional confortável. Estado seminovo, impecável. Tamanho M. Visual marcante sofisticado.",
    linkEnjoei: ""
  },
  {
    id: "CAM023",
    nome: "Camiseta Rosa Polo Wear",
    categoria: "Camisas",
    marca: "Polo Wear",
    tamanho: "M",
    estado: "Seminovo",
    preco: 50.00,
    precoEnjoei: 58.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/O49opIU.png",
      "https://i.imgur.com/XuLPtOz.png",
      "https://i.imgur.com/6PbUrZK.jpeg",
      "https://i.imgur.com/5PoEoX2.jpeg",
      "https://i.imgur.com/gTZ3bSk.jpeg"
    ],
    descricao: "Camiseta rosa pink com logo pequeno bordado, marca Polo Wear. Cor ousada moderna, qualidade premium. Detalhe discreto elegante. Estado seminovo, excelente. Tamanho M. Tom diferenciado que destaca.",
    linkEnjoei: ""
  },
  {
    id: "CAM024",
    nome: "Camiseta Off-White Oversized",
    categoria: "Camisas",
    marca: "THPE Company",
    tamanho: "G",
    estado: "Seminovo",
    preco: 70.00,
    precoEnjoei: 81.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/1g8AaqI.jpeg",
      "https://i.imgur.com/sNHtkNQ.png",
      "https://i.imgur.com/cRzO8wE.jpeg",
      "https://i.imgur.com/MkwMdL2.jpeg",
      "https://i.imgur.com/tRuV8Z8.jpeg"
    ],
    descricao: "Camiseta off-white oversized com estampa Type, marca THPE Company. Design minimalista contemporâneo, modelagem ampla atual. Tecido premium de qualidade. Estado seminovo, impecável. Tamanho G. Estilo urbano moderno.",
    linkEnjoei: ""
  },
  {
    id: "CAM025",
    nome: "Camiseta Branca Dry-Fit Capuz",
    categoria: "Camisas",
    marca: "Sem marca",
    tamanho: "G",
    estado: "Seminovo",
    preco: 60.00,
    precoEnjoei: 70.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/WVYpxU0.png",
      "https://i.imgur.com/UlTCxGM.jpeg",
      "https://i.imgur.com/9Kp10Gx.jpeg"
    ],
    descricao: "Camiseta branca dry-fit com capuz único. Peça diferenciada funcional, tecnologia que seca rápido. Capuz adiciona estilo proteção. Estado seminovo, ótimo. Tamanho G. Inovadora e prática.",
    linkEnjoei: ""
  },
  {
    id: "CAM026",
    nome: "Colete Cinza Acolchoado",
    categoria: "Camisas",
    marca: "Hering",
    tamanho: "M",
    estado: "Novo",
    preco: 90.00,
    precoEnjoei: 105.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/hhn90y6.jpeg",
      "https://i.imgur.com/9oFdCpH.jpeg",
      "https://i.imgur.com/ROMU352.jpeg",
      "https://i.imgur.com/bC1nkGn.jpeg"
    ],
    descricao: "Colete cinza acolchoado com zíper, marca Hering. Peça versátil para meia estação, aquece sem peso. Enchimento de qualidade confortável. Estado novo, etiqueta original. Tamanho M. Coringa do guarda-roupa.",
    linkEnjoei: ""
  },
  {
    id: "CAM027",
    nome: "Camiseta Preta O'Neill Logo",
    categoria: "Camisas",
    marca: "O'Neill",
    tamanho: "G",
    estado: "Usado",
    preco: 35.00,
    precoEnjoei: 40.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/H4TSi1w.png",
      "https://i.imgur.com/16eAjcd.png",
      "https://i.imgur.com/PxkCMOX.jpeg",
      "https://i.imgur.com/s8uRilo.jpeg",
      "https://i.imgur.com/YMsb1W0.jpeg"
    ],
    descricao: "Camiseta preta O'Neill com logo colorido horizontal, marca autêntica de surf. Design icônico reconhecível, estilo californiano. Tecido de qualidade durável. Estado usado, bem conservada. Tamanho G. Marca tradicional cult.",
    linkEnjoei: ""
  },
  {
    id: "CAM028",
    nome: "Camiseta Amarela Diamond Logo",
    categoria: "Camisas",
    marca: "Diamond",
    tamanho: "M",
    estado: "Seminovo",
    preco: 60.00,
    precoEnjoei: 70.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/gHJkiuP.jpeg",
      "https://i.imgur.com/5wxi5Kr.jpeg",
      "https://i.imgur.com/pwBhuT7.jpeg",
      "https://i.imgur.com/4jEpHZs.jpeg"
    ],
    descricao: "Camiseta amarela com logo branco minimalista, marca Diamond Supply Co. Brand icônico do skate, design clean sofisticado. Qualidade premium streetwear. Estado seminovo, impecável. Tamanho M. Estilo autêntico diferenciado.",
    linkEnjoei: ""
  },
  {
    id: "CAM029",
    nome: "Camiseta Laranja Panda Streetwear",
    categoria: "Camisas",
    marca: "Elite",
    tamanho: "M",
    estado: "Seminovo",
    preco: 65.00,
    precoEnjoei: 76.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/zlMvUWQ.jpeg",
      "https://i.imgur.com/dtf64ql.jpeg",
      "https://i.imgur.com/Aen2vGq.jpeg"
    ],
    descricao: "Camiseta laranja com estampa de panda streetwear, marca Elite. Design artístico urbano que chama atenção. Cor vibrante única. Estado seminovo, excelente. Tamanho M. Visual ousado contemporâneo.",
    linkEnjoei: ""
  },
  {
    id: "CAM030",
    nome: "Regata Branca Huntington Beach",
    categoria: "Camisas",
    marca: "Gratto",
    tamanho: "M",
    estado: "Seminovo",
    preco: 20.00,
    precoEnjoei: 23.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/Pb2QqOj.png",
      "https://i.imgur.com/ESHDmpq.jpeg",
      "https://i.imgur.com/el6Rs4W.jpeg"
    ],
    descricao: "Regata branca Huntington Beach surf vintage 1914, marca Gratto. Estampa retrô californiana nostálgica, estilo surf clássico. Material confortável leve. Estado seminovo, ótimo. Tamanho M. Visual vintage autêntico.",
    linkEnjoei: ""
  },
  {
    id: "CAM031",
    nome: "Regata Cinza Caveira",
    categoria: "Camisas",
    marca: "Long Island",
    tamanho: "M",
    estado: "Usado",
    preco: 20.00,
    precoEnjoei: 23.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/ZNO3EFP.jpeg",
      "https://i.imgur.com/NOaMvcX.jpeg",
      "https://i.imgur.com/08M6wUj.jpeg"
    ],
    descricao: "Regata cinza com estampa de caveira, marca Long Island. Design rock urbano marcante, estilo despojado. Estampa de impacto visual. Estado usado, bem cuidada. Tamanho M. Atitude e personalidade.",
    linkEnjoei: ""
  },
  {
    id: "CAM032",
    nome: "Regata Warriors #30 NBA",
    categoria: "Camisas",
    marca: "NBA",
    tamanho: "G",
    estado: "Seminovo",
    preco: 195.00,
    precoEnjoei: 228.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/DmlWdAY.png",
      "https://i.imgur.com/9w8BLCL.png",
      "https://i.imgur.com/ETf5Hdl.jpeg",
      "https://i.imgur.com/XurSwqb.jpeg"
    ],
    descricao: "Regata oficial Warriors #30 azul NBA autêntica. Camisa oficial do jogador Stephen Curry, qualidade premium licenciada. Material de jogo profissional. Estado seminovo, impecável. Tamanho G. Item colecionável valioso.",
    linkEnjoei: ""
  },
  {
    id: "CAM033",
    nome: "Camisa Real Madrid 24/25",
    categoria: "Camisas",
    marca: "Adidas",
    tamanho: "G",
    estado: "Seminovo",
    preco: 45.00,
    precoEnjoei: 52.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/CSQNqMg.jpeg",
      "https://i.imgur.com/9MBJoO1.png",
      "https://i.imgur.com/2QP3Je5.jpeg",
      "https://i.imgur.com/N3teSy9.jpeg",
      "https://i.imgur.com/rGw6Kke.jpeg"
    ],
    descricao: "Camisa oficial Real Madrid branca 2024/2025, marca Adidas. Temporada atual lançamento recente, qualidade oficial. Tecido tecnológico de performance. Estado seminovo, excelente. Tamanho G. Para verdadeiros torcedores.",
    linkEnjoei: ""
  },
  {
    id: "CAM034",
    nome: "Camisa Brasil 22/23 Azul",
    categoria: "Camisas",
    marca: "Nike",
    tamanho: "M",
    estado: "Seminovo",
    preco: 245.00,
    precoEnjoei: 286.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/F3sPD8r.jpeg",
      "https://i.imgur.com/ugejC86.jpeg",
      "https://i.imgur.com/TxYh5UJ.jpeg",
      "https://i.imgur.com/iQwUR1o.jpeg"
    ],
    descricao: "Camisa Brasil original torcedor Pro 2 temporada 22/23 azul, marca Nike. Versão oficial de jogo premium, tecnologia Dri-Fit. Qualidade profissional licenciada. Estado seminovo, impecável. Tamanho M. Peça de colecionador.",
    linkEnjoei: ""
  },
  {
    id: "CAM035",
    nome: "Camiseta Manchester City Raglan",
    categoria: "Camisas",
    marca: "Sem marca",
    tamanho: "M",
    estado: "Seminovo",
    preco: 30.00,
    precoEnjoei: 35.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/vgCJm4O.jpeg",
      "https://i.imgur.com/0XHe094.jpeg",
      "https://i.imgur.com/qfmizuE.jpeg",
      "https://i.imgur.com/HhQF0rX.jpeg"
    ],
    descricao: "Camiseta azul claro Manchester City estilo raglan. Design casual de torcedor, confortável para o dia a dia. Cores oficiais do clube. Estado seminovo, bem conservada. Tamanho M. Para fãs do City.",
    linkEnjoei: ""
  },
  {
    id: "CAM036",
    nome: "Camiseta Palmeiras Raglan Escudo",
    categoria: "Camisas",
    marca: "Sem marca",
    tamanho: "M",
    estado: "Seminovo",
    preco: 40.00,
    precoEnjoei: 46.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/kFIy5EO.jpeg",
      "https://i.imgur.com/SOOhrbp.jpeg",
      "https://i.imgur.com/Ro8kH0y.jpeg",
      "https://i.imgur.com/tq9JkC1.jpeg"
    ],
    descricao: "Camiseta azul Palmeiras raglan com escudo bordado. Design de torcedor diferenciado, mangas em contraste. Escudo aplicado com qualidade. Estado seminovo, ótimo. Tamanho M. Palmeirense com estilo.",
    linkEnjoei: ""
  },
  {
    id: "CAM037",
    nome: "Camiseta Verde Palmeiras Crefisa",
    categoria: "Camisas",
    marca: "Sem marca",
    tamanho: "M",
    estado: "Seminovo",
    preco: 30.00,
    precoEnjoei: 35.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/mBwzHf2.png",
      "https://i.imgur.com/SB93vCo.jpeg",
      "https://i.imgur.com/bsMttf6.jpeg"
    ],
    descricao: "Camiseta verde Palmeiras com patrocinador Crefisa. Cor oficial alviverde, design de torcedor. Material confortável de algodão. Estado seminovo, bem cuidada. Tamanho M. Verdão no coração.",
    linkEnjoei: ""
  },
  {
    id: "CAM038",
    nome: "Camiseta Raglan Branca Azul",
    categoria: "Camisas",
    marca: "Scream Athletes",
    tamanho: "G",
    estado: "Usado",
    preco: 35.00,
    precoEnjoei: 40.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/Qymit5k.jpeg",
      "https://i.imgur.com/RwmzEmC.jpeg",
      "https://i.imgur.com/6vauEvh.jpeg"
    ],
    descricao: "Camiseta raglan branca com mangas azuis, marca Scream Athletes. Design esportivo clássico bicolor, confortável e versátil. Tecido de qualidade. Estado usado, bem conservada. Tamanho G. Estilo atlético casual.",
    linkEnjoei: ""
  },
  {
    id: "KIT001",
    nome: "Kit 5 Camisetas Básicas Algodão",
    categoria: "Kits",
    marca: "SSB Brand",
    tamanho: "M",
    estado: "Usado",
    preco: 130.00,
    precoEnjoei: 152.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/COtqyeu.jpeg",
      "https://i.imgur.com/DuOVV7A.jpeg",
      "https://i.imgur.com/KYhUC3x.jpeg",
      "https://i.imgur.com/pSh7qSF.jpeg",
      "https://i.imgur.com/sOV2wKP.jpeg"
    ],
    descricao: "Kit completo com 9 camisetas básicas essenciais marca SSB Brand. Cores versáteis: preta (2x), branca fit, cinza claro, azul marinho, vermelha, regatas preta/branca/mescla/mescla cinza. Todas tamanho M, estado usado/seminovo bem conservado. Renovação completa do guarda-roupa! Economia de 21% comprando o kit. Perfeito para quem busca praticidade e variedade.",
    isKit: true,
    desconto: 21,
    produtosInclusos: ["CAM004", "CAM005", "CAM006", "CAM007", "CAM008", "CAM010", "CAM011", "CAM012", "CAM013"]
  },
  {
    id: "KIT002",
    nome: "Kit Palmeiras Fan - 2 Camisetas",
    categoria: "Kits",
    marca: "Sem marca",
    tamanho: "M",
    estado: "Seminovo",
    preco: 55.00,
    precoEnjoei: 64.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/qXoKnL7.png",
      "https://i.imgur.com/kFIy5EO.jpeg",
      "https://i.imgur.com/mBwzHf2.png"
    ],
    descricao: "Kit torcedor Palmeiras com 2 camisetas temáticas. Azul raglan com escudo bordado + verde oficial Crefisa. Ambas tamanho M, estado seminovo. Combine e varie nos jogos! Economia de 16% no kit. Ideal para palmeirenses de coração.",
    isKit: true,
    desconto: 16,
    produtosInclusos: ["CAM036", "CAM037"]
  },
  {
    id: "KIT003",
    nome: "Kit Jaquetas Xadrez Federal Art",
    categoria: "Kits",
    marca: "Federal Art",
    tamanho: "GG",
    estado: "Seminovo",
    preco: 235.00,
    precoEnjoei: 274.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/BD7wHbw.jpeg",
      "https://i.imgur.com/OP2EoFa.jpeg",
      "https://i.imgur.com/XQMcONH.jpeg"
    ],
    descricao: "Kit inverno premium com 2 jaquetas flanela xadrez Federal Art. Modelo azul/preto com forro + modelo cinza/preto. Ambas tamanho GG, qualidade superior, estado seminovo impecável. Aquecem com estilo! Economia de 15% no combo. Perfeitas para dias frios.",
    isKit: true,
    desconto: 15,
    produtosInclusos: ["JAQ002", "JAQ004"]
  },
  {
    id: "DIV001",
    nome: "Quadro Lousa com Canetas",
    categoria: "Diversos",
    marca: "Stalo",
    tamanho: "60x40 cm",
    estado: "Seminovo",
    preco: 45.00,
    precoEnjoei: 52.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/qIazgZv.jpeg",
      "https://i.imgur.com/fxmDbRZ.jpeg"
    ],
    descricao: "Quadro lousa branco para marcador 60x40cm com canetas incluídas, marca Stalo. Ideal para home office, estudos ou lembretes. Superfície lisa que apaga facilmente. Acompanha canetas coloridas. Estado seminovo, bem conservado. Funcional e prático.",
    linkEnjoei: ""
  },
  {
    id: "ELE001",
    nome: "Ventilador Mesa com Umidificador",
    categoria: "Eletrônicos",
    marca: "3 Pao",
    tamanho: "26x10 cm",
    estado: "Seminovo",
    preco: 20.00,
    precoEnjoei: 23.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/K0H4Em2.jpeg",
      "https://i.imgur.com/ImaBdwr.jpeg",
      "https://i.imgur.com/8AgkNph.jpeg",
      "https://i.imgur.com/bpPuHpV.jpeg"
    ],
    descricao: "Ventilador de mesa compacto com umidificador 2 em 1, marca 3 Pao. Refresca e umidifica simultaneamente, ideal para ambientes secos. Tamanho compacto 26x10cm. USB recarregável portátil. Estado seminovo, funcionamento perfeito. Prático para escritório ou quarto.",
    linkEnjoei: ""
  },
  {
    id: "JAQ001",
    nome: "Jaqueta Colete Xadrez Azul Capuz",
    categoria: "Jaquetas",
    marca: "Sem marca",
    tamanho: "M",
    estado: "Usado",
    preco: 90.00,
    precoEnjoei: 105.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/194WPec.jpeg",
      "https://i.imgur.com/Kog7lYI.jpeg",
      "https://i.imgur.com/1jsYDAE.jpeg",
      "https://i.imgur.com/M1LRJOE.jpeg"
    ],
    descricao: "Jaqueta colete xadrez azul com capuz removível. Design versátil para meia estação, estampa clássica atemporal. Bolsos funcionais práticos. Estado usado, bem cuidada. Tamanho M. Estilo casual urbano.",
    linkEnjoei: ""
  },
  {
    id: "JAQ002",
    nome: "Jaqueta Flanela Xadrez Azul Preta",
    categoria: "Jaquetas",
    marca: "Federal Art",
    tamanho: "GG",
    estado: "Seminovo",
    preco: 135.00,
    precoEnjoei: 157.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/OP2EoFa.jpeg",
      "https://i.imgur.com/DFFJ5Kr.jpeg",
      "https://i.imgur.com/G7k1Qxp.jpeg",
      "https://i.imgur.com/uy4ymC1.jpeg",
      "https://i.imgur.com/6xssScc.jpeg",
      "https://i.imgur.com/T8UTvGy.jpeg"
    ],
    descricao: "Jaqueta flanela xadrez azul e preta com forro interno, marca Federal Art. Aquecimento premium com estilo lenhador, qualidade superior. Botões reforçados acabamento impecável. Estado seminovo, excelente. Tamanho GG. Peça de inverno essencial.",
    linkEnjoei: ""
  },
  {
    id: "JAQ003",
    nome: "Jaqueta Moletom Cinza Kombi",
    categoria: "Jaquetas",
    marca: "Sem marca",
    tamanho: "G",
    estado: "Usado",
    preco: 110.00,
    precoEnjoei: 128.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/G8n9doE.jpeg",
      "https://i.imgur.com/1J9uB3q.jpeg",
      "https://i.imgur.com/jIFXBji.jpeg",
      "https://i.imgur.com/utpx7Ct.jpeg"
    ],
    descricao: "Jaqueta moletom cinza com estampa vintage de Kombi. Design retrô nostálgico único, confortável e quentinha. Capuz ajustável bolsos canguru. Estado usado, boa conservação. Tamanho G. Estilo descolado autêntico.",
    linkEnjoei: ""
  },
  {
    id: "JAQ004",
    nome: "Jaqueta Flanela Xadrez Cinza Preta",
    categoria: "Jaquetas",
    marca: "Federal Art",
    tamanho: "GG",
    estado: "Seminovo",
    preco: 140.00,
    precoEnjoei: 163.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/XQMcONH.jpeg",
      "https://i.imgur.com/mc6Nucg.jpeg",
      "https://i.imgur.com/mwkykih.jpeg",
      "https://i.imgur.com/L0CNigu.jpeg"
    ],
    descricao: "Jaqueta flanela xadrez cinza e preta premium, marca Federal Art. Modelo similar à azul, qualidade idêntica superior. Forro interno aquecido confortável. Estado seminovo, impecável. Tamanho GG. Excelente para frio intenso.",
    linkEnjoei: ""
  },
  {
    id: "JAQ005",
    nome: "Jaqueta Moletom Azul Listras",
    categoria: "Jaquetas",
    marca: "QuickSilver",
    tamanho: "G",
    estado: "Usado",
    preco: 120.00,
    precoEnjoei: 140.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/QQyzcfD.jpeg",
      "https://i.imgur.com/MNY1lkO.jpeg",
      "https://i.imgur.com/dmhN8sU.jpeg",
      "https://i.imgur.com/spie3v7.jpeg"
    ],
    descricao: "Jaqueta moletom azul com listras horizontais, marca QuickSilver. Brand tradicional de surf, design esportivo elegante. Zíper frontal capuz ajustável. Estado usado, bem conservada. Tamanho G. Estilo surf urbano autêntico.",
    linkEnjoei: ""
  },
  {
    id: "SHO001",
    nome: "Bermuda Praia Azul Geométrica",
    categoria: "Shorts",
    marca: "Sem marca",
    tamanho: "M",
    estado: "Seminovo",
    preco: 40.00,
    precoEnjoei: 46.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/Xkqjn5x.jpeg",
      "https://i.imgur.com/ALWAVit.jpeg",
      "https://i.imgur.com/LBEgaiP.jpeg"
    ],
    descricao: "Bermuda de praia azul com estampa geométrica moderna. Design vibrante diferenciado, secagem rápida. Bolsos funcionais cordão ajustável. Estado seminovo, ótimo. Tamanho M. Perfeita para verão e piscina.",
    linkEnjoei: ""
  },
  {
    id: "SHO002",
    nome: "Bermuda Branca Dry-Fit Mesh",
    categoria: "Shorts",
    marca: "Get Over",
    tamanho: "P",
    estado: "Usado",
    preco: 45.00,
    precoEnjoei: 52.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/CP6gTpB.jpeg",
      "https://i.imgur.com/TTGfaA1.jpeg"
    ],
    descricao: "Bermuda branca dry-fit com recorte em mesh respirável, marca Get Over. Tecnologia esportiva de alta performance, ventilação estratégica. Leve e confortável. Estado usado, bem cuidada. Tamanho P. Ideal para treinos intensos.",
    linkEnjoei: ""
  },
  {
    id: "SHO003",
    nome: "Bermuda Cáqui Cargo",
    categoria: "Shorts",
    marca: "Hugo Boss",
    tamanho: "42",
    estado: "Seminovo",
    preco: 45.00,
    precoEnjoei: 52.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/3MLyagW.jpeg",
      "https://i.imgur.com/0QSjw5N.jpeg",
      "https://i.imgur.com/NuqqyIx.jpeg"
    ],
    descricao: "Bermuda cáqui cargo com bolsos laterais, marca Hugo Boss. Grife premium qualidade superior, estilo sofisticado casual. Tecido nobre resistente. Estado seminovo, impecável. Tamanho 42. Elegância e funcionalidade.",
    linkEnjoei: ""
  },
  {
    id: "CALCADO001",
    nome: "Bota Amarelo Suede Cano Médio",
    categoria: "Calçados",
    marca: "XXL",
    tamanho: "40-41",
    estado: "Seminovo",
    preco: 295.00,
    precoEnjoei: 345.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/L8D5Qt7.jpeg",
      "https://i.imgur.com/vTptqYX.jpeg",
      "https://i.imgur.com/44g4dje.jpeg",
      "https://i.imgur.com/DtmDmaP.jpeg",
      "https://i.imgur.com/fRGHsl3.jpeg",
      "https://i.imgur.com/tBhqK3D.jpeg"
    ],
    descricao: "Tênis amarelo suede cano médio estilo skate, marca XXL. Cor vibrante que chama atenção, material nobre de qualidade. Palmilha confortável sola reforçada. Estado seminovo, pouco uso. Numeração 40-41. Visual ousado diferenciado.",
    linkEnjoei: ""
  },
  {
    id: "CALCADO002",
    nome: "Tênis Nike Air Max DN Azul",
    categoria: "Calçados",
    marca: "Nike",
    tamanho: "40-41",
    estado: "Seminovo",
    preco: 975.00,
    precoEnjoei: 1121.90,
    status: "Ativo",
    dataCadastro: "11/03",
    fotosImgur: [
      "https://i.imgur.com/p9S9kZ5.jpeg",
      "https://i.imgur.com/sGAyFc8.jpeg",
      "https://i.imgur.com/hY0bY89.jpeg",
      "https://i.imgur.com/EnuhP7M.jpeg",
      "https://i.imgur.com/s4fB5AV.jpeg",
      "https://i.imgur.com/w1zxcA8.jpeg",
      "https://i.imgur.com/SILCyAj.jpeg"
    ],
    descricao: "Tênis Nike Air Max DN azul e branco modelo mais recente. Tecnologia Air Max de última geração, conforto e estilo premium. Design futurista sofisticado. Estado seminovo, excelente conservação. Numeração 40-41. Sneaker de alto valor colecionável.",
    linkEnjoei: ""
  },
  {
    id: "BONE001",
    nome: "Boné Branco e Azul Estilo Baseball",
    categoria: "Bone",
    marca: "Sem Marca",
    tamanho: "Ajustável",
    estado: "Novo",
    preco: 40.00,
    precoEnjoei: 46.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/H2O7Rva.jpeg",
      "https://i.imgur.com/SufoyDI.jpeg",
      "https://i.imgur.com/1jryB46.jpeg",
      "https://i.imgur.com/l2anThC.jpeg"
    ],
    descricao: "Boné ajustável branco com aba azul, estilo clássico casual. Primeira imagem com modelo gerado por IA apenas para demonstrar o caimento da peça.",
    linkEnjoei: ""
  },
  {
    id: "BONE002",
    nome: "Boné Camuflado Verde Ajustável",
    categoria: "Bone",
    marca: "Sem Marca",
    tamanho: "Ajustável",
    estado: "Usado",
    preco: 25.00,
    precoEnjoei: 28.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/JeBxTme.jpeg",
      "https://i.imgur.com/XgMU6Jy.jpeg",
      "https://i.imgur.com/xab2Haf.jpeg"
    ],
    descricao: "Boné camuflado em tons de verde com ajuste traseiro. Design robusto para um visual outdoor. Primeira imagem com modelo gerado por IA apenas para demonstrar o caimento da peça.",
    linkEnjoei: ""
  },
  {
    id: "BONE003",
    nome: "Boné Cinza Casual Ajustável",
    categoria: "Bone",
    marca: "Shein",
    tamanho: "Ajustável",
    estado: "Seminovo",
    preco: 25.00,
    precoEnjoei: 28.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/9ys1rOR.jpeg",
      "https://i.imgur.com/Vd6brot.jpeg",
      "https://i.imgur.com/mMeB0AB.jpeg"
    ],
    descricao: "Boné cinza de estilo casual, fácil de combinar no dia a dia. Confortável e com ajuste preciso. Primeira imagem com modelo gerado por IA apenas para demonstrar o caimento da peça.",
    linkEnjoei: ""
  },
  {
    id: "CAM039",
    nome: "Camiseta Vermelha Polo Masculina",
    categoria: "Camisas",
    marca: "Polo Wear",
    tamanho: "G",
    estado: "Novo",
    preco: 83.00,
    precoEnjoei: 95.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/vjHOvkd.jpeg",
      "https://i.imgur.com/G6BD14b.jpeg",
      "https://i.imgur.com/5isG44E.jpeg"
    ],
    descricao: "Camiseta vermelha de modelagem simples e confortável para uso diário. Qualidade Polo Wear com ótimo caimento. Primeira imagem com modelo gerado por IA apenas para demonstrar o caimento da peça.",
    linkEnjoei: ""
  },
  {
    id: "CAM040",
    nome: "Camiseta Preta Fit Slim",
    categoria: "Camisas",
    marca: "Shein",
    tamanho: "M",
    estado: "Novo",
    preco: 22.00,
    precoEnjoei: 25.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/Qyh2jBr.jpeg",
      "https://i.imgur.com/RUAjU8A.jpeg",
      "https://i.imgur.com/cTcahyg.jpeg"
    ],
    descricao: "Camiseta preta básica com corte Fit Slim, valorizando a silhueta. Tecido leve e moderno da Shein. Ideal para composições casuais ou esportivas.",
    linkEnjoei: ""
  },
  {
    id: "CAM041",
    nome: "Camiseta Polo Cinza Texturizada",
    categoria: "Camisas",
    marca: "Five",
    tamanho: "P",
    estado: "Seminovo",
    preco: 40.00,
    precoEnjoei: 46.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/fmWWBaB.jpeg",
      "https://i.imgur.com/ja6Dalh.jpeg",
      "https://i.imgur.com/gFgnJqL.jpeg"
    ],
    descricao: "Camiseta Polo em tom cinza com tecido texturizado premium. Elegância e conforto para ocasiões semi-formais. Tamanho P com excelente conservação.",
    linkEnjoei: ""
  },
  {
    id: "CAM042",
    nome: "Camiseta Polo Branca Texturizada",
    categoria: "Camisas",
    marca: "Five",
    tamanho: "M",
    estado: "Seminovo",
    preco: 40.00,
    precoEnjoei: 46.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/rQXK9dF.jpeg",
      "https://i.imgur.com/aKn4U5G.jpeg",
      "https://i.imgur.com/J6KmjYr.jpeg"
    ],
    descricao: "Camiseta Polo branca clássica com detalhe texturizado. Peça versátil e indispensável no guarda-roupa masculino. Tamanho M, estado impecável.",
    linkEnjoei: ""
  },
  {
    id: "CAM043",
    nome: "Camiseta Azul Marinho Masculina",
    categoria: "Camisas",
    marca: "O",
    tamanho: "G",
    estado: "Usado",
    preco: 0.00, // Preço não informado na planilha, ajustado para 0
    precoEnjoei: 0.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/lOrq11p.jpeg",
      "https://i.imgur.com/xqU1L4Z.jpeg",
      "https://i.imgur.com/MrzRNEr.jpeg",
      "https://i.imgur.com/IXHyXgp.jpeg"
    ],
    descricao: "Camiseta básica na cor azul marinho. Peça confortável de uso diário com modelagem tradicional tamanho G.",
    linkEnjoei: ""
  },
  {
    id: "KIT004",
    nome: "Kit 3 Camisetas Polo Texturizadas",
    categoria: "Kits",
    marca: "Five",
    tamanho: "2 M, 1 P",
    estado: "Seminovo",
    preco: 100.00,
    precoEnjoei: 115.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/YKX4LNo.jpeg",
      "https://i.imgur.com/fmWWBaB.jpeg",
      "https://i.imgur.com/rQXK9dF.jpeG"
    ],
    descricao: "Combo especial com 3 camisetas polo texturizadas da marca Five. Inclui cores variadas para renovar seu estilo com elegância e economia.",
    isKit: true,
    desconto: 17,
    produtosInclusos: ["CAM022", "CAM041", "CAM042"]
  },
  {
    id: "KIT005",
    nome: "Kit 4 Regatas básicas 100% Algodão",
    categoria: "Kits",
    marca: "SSB Brand",
    tamanho: "M",
    estado: "Usado",
    preco: 47.50,
    precoEnjoei: 54.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/GWFjSKR.jpeg",
      "https://i.imgur.com/bAHWO29.jpeg",
      "https://i.imgur.com/un6TloE.png"
    ],
    descricao: "Kit promocional com 4 regatas básicas em algodão. Perfeitas para treino ou dias quentes. Conforto térmico e durabilidade SSB Brand.",
    isKit: true,
    desconto: 20,
    produtosInclusos: ["CAM010", "CAM011", "CAM012", "CAM013"]
  },
  {
    id: "KIT006",
    nome: "KIT 3 Camisetas Fit Slim",
    categoria: "Kits",
    marca: "Shein",
    tamanho: "M",
    estado: "Novo",
    preco: 64.50,
    precoEnjoei: 74.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/4Ig4LLe.jpeg",
      "https://i.imgur.com/DuOVV7A.jpeg",
      "https://i.imgur.com/Qyh2jBr.jpeg"
    ],
    descricao: "Três camisetas com corte moderno Fit Slim. Cores neutras e tecido tecnológico que se ajusta ao corpo. Economia máxima no conjunto.",
    isKit: true,
    desconto: 15,
    produtosInclusos: ["CAM005", "CAM014", "CAM040"]
  },
  {
    id: "DIV002",
    nome: "Carta Colecionável Pokémon Deoxy Oversized",
    categoria: "Diversos",
    marca: "Creatures Inc",
    tamanho: "Oversized",
    estado: "Usado",
    preco: 41.60,
    precoEnjoei: 47.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/RU5Neua.jpeg",
      "https://i.imgur.com/GaGXdEO.jpeg"
    ],
    descricao: "Carta colecionável para fãs e colecionadores. Produto raro em tamanho oversized, conforme mostrado nas imagens.",
    linkEnjoei: ""
  },
  {
    id: "DIV003",
    nome: "Decoração 2 Espadas + Suporte",
    categoria: "Diversos",
    marca: "M&H",
    tamanho: "17x47",
    estado: "Usado",
    preco: 127.90,
    precoEnjoei: 147.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/rSQUvks.jpeg",
      "https://i.imgur.com/VYGWn3B.jpeg",
      "https://i.imgur.com/DJjY71X.jpeg"
    ],
    descricao: "Conjunto decorativo contendo duas espadas ornamentais e suporte de madeira. Ideal para colecionadores e decoração de ambientes temáticos.",
    linkEnjoei: ""
  },
  {
    id: "DIV004",
    nome: "Tábua de Passar Roupa",
    categoria: "Diversos",
    marca: "Sem Marca",
    tamanho: "100x112",
    estado: "Seminovo",
    preco: 112.80,
    precoEnjoei: 129.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/5vptsyV.jpeg",
      "https://i.imgur.com/28PtXCk.jpeg",
      "https://i.imgur.com/XOSv0fn.jpeg",
      "https://i.imgur.com/NUvhnQc.jpeg"
    ],
    descricao: "Tábua de passar robusta e estável. Superfície ampla para facilitar o trabalho doméstico. Dobrável e fácil de guardar.",
    linkEnjoei: ""
  },
  {
    id: "ELE002",
    nome: "Aspirador e Soprador Portátil 4 em 1",
    categoria: "Eletrônicos",
    marca: "Haoyo",
    tamanho: "12x17",
    estado: "Novo",
    preco: 20.88,
    precoEnjoei: 24.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/mP499lJ.jpeg",
      "https://i.imgur.com/0X5uZdy.jpeg",
      "https://i.imgur.com/8csa5cf.jpeg",
      "https://i.imgur.com/0H0H1B9.jpeg"
    ],
    descricao: "Dispositivo versátil 4 em 1: aspira e sopra com eficiência. Portátil e ideal para limpeza de veículos e teclados. Produto novo na caixa.",
    linkEnjoei: ""
  },
  {
    id: "LIV001",
    nome: "Ponto de inflexão: Uma decisão muda tudo",
    categoria: "Livros",
    marca: "Sem Marca",
    tamanho: "Único",
    estado: "Seminovo",
    preco: 30.00,
    precoEnjoei: 34.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/eqiQIpN.jpeg",
      "https://i.imgur.com/dwzBV75.jpeg",
      "https://i.imgur.com/JPIbGgc.jpeg"
    ],
    descricao: "Livro em bom estado para leitura ou coleção. Obra inspiradora sobre decisões e mudanças de vida. Fotos mostram o exemplar real.",
    linkEnjoei: ""
  },
  {
    id: "LIV002",
    nome: "Dom Quixote - O Cavaleiro da Triste Figura",
    categoria: "Livros",
    marca: "Sem Marca",
    tamanho: "Único",
    estado: "Usado",
    preco: 43.00,
    precoEnjoei: 49.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/bFLtM3x.jpeg",
      "https://i.imgur.com/cC8tZMY.jpeg",
      "https://i.imgur.com/PVNCNoP.jpeg"
    ],
    descricao: "Clássico da literatura em edição para leitura e coleção. Uma das obras mais importantes da literatura mundial. Fotos mostram o exemplar real.",
    linkEnjoei: ""
  },
  {
    id: "LIV003",
    nome: "Angústia - Graciliano Ramos",
    categoria: "Livros",
    marca: "Sem Marca",
    tamanho: "Único",
    estado: "Usado",
    preco: 26.50,
    precoEnjoei: 30.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/5unqfeK.jpeg",
      "https://i.imgur.com/WF7P7Av.jpeg",
      "https://i.imgur.com/W6UtOBO.jpeg"
    ],
    descricao: "Obra clássica da literatura brasileira em bom estado. Mergulhe na narrativa densa e psicológica de Graciliano Ramos.",
    linkEnjoei: ""
  },
  {
    id: "LIV004",
    nome: "1984 - George Orwell",
    categoria: "Livros",
    marca: "Sem Marca",
    tamanho: "Único",
    estado: "Novo",
    preco: 14.26,
    precoEnjoei: 16.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/crErxfU.jpeg",
      "https://i.imgur.com/MzkVj1X.jpeg",
      "https://i.imgur.com/Z3ILtgp.jpeg"
    ],
    descricao: "Clássico da literatura distópica em edição nova para leitura. Uma reflexão atemporal sobre vigilância e liberdade.",
    linkEnjoei: ""
  },
  {
    id: "LIV005",
    nome: "Sonho de uma noite de verão",
    categoria: "Livros",
    marca: "Sem Marca",
    tamanho: "Único",
    estado: "Usado",
    preco: 70.30,
    precoEnjoei: 80.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/Cynsp9W.jpeg",
      "https://i.imgur.com/C06ncY1.jpeg",
      "https://i.imgur.com/34MFgih.jpeg"
    ],
    descricao: "Obra clássica de William Shakespeare em edição de leitura. Uma comédia mística e encantadora sobre o amor.",
    linkEnjoei: ""
  },
  {
    id: "CALCADO003",
    nome: "Sapato Social Preto Masculino",
    categoria: "Calçados",
    marca: "Sem Marca",
    tamanho: "40-41",
    estado: "Novo",
    preco: 45.40,
    precoEnjoei: 52.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/OMuRmYf.jpeg",
      "https://i.imgur.com/TvvgN0Y.jpeg",
      "https://i.imgur.com/vCl2oM0.jpeg",
      "https://i.imgur.com/y4rLKii.jpeg"
    ],
    descricao: "Sapato social preto com acabamento elegante, ideal para ocasiões formais. Conforto e sofisticação em um produto novo.",
    linkEnjoei: ""
  },
  {
    id: "TOUCA001",
    nome: "Touca Azul Marinho de Inverno",
    categoria: "Touca",
    marca: "Sports",
    tamanho: "Adulto",
    estado: "Novo",
    preco: 20.90,
    precoEnjoei: 24.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/spk48Vr.jpeg",
      "https://i.imgur.com/ePjyyMZ.jpeg",
      "https://i.imgur.com/Dg0vmBu.jpeg",
      "https://i.imgur.com/qTBg9ta.jpeg"
    ],
    descricao: "Touca de inverno em tecido confortável para dias frios. Proteção e estilo com a qualidade Sports. Cor azul marinho clássica.",
    linkEnjoei: ""
  },
  {
    id: "TOUCA002",
    nome: "Touca Azul Royal Casual",
    categoria: "Touca",
    marca: "Sem Marca",
    tamanho: "Adulto",
    estado: "Usado",
    preco: 16.90,
    precoEnjoei: 19.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/E7RGF8C.jpeg",
      "https://i.imgur.com/lrCohOD.jpeg",
      "https://i.imgur.com/uLhDSrd.jpeg",
      "https://i.imgur.com/tHf4fQI.jpeg"
    ],
    descricao: "Touca azul estilo casual, confortável para uso no frio. Malha macia e tom vibrante para dias de inverno.",
    linkEnjoei: ""
  },
  {
    id: "TOUCA003",
    nome: "Touca Bege Tricot",
    categoria: "Touca",
    marca: "wed`ze",
    tamanho: "Adulto",
    estado: "Novo",
    preco: 28.90,
    precoEnjoei: 33.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/PPfdOBK.jpeg",
      "https://i.imgur.com/wGAPsFE.jpeg",
      "https://i.imgur.com/h21HiPM.jpeg"
    ],
    descricao: "Touca de tricot bege com visual simples e versátil. Marca wed`ze, conhecida pelo conforto térmico em baixas temperaturas.",
    linkEnjoei: ""
  },
  {
    id: "TOUCA004",
    nome: "Touca Listrada Preto e Cinza",
    categoria: "Touca",
    marca: "Sem Marca",
    tamanho: "Adulto",
    estado: "Usado",
    preco: 20.30,
    precoEnjoei: 23.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/fFkqSRr.jpeg",
      "https://i.imgur.com/gMussQk.jpeg",
      "https://i.imgur.com/yhCkYnp.jpeg",
      "https://i.imgur.com/2j7pOLu.jpeg"
    ],
    descricao: "Touca listrada em tons escuros, ideal para uso casual no inverno. Estilo despojado e aquecimento garantido.",
    linkEnjoei: ""
  },
  {
    id: "KIT007",
    nome: "Kit 2 Garrafa Grande Caixa Leite Suco Água Acrílica 1L",
    categoria: "Diversos, Kits", // <-- AQUI: Múltiplas categorias
    marca: "LKS Shop Bazar Oficial",
    tamanho: "1L",
    estado: "Seminovo",
    preco: 30.00,
    precoEnjoei: 34.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/fXDHbPN.jpeg",
      "https://i.imgur.com/tnpdgjT.jpeg",
      "https://i.imgur.com/LysrVrS.jpeg"
    ],
    descricao: "Conjunto com 2 garrafas de acrílico em formato criativo de caixa de leite. Capacidade de 1L cada, ideal para servir sucos e águas com estilo.",
    isKit: true,
    desconto: 0
  },
  {
    id: "KIT008",
    nome: "Kit 6 potes Herméticos para Mantimentos",
    categoria: "Diversos, Kits", // <-- AQUI: Múltiplas categorias
    marca: "Via Borge Store",
    tamanho: "1L",
    estado: "Novo",
    preco: 95.00,
    precoEnjoei: 109.90,
    status: "Ativo",
    dataCadastro: "15/03",
    fotosImgur: [
      "https://i.imgur.com/sseX1CT.jpeg",
      "https://i.imgur.com/X9qb8S8.jpeg"
    ],
    descricao: "Kit com 6 potes herméticos de 1L. Dimensões: 10,5x11,5x13cm. Vedação perfeita para conservar mantimentos na despensa ou armário. Produto novo.",
    isKit: true,
    desconto: 0
  }
];
