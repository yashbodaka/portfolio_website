import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const RESUME_DATA = {
  name: "Yash Bodaka",
  title: "AI & Backend Engineer",
  email: "bodakayash@gmail.com",
  phone: "+91-8866476540",
  location: "Ahmedabad, India",
  summary: "AI and Backend Engineer focused on building AI-powered solutions and intelligent workflows. Experienced in designing LLM-driven applications, RAG pipelines, and automation workflows. Skilled in translating AI models into production-ready services and analytics-driven systems deployed across cloud environments.",
  socials: [
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin
    },
    {
      name: "GitHub",
      url: "#", 
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
      description: "Designed and optimized Python and SQL-based backend systems. Built automated ETL pipelines and forecasting models. Developed orchestration and alerting workflows, reducing manual processes by 60%."
    }
  ],
  projects: [
    {
      title: "Documentation Chatbot",
      tags: ["LLM", "Agentic Routing"],
      description: "LLM-based system using hierarchical, non-embedding retrieval with agent-based routing for accurate context."
    },
    {
      title: "RAG Tool Selector",
      tags: ["Dynamic RAG", "Tool Use"],
      description: "Adaptive tool-selection pipeline enabling dynamic RAG across a large tool ecosystem."
    },
    {
      title: "Graph RAG Implementation",
      tags: ["Graph DB", "Entity Modeling"],
      description: "Designed and implemented a graph-based RAG system leveraging entity–relationship modeling."
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