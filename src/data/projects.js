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
import mycopilotflutterapp from '../assets/Projects/MyCopilotFlutterApp.png';

const projects = [
  {
    slug: 'mycopilot-flutter-app',
    title: 'MyCopilot Flutter App',
    type: 'App Dev',
    category: 'Solo Project',
    workType: 'solo',
    img: mycopilotflutterapp,
    bg: 'linear-gradient(135deg, #ff6b6b 0%, #ffa502 100%)',
    desc: 'A cross-platform mobile application built with Flutter that provides a seamless user experience for managing tasks and productivity.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    features: [
      'Intuitive task management interface',
      'Real-time synchronization with Firebase backend',
      'Offline support for uninterrupted usage',
      'Responsive design for various screen sizes',
    ],
    year: '2026',
    featured: true,
    liveUrl: '',
    sourceUrl: 'https://github.com/ddmlupase/myCopilotApp',
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
];

export default projects;
