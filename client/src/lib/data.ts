import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const RESUME_DATA = {
  name: "Yash Bodaka",
  title: "AI & Backend Engineer",
  email: "bodakayash@gmail.com",
  phone: "+91-8866476540",
  location: "Ahmedabad, India",
  resumeUrl: "/resume.pdf",
  summary: "AI and Backend Engineer focused on building AI-powered solutions and intelligent workflows. Experienced in designing LLM-driven applications, RAG pipelines, and automation workflows. Skilled in translating AI models into production-ready services and analytics-driven systems deployed across cloud environments.",
  about: {
    content: `I'm passionate about building intelligent systems that bridge the gap between cutting-edge AI research and real-world applications. My journey in software engineering has been driven by curiosity and a desire to solve complex problems through elegant code.

With experience spanning AI development, backend engineering, and MLOps, I thrive in environments where innovation meets practicality. I believe in writing clean, maintainable code and creating systems that scale. When I'm not coding, you'll find me exploring new AI research papers, contributing to open-source projects, or mentoring aspiring developers.`,
    highlights: [
      "AI & ML Enthusiast",
      "Backend Developer",
      "Python Specialist",
      "Problem Solver",
      "Continuous Learner"
    ]
  },
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yash-bodaka/",
      icon: Linkedin
    },
    {
      name: "GitHub",
      url: "https://github.com/yashbodaka/", 
      icon: Github
    },
    {
      name: "Email",
      url: "mailto:bodakayash@gmail.com",
      icon: Mail
    }
  ],
  education: [
    {
      school: "New LJ Institute of Engineering and Technology, Gujarat Technological University",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      year: "Jul 2022 – Jul 2026",
      location: "Ahmedabad, India"
    }
  ],
  experience: [
    {
      company: "The Research Nexus (AI Group)",
      role: "Co-Founder & Lead — AI Systems & Research",
      period: "May 2025 – Present",
      description: "Leading a 20+ member interdisciplinary team building AI-powered automation and backend systems. Designed reproducible ML pipelines using MLflow, Docker, and PostgreSQL. Authored peer-reviewed research on scalable ML systems, MLOps, and applied AI."
    },
    {
      company: "Motadata Pvt Ltd",
      role: "AI Intern — Product Engineering",
      period: "Jun 2025 – Nov 2025",
      description: "Assisted engineering teams in research, requirement analysis, and AI-driven feature development. Analyzed the Google A2A protocol for seamless integration. Collaborated to prototype LLM-powered automation workflows."
    },
    {
      company: "Express Travels",
      role: "Software Developer", 
      period: "Jun 2024 – Apr 2025",
      description: "Designed and optimized Python and SQL-based backend systems and APIs. Built automated ETL/data pipelines and deployed forecasting models into production microservices. Implemented workflow orchestration, monitoring, and alerting, reducing manual operational processes by 60%."
    }
  ],
  projects: [
    {
      title: "Unveiling the Mind: Stress Detection Survey",
      tags: ["Research Paper", "ML/DL", "Stress Detection"],
      description: "A comprehensive review of ML/DL approaches for stress detection, analyzing physiological data, behavioral cues, and model interpretability challenges.",
      link: "https://www.ijsrtjournal.com/article/Unveiling+the+Mind+A+Survey+on+Stress+Detection+Using+Machine+Learning+and+Deep+Learning+Techniques",
      type: "paper"
    },
    {
      title: "Documentation Chatbot",
      tags: ["LLM", "Agentic Routing"],
      description: "LLM-based system using hierarchical, non-embedding retrieval with agent-based routing for accurate context.",
      link: "https://github.com/yashbodaka/Motadata_Chatbot",
      video: "/motadata_chatbot.mp4"
    },
    {
      title: "RAG Tool Selector",
      tags: ["Dynamic RAG", "Tool Use"],
      description: "Adaptive tool-selection pipeline enabling dynamic RAG across a large tool ecosystem.",
      link: "https://github.com/yashbodaka/Agno_Rag_Tool",
      video: "/Agno_rag.mp4"
    },
    {
      title: "Code Review Bot",
      tags: ["Gemini", "GitHub Actions", "Automation"],
      description: "Automated code review bot using Google Gemini to detect security vulnerabilities, bugs, and best practice violations in PRs.",
      link: "https://github.com/yashbodaka/code_review_bot"
    }
  ],
  skills: {
    languages: ["Python", "Java", "SQL"],
    frameworks: ["Flask", "FastAPI", "PyTorch", "Scikit-learn"],
    databases: ["PostgreSQL", "MySQL", "Firebase"],
    cloud: ["AWS", "Google Cloud", "BigQuery"],
    mlops: ["Airflow", "MLflow", "Docker", "CI/CD", "Git"],
    other: ["REST APIs", "Data Modelling", "Linux", "Prompt Engineering"]
  },
  publications: [
    "Unveiling the Mind: A Survey on Stress Detection Using Machine Learning and Deep Learning Techniques.",
    "XAD Framework: Leveraging Token Attribution Instability for Real-Time Defense in Clinical NLP."
  ]
};