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
  cta: 'Continue',
};

// SKILLS DATA
export const skillsData = {
  base: 'burger_blank.png',
  top: 'burger_topbun.png',
  mid: 'burger_middle.png',
  bot: 'burger_bottombun.png',
  intro: '"Apps are like burgers. They\'ve got layers." -- Shrek (maybe)',
  topSkills: [],
  midSkills: [],
  botSkills: [],
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
  img: '',
  paragraphOne: 'I like coding and stuff.',
  paragraphTwo: 'I like Meg.',
  paragraphThree: 'I like coffee.',
  resume: 'https://drive.google.com/file/d/1yyUlSIJXTM0JjixNNDW2-MyVVogcyRAQ/view?usp=sharing', // if no resume, the button will not show up
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
