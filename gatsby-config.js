module.exports = {
  siteMetadata: {
    title: `David CORDEIRO`,
    description: `Bonjour, je m'appelle David CORDEIRO, je suis née le 5 mai 1995.
      J'ai un parcourt assez attpique, en effet, avant de me lancer dans l'informatique et plus précesément le developement je voulais être infirmier. 
      J'ai donc fait un baccalauréat professionnel ASSP (Accompagnement Service et Soin à la Personne). 
      Cette formation m'a permis de mettre un pieds dans le monde prefessionel assez tôt, avec 4 stages de 2 à 6 mois sur les trois ans et un CDD en fin de dernière année comme job d'été. 
      Après ces stages et cette formation j'ai fait une préparation accélérer aux concours infirmier. Ce pendant je me rendais compte que cette profession n'etait pas faite pour moi. 
      J'ai toujours été passionné par les nouvelles technologies ! J'ai donc cherché à me réorienter. Et c'est comme ça que j'ai commencé l'EPITECH paris.
      Le programme Grande Ecole est le cursus classique d’Epitech. Il se déroule en 5 ans et forme des experts en informatique. 
      Il propose un contenu technique dense et varié, comprenant une diversité de projets de programmation, et couvrant de nombreux langages. Durant les 3 permière années il y a 2 stages de 4 à 6 mois. 
      Après l'obtention dans mon "Bachelor Epitech en Technologie de l'information" en 2018, 
      j'ai choisi de réjoindre le programme Golbal Tech qui est un nouveau programme en alternance pour la 4e et 5e.
      Et j'ai eu la chance de pouvoir effectuer ces 2 ans d'alternance au SogetiLabs Paris un studio d'innovation R&D de Sogeti part of Capdemini.`,
    author: `davicord.contact@gmail.com`,
    job: `React developper`,
    linksMenu: [
      { pathName: "/", linkName: "A propos" },
      { pathName: "resume", linkName: "Parcours" },
      { pathName: "contact", linkName: "Contact" }
    ],
    hobbysData: {
      title: 'Mes Hobbies',
      hobbies: [
        {
          title: 'Veille',
          iconName: "book",
          description: "La Veille, quelle soit techonologique ou non la me permet de découvrir et d'apprendre pleins de nouvelles choses notament dans la finance, l'ecologie et bien évidemment de connaitre de nouvelle technologie ou de voir d'autre facon de codee",
        },
        {
          title: 'Moto',
          iconName: "v",
          description: "J'ai le permis moto depuis un peu plus d'un an et j'aime beaucoup en faire",
        },
        {
          title: 'Musique',
          iconName: "headphones",
          description: "J'ai beacoup le musique, il n'y a pas un jour ou j'en écoute pas",
        },
        {
          title: 'Sortie',
          iconName: "talking",
          description: "Etant plutot sociable j'aime beacoup faire de nouvelles rencontre et discuter",
        },
      ]
    },
    resumeData: {
      title: "Parcours",
      subtitle: "Bachelor Epitech en Technologies de l'Information",
      education: [
        {
          year: "2018 - 2020",
          what: "Epitech - Paris PGT",
          job: "Alternant Full-Stack developer",
          description: "Programme Global Tech"
        },
        {
          year: "2015 - 2018",
          what: "Epitech - Paris PGE",
          job: "Edutiant",
          description: "Ecole d'informatique en 5 ans. Programme Grande Ecole"
        },
        {
          year: "2014",
          what: "Préparation concours d'infirmier",
          job: "Edutiant",
          description: "Formation accélérée en 3 mois."
        },
        {
          year: "2013",
          what: "Bac ASSP",
          job: "Edutiant",
          description: "ASSP - Accompagnement Service et Soin à la personne."
        },
      ],
      exprerience: [
        {
          year: "2018 - 2020",
          job: "Full-Stack develeper",
          techno: "[NodeJs, Python, ReactJS, GatsbyJs, HTML/CSS/SCSS]",
          what: "SogetiLabs Capgemini",
          description: "Consore+ Sowell hackaton Jp Wecare "
        },
        {
          year: "2017",
          job: "Front-end developer",
          techno: "[NodeJs, VueJs, HTML/CSS/SCSS]",
          what: "Target2Sell",
          description: ""
        },
        {
          year: "2016",
          job: "Back-end developer",
          techno: "[NodeJs]",
          what: "Gasolead",
          description: ""
        },
        {
          year: "2012 - 2014",
          job: "Agent hospitalier",
          what: "Clinique, EHPAD, Hôpital",
          description: ""
        },
      ],
      skills: {
        language: [
          {
            name: "ReactJs",
            level: 8
          },
          {
            name: "GatsbyJs",
            level: 7
          },
          {
            name: "NodeJs",
            level: 6
          },
          {
            name: "HTML",
            level: 6
          },
          {
            name: "CSS / SCSS",
            level: 6
          },
          {
            name: "Git",
            level: 6
          },
          {
            name: "Trello",
            level: 5
          },
          {
            name: "Agile Scrum",
            level: 8
          }
        ],
        other: [
        ]
      },
      qualities: [
        "Autonome", "Dynamique", "Souriant",
      ]
    }
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hobbiesIcons`,
        path: `${__dirname}/src/assets/hobbiesIcons`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
