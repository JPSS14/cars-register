export interface Cars {
  automaker: string;
  model: string;
  automakerModel: string;
  image: string;
  power: number;
  torque: number;
  maximumSpeed: number;
  description?: {
    title?: string;
    textDescription?: string;
  }[];
}

export const Cars: Cars[] = [
  {
    automaker: "Ferrari",
    model: "F40",
    automakerModel: "Ferrari F40",
    image: "/ferrari-f40.webp",
    power: 478,
    torque: 58.8,
    maximumSpeed: 324,
    description: [
      {
        title: "Origem",
        textDescription: `No início em 1984, a fábrica de Maranello tinha começado a desenvolver um modelo superior à 288 GTO para competir contra o Porsche 959 no Grupo B da FIA. No entanto, quando a FIA colocou um ponto final na categoria Grupo B para a temporada de 1986, após a morte do piloto Henri Toivonen[1] e do navegador Sergio Cresto, Enzo Ferrari ficou com cinco unidades da chamada 288 GTO Evoluzione, e nenhuma série de corridas para inscrevê-las. O desejo de Enzo de deixar um supercarro como seu legado final, permitiu que o programa Evoluzione desenvolvesse e produzisse um carro para uso exclusivo em estradas. Um dos membros do departamento de marketing da Ferrari é citado pela frase: "Nós queríamos que fosse muito rápido, esportivo ao extremo e espartano. Os clientes estavam dizendo que nossos carros estavam se tornando muito luxuoso e confortáveis. A F40 é para os mais entusiastas dos nossos proprietários que não querem nada, além de puro desempenho. Não é um laboratório para o futuro, como o 959, não é Star Wars, e não foi criado porque a Porsche construiu o 959, teria acontecido de qualquer maneira." `,
      },
    ],
  },
  {
    automaker: "McLaren",
    model: "Senna",
    automakerModel: "Mclaren Senna",
    image: "/mclaren-senna.jpg",
    power: 789,
    torque: 81.57,
    maximumSpeed: 335,
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
    automaker: "Porsche",
    model: "Taycan 4S Cross Turismo",
    automakerModel: "Porsche Taycan 4S Cross Turismo",
    image: "/taycan-4s-cross-turismo.webp",
    power: 571,
    torque: 66.28,
    maximumSpeed: 240,
    description: [
      {
        title: "800-volt architecture",
        textDescription: `The Porsche  soul stands for performance. In every respect. As demonstrated by the Taycan , even when charging: its 800-volt architecture produces charge power of up to 270kW. In 4.5 minutes, the Taycan Turbo , for example, can be charged to enable a range of up to 100km (WLTP) under optimum conditions¹ and is always ready for what its driver spends the whole day dreaming about: driving.`,
      },
    ],
  },
  {
    automaker: "Lamborghini",
    model: "Aventador SVJ Roadster",
    automakerModel: "Lamborghini Aventador SVJ Roadster",
    image: "/Lamborghini_aventador-svj-roadster.png",
    power: 770,
    torque: 73.41,
    maximumSpeed: 350,
    description: [
      {
        title: "Overview",
        textDescription: `Limited to a mere 800 examples, the SVJ Roadster is the most iconic form of the Aventador family. 
        Its Lamborghini aerodynamics represent the most futuristic ever designed: the ALA 2.0 system and aero-vectoring ensure the minimum drag on straightaways and the optimal aerodynamic load when cornering. The 770 hp naturally aspirated V12 engine inspires awe. `,
      },
    ],
  },
];
