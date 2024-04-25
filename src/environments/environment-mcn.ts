export const environment = {
    production: false,
    context: 'mcn',
    assetsDirectory: 'assets-mcn',
    properties: {
      text: 'O MediaCentre® Network é um Hub multimídia de tecnologia, serviços e conteúdo especializado no TEMPO e CLIMA que atua como licenciador oficial de dados e mapas da meteoblue® para Veículos de Comunicação. O LabCentre é a divisão da empresa que desenvolve e administra a tecnologia por trás dos nossos serviços no ambiente Azure Cloud Services com o apoio da Microsoft no seu programa de Startups.',
      brands: [
        {
          id:1,
          image: 'brand1',
          alt: "estadão"
        },
        {
          id:2,
          image: 'brand2',
          alt: "correio braziliense"
        },
        {
          id:3,
          image: 'brand3',
          alt: "exame."
        },
        {
          id:4,
          image: 'brand4',
          alt: "estado de minas"
        }
      ],   
      location: [
        {
          id: 1,
          flag: 'assets/icons/br.png',
          image: 'assets-mcn/brazil.png',
          title: 'Sede',
          address: 'Av. Paulista 2.300, Piso Pilotis',
          city: 'São Paulo, SP, Brasil.',
        },
        {
          id: 2,
          flag: 'assets/icons/sw.png',
          image: 'assets-mcn/brazil.png',
          title: 'LabMCN',
          address: 'Rua Conde do Pinhal, 1762, Centro',
          city: 'São Carlos, SP, Brasil.',
        },
      ],
    },
  };
  