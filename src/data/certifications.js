/*
 * ─── CERTIFICATIONS DATABASE ───
 *
 * Add a new certification by copying one of the objects below and filling in the fields.
 * The image should be placed in src/assets/Certifications/ and imported at the top.
 *
 * Fields:
 *   name     – Certification title
 *   issuer   – Issuing organization
 *   date     – Date earned (e.g. "Jan 2026")
 *   img      – Imported image for the card thumbnail
 *   desc     – Short description of what the certification covers
 *   featured – true if it should appear on the homepage (top 3 shown)
 */

import ccna from '../assets/Certifications/ccna.png';
import yellowbelt from '../assets/Certifications/yellowbelt.png';
import whitebelt from '../assets/Certifications/whitebelt.png';

const certifications = [
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 2026',
    img: ccna,
    desc: 'Covers fundamental networking concepts including IP addressing, network protocols, DHCP, router and switch configuration, and network architecture design.',
    featured: true,
  },
  {
    name: 'Six Sigma Yellow Belt',
    issuer: 'Council of Six Sigma Certification',
    date: 'Jan 2026',
    img: yellowbelt,
    desc: 'A comprehensive program covering React, JavaScript, HTML/CSS, version control, UX/UI principles, and front-end development best practices.',
    featured: true,
  },
  {
    name: 'Six Sigma White Belt',
    issuer: 'Council of Six Sigma Certification',
    date: 'Jan 2026',
    img: whitebelt,
    desc: 'Covers the full UX design process: user research, wireframing, prototyping, usability testing, and responsive design thinking.',
    featured: true,
  },
];

export default certifications;
