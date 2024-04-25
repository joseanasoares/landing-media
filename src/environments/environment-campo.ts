export const environment = {
  production: false,
  context: 'campo',
  assetsDirectory: 'assets-campo',
  properties: {
    text: 'O CLIMA no Campo® é um produto da meteoblue® pensado para o Agronegócio Brasileiro, que tem por objetivo democratizar o acesso aos dados e mapas agrometeorológicos com a mais alta confiabilidade disponível no mundo, através de portais, plataformas e Apps acessíveis ao Produtor. O CLIMA no Campo® foi lançado no Brasil em 2022, mas a meteoblue® já provê dados no AGRO Brasileiro para grandes empresas há +10 anos.',
    brands: [
      {
        id:1,
        image: 'brand1',
        alt: "cocamar"
      },
      {
        id:2,
        image: 'brand2',
        alt: "carpec"
      },
      {
        id:3,
        image: 'brand3',
        alt: "bayer"
      },
      {
        id:4,
        image: 'brand4',
        alt: "orbia"
      }
    ], 
    location: [
      {
        id: 1,
        flag: 'assets/icons/br.png',
        image: 'assets-campo/sjc.png',
        title: 'Sede no Brasil',
        address: 'Av. Cassiano Ricardo, 601 - 6º andar',
        city: 'São José dos Campos, SP, Brasil.',
      },
      {
        id: 2,
        flag: 'assets/icons/sw.png',
        image: 'assets-campo/swiss.png',
        title: 'Matriz',
        address: 'Greifengasse 38, 4th floor.',
        city: 'Bassel, Switzerland.',
      },
    ],
  },
};
