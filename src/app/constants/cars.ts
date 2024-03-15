export interface Cars {
  id: number;
  automaker: string;
  model: string;
  automakerModel: string;
  year: number;
  image: string;
  power: {
    value: number;
    rating: number;
  };
  torque: {
    value: number;
    rating: number;
  };
  maximumSpeed: {
    value: number;
    rating: number;
  };
  description?: {
    title?: string;
    textDescription?: string;
  }[];
}

export const cars: Cars[] = [
  {
    id: 1,
    automaker: "Ferrari",
    model: "F40",
    automakerModel: "Ferrari F40",
    year: 1987,
    image: "/ferrari-f40.webp",
    power: {
      value: 478,
      rating: 3,
    },
    torque: {
      value: 58.8,
      rating: 4,
    },
    maximumSpeed: {
      value: 324,
      rating: 5,
    },
    description: [
      {
        title: "Origem",
        textDescription: `No início em 1984, a fábrica de Maranello tinha começado a desenvolver um modelo superior à 288 GTO para competir contra o Porsche 959 no Grupo B da FIA. No entanto, quando a FIA colocou um ponto final na categoria Grupo B para a temporada de 1986, após a morte do piloto Henri Toivonen[1] e do navegador Sergio Cresto, Enzo Ferrari ficou com cinco unidades da chamada 288 GTO Evoluzione, e nenhuma série de corridas para inscrevê-las. O desejo de Enzo de deixar um supercarro como seu legado final, permitiu que o programa Evoluzione desenvolvesse e produzisse um carro para uso exclusivo em estradas. Um dos membros do departamento de marketing da Ferrari é citado pela frase: "Nós queríamos que fosse muito rápido, esportivo ao extremo e espartano. Os clientes estavam dizendo que nossos carros estavam se tornando muito luxuoso e confortáveis. A F40 é para os mais entusiastas dos nossos proprietários que não querem nada, além de puro desempenho. Não é um laboratório para o futuro, como o 959, não é Star Wars, e não foi criado porque a Porsche construiu o 959, teria acontecido de qualquer maneira." `,
      },
      {
        title: "Desenvolvimento",
        textDescription:
          " Ferrari F40 foi desenhada e projetada com a aerodinâmica em mente, tendo um coeficiente aerodinâmico de 0,34, boa parte graças à asa traseira[4]. Para alcançar sua velocidade máxima, o carro contava mais com sua baixa resistência ao ar do que com sua potência. A área frontal foi reduzida em relação à 288 GTO Evoluzione, o que suavizou consideravelmente o fluxo de ar. A estabilidade era prioridade antes da velocidade final, assim como o arrefecimento do motor, já que este gerava uma grande quantidade de calor. ",
      },
    ],
  },
  {
    id: 2,
    automaker: "McLaren",
    model: "Senna",
    automakerModel: "Mclaren Senna",
    year: 2020,
    image: "/mclaren-senna.jpg",
    power: {
      value: 789,
      rating: 5,
    },
    torque: {
      value: 81.57,
      rating: 5,
    },
    maximumSpeed: {
      value: 335,
      rating: 5,
    },
    description: [
      {
        title: "Origem",
        textDescription: `Em dezembro de 2017, a McLaren divulgou as primeiras informações sobre o carro, sendo que o lançamento oficial aconteceu no Salão Internacional do Automóvel de Genebra em 6 de março de 2018. Todas as unidades foram vendidas ainda em 2017.[3][4]`,
      },
      {
        title: "",
        textDescription: `Ao Brasil foram destinadas apenas duas unidades, que já foram vendidas por cerca de 8 milhões de reais. A McLaren abriu sua primeira loja no Brasil no dia 8 de maio de 2018 em São Paulo com a presença da versão esportiva do McLaren Senna de 825 cv.`,
      },
    ],
  },
  {
    id: 3,
    automaker: "Porsche",
    model: "Taycan 4S Cross Turismo",
    automakerModel: "Porsche Taycan 4S Cross Turismo",
    year: 2022,
    image: "/taycan-4s-cross-turismo.webp",
    power: {
      value: 571,
      rating: 4,
    },
    torque: {
      value: 66.28,
      rating: 4,
    },
    maximumSpeed: {
      value: 240,
      rating: 3,
    },
    description: [
      {
        title: "800-volt architecture",
        textDescription: `The Porsche  soul stands for performance. In every respect. As demonstrated by the Taycan , even when charging: its 800-volt architecture produces charge power of up to 270kW. In 4.5 minutes, the Taycan Turbo , for example, can be charged to enable a range of up to 100km (WLTP) under optimum conditions¹ and is always ready for what its driver spends the whole day dreaming about: driving.`,
      },
    ],
  },
  {
    id: 4,
    automaker: "Lamborghini",
    model: "Aventador SVJ Roadster",
    automakerModel: "Lamborghini Aventador SVJ Roadster",
    year: 2020,
    image: "/Lamborghini_aventador-svj-roadster.png",
    power: {
      value: 770,
      rating: 5,
    },
    torque: {
      value: 73.41,
      rating: 4,
    },
    maximumSpeed: {
      value: 350,
      rating: 5,
    },
    description: [
      {
        title: "Overview",
        textDescription: `Limited to a mere 800 examples, the SVJ Roadster is the most iconic form of the Aventador family. 
        Its Lamborghini aerodynamics represent the most futuristic ever designed: the ALA 2.0 system and aero-vectoring ensure the minimum drag on straightaways and the optimal aerodynamic load when cornering. The 770 hp naturally aspirated V12 engine inspires awe. `,
      },
    ],
  },
];
