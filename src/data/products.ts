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
    ],
    linkEnjoei: "https://www.enjoei.com.br/",
    descricao:
      "Camiseta amarela Hering, tamanho M. Tecido 100% algodão, confortável e macia. Seminova, em excelente estado de conservação.",
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
    ],
    linkEnjoei: "https://www.enjoei.com.br/",
    descricao:
      "Camiseta roxa em excelente estado. Ideal para looks casuais e confortáveis.",
    estado: "Seminovo",
  },
  {
    id: 3,
    nome: "Camisa Real Madrid 2024/2025",
    preco: 78.0,
    categoria: "Camisas",
    fotos: [
      "https://i.imgur.com/JtQ7qEY.jpeg",
      "https://i.imgur.com/eGEUkL1.jpeg",
      "https://i.imgur.com/scepBem.jpeg",
    ],
    linkEnjoei: "https://www.enjoei.com.br/",
    descricao:
      "Camisa oficial do Real Madrid temporada 2024/2025. Perfeita para colecionadores e fãs do clube.",
    estado: "Seminovo",
  },
];

export const categorias = ["Todos", ...new Set(produtos.map((p) => p.categoria))];
