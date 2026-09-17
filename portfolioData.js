/**
 * Central Data Store for Mudil Mathur's Personal Portfolio
 * Authentic student profile data (No fabricated claims or fake metrics).
 */

export const portfolioData = {
  personal: {
    name: "Mudil Mathur",
    eyebrow: "COMPUTER SCIENCE ENGINEERING • DATA & TECHNOLOGY",
    headline: "Turning curiosity into data-driven solutions.",
    bio: "Computer Science Engineering student at Chandigarh University developing practical skills across programming, databases, statistics, and data analytics while building toward a career in Data Science.",
    university: "Chandigarh University, India",
    degree: "B.E. Computer Science Engineering",
    focus: "Data Analytics → Data Science",
    email: "mudilmathur2021@gmail.com",
    github: "https://github.com/mudilxmathur24-tech",
    githubUsername: "mudilxmathur24-tech",
    linkedin: "https://www.linkedin.com/in/mudil-mathur-3355a7239/",
    statusText: "Actively Learning & Building",
    resumeUrl: "#resume-modal"
  },

  quickStrip: [
    {
      id: "strip-1",
      title: "CSE Student",
      subtitle: "Chandigarh University",
      icon: "graduation-cap",
      tag: "Academic Status"
    },
    {
      id: "strip-2",
      title: "Data Focus",
      subtitle: "Analytics → Data Science",
      icon: "chart-line",
      tag: "Career Target"
    },
    {
      id: "strip-3",
      title: "Currently Learning",
      subtitle: "Python • SQL • DSA • Statistics",
      icon: "code",
      tag: "Skill Stack"
    },
    {
      id: "strip-4",
      title: "Open To",
      subtitle: "Learning • Projects • Opportunities",
      icon: "target",
      tag: "Current Availability"
    }
  ],

  about: {
    title: "Bridging Computer Science Fundamentals & Data Science",
    paragraphs: [
      "I am a Computer Science Engineering student at Chandigarh University with a strong interest in understanding patterns within complex data and translating them into actionable solutions.",
      "My technical journey began with core computer science concepts—programming logic, data structures, and relational databases. As I deepened my understanding of computing fundamentals, I discovered a strong affinity for analytical problem-solving and statistical reasoning.",
      "Currently, I am actively building my expertise in Python scripting, SQL query design, database management (DBMS), data analytics, and foundational statistics. I am systematically progressing toward machine learning and data science, focusing on clean code, structured logic, and continuous learning."
    ],
    transitionSteps: [
      { step: "01", label: "CODE", desc: "Python & Java fundamentals" },
      { step: "02", label: "DATA", desc: "SQL databases & structuring" },
      { step: "03", label: "INSIGHT", desc: "Exploratory analytics & stats" },
      { step: "04", label: "IMPACT", desc: "Data Science solutions" }
    ]
  },

  skillCategories: [
    {
      id: "programming",
      name: "PROGRAMMING",
      icon: "code",
      skills: [
        { name: "Python", status: "Core Stack", statusClass: "core", desc: "Data manipulation, scripting, statistics & analytical libraries" },
        { name: "Java", status: "Practicing", statusClass: "practicing", desc: "Object-oriented programming, syntax, CS fundamentals" }
      ]
    },
    {
      id: "data",
      name: "DATA & ANALYTICS",
      icon: "database",
      skills: [
        { name: "SQL / MySQL", status: "Core Stack", statusClass: "core", desc: "Relational queries, joins, aggregations & database management" },
        { name: "Data Analysis", status: "Active Focus", statusClass: "active", desc: "Exploratory data analysis, trend discovery & data cleaning" },
        { name: "Statistics", status: "Learning", statusClass: "learning", desc: "Descriptive statistics, probability fundamentals & distributions" }
      ]
    },
    {
      id: "core-cs",
      name: "CORE CS",
      icon: "cpu",
      skills: [
        { name: "Data Structures & Algorithms", status: "Practicing", statusClass: "practicing", desc: "Arrays, hashing, searching, sorting & algorithmic logic" },
        { name: "DBMS", status: "Core Stack", statusClass: "core", desc: "Relational database concepts, normalization & schema design" },
        { name: "Object-Oriented Programming", status: "Practicing", statusClass: "practicing", desc: "Encapsulation, inheritance, polymorphism & modular design" }
      ]
    },
    {
      id: "data-science",
      name: "DATA SCIENCE",
      icon: "chart-line",
      skills: [
        { name: "Python for Data Science", status: "Active Focus", statusClass: "active", desc: "Data handling with NumPy and Pandas ecosystem" },
        { name: "Data Analytics Workflow", status: "Practicing", statusClass: "practicing", desc: "Data cleaning, transformation & summary metrics" },
        { name: "Machine Learning", status: "Learning Target", statusClass: "target", desc: "Supervised learning concepts, linear models & classification" }
      ]
    }
  ],

  learningJourney: [
    {
      phase: "01",
      title: "Computer Science Foundation",
      status: "Foundation Completed",
      desc: "Developed foundational problem-solving abilities, logic development, and core computer science concepts."
    },
    {
      phase: "02",
      title: "Programming",
      status: "Active Practice",
      desc: "Mastered core Python scripting and Java fundamentals for algorithm implementation and code structure."
    },
    {
      phase: "03",
      title: "Databases & DBMS",
      status: "Core Competency",
      desc: "Acquired database management skills with MySQL, query writing, join logic, and relational modeling."
    },
    {
      phase: "04",
      title: "Data Structures & Algorithms",
      status: "Continuous Practice",
      desc: "Strengthened memory efficiency and time complexity awareness using key data structures."
    },
    {
      phase: "05",
      title: "Applied Statistics",
      status: "Active Learning",
      desc: "Studying statistical concepts, summary metrics, probability distributions, and data variance."
    },
    {
      phase: "06",
      title: "Data Analytics",
      status: "Current Focus",
      desc: "Building practical capability in data cleaning, exploratory data analysis, and numerical processing."
    },
    {
      phase: "07",
      title: "Data Science Target",
      status: "Future Trajectory",
      desc: "Targeting applied machine learning model training, predictive analytics, and end-to-end data pipelines."
    }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Exploratory Data Analysis Lab",
      status: "Currently Building",
      statusClass: "building",
      problem: "Extracting insights from unstructured raw datasets requires structured cleaning, anomaly detection, and univariate statistical summary.",
      approach: "Developing Python analytical scripts utilizing Pandas for data manipulation and NumPy for numerical operations.",
      techStack: ["Python", "Pandas", "NumPy", "Statistics"],
      keyLearning: "Hands-on data cleaning protocols, handling missing records, and discovering numerical correlations.",
      githubUrl: "https://github.com/mudilxmathur24-tech",
      demoUrl: null
    },
    {
      id: "proj-2",
      title: "Relational Database & Analytics Workspace",
      status: "Currently Building",
      statusClass: "building",
      problem: "Translating business queries into optimized relational database queries across multi-table schemas.",
      approach: "Structuring SQL schemas in MySQL, writing multi-join aggregations, and executing complex filtering tasks.",
      techStack: ["SQL", "MySQL", "DBMS", "Relational Modeling"],
      keyLearning: "Index optimization, grouping aggregations, and maintaining relational integrity.",
      githubUrl: "https://github.com/mudilxmathur24-tech",
      demoUrl: null
    },
    {
      id: "proj-3",
      title: "Predictive Analytics Sandbox",
      status: "Planned Lab Project",
      statusClass: "planned",
      problem: "Building baseline classification and regression models for real-world tabular dataset prediction.",
      approach: "Targeting Scikit-learn workflow execution with train-test splitting, metric evaluations, and feature scaling.",
      techStack: ["Python", "Scikit-learn", "Data Science", "Machine Learning"],
      keyLearning: "Model evaluation metrics (Accuracy, Precision, Recall) and data preprocessing pipelines.",
      githubUrl: "https://github.com/mudilxmathur24-tech",
      demoUrl: null
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "Deloitte Data Analytics Job Simulation",
      organization: "Deloitte",
      date: "Confirmed Credential",
      type: "Industry Simulation",
      desc: "Completed practical simulation tasks focusing on data analytics, business intelligence reasoning, and data-driven recommendations.",
      verifyUrl: "https://www.linkedin.com/in/mudil-mathur-3355a7239/"
    },
    {
      id: "cert-2",
      title: "ACP Python for Beginners",
      organization: "Chandigarh University",
      date: "Academic Certification",
      type: "University Program",
      desc: "Certified in Python programming fundamentals, control flow logic, data structures, and functional scripting.",
      verifyUrl: "https://www.linkedin.com/in/mudil-mathur-3355a7239/"
    },
    {
      id: "cert-3",
      title: "ACP Data Science",
      organization: "Chandigarh University",
      date: "Academic Certification",
      type: "University Program",
      desc: "Certified in core Data Science concepts, analytical methodology, numerical computing, and data exploration.",
      verifyUrl: "https://www.linkedin.com/in/mudil-mathur-3355a7239/"
    }
  ],

  beyondClassroom: [
    {
      id: "hackathon-1",
      event: "Adobe University Hackathon 2026",
      role: "Participant",
      year: "2026",
      desc: "Participated in the Adobe University Hackathon, collaborating with peer student engineers to address complex technical problem statements under constrained timelines."
    }
  ]
};
