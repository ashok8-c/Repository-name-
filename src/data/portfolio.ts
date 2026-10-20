export const portfolio = {
  name: "Ashok S. Babu",
  role: "Software Developer",
  email: "ashok333babu@gmail.com",

  links: {
    github: "https://github.com/ashok8-c",
    linkedin: "https://www.linkedin.com/in/ashok-s-babu-075b38283/",
    resume: "/resume.pdf",
  },

  education: {
    institution: "Adamas University",
    degree: "B.Tech — Computer Science & Engineering",
    duration: "2023–2027",
  },

  experience: [
    {
      company: "InAmigos Foundation",
      role: "AI Data Analyst Intern",
      location: "Remote",
      duration: "21 Jul 2026 – 06 Aug 2026",
      description:
        "Conducted AI-assisted research and data analysis on NGO trends, including fundraising, CSR spending, and AI adoption.",
      responsibilities: [
        "Collected and verified data from relevant sources.",
        "Prepared reports and spreadsheets to communicate findings.",
        "Provided practical recommendations based on the analysis.",
      ],
    },
  ],

  pasafe: {
    name: "PA-SAFE",
    subtitle: "Intelligent Vehicle Safety & Alert System",
    award: "2nd Place — IIT Bombay Techfest 2025",

    description:
      "An IoT-based vehicle safety system using Raspberry Pi, GPS, GSM, and sensors to support accident detection and emergency response.",

    problem:
      "Vehicle incidents can go unnoticed, and emergency responders may not receive useful information quickly enough.",

    solution:
      "A connected safety prototype that processes sensor data, integrates GPS and GSM hardware, and uses backend services to support automated emergency alerts.",

    contribution:
      "Led system architecture and contributed to backend API development, IoT integration, debugging, device connectivity, and data synchronization.",

    technologies: [
      "Python",
      "JavaScript",
      "Node.js",
      "Raspberry Pi",
      "GPS",
      "GSM",
      "Supabase",
    ],

    github: "https://github.com/ashok8-c/pasafe",
    demo: "https://pasafe.vercel.app/",
  },

  projects: [
    {
      number: "01",
      name: "Exoplanet Detection & Classification",
      category: "AI/ML · Space",

      description:
        "A physics-guided pipeline for detecting and classifying potential exoplanets from noisy Kepler and TESS light curves using Box Least Squares transit detection, CNN-based feature extraction, and explainable AI.",

      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "Lightkurve",
        "AstroPy",
        "BLS",
        "SHAP",
        "Grad-CAM",
      ],

      github: "https://github.com/piyush-verma020/Dim-watch",
      demo: null,
    },

    {
      number: "02",
      name: "PA-SAFE",
      category: "IoT · Backend Engineering",

      description:
        "An intelligent vehicle safety and alert system integrating Raspberry Pi hardware, GPS, GSM, sensors, Node.js APIs, and Supabase workflows for accident detection and emergency response.",

      technologies: [
        "Python",
        "JavaScript",
        "Node.js",
        "Raspberry Pi",
        "Supabase",
      ],

      github: "https://github.com/ashok8-c/pasafe",
      demo: "https://pasafe.vercel.app/",
    },

    {
      number: "03",
      name: "AI-Based Crop Disease Detection",
      category: "Deep Learning · Agriculture",

      description:
        "A multi-class crop disease classification system built with PyTorch and the PlantVillage dataset. Applied data augmentation, regularization, and dropout to address overfitting and improve model generalization.",

      technologies: [
        "Python",
        "PyTorch",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],

      github: null,
      demo: null,
    },

    {
      number: "04",
      name: "Study Tracker",
      category: "Full Stack · Productivity",

      description:
        "A web application for logging study sessions and reviewing learning history through a dashboard.",

      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Vercel",
      ],

      github: "https://github.com/ashok8-c/Study-tracker",
      demo: "https://upsc-tracker-delta.vercel.app/",
    },
  ],

  skills: [
    {
      group: "Programming Languages",
      items: ["Java", "Python", "JavaScript"],
    },
    {
      group: "Frontend",
      items: ["HTML5", "CSS", "React.js"],
    },
    {
      group: "Backend",
      items: ["Node.js", "REST APIs"],
    },
    {
      group: "Databases",
      items: ["SQLite", "MySQL", "MongoDB", "Supabase", "Neo4j"],
    },
    {
      group: "AI & Machine Learning",
      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "NumPy",
        "Pandas",
      ],
    },
    {
      group: "Developer Tools",
      items: ["Git", "GitHub", "Vercel", "Render"],
    },
  ],

  achievements: [
    {
      title: "2nd Place — IIT Bombay Techfest 2025",
      detail:
        "Recognized for PA-SAFE, an intelligent vehicle safety and alert system.",
      featured: true,
    },
  ],
} as const;
