// environment.ts
export const environment = {
    production: false,
    context: 'default',
    assetsDirectory: 'assets',
    properties: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor gravida diam aliquam blandit. Mauris lacinia augue nulla, placerat sollicitudin.',
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
      ],
      location: [{
        'id': 1,
        'flag': 'assets/icons/br.png',
        'image':'assets/images/brazil.png',
        'title' : 'Sede no Brasil',
        'address': 'Av. Cassiano Ricardo, 601 - 6º andar',
        'city': 'São José dos Campos, SP, Brasil.'
      },
      {
        'id': 2,
        'flag': 'assets/icons/sw.png',
        'image': 'assets/images/swiss.png',
        'title' : 'Matriz',
        'address': 'Greifengasse 38, 4th floor.',
        'city': 'Bassel, Switzerland.'
      }]
    }
  };
  