module.exports = {
  siteMetadata: {
    title: `David CORDEIRO`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
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
          description: "zdazdazd azdazdazdazd azd az d az d azd a z dazdazdaz dazd azdazdazd azd az dazdazd ",
        },
        {
          title: 'Sortie',
          iconName: "talking",
          description: "dazdaz dazd azdazd fdgr th trhththd ghdghfghdfhg fdghfgh ",
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
