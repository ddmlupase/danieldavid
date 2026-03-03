/*
 * ─── PROJECTS DATABASE ───
 *
 * Add a new project by copying one of the objects below and filling in the fields.
 * The image should be placed in src/assets/Projects/ and imported at the top.
 *
 * Fields:
 *   slug        – URL-friendly name (used in /projects/:slug)
 *   title       – Project title
 *   type        – e.g. "Full Stack", "Frontend", "Backend", "App Dev", "Web App"
 *   category    – e.g. "Solo Project", "College Project", "Group Project"
 *   img         – Imported image for the card thumbnail
 *   bg          – CSS background for the detail page hero (gradient or color)
 *   desc        – Short project description (shown on the detail page)
 *   tags        – Array of tech/tools used
 *   features    – Array of key feature strings (shown on the detail page)
 *   year        – Year the project was made
 *   featured    – true if it should appear on the homepage carousel
 *   liveUrl     – (optional) Link to the live/deployed project
 *   sourceUrl   – (optional) Link to the source code repository
 */

import pokemonfanmadegame from '../assets/Projects/pokemonfanmadegame.png';
import printsaricorner from '../assets/Projects/printsaricorner.png';
import adduunivents from '../assets/adduunivents.png';

const projects = [
  {
    slug: 'pokemon-fan-made-game',
    title: 'Pokemon Fan-Made Game',
    type: 'Web App',
    category: 'Solo Project',
    workType: 'solo',
    img: pokemonfanmadegame,
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    desc: 'A fan-made Pokémon browser game featuring classic battle mechanics, team building, and an original storyline — built entirely with web technologies.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Turn-based battle system with type advantages',
      'Team builder with multiple Pokémon to choose from',
      'Responsive design optimized for desktop and mobile',
      'Sprite animations and sound effects',
    ],
    year: '2025',
    featured: true,
    liveUrl: 'https://pokemonfanmadegame.netlify.app/',
    sourceUrl: 'https://github.com/ddmlupase/pokemon-fan-made-game',
  },
  {
    slug: 'printsari-corner-system',
    title: 'PrintSari Corner System',
    type: 'Frontend',
    category: 'College Project',
    workType: 'group',
    img: printsaricorner,
    bg: 'linear-gradient(135deg, #0f3443 0%, #34e89e 100%)',
    desc: 'A printing service management system designed to streamline order tracking and queue management for a campus-based printing business.',
    tags: ['React', 'CSS', 'Node.js'],
    features: [
      'Order queue management dashboard',
      'Real-time status tracking for print jobs',
      'Clean, maintainable codebase with modern best practices',
      'Responsive layout for counter and customer views',
    ],
    year: '2025',
    featured: true,
    liveUrl: '',
    sourceUrl: '',
  },
  {
    slug: 'AdDU-Univents',
    title: 'AdDU Univents',
    type: 'Frontend',
    category: 'College Project',
    workType: 'group',
    img: adduunivents,
    bg: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
    desc: 'A university events platform that helps students discover, register for, and stay updated on campus events at Ateneo de Davao University.',
    tags: ['React', 'CSS', 'Supabase'],
    features: [
      'Event discovery feed with search and filters',
      'Event detail pages with registration flow',
      'Responsive design for mobile-first usage',
      'Supabase-powered backend for real-time data',
    ],
    year: '2025',
    featured: true,
    liveUrl: '',
    sourceUrl: '',
  },
];

export default projects;
