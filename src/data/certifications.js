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
import ndbc from '../assets/Certifications/ndbc.png';
import ndbt from '../assets/Certifications/ndbt.png';

const certifications = [
  {
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 2026',
    img: ccna,
    desc: 'Covers fundamental networking concepts including IP addressing, network protocols, DHCP, router and switch configuration, and network architecture design.',
    skills: ['IP Addressing', 'Network Protocols', 'DHCP', 'Router Config', 'Switch Config', 'Subnetting', 'Network Architecture', 'OSI Model'],
    featured: true,
  },
  {
    name: 'Networking Devices and Basic Configurations',
    issuer: 'Cisco Networking Academy',
    date: 'Mar 2026',
    img: ndbc,
    desc: 'Focuses on configuring routers and switches, basic network security, VLANs, and troubleshooting common network issues using Cisco devices.',
    skills: ['Router Config', 'Switch Config', 'VLANs', 'Network Security', 'Cisco IOS', 'Troubleshooting', 'Inter-VLAN Routing'],
    featured: true,
  },
  {
    name: 'Network Addressing and Basic Troubleshooting',
    issuer: 'Cisco Networking Academy',
    date: 'April 2026',
    img: ndbt,
    desc: 'Focuses on network addressing schemes and systematic troubleshooting of common network issues using diagnostic tools and methodologies.',
    skills: ['IPv4 / IPv6', 'Subnetting', 'Packet Tracer', 'Ping & Traceroute', 'Network Diagnostics', 'Address Planning'],
    featured: true,
  },
  {
    name: 'Six Sigma Yellow Belt',
    issuer: 'Council of Six Sigma Certification',
    date: 'Jan 2026',
    img: yellowbelt,
    desc: 'Introduces the DMAIC framework and core quality improvement tools used to identify, analyze, and reduce process defects.',
    skills: ['DMAIC', 'Root Cause Analysis', 'Data Collection', 'Process Mapping', 'Quality Tools', 'Fishbone Diagram'],
    featured: true,
  },
  {
    name: 'Six Sigma White Belt',
    issuer: 'Council of Six Sigma Certification',
    date: 'Jan 2026',
    img: whitebelt,
    desc: 'Covers the foundational principles of Lean and Six Sigma, including waste reduction, process thinking, and team collaboration.',
    skills: ['Lean Principles', 'Waste Reduction', 'Process Thinking', 'Team Collaboration', 'Quality Awareness'],
    featured: true,
  },
];

export default certifications;
