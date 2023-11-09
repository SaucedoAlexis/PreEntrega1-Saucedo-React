const items = [
  {
    id: 1,
    name: "Tate no yuusha",
    category: "Lectura",
    subCategory: "Manga",
    price: 3500,
    urlImg:
      "https://m.media-amazon.com/images/M/MV5BMTQ2NTA1N2MtMzkxOS00MjQ3LTliODctOTk0ZTk1N2FiMmNlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    stock: 8,
  },
  {
    id: 2,
    name: "Goblin Slayer",
    category: "Lectura",
    subCategory: "Manga",
    price: 3500,
    urlImg:
      "https://inmanga.com/thumbnails/manga/Goblin-Slayer/d9c03100-c6ba-43ff-a67b-8c8a056442c7",
    stock: 10,
  },
  {
    id: 3,
    name: "Solo Leveling",
    category: "Lectura",
    subCategory: "Manhwa",
    price: 4500,
    urlImg:
      "https://upload.wikimedia.org/wikipedia/en/9/99/Solo_Leveling_Webtoon.png",
    stock: 6,
  },
  {
    id: 4,
    name: "Tower of god",
    category: "Lectura",
    subCategory: "Manhwa",
    price: 3500,
    urlImg:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/Tower_of_God_Volume_1_Cover.jpg",
    stock: 8,
  },
  {
    id: 5,
    name: "Tenki no Ko",
    category: "Lectura",
    subCategory: "Novela Ligera",
    price: 7000,
    urlImg:
      "https://nextnovels.com/wp-content/uploads/2021/12/tenki-no-ko-01-1-722x1024.jpg",
    stock: 10,
  },
  {
    id: 6,
    name: "Pendientes Tanjiro",
    category: "Accesorio",
    subCategory: "Aritos",
    price: 7000,
    urlImg:
      "https://http2.mlstatic.com/D_NQ_NP_811960-MLA54851968629_042023-O.webp",
    stock: 10,
  },
  {
    id: 7,
    name: "Anillo Akatsuki",
    category: "Accesorio",
    subCategory: "Anillos",
    price: 7000,
    urlImg:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/762/products/d_945317-mla50019206733_052022-o-7351615094ee7bf83a16542901872885-640-0.jpg",
    stock: 4,
  },
  {
    id: 8,
    name: "Pulsera Goku",
    category: "Accesorio",
    subCategory: "Pulseras",
    price: 4500,
    urlImg:
      "https://i.etsystatic.com/13402138/r/il/eacd1d/3315388306/il_fullxfull.3315388306_md00.jpg",
    stock: 5,
  },
  {
    id: 9,
    name: "Remera Toji",
    category: "Ropa",
    subCategory: "Remeras",
    price: 10000,
    urlImg:
      "https://d22fxaf9t8d39k.cloudfront.net/52f24b68162bee483158da8337f374b7ae000b06f962d6e790cbcc05f68372e0181699.jpg",
    stock: 5,
  },
  {
    id: 10,
    name: "Buzo Madara",
    category: "Ropa",
    subCategory: "Buzos",
    price: 15000,
    urlImg:
      "https://d22fxaf9t8d39k.cloudfront.net/659d4e2a62ec3e2542d4ace3e227b921e5f67631f0cfa9f6f7208100c6a88ba195775.jpeg",
    stock: 5,
  },
  {
    id: 11,
    name: "Pantalón Eevee",
    category: "Ropa",
    subCategory: "Pantalones",
    price: 15000,
    urlImg:
      "https://d22fxaf9t8d39k.cloudfront.net/08533718f6778b20ccb9e18c9316f52b762bc502bd8abfd34992bac0c0c305e0186301.png",
    stock: 5,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    resolve(items);
    reject([]);
  });
};
