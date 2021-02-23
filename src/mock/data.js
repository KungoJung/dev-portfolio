import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Danny Berger', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Danny Berger Developer Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Danny.',
  subtitle: "I'm a full stack developer.",
  // title: "Hi, if you're",
  // name: 'here,',
  // subtitle: 'this site is a work in progress.',
  // cta: 'Continue',
};

// SKILLS DATA
export const skillsData = {
  frontEnd: {
    title: 'Front End',
    stacks: [
      {name: 'JavaScript', img: 'javascript.png'},
      {name: 'React', img: 'react.png'},
      {name: 'Redux', img: 'redux.png'},
      {name: 'Mapbox', img: 'mapbox.png'},
      {name: 'Victory', img: 'victory.png'},
      {name: 'HTML5', img: 'html5.png'},
      {name: 'CSS3', img: 'css.png'}
    ],
    burger: 'burger_topbun.png',
  },
  backEnd: {
    title: 'Back End',
    stacks: [
      {name: 'Node', img: 'node.png'},
      {name: 'Express', img: 'express.png'},
      {name: 'Sequelize ORM', img: 'sequelize.png'},
      {name: 'PostgreSQL', img: 'pg.png'},
      {name: 'RESTful API', img: 'restfulapi.png'},
      {name: 'Redis', img: 'redis.webp'},
    ],
    burger: 'burger_bottombun.png',
  },
  tools: {
    title: 'Tools',
    stacks: [
      {name: 'Agile', img: 'agile3.png'},
      {name: 'Git', img: 'git.png'},
      {name: 'Heroku', img: 'heroku.png'},
      {name: 'Travis CI-CD', img: 'travis2.png'},
      {name: 'PWA', img: 'pwa2.png'},
      {name: 'Electron', img: 'electron.png'},
      {name: 'Webpack', img: 'module.png'},
      {name: 'OAuth', img: 'id.png'}
      ],
    burger: 'burger_middle.png',
  },
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'JavaScript Jobs USA',
    videoId: '8gwzAvs_lgU',
    videoUrl: 'https://youtu.be/8gwzAvs_lgU',
    info: 'An interactive, real-time job search tool to find jobs for JavaScript developers by location. Custom search in any US state to apply to hundreds of jobs plotted to the map in multiple view modes.',
    contributors: 'Agne Urbaityte, Peter Boustani',
    stack: ['PWA', 'React', 'Redux', 'Mapbox', 'Victory', 'Node/Express', 'Redis', 'Adzuna API', 'Google Places API'],
    note: 'App hosted on free Heroku server. Please allow 15-30s to spin up. We have limited Adzuna API queries. If app causes 500 error, please select state: California; filter: Javascript, to explore app with cached dummy data.',
    url: 'https://javascript-jobs-usa.herokuapp.com/',
    repo: 'https://github.com/2009-fsa-cs-ashes-archers/JobMapApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'YoDaddy',
    videoId: '7y5MihufDYE',
    videoUrl: 'https://youtu.be/7y5MihufDYE',
    info: "An eCommerce site attempting to fill the world's insatiable need for all things Baby Yoda (Grogu). We closely followed and emulated the top online shopping experiences to deliver a fun, original website.",
    info2: '',
    contributors: 'David Huang, Josie Chen, Emmanuel Vazquez',
    stack: ['React', 'Redux', 'Node/Express', 'PostgreSQL', 'Sequelize', 'Passport', 'Stripe API', 'Nodemailer API'],
    note: 'App hosted on free Heroku server. Please allow 10-15s to spin up.',
    url: 'https://yodaddy.herokuapp.com/',
    repo: 'https://github.com/FSA-2009-Revenge-of-the-Shoppers/Grace-Shopper', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'These Expenses',
    videoId: 'S6KfSPJwGYQ',
    videoUrl: 'https://youtu.be/S6KfSPJwGYQ',
    info: "Expense tracker built for an offline desktop user. I took on the challenge of incorporating an all new technology stack (except for React) that I had not used before.",
    info2: '',
    stack: ['Electron', 'React', 'Victory', 'Material-UI', 'React-Bootstrap', 'JSON'],
    url: '', // if no url, the button will not show up
    repo: 'https://github.com/KungoJung/expense-tracker-electron', // if no repo, the button will not show up
  },
];

// ABOUT DATA
export const aboutData = {
  // For lulz:
  // img: 'Origami_Bernie_Meme.jpeg',
  // img: 'LinkedInPhoto.png',
  img: 'Mohawk1.png',
  paragraphOne: 'As a lifelong musician, before tech I taught guitar and voice, ran a rehearsal studio, and booked concerts in NYC and beyond.',
  paragraphTwo: 'In 2020, I took a leap and trained in modern app development at Fullstack Academy. I quickly absorbed new concepts, while bringing ambitious ideas and a positive attitude to every challenge.',
  paragraphThree: "When I'm not coding, I'm usually doing yoga, testing out a new recipe, or writing a musical parody on guitar.",
  resume: '', // if no resume, the button will not show up
};

// CONTACT DATA
export const contactData = {
  cta: 'Get In Touch!',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/danielberger18/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/KungoJung',
    },
    {
      id: nanoid(),
      name: 'youtube-play',
      url: 'https://www.youtube.com/channel/UCMGSgppCK-hp4zmeqhp7CIw',
    },
    {
      id: nanoid(),
      name: 'file',
      url: 'https://drive.google.com/file/d/1I0QFmwSEzUM4-uGfu4jPrmLr0aSvH_MJ/view',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
