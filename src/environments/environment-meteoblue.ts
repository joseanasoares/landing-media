export const environment = {
  production: false,
  context: 'meteoblue',
  assetsDirectory: 'assets-meteoblue',
  properties: {
    text: 'meteoblue® é um dos maiores provedores de dados e mapas meteorológicos globalmente, uma empresa Suíça de classe mundial que se especializou em processar e analisar com Inteligência Artificial (I.A.) grandes volumes de dados ambientais e meteorológicos em todo o planeta. Hoje a meteoblue® atende empresas como Microsoft, Windy, Shell, Mercedez Bens e provê dados e mapas para milhares de Apps e Plataformas em mais de 100 países.',
    location: [
      {
        id: 1,
        flag: 'assets/icons/br.png',
        image: 'assets-meteoblue/sjc.png',
        title: 'Sede no Brasil',
        address: 'Av. Cassiano Ricardo, 601 - 6º andar',
        city: 'São José dos Campos, SP, Brasil.',
      },
      {
        id: 2,
        flag: 'assets/icons/sw.png',
        image: 'assets-meteoblue/swiss.png',
        title: 'Matriz',
        address: 'Greifengasse 38, 4th floor.',
        city: 'Bassel, Switzerland.',
      },
    ],
    brands: [
      {
        id:1,
        image: 'brand1',
        alt: "Tempo na Cidade"
      },
      {
        id:2,
        image: 'brand2',
        alt: "Clima no Campo"
      }
    ]
  },
};
