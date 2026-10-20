import {
  ContactInfo,
  SkillGroup,
  FeaturedPublication,
  HighlightItem,
  ExperienceItem,
  EducationItem,
  ResearchItem,
  ResearchMilestone,
} from '../types';

export const headline =
  'Doctoral Applicant | Technology Adoption & Implementation Science | MiM (Distinction), Liverpool | MTech Industrial Intelligent Systems | IEEE-Published';

export const contactInfo: ContactInfo = {
  location: 'Liverpool, UK',
  email: 'charithareddybv@gmail.com',
  linkedInUrl: 'https://www.linkedin.com/in/charitha-reddy-114456163/',
};

export const bioParagraphs = [
  'I am a researcher applying for doctoral study in Europe, working on how complex digital, AI-driven and industrial technologies are adopted, or fail to be adopted, in high-stakes and regulated environments.',
  'My path runs from engineering to management. I hold an MTech in Industrial Intelligent Systems (First Class with Distinction) and a Master in Management (MiM, Distinction, GPA equivalent 4.0/4.0) from the University of Liverpool, where I was named Student of the Year 2025/26. I have worked on both sides of the problem: building machine-learning systems, and studying why technically sound systems stall at the pilot stage.',
];

export const doctoralCallout =
  'I am looking for a funded PhD position in Europe starting in 2027, in technology adoption, innovation management, implementation science or health-technology evaluation. I welcome contact from supervisors and research groups.';

export const researchInterests: string[] = [
  'Organisational and behavioural adoption of AI-driven and industrial technologies',
  'Implementation science in healthcare, energy and logistics',
  'Socio-technical evaluation frameworks (TAM, UTAUT, CFIR, Diffusion of Innovations)',
  'Bridging engineering systems design with management and innovation theory',
];

export const researchToDate: ResearchMilestone[] = [
  {
    title: "Master's Thesis (MiM)",
    description:
      'A PRISMA 2020 systematic review of 37 empirical studies (186 records screened across 5 databases) on drone-based medical transport, appraised with MMAT 2018 and synthesised through TAM, UTAUT and Diffusion of Innovations. It introduces the “Validity Gradient” and “Sociotechnical Divergence” concepts to explain why adoption stalls despite favourable feasibility evidence.',
    link: {
      label: "View Master's Thesis",
      url: 'https://drive.google.com/file/d/16tqmgfeqgHfBCvGCIFynDcH5d9a4e0YO/view?usp=sharing',
    },
  },
  {
    title: 'Peer-reviewed Publication (IEEE ICESC 2022)',
    description:
      'Machine-learning fault detection in induction motors using thermal imaging, with 97.2% accuracy under hot conditions and 90% under cold.',
    link: {
      label: 'IEEE DOI: 10.1109/ICESC54411.2022.9885282',
      url: 'https://doi.org/10.1109/ICESC54411.2022.9885282',
    },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Research & Implementation Science',
    skills: [
      'Systematic Literature Review (PRISMA 2020)',
      'Critical Appraisal (MMAT 2018)',
      'Thematic Synthesis',
      'Socio-Technical Evaluation (TAM/UTAUT)',
      'CFIR Framework',
      'Diffusion of Innovations',
      'Mixed-Methods Data Extraction',
      'Qualitative & Quantitative Synthesis',
      'Statistical Hypothesis Testing',
      'Academic Writing & Peer Review',
    ],
  },
  {
    title: 'Product & Strategy',
    skills: [
      'Agile/Scrum Leadership',
      'Roadmap Strategy',
      'Backlog Prioritization',
      'EVM/PERT/GANTT',
      'Stakeholder Management',
      'Cross-Functional Leadership',
      'AI/ML Product Development',
      'User Research & Segmentation',
      'Market & Competitive Analysis',
      'Risk Assessment & Mitigation',
      'KPI Definition & Tracking',
    ],
  },
  {
    title: 'Technical & Analytical',
    skills: [
      'Python Engineering',
      'Scikit-learn Modeling',
      'SQL Architecture',
      'Data Analytics',
      'Qlik Cloud',
      'Requirements Engineering',
      'Technical Documentation',
    ],
  },
  {
    title: 'Embedded & Cloud Infrastructure',
    skills: [
      'Microsoft Azure IoT Hub',
      'Google Cloud Platform (GCP)',
      'Embedded Linux Package Managers',
      'IoT Systems Integration',
      'Embedded Systems Engineering',
    ],
  },
];

export const featuredPublications: FeaturedPublication[] = [
  {
    icon: '🎓',
    title: "MiM Master's Thesis (UoL):",
    links: [
      {
        label: 'View Thesis on Drone-based Medical Transport',
        url: 'https://drive.google.com/file/d/16tqmgfeqgHfBCvGCIFynDcH5d9a4e0YO/view?usp=sharing',
      },
    ],
  },
  {
    icon: '💼',
    title: 'Business Strategy (UoL):',
    links: [
      {
        label: 'Simulation',
        url: 'https://drive.google.com/file/d/1VUiME-0DOY8nlQmQccGQa4IQpcCDM4jH/view?usp=sharing',
      },
      {
        label: 'Reflective Poster',
        url: 'https://drive.google.com/file/d/1KvNx1DDTGCauZAztUpW7JObvPeME2xEb/view?usp=sharing',
      },
    ],
  },
  {
    icon: '📱',
    title: 'Digital Marketing (UoL):',
    links: [
      {
        label: 'The Bears of Blueberry Forest Campaign',
        url: 'https://drive.google.com/file/d/13p_c2FCjYzzNXGNFiF7yFVvd4-RRtjrq/view?usp=sharing',
      },
    ],
  },
  {
    icon: '📄',
    title: 'IEEE Publication:',
    links: [
      {
        label: 'Machine Learning Based Fault Detection in Induction Motor using Thermal Imaging',
        url: 'https://doi.org/10.1109/ICESC54411.2022.9885282',
      },
    ],
  },
];

export const highlightItems: HighlightItem[] = [
  {
    prefix: 'Academic Recognition:',
    content: "Awarded 'Student of the Year' (2025-2026) at the University of Liverpool for outstanding academic performance and strategic management acuity.",
  },
  {
    prefix: 'Dual Distinction:',
    content: 'Graduated with Distinction in both Master in Management (GPA Eq: 4.0/4.0) and M.Tech Industrial Intelligent Systems (CGPA 8.3/10.0).',
  },
  {
    prefix: 'Published Researcher:',
    content: 'Authored peer-reviewed IEEE conference paper on ML-based fault detection using thermal imaging.',
  },
  {
    prefix: 'Socio-Technical System Fluency:',
    content: 'Trained to bridge engineering designs with high-level strategy using TAM and UTAUT frameworks.',
  },
  {
    prefix: 'Business Simulation Leadership:',
    content: 'Achieved a Top 6 ranking in a high-volatility market simulation at UoL, managing end-to-end car business operations from technical R&D to financial equity.',
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Claims Handler (Recoveries)',
    companyOrOrg: 'Liverpool, UK',
    location: 'Liverpool, UK',
    period: 'April 2026 - Present',
    category: 'operations',
    description:
      'Managing high-volume recovery claims through critical problem-solving and strategic decision-making. Facilitating end-to-end communication between insured parties, third-party insurers, and stakeholders using advanced virtual claim management tools. Demonstrated high adaptability and software proficiency in a fast-paced environment while ensuring operational accuracy and risk mitigation.',
  },
  {
    id: 'exp-2',
    title: 'Technical Product Manager',
    companyOrOrg: 'Vosyn | Ontario, Canada (Remote)',
    location: 'Ontario, Canada (Remote)',
    period: 'July 2025 - April 2026',
    category: 'product',
    description:
      'Full roadmap strategy ownership, backlog prioritization, user story definition, and cross-functional pod management for a fast-growing B2C product line. Directed product pipeline integration to accelerate release cadences and drove software experimentation to validate feature directions.',
  },
  {
    id: 'exp-3',
    title: 'Digital Marketing Strategist',
    companyOrOrg: 'EQ for All Foundation | UK',
    location: 'UK',
    period: 'March 2025',
    category: 'product',
    description:
      '• Developed an integrated marketing strategy for "The Bears of Blueberry Forest" campaign to promote pediatric mental health, defining SMART goals and mapping a roadmap for global scalability. (View Project Report)\n• Conducted user segmentation and funnel analysis to map drop-off trends, delivering a comprehensive strategic report that optimized content reach by an estimated 25% and boosted engagement.',
    links: [
      {
        label: 'View Project Report',
        url: 'https://drive.google.com/file/d/13p_c2FCjYzzNXGNFiF7yFVvd4-RRtjrq/view?usp=sharing',
      },
    ],
  },
  {
    id: 'exp-4',
    title: 'Strategic Lead (Business Simulation)',
    companyOrOrg: 'Hybronn Motors, UoL | MiM Academic Project',
    location: 'University of Liverpool',
    period: 'August 2025 - October 2025',
    category: 'product',
    description:
      'Led a virtual automotive enterprise in a competitive market simulation, overseeing technical customization, cost optimization, and R&D. Developed a strategic grant proposal for manufacturing retrofit kits and managed financial equity to achieve a Top 6 overall ranking.',
    links: [
      {
        label: 'View Presentation',
        url: 'https://drive.google.com/file/d/1VUiME-0DOY8nlQmQccGQa4IQpcCDM4jH/view?usp=sharing',
      },
      {
        label: 'View Reflective Poster',
        url: 'https://drive.google.com/file/d/1KvNx1DDTGCauZAztUpW7JObvPeME2xEb/view?usp=sharing',
      },
    ],
  },
  {
    id: 'exp-5',
    title: 'Embedded Systems Engineer',
    companyOrOrg: 'Detect Technologies | Chennai, India',
    location: 'Chennai, India',
    period: 'September 2022 - December 2024',
    category: 'embedded',
    description:
      'Designed and implemented automated fault detection architectures for the heavy industrial Oil & Gas sector, improving deployment efficiency by 20%. Led cross-functional teams in Python automation workflows and system-level debugging across edge cameras and hardware platforms.',
  },
  {
    id: 'exp-6',
    title: 'Electronics Engineer Intern',
    companyOrOrg: 'Detect Technologies | Chennai, India',
    location: 'Chennai, India',
    period: 'October 2021 - July 2022',
    category: 'embedded',
    description:
      'Developed a Python-based IoT monitoring application with direct Microsoft Azure Cloud integration, providing critical diagnostic insights and technical bottleneck resolution.',
  },
];

export const educationItems: EducationItem[] = [
  {
    degree: 'Master in Management (MiM)',
    institution: 'University of Liverpool, UK',
    period: 'Jan 2025 - Jan 2026',
    details:
      'Graduated with Distinction (GPA Eq: 4.0/4.0). Major in Strategic Organization, Project Management, and Business Analytics.',
  },
  {
    degree: 'M.Tech in Industrial Intelligent Systems',
    institution: 'Amrita Vishwa Vidyapeetham, India',
    period: 'Sept 2020 - July 2022',
    details:
      'First Class with Distinction (CGPA: 8.3/10.0). Focus on predictive framework designs and smart system diagnostics.',
  },
  {
    degree: 'B.E. in Electronics & Communication Engineering',
    institution: 'Muthayammal Engineering College, India',
    period: 'Oct 2015 - April 2019',
    details: 'First Class (CGPA: 7.56/10.0).',
  },
];

export const researchItems: ResearchItem[] = [
  {
    title: "Master's Thesis (UoL):",
    content:
      '"What managerial, clinical, and operational factors influence the adoption and effectiveness of drone-based medical transport for time-critical healthcare items?" (Systematic literature review using TAM/UTAUT lenses).',
    url: 'https://drive.google.com/file/d/16tqmgfeqgHfBCvGCIFynDcH5d9a4e0YO/view?usp=sharing',
    urlLabel:
      '"What managerial, clinical, and operational factors influence the adoption and effectiveness of drone-based medical transport for time-critical healthcare items?"',
  },
  {
    title: 'Digital Marketing Strategy:',
    content:
      ', a proactive initiative enhancing pediatric mental health and emotional intelligence through educational storytelling.',
    url: 'https://drive.google.com/file/d/13p_c2FCjYzzNXGNFiF7yFVvd4-RRtjrq/view?usp=sharing',
    urlLabel: '"The Bears of Blueberry Forest"',
  },
  {
    title: 'IEEE Publication:',
    content:
      '"Machine Learning Based Fault Detection in Induction Motor using Thermal Imaging." IEEE ICESC 2022.',
    doi: '10.1109/ICESC54411.2022.9885282',
    doiUrl: 'https://doi.org/10.1109/ICESC54411.2022.9885282',
  },
  {
    title: 'Methods & Frameworks:',
    content:
      'Engineered automated condition monitoring pipelines, image segmentation engines, and supervised model deployments achieving up to 97.2% accuracy.',
  },
];
