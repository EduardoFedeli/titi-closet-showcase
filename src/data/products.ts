export interface Product {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  fotos: string[];
  linkEnjoei: string;
  descricao: string;
  estado: string;
}

export const produtos: Product[] = [
  {
    id: 1,
    nome: "Camiseta Amarela Hering",
    preco: 45.0,
    categoria: "Camisas",
    fotos: [
      "https://i.imgur.com/7fstKjQ.jpeg",
      "https://i.imgur.com/3Rgn25U.jpeg",
      "https://i.imgur.com/Ne21urL.jpeg",
      "https://i.imgur.com/W4EyfnL.jpeg",
      "https://i.imgur.com/4oN3xaZ.png",
    ],
    linkEnjoei: "https://www.enjoei.com.br/",
    descricao: "Camiseta amarela Hering, tamanho M. Tecido 100% algodão, confortável e macia. Seminova, em ótimo estado.",
    estado: "Seminovo",
  },
  {
    id: 2,
    nome: "Camiseta Roxa",
    preco: 40.0,
    categoria: "Camisas",
    fotos: [
      "https://i.imgur.com/OEx6OTg.png",
      "https://i.imgur.com/Ify0833.jpeg",
      "https://i.imgur.com/SRNrOpe.jpeg",
      "https://i.imgur.com/I9qeTzp.png",
    ],
    linkEnjoei: "https://www.enjoei.com.br/",
    descricao: "Camiseta roxa em excelente estado. Ideal para looks casuais e confortáveis.",
    estado: "Seminovo",
  },
  {
    id: 3,
    nome: "Camisa Polo Manga Longa",
    preco: 70.0,
    categoria: "Camisas",
    fotos: [
      "https://i.imgur.com/wzBjg7N.png",
      "https://i.imgur.com/eIGOG8l.jpeg",
      "https://i.imgur.com/4fE7xMN.jpeg",
      "https://i.imgur.com/QNIWAtc.jpeg",
      "https://i.imgur.com/1V5EGXE.jpeg",
    ],
    linkEnjoei: "https://www.enjoei.com.br/",
    descricao: "Camisa polo manga longa, tecido respirável e de alta qualidade. Perfeita para ocasiões diversas.",
    estado: "Seminovo",
  },
  {
    id: 4,
    nome: "Camiseta Preta Básica",
    preco: 35.0,
    categoria: "Camisas",
    fotos: [
      "https://i.imgur.com/1SLh7jY.png",
      "https://i.imgur.com/7LPZnVc.jpeg",
      "https://i.imgur.com/sB45eQO.jpeg",
      "https://i.imgur.com/q6iG3NE.jpeg",
      "https://i.imgur.com/gkIWp6n.png",
    ],
    linkEnjoei: "https://www.enjoei.com.br/",
    descricao: "Camiseta preta básica, perfeita para o dia a dia. Versátil e confortável.",
    estado: "Usado",
  },
  {
    id: 5,
    nome: "Camisa Polo Rosa",
    preco: 90.0,
    categoria: "Camisas",
    fotos: [
      "https://i.imgur.com/6x1gzZu.png",
      "https://i.imgur.com/tTBJuUQ.jpeg",
      "https://i.imgur.com/GTNdvFt.jpeg",
      "https://i.imgur.com/o6xENcM.jpeg",
      "https://i.imgur.com/VWTyX0m.png",
    ],
    linkEnjoei: "https://www.enjoei.com.br/",
    descricao: "Camisa polo rosa, tecido leve e confortável. Estado de nova, perfeita para looks elegantes.",
    estado: "Novo",
  },
  {
    id: 6,
    nome: "Camisa Oversized Branca Algodão",
    preco: 78.0,
    categoria: "Camisas",
    fotos: [
      "https://i.imgur.com/tYYA6Pr.jpeg",
      "https://i.imgur.com/aG4TEkm.jpeg",
      "https://i.imgur.com/bwk6aiw.jpeg",
      "https://i.imgur.com/YmrvPOi.jpeg",
      "https://i.imgur.com/BYdF15B.png",
    ],
    linkEnjoei: "https://www.enjoei.com.br/",
    descricao: "Camisa oversized branca em algodão, modelagem moderna e descolada. Nova com etiqueta.",
    estado: "Novo com etiqueta",
  },
  {
    id: 7,
    nome: "Camisa Real Madrid 2024/2025",
    preco: 78.0,
    categoria: "Camisas",
    fotos: [
      "https://i.imgur.com/JtQ7qEY.jpeg",
      "https://i.imgur.com/eGEUkL1.jpeg",
      "https://i.imgur.com/scepBem.jpeg",
      "https://i.imgur.com/Wztbhb6.jpeg",
      "https://i.imgur.com/HQND1LV.png",
    ],
    linkEnjoei: "https://www.enjoei.com.br/",
    descricao: "Camisa oficial do Real Madrid 2024/2025, tecido respirável de alta performance. Para verdadeiros torcedores!",
    estado: "Seminovo",
  },
  {
    id: 8,
    nome: "Regata Golden State Warriors",
    preco: 78.0,
    categoria: "Camisas",
    fotos: [
      "https://i.imgur.com/g9TJIly.png",
      "https://i.imgur.com/0kVGQQq.jpeg",
      "https://i.imgur.com/T5ZHZNO.jpeg",
      "https://i.imgur.com/SRChIxa.png",
    ],
    linkEnjoei: "https://www.enjoei.com.br/",
    descricao: "Regata oficial do Golden State Warriors, tecido respirável e confortável. Perfeita para praticar esportes ou looks casuais.",
    estado: "Seminovo",
  },
];

export const categorias = ["Todos", ...new Set(produtos.map((p) => p.categoria))];
