import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Danny Berger', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Danny Berger Developer Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  // title: "Hi, I'm",
  // name: 'Danny.',
  // subtitle: "I'm a full stack developer.",
  title: "Hi, if you're",
  name: 'here,',
  subtitle: 'this site is a work in progress.',
  cta: 'Continue',
};

// SKILLS DATA
export const skillsData = {
  frontEnd: {
    title: 'Front End',
    stacks: [
      {name: 'JavaScript', img: ''},
      {name: 'React', img: ''},
      {name: 'Redux', img: ''},
      {name: 'Mapbox', img: ''},
      {name: 'Victory', img: ''},
      {name: 'HTML5', img: ''},
      {name: 'CSS3', img: ''}
    ],
    burger: 'burger_topbun.png',
  },
  backEnd: {
    title: 'Back End',
    stacks: [
      {name: 'Node', img: ''},
      {name: 'Express', img: ''},
      {name: 'Sequelize ORM', img: ''},
      {name: 'PostgreSQL', img: ''},
      {name: 'RestfulAPI', img: ''},
      {name: 'Redis', img: ''},
    ],
    burger: 'burger_bottombun.png',
  },
  tools: {
    title: 'Tools',
    stacks: [
      {name: 'Agile', img: ''},
      {name: 'Git', img: ''},
      {name: 'Heroku', img: ''},
      {name: 'Travis CI-CD', img: ''},
      {name: 'PWA', img: ''},
      {name: 'Electron', img: ''},
      {name: 'Webpack', img: ''},
      {name: 'OAuth', img: ''}
      ],
    burger: 'burger_middle.png',
  },
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// ABOUT DATA
export const aboutData = {
  // For lulz:
  // img: 'Origami_Bernie_Meme.jpeg',
  img: 'LinkedInPhoto.png',
  paragraphOne: 'As lifelong musician, before tech I taught guitar and voice, ran a rehearsal studio, and booked concerts in NYC and beyond.',
  paragraphTwo: 'In 2020, I took a leap, and trained in modern app development at Fullstack Academy. I quickly absorbed new concepts, while bringing ambitious ideas and a positive attitude to every challenge.',
  paragraphThree: "When I'm not coding, I'm probably doing yoga, trying out a new recipe, or writing a musical parody on guitar.",
  resume: '', // if no resume, the button will not show up
};

// CONTACT DATA
export const contactData = {
  cta: '',
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
      name: 'youtube',
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
