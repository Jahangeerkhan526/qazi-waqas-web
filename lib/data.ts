export const profile = {
  name: "Qazi Waqas Khan",
  title: "Postdoctoral Researcher",
  position: "Postdoctoral Researcher",
  institution: "Jeju National University",
  department: "Department of Computer Engineering",
  location: "Jeju, South Korea",
  email: "qaziwaqas@stu.jejunu.ac.kr",
  // Drop a portrait in /public (e.g. /qazi.jpg) and set the path here
  photo: "",
  // Drop a CV PDF in /public (e.g. /cv.pdf) and set the path here
  cv: "",
  mission: `I build AI that learns from data it never sees, so hospitals, homes and IoT networks can share intelligence without sharing their secrets.`,
  bio: `I'm a postdoctoral researcher at Jeju National University, where I also completed my PhD in Computer Engineering. My work centres on decentralised federated learning: training one model across many devices while the raw data stays where it was created. I focus on the hard practical parts, such as slow or unreliable devices, uneven data, network topology and lightweight on-device models.`,
  bio2: `I apply these methods to real problems: cutting energy costs in smart buildings, detecting cyber attacks on IoT networks, and predicting patient outcomes in healthcare without centralising medical records. I'm always open to collaborations with research groups and industry partners working on private, efficient AI.`,
  // Source: Google Scholar profile, checked October 2026
  stats: {
    publications: "39",
    citations: "697",
    hIndex: "13",
    i10Index: "19",
    reads: "4,200+",
  },
  // Google Scholar citations per year (2026 is a partial year)
  citationsByYear: [
    { year: "2022", n: 7 },
    { year: "2023", n: 39 },
    { year: "2024", n: 116 },
    { year: "2025", n: 275 },
    { year: "2026", n: 249 },
  ],
  glance: [
    { label: "Current role",       value: "Postdoctoral Researcher, Jeju National University" },
    { label: "PhD",                value: "Computer Engineering, Jeju National University (2024)" },
    { label: "Collaborating with", value: "Wireless Intelligent Networks Lab, Kyung Hee University" },
    { label: "Research funding",   value: "IITP and NRF Korea (Brain Pool Program)" },
    { label: "Most cited paper",   value: "ML-based DDoS attack detection, 272 citations" },
  ],
  interests: [
    "Decentralised Federated Learning",
    "Applied Machine Learning",
    "Deep Learning",
    "Multi-Modal Fusion",
    "On-Device AI",
    "Edge Computing",
    "Internet of Things",
    "Intrusion Detection Systems",
  ],
  links: {
    scholar: "https://scholar.google.com/citations?user=nU5lyoIAAAAJ&hl=en",
    linkedin: "https://pk.linkedin.com/in/qazi-waqas-khan-74339b190",
    researchgate: "https://www.researchgate.net/profile/Qazi-Waqas-Khan",
    dblp: "https://dblp.org/pid/324/0807.html",
  },
};

// Paper counts come from Google Scholar publication years (checked October 2026)
export const experience = [
  {
    role: "Postdoctoral Researcher",
    org: "Jeju National University",
    short: "JNU",
    dept: "Department of Computer Engineering · Bigdata Research Center",
    location: "Jeju, South Korea",
    period: "2024 to now",
    current: true,
    highlights: [
      "Researches decentralised federated learning for on-device AI, digital twins and healthcare",
      "Recent work in Neurocomputing, Neural Networks, Applied Soft Computing and Information Processing & Management",
      "Research supported by IITP and NRF Korea grants",
    ],
    tags: ["Federated learning", "On-device AI", "Digital twins", "Healthcare AI"],
    papers: { count: 22, label: "papers published 2025 to 2026" },
  },
  {
    role: "Research Collaborator",
    org: "Kyung Hee University",
    short: "KHU",
    dept: "Wireless Intelligent Networks Lab",
    location: "South Korea",
    period: "2024 to now",
    current: true,
    highlights: [
      "Split federated learning in multi-cell environments",
      "Straggler mitigation and UAV-enabled decentralised federated learning",
      "Co-authored work in IET Collaborative Intelligent Manufacturing (2024)",
    ],
    tags: ["Split learning", "Stragglers", "UAV networks"],
  },
  {
    role: "PhD Researcher",
    org: "Jeju National University",
    short: "JNU",
    dept: "Department of Computer Engineering · supervised by Prof. Do Hyeun Kim",
    location: "Jeju, South Korea",
    period: "2020 to 2024",
    current: false,
    highlights: [
      "Thesis on decentralised federated learning systems",
      "First-author survey on decentralised ML training in IEEE Access (45 citations)",
      "Co-authored his most cited paper, on ML-based DDoS detection (272 citations)",
    ],
    tags: ["Decentralised FL", "Smart buildings", "Cybersecurity"],
    papers: { count: 17, label: "papers published 2022 to 2024" },
  },
  {
    role: "Graduate Researcher (MSCS)",
    org: "COMSATS University Islamabad",
    short: "CUI",
    dept: "Attock Campus · Department of Computer Science",
    location: "Attock, Pakistan",
    period: "2018 to 2020",
    current: false,
    highlights: [
      "Graduate research in machine learning and intelligent systems",
      "Awarded the Campus Gold Medal for MSCS (2020)",
    ],
    tags: ["Machine learning", "Applied AI"],
  },
];

// ── Projects ─────────────────────────────────────────────────
// Venues, years and citation counts from Google Scholar (checked October 2026)
const scholarByDate = "https://scholar.google.com/citations?user=nU5lyoIAAAAJ&hl=en&view_op=list_works&sortby=pubdate";
const scholarProfile = "https://scholar.google.com/citations?user=nU5lyoIAAAAJ&hl=en";

export const latestWork = [
  {
    name: "DAQSyn",
    title: "A decentralized adaptive quantization-aware synchronous framework in heterogeneous on-device AI networks",
    desc: "Shrinks model updates so federated learning runs smoothly on mixed, low-power devices.",
    venue: "Neural Networks",
    year: "2026",
    url: scholarByDate,
  },
  {
    name: "CARE-FL",
    title: "Fair collaborative learning for rare disease detection in decentralized healthcare",
    desc: "Lets hospitals jointly detect rare diseases without sharing patient records.",
    venue: "Neurocomputing",
    year: "2026",
    url: scholarByDate,
  },
  {
    name: "FedRGT",
    title: "Reward-guided graph neural network for decentralized federated learning topology optimization",
    desc: "Uses a graph neural network to decide which devices should learn from each other.",
    venue: "J. Parallel and Distributed Computing",
    year: "2026",
    url: scholarByDate,
  },
  {
    name: "LHFL",
    title: "Logical hierarchical federated learning mechanism in distributed physical AI networks",
    desc: "Organises devices into logical tiers so federated learning scales across physical AI networks.",
    venue: "Internet of Things",
    year: "2026",
    url: scholarByDate,
  },
];

export const fundedProjects = [
  {
    title: "Cooperative Intelligence Framework for Autonomous IoT",
    funder: "IITP · Korean Government",
    desc: "Government-funded research into cooperative, decentralised learning across autonomous IoT devices, supporting his federated learning work at Jeju National University.",
  },
  {
    title: "Brain Pool Program",
    funder: "NRF Korea · Ministry of Science and ICT",
    desc: "Competitive National Research Foundation of Korea programme that supports international researchers working at Korean institutions.",
  },
];

export const flagshipProjects = [
  {
    title: "ML-based DDoS attack detection",
    metric: "272",
    metricLabel: "citations",
    desc: "Selects the most informative network-traffic features with mutual information and random forest importance, then classifies DDoS attacks. His most cited work.",
    venue: "Symmetry, 2022",
    tags: ["Cybersecurity", "Feature selection"],
    url: scholarProfile,
  },
  {
    title: "Smart home energy and comfort optimisation",
    metric: "83",
    metricLabel: "citations across 2 papers",
    desc: "Predictive optimisation that balances energy use against indoor comfort, extended to a decentralised federated version that works across different homes without sharing their data.",
    venue: "Energy Reports and Applied Soft Computing, 2024",
    tags: ["Energy AI", "Decentralised FL"],
    url: scholarProfile,
  },
  {
    title: "Decentralised ML training survey",
    metric: "45",
    metricLabel: "citations",
    desc: "First-author survey of synchronisation strategies, model consolidation techniques and network topologies for decentralised machine learning.",
    venue: "IEEE Access, 2023",
    tags: ["Survey", "Network topology"],
    url: scholarProfile,
  },
];

export const projects = [
  {
    title: "Digital twin platform for federated learning",
    area: "fl",
    period: "2022 to 2024",
    venue: "",
    desc: "Digital twin framework for real-time monitoring, control and validation of centralised and decentralised federated learning clients at scale.",
    tags: ["Digital twin", "FL", "IoT"],
  },
  {
    title: "Straggler mitigation in ring-topology DFL",
    area: "fl",
    period: "2023 to 2024",
    venue: "IET Collaborative Intelligent Manufacturing, 2024",
    desc: "Adaptive mechanism that keeps synchronous ring-topology training moving when nodes are slow or fail, within digital twin networks.",
    tags: ["DFL", "Fault tolerance"],
  },
  {
    title: "Decentralised FL for residential energy forecasting",
    area: "energy",
    period: "2023 to 2024",
    venue: "",
    desc: "LSTM models trained over a ring topology for privacy-preserving household energy prediction.",
    tags: ["DFL", "Energy AI"],
  },
  {
    title: "Intelligent diabetes classification framework",
    area: "fusion",
    period: "2023 to 2024",
    venue: "PeerJ Computer Science, 2024",
    desc: "Ensemble and deep learning (ANN, RF, TabNet, SVM) with mutual information feature selection for early diabetes prediction.",
    tags: ["Healthcare AI", "Ensemble learning"],
  },
  {
    title: "PSO-driven abnormality detection for AIoT security",
    area: "security",
    period: "2023 to 2024",
    venue: "IEEE Access, 2024",
    desc: "Particle swarm optimisation tunes ensemble weights to detect anomalies in energy AIoT devices with low overhead.",
    tags: ["AIoT", "Security"],
  },
  {
    title: "Intrusion detection with feature selection and resampling",
    area: "security",
    period: "2022 to 2024",
    venue: "Mathematics, 2024",
    desc: "Enhanced feature selection and resampling to handle class imbalance in network intrusion detection.",
    tags: ["Cybersecurity", "IDS"],
  },
  {
    title: "Multi-modal fusion for tourism AI",
    area: "fusion",
    period: "2023 to 2024",
    venue: "Computers and Electrical Engineering, 2024",
    desc: "Survey of datasets, fusion techniques and architectures for combining text, image and sensor data in tourism AI.",
    tags: ["Multi-modal", "Survey"],
  },
  {
    title: "Water table depth predictive modelling",
    area: "other",
    period: "2022 to 2023",
    venue: "IEEE Access, 2023",
    desc: "Adaptive ensemble learning to predict water table depth, drilling time and soil layers for cost-effective borehole drilling in Jeju.",
    tags: ["Environmental AI", "Ensemble learning"],
  },
  {
    title: "EV charging event classification",
    area: "energy",
    period: "2023 to 2024",
    venue: "",
    desc: "Classified electric vehicle charging events from smart meter data using TabNet, XGBoost and Random Forest.",
    tags: ["Smart grid", "EV"],
  },
];

export const education = [
  {
    degree: "PhD",
    field: "Computer Engineering",
    school: "Jeju National University",
    location: "South Korea",
    period: "2020 to 2024",
    note: "Thesis: Decentralised Federated Learning Systems",
    highlight: true,
  },
  {
    degree: "MSCS",
    field: "Computer Science",
    school: "COMSATS University Islamabad",
    location: "Pakistan",
    period: "2018 to 2020",
    note: "",
    highlight: false,
  },
  {
    degree: "BS / MCS",
    field: "Computer Science",
    school: "COMSATS University Islamabad",
    location: "Pakistan",
    period: "2016 to 2018",
    note: "",
    highlight: false,
  },
];

export const awards = [
  { title: "Campus Gold Medal",      detail: "MSCS, Computer Science", org: "COMSATS University Islamabad", year: "2020", kind: "gold" },
  { title: "Campus Gold Medal",      detail: "MCS, Computer Science",  org: "COMSATS University Islamabad", year: "2018", kind: "gold" },
  { title: "Institute Silver Medal", detail: "MCS, Computer Science",  org: "COMSATS University Islamabad", year: "2018", kind: "silver" },
  { title: "NRF Brain Pool Program", detail: "Research programme for international researchers", org: "National Research Foundation of Korea", year: "", kind: "grant" },
  { title: "IITP Research Grant",    detail: "Cooperative Intelligence Framework for Autonomous IoT", org: "IITP, Korean Government", year: "", kind: "grant" },
]

// All 39 papers from Google Scholar (titles, venues, years, citations; checked October 2026).
// Author lists and DOI links from OpenAlex.
export const publications = [
  {
    "id": 1,
    "year": 2022,
    "title": "Machine-learning-based DDoS attack detection using mutual information and random forest feature importance method",
    "venue": "Symmetry",
    "type": "Journal",
    "area": "security",
    "cites": 272,
    "authors": [
      "Mona A. Alduailij",
      "Qazi Waqas Khan",
      "Muhammad Tahir",
      "Muhammad Sardaraz",
      "Mai A. Alduailij",
      "Fazila Malik"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.3390/sym14061095"
  },
  {
    "id": 2,
    "year": 2023,
    "title": "Decentralized machine learning training: a survey on synchronization, consolidation, and topologies",
    "venue": "IEEE Access",
    "type": "Survey",
    "area": "fl",
    "cites": 45,
    "authors": [
      "Qazi Waqas Khan",
      "Anam Nawaz Khan",
      "Atif Rizwan",
      "Rashid Ahmad",
      "Salabat Khan",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": true,
    "url": "https://doi.org/10.1109/access.2023.3284976"
  },
  {
    "id": 3,
    "year": 2024,
    "title": "Optimizing energy efficiency and comfort in smart homes through predictive optimization: A case study with indoor environmental parameter consideration",
    "venue": "Energy Reports",
    "type": "Journal",
    "area": "energy",
    "cites": 44,
    "authors": [
      "Qazi Waqas Khan",
      "Rashid Ahmad",
      "Atif Rizwan",
      "Anam Nawaz Khan",
      "Kyutae Lee",
      "Do Hyeun Kim"
    ],
    "firstAuthor": true,
    "url": "https://doi.org/10.1016/j.egyr.2024.05.038"
  },
  {
    "id": 4,
    "year": 2023,
    "title": "AI-Driven Counter-Terrorism: Enhancing Global Security Through Advanced Predictive Analytics",
    "venue": "IEEE Access",
    "type": "Journal",
    "area": "security",
    "cites": 44,
    "authors": [
      "Fahad Ali Khan",
      "Gang Li",
      "Anam Nawaz Khan",
      "Qazi Waqas Khan",
      "Myriam Hadjouni",
      "Hela Elmannai"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1109/access.2023.3336811"
  },
  {
    "id": 5,
    "year": 2024,
    "title": "A decentralized federated learning based interoperable and heterogeneity aware predictive optimization method for energy and comfort in smart homes environment",
    "venue": "Applied Soft Computing",
    "type": "Journal",
    "area": "fl",
    "cites": 39,
    "authors": [
      "Rongxu Xu",
      "Salabat Khan",
      "Wenquan Jin",
      "Anam Nawaz Khan",
      "Qazi Waqas Khan",
      "Sunhwan Lim",
      "Do Hyuen Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.asoc.2024.111689"
  },
  {
    "id": 6,
    "year": 2023,
    "title": "A precision-centric approach to overcoming data imbalance and non-IIDness in federated learning",
    "venue": "Internet of Things",
    "type": "Journal",
    "area": "fl",
    "cites": 30,
    "authors": [
      "Anam Nawaz Khan",
      "Atif Rizwan",
      "Rashid Ahmad",
      "Qazi Waqas Khan",
      "Sunhwan Lim",
      "Do Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.iot.2023.100890"
  },
  {
    "id": 7,
    "year": 2024,
    "title": "Multi-modal fusion approaches for tourism: A comprehensive survey of data-sets, fusion techniques, recent architectures, and future directions",
    "venue": "Computers and Electrical Engineering",
    "type": "Survey",
    "area": "fusion",
    "cites": 26,
    "authors": [
      "Qazi Waqas Khan",
      "Rashid Ahmad",
      "Atif Rizwan",
      "Anam Nawaz Khan",
      "Chan‐Won Park",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": true,
    "url": "https://doi.org/10.1016/j.compeleceng.2024.109220"
  },
  {
    "id": 8,
    "year": 2024,
    "title": "An intelligent diabetes classification and perception framework based on ensemble and deep learning method",
    "venue": "PeerJ Computer Science",
    "type": "Journal",
    "area": "fusion",
    "cites": 23,
    "authors": [
      "Qazi Waqas Khan",
      "Khalid Iqbal",
      "Rashid Ahmad",
      "Atif Rizwan",
      "Anam Nawaz Khan",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": true,
    "url": "https://doi.org/10.7717/peerj-cs.1914"
  },
  {
    "id": 9,
    "year": 2024,
    "title": "A machine learning-based framework with enhanced feature selection and resampling for improved intrusion detection",
    "venue": "Mathematics",
    "type": "Journal",
    "area": "security",
    "cites": 18,
    "authors": [
      "Fazila Malik",
      "Qazi Waqas Khan",
      "Atif Rizwan",
      "Rana Othman Alnashwan",
      "Ghada Emam Atteia"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.3390/math12121799"
  },
  {
    "id": 10,
    "year": 2025,
    "title": "A Hybrid K-Means++ and Particle Swarm Optimization Approach for Enhanced Document Clustering",
    "venue": "IEEE Access",
    "type": "Journal",
    "area": "other",
    "cites": 16,
    "authors": [
      "Eisha Hassan",
      "Fazila Malik",
      "Qazi Waqas Khan",
      "Nadeem Ahmad",
      "Muhammad Sardaraz",
      "Faten Khalid Karim",
      "Hela Elmannai"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1109/access.2025.3535226"
  },
  {
    "id": 11,
    "year": 2026,
    "title": "Explainable Multi-Modal Fusion-Based Federated Learning for Mortality Prediction in Energy-Constrained Healthcare Systems",
    "venue": "IEEE Access",
    "type": "Journal",
    "area": "fusion",
    "cites": 14,
    "authors": [
      "Misbah Bibi",
      "Rashid Ahmad",
      "Atif Rizwan",
      "Anam Nawaz Khan",
      "Qazi Waqas Khan",
      "Do-Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1109/access.2025.3650610"
  },
  {
    "id": 12,
    "year": 2025,
    "title": "Dynamic energy cost prediction for industrial and commercial buildings using advanced machine learning and multi-pricing models",
    "venue": "Journal of Building Engineering",
    "type": "Journal",
    "area": "energy",
    "cites": 13,
    "authors": [
      "Qazi Waqas Khan",
      "Anam Nawaz Khan",
      "Bibi Misbah",
      "Rashid Ahmad",
      "Do Hyeun Kim"
    ],
    "firstAuthor": true,
    "url": "https://doi.org/10.1016/j.jobe.2025.112055"
  },
  {
    "id": 13,
    "year": 2023,
    "title": "Predictive modeling of water table depth, drilling duration, and soil layer classification using adaptive ensemble learning for cost-effective percussion water borehole drilling",
    "venue": "IEEE Access",
    "type": "Journal",
    "area": "other",
    "cites": 13,
    "authors": [
      "Qazi Waqas Khan",
      "Bong Wan Kim",
      "Rashid Ahmed",
      "Atif Rizwan",
      "Anam Nawaz Khan",
      "Kwangsoo Kim",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": true,
    "url": "https://doi.org/10.1109/access.2023.3298225"
  },
  {
    "id": 14,
    "year": 2025,
    "title": "Consensus-Driven Hyperparameter Optimization for Accelerated Model Convergence in Decentralized Federated Learning",
    "venue": "Internet of Things",
    "type": "Journal",
    "area": "fl",
    "cites": 12,
    "authors": [
      "Anam Nawaz Khan",
      "Qazi Waqas Khan",
      "Atif Rizwan",
      "Rashid Ahmad",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.iot.2024.101476"
  },
  {
    "id": 15,
    "year": 2023,
    "title": "Hetero-FedIoT: A rule-based interworking architecture for heterogeneous federated IoT networks",
    "venue": "IEEE Internet of Things Journal",
    "type": "Journal",
    "area": "fl",
    "cites": 12,
    "authors": [
      "Anam Nawaz Khan",
      "Atif Rizwan",
      "Rashid Ahmad",
      "Wenquan Jin",
      "Qazi Waqas Khan",
      "Sunhwan Lim",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1109/jiot.2023.3308579"
  },
  {
    "id": 16,
    "year": 2025,
    "title": "An auto-annotation approach for object detection and depth-based distance estimation in security and surveillance systems",
    "venue": "IEEE Access",
    "type": "Journal",
    "area": "security",
    "cites": 10,
    "authors": [
      "Misbah Bibi",
      "Muhammad Faseeh",
      "Anam Nawaz Khan",
      "Atif Rizwan",
      "Qazi Waqas Khan",
      "Rashid Ahmad",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1109/access.2025.3539310"
  },
  {
    "id": 17,
    "year": 2025,
    "title": "Personalized hierarchical heterogeneous federated learning for thermal comfort prediction in smart buildings",
    "venue": "Engineering Applications of Artificial Intelligence",
    "type": "Journal",
    "area": "fl",
    "cites": 10,
    "authors": [
      "Atif Rizwan",
      "Anam Nawaz Khan",
      "Rashid Ahmad",
      "Qazi Waqas Khan",
      "Do Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.engappai.2024.109464"
  },
  {
    "id": 18,
    "year": 2024,
    "title": "Federated learning for sarcasm detection: A study of attention-enhanced BiLSTM, GRU, and LSTM architectures",
    "venue": "IEEE Access",
    "type": "Journal",
    "area": "fl",
    "cites": 10,
    "authors": [
      "Abdul Sami",
      "Fazila Malik",
      "Qazi Waqas Khan",
      "Nadeem Ahmad",
      "Sajid Shah",
      "Mohammed A. ELAffendi",
      "Naveed Ahmad"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1109/access.2024.3520659"
  },
  {
    "id": 19,
    "year": 2024,
    "title": "Dynamic temporal analysis and modeling of residential lighting consumption for energy efficiency and sustainability",
    "venue": "IEEE Access",
    "type": "Journal",
    "area": "energy",
    "cites": 10,
    "authors": [
      "Anam Nawaz Khan",
      "Qazi Waqas Khan",
      "Junhee Lee",
      "Rashid Ahmad",
      "Bibi Misbah",
      "Dae Ho Kim",
      "Jung-Sik Sung",
      "Do Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1109/access.2024.3467337"
  },
  {
    "id": 20,
    "year": 2024,
    "title": "A Synthetic Data Generation Approach with Dynamic Camera Poses for Long-Range Object Detection in AI Applications",
    "venue": "IEEE Access",
    "type": "Journal",
    "area": "other",
    "cites": 6,
    "authors": [
      "Misbah Bibi",
      "Anam Nawaz Khan",
      "Muhammad Faseeh",
      "Qazi Waqas Khan",
      "Rashid Ahmad",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1109/access.2024.3517717"
  },
  {
    "id": 21,
    "year": 2026,
    "title": "A distributed quantization mechanism for lightweight federated learning model in heterogeneous on-device AI networks",
    "venue": "Information Processing & Management",
    "type": "Journal",
    "area": "fl",
    "cites": 5,
    "authors": [
      "Misbah Bibi",
      "Qazi Waqas Khan",
      "Syed Ali Yazdan",
      "Rashid Ahmad",
      "Do-Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.ipm.2026.104798"
  },
  {
    "id": 22,
    "year": 2026,
    "title": "From Physical to Virtual Sensors: VSG-SGL for Reliable and Cost-Efficient Environmental Monitoring",
    "venue": "Automation",
    "type": "Journal",
    "area": "fusion",
    "cites": 5,
    "authors": [
      "Murad Ali Khan",
      "Qazi Waqas Khan",
      "Ji-Eun Kim",
      "SeungMyeong Jeong",
      "Il-Yeop Ahn",
      "Do-Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.3390/automation7010027"
  },
  {
    "id": 23,
    "year": 2024,
    "title": "Adaptive DFL-based straggler mitigation mechanism for synchronous ring topology in digital twin networks",
    "venue": "IET Collaborative Intelligent Manufacturing",
    "type": "Journal",
    "area": "fl",
    "cites": 5,
    "authors": [
      "Qazi Waqas Khan",
      "Chan‐Won Park",
      "Rashid Ahmad",
      "Atif Rizwan",
      "Anam Nawaz Khan",
      "Sunhwan Lim",
      "Do Hyeun Kim"
    ],
    "firstAuthor": true,
    "url": "https://doi.org/10.1049/cim2.12107"
  },
  {
    "id": 24,
    "year": 2024,
    "title": "Enhanced abnormality detection via PSO-driven adaptive ensemble weighting for energy AIoT device security",
    "venue": "IEEE Access",
    "type": "Journal",
    "area": "security",
    "cites": 5,
    "authors": [
      "Qazi Waqas Khan",
      "Anam Nawaz Khan",
      "Rashid Ahmad",
      "Atif Rizwan",
      "Muhammad Ibrahim",
      "Do Hyeun Kim"
    ],
    "firstAuthor": true,
    "url": "https://doi.org/10.1109/access.2024.3436088"
  },
  {
    "id": 25,
    "year": 2025,
    "title": "Cross-cluster precision-guided knowledge fusion for fair and personalized federated learning",
    "venue": "Alexandria Engineering Journal",
    "type": "Journal",
    "area": "fl",
    "cites": 4,
    "authors": [
      "Anam Nawaz Khan",
      "Atif Rizwan",
      "Rashid Ahmad",
      "Qazi Waqas Khan",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.aej.2025.05.055"
  },
  {
    "id": 26,
    "year": 2026,
    "title": "Accelerating model convergence in federated learning with layer-wise adaptive weight aggregation",
    "venue": "Applied Soft Computing",
    "type": "Journal",
    "area": "fl",
    "cites": 3,
    "authors": [
      "Anam Nawaz Khan",
      "Atif Rizwan",
      "Rashid Ahmad",
      "Qazi Waqas Khan",
      "Xueping Li",
      "Dohyeun kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.asoc.2026.115676"
  },
  {
    "id": 27,
    "year": 2026,
    "title": "FedRGT: Reward-Guided Graph Neural Network for Decentralized Federated Learning Topology Optimization",
    "venue": "Journal of Parallel and Distributed Computing",
    "type": "Journal",
    "area": "fl",
    "cites": 2,
    "authors": [
      "Atif Rizwan",
      "Anam Nawaz Khan",
      "Rashid Ahmad",
      "Qazi Waqas Khan",
      "Minseok Choi",
      "Do Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.jpdc.2026.105300"
  },
  {
    "id": 28,
    "year": 2025,
    "title": "Analyzing Hyperparameter Optimization Methods for Federated Learning Systems",
    "venue": "ICMIT 2025 (CCIS, Springer)",
    "type": "Conference",
    "area": "fl",
    "cites": 1,
    "authors": [
      "Sa Jim Soe Moe",
      "Qazi Waqas Khan",
      "Nguyen Anh Tuan",
      "Misbah Bibi",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1007/978-981-95-3141-7_10"
  },
  {
    "id": 29,
    "year": 2026,
    "title": "Accurate hydrogen flow prediction in proton exchange membrane electrolyzers using feature selection and stacked ensemble learning",
    "venue": "Energy Reports",
    "type": "Journal",
    "area": "energy",
    "cites": 0,
    "authors": [
      "Syed Shehryar Ali Naqvi",
      "Muhammad Faseeh",
      "Murad Ali Khan",
      "Qazi Waqas Khan",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.egyr.2026.109403"
  },
  {
    "id": 30,
    "year": 2026,
    "title": "DAQSyn: A Decentralized Adaptive Quantization-Aware Synchronous framework in Heterogeneous On-device AI Networks",
    "venue": "Neural Networks",
    "type": "Journal",
    "area": "fl",
    "cites": 0,
    "authors": [
      "Misbah Bibi",
      "Qazi Waqas Khan",
      "Syed Ali Yazdan",
      "Rashid Ahmad",
      "Do-Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.neunet.2026.109474"
  },
  {
    "id": 31,
    "year": 2026,
    "title": "LHFL: Logical Hierarchical Federated Learning Mechanism in Distributed Physical AI Networks",
    "venue": "Internet of Things",
    "type": "Journal",
    "area": "fl",
    "cites": 0,
    "authors": [
      "Misbah Bibi",
      "Qazi Waqas Khan",
      "Syed Ali Yazdan",
      "Rashid Ahmad",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.iot.2026.102055"
  },
  {
    "id": 32,
    "year": 2026,
    "title": "CARE-FL: Fair collaborative learning for rare disease detection in decentralized healthcare",
    "venue": "Neurocomputing",
    "type": "Journal",
    "area": "fusion",
    "cites": 0,
    "authors": [
      "Anam Nawaz Khan",
      "Atif Rizwan",
      "Rashid Ahmad",
      "Qazi Waqas Khan",
      "Xueping Li",
      "Dohyeun kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.neucom.2026.134539"
  },
  {
    "id": 33,
    "year": 2026,
    "title": "VAS-DPFF: Virtual Augmented Sensor Based on Deterministic and Probabilistic Feature Fusion for Environmental Monitoring",
    "venue": "Applied Sciences",
    "type": "Journal",
    "area": "fusion",
    "cites": 0,
    "authors": [
      "Muhammad Faizan",
      "Qazi Waqas Khan",
      "Murad Ali Khan",
      "Syed Shehryar Ali Naqvi",
      "Junsu Kim",
      "SeungMyeong Jeong",
      "Il-Yeop Ahn",
      "Do Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.3390/app16147141"
  },
  {
    "id": 34,
    "year": 2026,
    "title": "Intelligent Virtual Sensor Generation Using KL-Divergence-Based Fusion and Deep Generative Learning for Smart Environmental Monitoring",
    "venue": "Sensors",
    "type": "Journal",
    "area": "fusion",
    "cites": 0,
    "authors": [
      "Murad Ali Khan",
      "Qazi Waqas Khan",
      "Muhammad Faizan",
      "Ji-Eun Kim",
      "Il-Yeop Ahn",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.3390/s26134123"
  },
  {
    "id": 35,
    "year": 2026,
    "title": "SMAC-based cooperative hyperparameter optimization for occupational risk assessment in decentralized federated on-device AI networks",
    "venue": "Alexandria Engineering Journal",
    "type": "Journal",
    "area": "fl",
    "cites": 0,
    "authors": [
      "Sa Jim Soe Moe",
      "Qazi Waqas Khan",
      "Anh B. H. Nguyen",
      "Misbah Bibi",
      "Do Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.aej.2026.05.006"
  },
  {
    "id": 36,
    "year": 2026,
    "title": "Deep neuro-stochastic ensemble for lighting energy consumption forecasting and cost estimation under dynamic pricing schemes",
    "venue": "Energy Reports",
    "type": "Journal",
    "area": "energy",
    "cites": 0,
    "authors": [
      "Anam Nawaz Khan",
      "Qazi Waqas Khan",
      "Rashid Ahmad",
      "Misbah Bibi",
      "Do Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1016/j.egyr.2026.109279"
  },
  {
    "id": 37,
    "year": 2025,
    "title": "Vehicle Waiting Time Prediction with HPO Using DER Lighting Data for Energy Management",
    "venue": "ICECIE 2025 (IEEE)",
    "type": "Conference",
    "area": "energy",
    "cites": 0,
    "authors": [
      "Sa Jim Soe Moe",
      "Nguyen Anh Tuan",
      "Vu Thi Kim Dung",
      "Qazi Waqas Khan",
      "Misbah Bibi",
      "Dohyun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1109/icecie66637.2025.11363789"
  },
  {
    "id": 38,
    "year": 2025,
    "title": "Topology Optimization Techniques for Decentralized Federated Learning: Challenges and Solutions",
    "venue": "IEEE MetaCom 2025",
    "type": "Conference",
    "area": "fl",
    "cites": 0,
    "authors": [
      "Nguyen Anh Tuan",
      "Sa Jim Soe Moe",
      "Qazi Waqas Khan",
      "Atif Rizwan",
      "Do Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1109/metacom65502.2025.00015"
  },
  {
    "id": 39,
    "year": 2024,
    "title": "Machine Learning-Driven Insights Into Lighting Use in Industrial Buildings",
    "venue": "ICSAM 2024 (Springer)",
    "type": "Conference",
    "area": "energy",
    "cites": 0,
    "authors": [
      "Anam Nawaz Khan",
      "Qazi Waqas Khan",
      "Misbah Bibi",
      "Rashid Ahmad",
      "Do‐Hyeun Kim"
    ],
    "firstAuthor": false,
    "url": "https://doi.org/10.1007/978-981-96-9740-3_14"
  }
];

export const skills = [
  {
    category: "Core Research Areas",
    items: ["Decentralised Federated Learning", "Multi-Modal Fusion", "Edge Intelligence", "Privacy-Preserving ML", "On-Device AI", "Digital Twin Systems"],
  },
  {
    category: "Machine Learning",
    items: ["Deep Learning", "Ensemble Methods", "Transfer Learning", "Intrusion Detection", "Object Detection (YOLO)", "Reinforcement Learning"],
  },
  {
    category: "Tools & Frameworks",
    items: ["Python", "TensorFlow", "PyTorch", "Flower (FL Framework)", "Scikit-learn", "Raspberry Pi / IoT"],
  },
  {
    category: "Publication Venues",
    items: ["IEEE Access", "Elsevier (IoT, EAAI)", "PeerJ CS", "IET Journals", "MDPI", "Springer"],
  },
];

// Research areas: top papers from Google Scholar (October 2026). Paper counts are computed from publications.
export const researchAreas = [
  {
    key: "fl",
    title: "Federated learning",
    summary: "Training one model across many devices while raw data stays local. Topology, stragglers, quantisation and fairness.",
    topPaper: "Decentralized machine learning training: a survey on synchronization, consolidation, and topologies",
    topVenue: "IEEE Access, 2023",
  },
  {
    key: "energy",
    title: "Smart buildings and energy",
    summary: "Predicting and optimising energy use, cost and comfort in homes, offices and industrial buildings.",
    topPaper: "Optimizing energy efficiency and comfort in smart homes through predictive optimization",
    topVenue: "Energy Reports, 2024",
  },
  {
    key: "security",
    title: "Cybersecurity and IoT",
    summary: "Detecting DDoS attacks, intrusions and abnormal device behaviour on IoT networks.",
    topPaper: "Machine-learning-based DDoS attack detection using mutual information and random forest feature importance",
    topVenue: "Symmetry, 2022 · 272 citations",
  },
  {
    key: "fusion",
    title: "Multimodal fusion and healthcare",
    summary: "Combining data from many sources and sensors for healthcare prediction and environmental monitoring.",
    topPaper: "Explainable multi-modal fusion-based federated learning for mortality prediction in energy-constrained healthcare systems",
    topVenue: "IEEE Access, 2026",
  },
];

// Shown in the hero "Latest paper" card (Google Scholar, 2026)
export const latestPaper = {
  title: "CARE-FL: Fair collaborative learning for rare disease detection in decentralized healthcare",
  venue: "Neurocomputing",
  year: "2026",
  url: "https://scholar.google.com/citations?user=nU5lyoIAAAAJ&hl=en&view_op=list_works&sortby=pubdate",
};
