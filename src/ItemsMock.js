const items = [
  {
    id: 1,
    name: "Tate no yuusha",
    category: "Lectura",
    subCategory: "Mangas",
    price: 3500,
    urlImg:
      "https://m.media-amazon.com/images/M/MV5BMTQ2NTA1N2MtMzkxOS00MjQ3LTliODctOTk0ZTk1N2FiMmNlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
    stock: 8,
    description: "Naofumi Iwatani fue invocado en un mundo paralelo junto a otras tres personas para convertirse en los héroes de ese mundo. Cada uno de los héroes fue equipado con su propia arma legendaria cuando fueron convocados. Naofumi recibió el Escudo, el único equipo defensivo, mientras que los otros recibieron armas capaces de atacar. Debido a la falta de carisma y experiencia, Naofumi terminó con una sola compañera de equipo la cual lo traiciona haciéndolo pasar como un criminal haciendo que tanto su reputación como su personalidad a ojos de otros y así mismo cambien a un ser antipático y deprimente perdiendo la confianza en los demás, debido a que su arma es defensiva Naofumi consigue aliadas para ayudarlo en combate, como Raphtalia una semi-humana mapache, Filo una filolial y Melty una princesa guerrera, que pronto formarán algo más que un simple grupo."
  },
  {
    id: 2,
    name: "Goblin Slayer",
    category: "Lectura",
    subCategory: "Mangas",
    price: 3500,
    urlImg:
      "https://inmanga.com/thumbnails/manga/Goblin-Slayer/d9c03100-c6ba-43ff-a67b-8c8a056442c7",
    stock: 10,
    description: "La serie cuenta la historia de un aventurero de rango plata llamado Goblin Slayer, quien se especializa únicamente en cazar goblins. Los goblins son una raza de monstruos humanoides que se consideran de bajo rango, por lo que la mayoría de los aventureros no se molestan en tomar solicitudes de exterminio de goblins. Sin embargo, Goblin Slayer sabe que los goblins son una amenaza peligrosa, y está decidido a proteger a los inocentes de sus ataques."
  },
  {
    id: 3,
    name: "Solo Leveling",
    category: "Lectura",
    subCategory: "Manhwas",
    price: 4500,
    urlImg:
      "https://upload.wikimedia.org/wikipedia/en/9/99/Solo_Leveling_Webtoon.png",
    stock: 6,
    description:'En un mundo donde los monstruos invaden a través de portales llamados "puertas", los humanos que pueden usar habilidades sobrenaturales para luchar contra ellos se llaman cazadores. Sung Jinwoo es un cazador de bajo rango que es conocido como "el cazador más débil de la humanidad".Un día, Jinwoo se encuentra en una mazmorra de alto rango escondida dentro de una mazmorra de bajo rango. Allí, resulta fatalmente herido. Sin embargo, en ese momento, una misteriosa ventana con una misión aparece frente a él. Al borde de la muerte, Jinwoo decide aceptarla y comienza a subir de nivel... y es el único que puede hacerlo.A medida que Jinwoo sube de nivel, sus habilidades y poderes se vuelven cada vez más poderosos. También comienza a ganar seguidores, incluidos otros cazadores, un grupo de soldados especiales y una misteriosa organización conocida como "Greed". La historia de Solo Leveling sigue a Jinwoo mientras se convierte en el cazador más poderoso del mundo. A lo largo del camino, se enfrenta a una variedad de enemigos, incluidos monstruos, otros cazadores y fuerzas malignas que amenazan al mundo.'
  },
  {
    id: 4,
    name: "Tower of god",
    category: "Lectura",
    subCategory: "Manwhas",
    price: 3500,
    urlImg:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/Tower_of_God_Volume_1_Cover.jpg",
    stock: 8,
    description:'Tower of God es una serie de webtoons surcoreana escrita e ilustrada por SIU. La historia sigue a Baam, un joven que ha estado encerrado toda su vida en una cueva subterránea con una chica llamada Rachel. Cuando Rachel desaparece, Baam decide seguirla hasta la Torre, una estructura misteriosa que se eleva hasta el cielo.La Torre es un lugar peligroso y lleno de secretos. Para ascender por sus niveles, los participantes deben superar una serie de pruebas, que pueden ser físicas, mentales o espirituales. Baam se une a un grupo de otros participantes, y juntos deben enfrentarse a todo tipo de desafíos, incluyendo monstruos, otros participantes y fuerzas malignas que amenazan la Torre.La historia de Tower of God explora temas como el destino, la amistad, el poder y la superación personal. Es una historia compleja y fascinante que ha cautivado a millones de lectores de todo el mundo.'
  },
  {
    id: 5,
    name: "Tenki no Ko",
    category: "Lectura",
    subCategory: "Novelas ligeras",
    price: 7000,
    urlImg:
      "https://nextnovels.com/wp-content/uploads/2021/12/tenki-no-ko-01-1-722x1024.jpg",
    stock: 10,
    description:'Tenji no ko es una serie de novelas ligeras japonesas escritas por Hiromu Arakawa e ilustradas por Posuka Demizu. La historia sigue a Akari, una joven que vive en un pueblo remoto en Japón. Un día, Akari se encuentra con un niño misterioso llamado Tenji, quien ha caído del cielo. Tenji no es un niño normal. Tiene una fuerza y una velocidad sobrehumanas, y puede volar. Akari y Tenji se hacen amigos rápidamente, y juntos comienzan a explorar el mundo que los rodea.A medida que Akari y Tenji aprenden más sobre Tenji, descubren que tiene un pasado misterioso. Tenji es de otro mundo, y está en la Tierra en busca de algo. La historia de Tenji no ko explora temas como la amistad, la familia y el descubrimiento de uno mismo. Es una historia emocionante y conmovedora que ha cautivado a los lectores de todo el mundo.'
  },
  {
    id: 6,
    name: "Pendientes Tanjiro",
    category: "Accesorios",
    subCategory: "Aritos",
    price: 7000,
    urlImg:
      "https://http2.mlstatic.com/D_NQ_NP_811960-MLA54851968629_042023-O.webp",
    stock: 10,
    description:'¡Lleva contigo el espíritu de Tanjiro Kamado con estos pendientes de plata inspirados en su diseño icónico!    Los pendientes de Tanjiro son un accesorio imprescindible para cualquier fan de Kimetsu no Yaiba. Están hechos de plata de alta calidad y tienen un diseño simple pero elegante. La parte superior del pendiente tiene un círculo rojo con líneas a su alrededor, que representa el sol. La parte inferior del pendiente tiene una curva de color gris que representa la Tierra. Estos símbolos representan la Respiración del Sol, una técnica de respiración que fue creada por Yoriichi Tsugikuni, el antepasado de Tanjiro. Los pendientes de Tanjiro son un símbolo de su herencia y de su destino. Son un recordatorio de su promesa de convertirse en un cazador de demonios y de vengar la muerte de su familia.'
  },
  {
    id: 7,
    name: "Anillo Akatsuki",
    category: "Accesorios",
    subCategory: "Anillos",
    price: 7000,
    urlImg:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/940/762/products/d_945317-mla50019206733_052022-o-7351615094ee7bf83a16542901872885-640-0.jpg",
    stock: 4,
    description:'¡Lleva contigo el espíritu de Akatsuki con este anillo inspirado en su diseño icónico! Los anillos Akatsuki son un accesorio imprescindible para cualquier fan de Naruto. Están hechos de metal de alta calidad y tienen un diseño simple pero elegante. Cada anillo tiene un kanji único que representa a uno de los miembros de Akatsuki. Los anillos se usaban para identificar a los miembros de la organización y para mantener el orden dentro de ella. Los anillos Akatsuki son un símbolo de poder y misterio. Son un recordatorio de la historia de la organización y de sus ideales.'
  },
  {
    id: 8,
    name: "Pulsera Goku",
    category: "Accesorios",
    subCategory: "Pulseras",
    price: 4500,
    urlImg:
      "https://i.etsystatic.com/13402138/r/il/eacd1d/3315388306/il_fullxfull.3315388306_md00.jpg",
    stock: 5,
    description:'¡Lleva contigo el espíritu de Goku con esta pulsera inspirada en su diseño icónico!Las pulseras de Goku son un accesorio imprescindible para cualquier fan de Dragon Ball. Están hechas de metal o cuero de alta calidad y tienen un diseño simple pero elegante.La pulsera suele estar adornada con el símbolo de Goku, que es un kanji que significa "fuerza". También puede tener otros símbolos, como las esferas del dragón o el cabello de Goku. Las pulseras de Goku son un símbolo de poder y superación personal. Son un recordatorio de la historia de Goku y de su lucha por la justicia.'
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
    description:'Esta remera está hecha de algodón de alta calidad y tiene un diseño simple pero elegante. El diseño muestra a Toji Fushiguro, uno de los personajes más populares de la serie. Toji es un ex-asesino de jujutsu que es conocido por su fuerza y su habilidad para derrotar a las maldiciones sin usar la energía maldita. Es un personaje complejo y misterioso que ha cautivado a los fans de la serie. Esta remera es una excelente manera de mostrar tu amor por Jujutsu Kaisen y por Toji Fushiguro. Es un accesorio cómodo y stylish que puedes usar en cualquier ocasión.'
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
    description:'Este buzo está hecho de algodón perchado de alta calidad y tiene un diseño simple pero elegante. El diseño muestra a Madara Uchiha, uno de los personajes más populares de la serie Naruto. Madara es un personaje complejo y poderoso que es conocido por su ambición y su deseo de paz. Es un personaje icónico que ha cautivado a los fans de la serie durante años. Este buzo es una excelente manera de mostrar tu amor por Naruto y por Madara Uchiha. Es un accesorio cómodo y stylish que puedes usar en cualquier ocasión.'
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
    description:'Este pantalón está hecho de algodón peinado de alta calidad y tiene un diseño simple pero elegante. El diseño muestra las diferentes evoluciones de eevee, uno de los personajes más populares de la serie Pokémon.  Eevee es un pokemon adorable con múltiples posibilidades de evolución. Es un personaje icónico que ha cautivado a los fans de la serie durante años. Este pantalón es una excelente manera de mostrar tu amor por Pokemon. Es un accesorio cómodo y stylish que puedes usar en cualquier ocasión.'
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    resolve(items);
    reject([]);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    resolve(items.find((item) => item.id == id));
    reject([]);
  });
};

