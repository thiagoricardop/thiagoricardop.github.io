// Every claim here traces back to skills/data/candidate-profile.md; update that file first.
import type { ImageMetadata } from 'astro';
import sshClusters from '../assets/previews/ssh-clusters.png';
import posixDashboard from '../assets/previews/posix-dashboard.png';
import p300Preview from '../components/previews/P300_preview.png';

export const site = {
  url: 'https://thiagoricardop.github.io',
  title: 'Thiago Ricardo | Embedded & Automotive Cybersecurity Engineer',
  description:
    'Portfolio of Thiago Ricardo, an embedded and automotive cybersecurity engineer: CAN bus intrusion detection, multi-process C/POSIX systems and CI-tested embedded software. Authorized to work in the U.S.',
  repo: 'https://github.com/thiagoricardop/thiagoricardop.github.io',
};

export const person = {
  name: 'Thiago Ricardo',
  role: 'Embedded & Automotive Cybersecurity Engineer',
  headline:
    'I build and secure software for connected vehicles, from CAN bus intrusion detection to multi-process C systems with automated testing.',
  location: 'Santa Cruz, CA',
  availability: 'Open to remote (U.S.) and Bay Area roles',
  workAuthorization: 'Authorized to work in the U.S.',
  email: 'thiagoricardocz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/thiagoricardop',
  github: 'https://github.com/thiagoricardop',
  resume: '/Thiago_Ricardo_Resume.pdf',
};

export const about = [
  'I am an embedded and automotive cybersecurity engineer currently completing an M.Sc. in Cybersecurity Engineering at Politecnico di Torino. My background is in Electrical Engineering with a Computer Science emphasis, followed by a postgraduate residency in Automotive Software Development where I studied ECU architecture, in-vehicle networks (CAN, LIN, FlexRay, Automotive Ethernet), AUTOSAR, ISO 26262 and real-time operating systems.',
  'I like turning that theory into working, tested code: a CAN sniffer with a rule-based intrusion-detection layer, a multi-process vehicle management unit written in C, and POSIX vehicle simulators running on a Raspberry Pi test rig. Before moving into security, I shipped a supercomputer data-visualization tool, accelerated a light-rail design stage by 50% and delivered 200+ photovoltaic plant projects.',
];

export const focusAreas = [
  'CAN bus security and intrusion detection',
  'Embedded C and POSIX systems',
  'Automotive software processes (AUTOSAR, ISO 26262, ASPICE)',
  'Test automation and CI for embedded code',
];

export const stats = [
  { value: '230k', label: 'SSH attack sessions analyzed with ML' },
  { value: '200+', label: 'Photovoltaic plant projects delivered' },
  { value: '50%', label: 'Faster design stage at SYSTRA' },
  { value: '95%+', label: 'User approval of my HPC data tool' },
];

export type ProjectPreview =
  | { type: 'can-terminal' }
  | { type: 'vmu-diagram' }
  | { type: 'image'; src: ImageMetadata; alt: string };

export interface Project {
  title: string;
  context: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repo: string;
  preview: ProjectPreview;
  previewLabel: string;
}

export const projects: Project[] = [
  {
    title: 'CAN Bus Sniffer, DBC Parser & Intrusion Detection',
    context: 'Solo project · 2026',
    summary:
      'Captures CAN traffic, decodes raw frames into physical signals with a DBC database, and flags attacks on the vehicle bus in real time. Runs on a virtual bus, so no hardware is required.',
    highlights: [
      'Rule-based IDS that detects spoofed arbitration IDs, out-of-range signal values (tampering) and frame flooding (denial of service).',
      'Traffic simulator with attack injection, CSV and JSON Lines logging, and a `can-sniffer` CLI.',
      'Unit tests with pytest and GitHub Actions CI with coverage on Python 3.10 to 3.12.',
    ],
    stack: ['Python', 'python-can', 'cantools', 'pytest', 'GitHub Actions'],
    repo: 'https://github.com/thiagoricardop/can-bus-sniffer-parser',
    preview: { type: 'can-terminal' },
    previewLabel: 'Real demo output',
  },
  {
    title: 'Vehicle Management Unit for Hybrid Vehicles',
    context: 'STELLANTIS Technical Residence (UFPE) · Team of 4 · 2025',
    summary:
      'Multi-process C simulation of a hybrid powertrain: a VMU coordinates electric and combustion engine modules through commands and shared data.',
    highlights: [
      'Graceful shutdown of every module on SIGINT and SIGTERM.',
      'Makefile build, per-module unit tests and LCOV coverage reports inside a Docker environment.',
      'Cppcheck static analysis and test/coverage workflows in GitHub Actions.',
    ],
    stack: ['C', 'POSIX', 'Docker', 'Make', 'LCOV', 'Cppcheck', 'GitHub Actions'],
    repo: 'https://github.com/thiagoricardop/VMU-for-Hybrid-Vehicles',
    preview: { type: 'vmu-diagram' },
    previewLabel: 'Architecture',
  },
  {
    title: 'SSH Honeypot Attack Classification',
    context: 'Politecnico di Torino · ML for Networking · Team project',
    summary:
      'Machine-learning analysis of about 230,000 Unix shell sessions captured by SSH honeypots, mapped to seven MITRE ATT&CK-based attacker intents.',
    highlights: [
      'Multi-label classification with Bag-of-Words and TF-IDF feature pipelines.',
      'Supervised classifiers compared with clustering to reveal attack families.',
      'Reproducible notebooks and a written report.',
    ],
    stack: ['Python', 'scikit-learn', 'pandas', 'NLP', 'MITRE ATT&CK'],
    repo: 'https://github.com/thiagoricardop/SSH-Shell-Attack-session-ML4N---Project-4',
    preview: {
      type: 'image',
      src: sshClusters,
      alt: 'K-Means clusters of SSH attack sessions shown in t-SNE and UMAP projections',
    },
    previewLabel: 'Result plot',
  },
  {
    title: 'POSIX Automotive Systems in C',
    context: 'UFPE Automotive Software residency · POSIX course',
    summary:
      'Two vehicle simulators: a multi-process system linked by POSIX IPC, and a Raspberry Pi 4 controller that drives a motor rig and reports to a live dashboard.',
    highlights: [
      'Shared memory guarded by named semaphores, message queues, pthreads and signal handling.',
      'Hall-sensor RPM and speed measurement, PWM motor and brake drive, lights and cruise control on GPIO.',
      'Validated on the test rig against a ThingsBoard vehicle dashboard.',
    ],
    stack: ['C', 'POSIX IPC', 'pthreads', 'Raspberry Pi', 'GPIO / PWM'],
    repo: 'https://github.com/thiagoricardop/posix-project',
    preview: {
      type: 'image',
      src: posixDashboard,
      alt: 'ThingsBoard dashboard of the test vehicle showing RPM, speed, lights and cruise control panels',
    },
    previewLabel: 'Test rig dashboard',
  },
  {
    title: 'P300 Speller Brain-Computer Interface',
    context: 'B.Sc. final project · UFMG Biomedical Engineering Lab',
    summary:
      'Visual stimulation software for a P300-based virtual keyboard that supports communication research for people with ALS and locked-in syndrome.',
    highlights: [
      '6x6 speller with three stimulation protocols: classic oddball, color highlight and familiar faces.',
      'Training and testing modes with configurable epochs and stimulus timing.',
      'Lab Streaming Layer markers synchronized with EEG acquisition.',
    ],
    stack: ['Python', 'Tkinter', 'Lab Streaming Layer', 'EEG'],
    repo: 'https://github.com/thiagoricardop/P300-Speller-Interface',
    preview: {
      type: 'image',
      src: p300Preview,
      alt: 'P300 Speller interface showing the character grid during a training session',
    },
    previewLabel: 'P300 interface',
  },
];

export interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  skills: string[];
}

export const experience: Job[] = [
  {
    role: 'Systems Engineer Intern',
    company: 'SYSTRA Brazil',
    location: 'Belo Horizonte, Brazil',
    period: 'Nov 2023 – Apr 2024',
    highlights: [
      'Accelerated the Design Stage of the Guadalajara light-rail project by 50%, completing it ahead of schedule.',
      'Structured and governed the project document database, improving traceability of engineering deliverables across stakeholders.',
      'Built BI dashboards in Python and Power BI that exposed design-phase bottlenecks for root-cause analysis.',
    ],
    skills: ['Python', 'Power BI', 'Requirements traceability', 'Power Automate'],
  },
  {
    role: 'Junior Software Developer',
    company: 'IT4Innovations National Supercomputing Center',
    location: 'Ostrava, Czechia',
    period: 'Apr 2023 – Jul 2023',
    highlights: [
      'Developed and maintained a Python GUI to visualize job and resource data on the Karolina and Barbora supercomputers.',
      'Redesigned the UX/UI from user feedback; the improvement was confirmed by 95%+ of the employees who used the tool.',
      'Worked in a Linux/HPC environment with Git-based collaboration.',
    ],
    skills: ['Python', 'Tkinter', 'Matplotlib', 'Linux', 'Git'],
  },
  {
    role: 'Photovoltaic Project Intern',
    company: 'Ciber Solar',
    location: 'Pará de Minas, Brazil',
    period: 'Oct 2021 – Mar 2023',
    highlights: [
      'Produced 3D layouts, electrical schematics and Bills of Materials for 200+ photovoltaic plant projects with a 95%+ approval rate.',
    ],
    skills: ['AutoCAD Electrical', 'SketchUp', 'Electrical design'],
  },
];

export interface SkillGroup {
  name: string;
  handsOn: string[];
  coursework: string[];
}

export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    handsOn: ['C', 'Python'],
    coursework: ['C++', 'SQL'],
  },
  {
    name: 'Embedded & OS',
    handsOn: ['POSIX processes & IPC', 'pthreads', 'Signals', 'Linux', 'Raspberry Pi GPIO & PWM'],
    coursework: ['RTOS scheduling', 'QNX', 'OSEK-VDX (Trampoline)', 'ECU architecture', 'Arduino'],
  },
  {
    name: 'Automotive',
    handsOn: ['CAN', 'DBC'],
    coursework: [
      'LIN',
      'FlexRay',
      'Automotive Ethernet',
      'AUTOSAR',
      'ISO 26262',
      'Automotive SPICE',
      'V-model',
    ],
  },
  {
    name: 'Security',
    handsOn: ['CAN intrusion detection', 'MITRE ATT&CK'],
    coursework: ['Penetration testing', 'Vehicular cybersecurity'],
  },
  {
    name: 'Testing & DevOps',
    handsOn: ['Git', 'GitHub Actions', 'Docker', 'Make', 'pytest', 'LCOV', 'Cppcheck'],
    coursework: ['TDD', 'BDD', 'Mutation testing', 'Requirements engineering'],
  },
  {
    name: 'Data & ML',
    handsOn: ['pandas', 'scikit-learn', 'TF-IDF / NLP', 'Matplotlib', 'Power BI'],
    coursework: [],
  },
];

export interface Degree {
  degree: string;
  school: string;
  location: string;
  period: string;
  details: string;
}

export const education: Degree[] = [
  {
    degree: 'M.Sc. Cybersecurity Engineering',
    school: 'Politecnico di Torino',
    location: 'Turin, Italy',
    period: 'Sep 2025 – Sep 2027 (expected)',
    details: 'Coursework: Machine Learning for Networking, Penetration Testing.',
  },
  {
    degree: 'Postgraduate Residency, Automotive Software Development',
    school: 'Universidade Federal de Pernambuco (UFPE)',
    location: 'Remote, Brazil',
    period: 'Oct 2024 – Aug 2025',
    details:
      'Embedded systems, automotive networks (CAN, LIN, FlexRay, Ethernet), RTOS and OSEK-VDX, POSIX and QNX, AUTOSAR, Automotive SPICE, ISO 26262, software testing and test automation, requirements engineering.',
  },
  {
    degree: 'B.Sc. Electrical Engineering, Computer Science emphasis',
    school: 'Universidade Federal de Minas Gerais (UFMG)',
    location: 'Belo Horizonte, Brazil',
    period: 'Feb 2019 – Sep 2024',
    details: 'Final project: P300 Speller interface for ALS communication research.',
  },
  {
    degree: 'Exchange Program, Computer Science',
    school: 'VŠB – Technical University of Ostrava',
    location: 'Ostrava, Czechia',
    period: 'Jan 2023 – Aug 2023',
    details: 'Cybersecurity, computer networks and software development.',
  },
];

export const certifications = [
  { name: 'IELTS Academic, band 7.0', issuer: 'English proficiency', year: '2025' },
  { name: 'Python Essential Training', issuer: 'LinkedIn Learning', year: '2022' },
  { name: 'SQL Essential Training', issuer: 'LinkedIn Learning', year: '2019' },
];

export const languages = [
  { name: 'English', level: 'Full professional' },
  { name: 'Portuguese', level: 'Native' },
  { name: 'Italian', level: 'Intermediate' },
  { name: 'Spanish', level: 'Intermediate' },
];

export const leadership = {
  role: 'Summer Camp Coordinator, Sports',
  org: 'YMCA of Metropolitan Los Angeles · Camp Whittle, CA',
  period: 'May 2026 – Sep 2026',
  summary:
    'Led the sports activities team and expanded the program with mountain biking and hiking. Previously Camp Counselor in 2024 and 2025.',
};
