// All portfolio content lives here. Edit this file to customize the site.
export const profile = {
  name: "Kiran Sree Hari",
  title: "AI/ML Engineer",
  tagline:
    "I build NLP, computer vision and RAG applications in Python, and ship them as working demos.",
  seeking: "Open to AI/ML Engineer, Machine Learning Engineer and GenAI Engineer roles.",
  location: "Kollam, Kerala, India",
  email: "kiransreehari30@gmail.com",
  phone: "+91 7306324539",
  // NOTE: your resume lists linkedin.com/in/kiransreehari, but your LinkedIn PDF shows
  // linkedin.com/in/kiran-sreehari. The LinkedIn PDF URL is used here; confirm and fix if needed.
  linkedin: "https://www.linkedin.com/in/kiran-sreehari",
  github: "https://github.com/kiransree2002",
  liveDemo: "https://resume-analyzer-automated-mail.streamlit.app",
};

export const about = [
  "I'm an AI/ML engineer and Certified Specialist in AI/ML (ICT Academy of Kerala). I work in Python on NLP, computer vision and RAG/LLM applications, from data preparation and model evaluation to a deployed interface.",
  "Before moving into AI/ML I spent a year as a Data Analyst at Tata Electronics, where I worked with production data, validation and root cause analysis. That background shapes how I build: I check the data first and make model output explainable.",
];

// Match breakdown shown in the hero. Illustrative sample of the output format only, not real data.
export const heroSample = {
  matched: ["Python", "NLP", "SQL"],
  missing: ["Docker"],
  gates: ["Rule gates passed", "Semantic similarity scored", "Decision: shortlist"],
};

export const projects = [
  {
    name: "AI Resume Screener & Candidate Matching",
    featured: true,
    problem:
      "Recruiters shortlist candidates by hand from resumes in inconsistent PDF and DOCX formats.",
    solution:
      "An end-to-end pipeline that parses resumes, scores them against a job description, and explains each decision. The job description can be entered as text, a URL or a saved JD.",
    contribution: [
      "Built the parsing pipeline for skills, education and experience.",
      "Combined a configurable rule-based gate cascade with Sentence-Transformers cosine similarity into a weighted score that shortlists, flags for review or rejects.",
      "Generated per-candidate explanations (matched and missing skills, gate-level reasons) and CSV/JSON reports.",
      "Deployed a Streamlit dashboard with ranked results, charts, report downloads and automated HR emails for shortlisted candidates.",
    ],
    outcome:
      "Tested on about 2,484 sample resumes, reaching 100% parsing accuracy on that sample.",
    stack: ["Python", "spaCy", "Sentence-Transformers", "PyTorch", "Pandas", "Streamlit"],
    links: [
      { label: "Live demo", href: "https://resume-analyzer-automated-mail.streamlit.app" },
      {
        label: "Source",
        href: "https://github.com/kiransree2002/final_resume_analyzer_project_with_automated_mail",
      },
    ],
  },
  {
    name: "Revio AI – Intelligent Review Analysis and Customer Resolution Assistant",
    featured: true,
    problem:
      "Businesses struggle to efficiently process customer feedback, identify critical issues, and respond quickly and consistently.",
    solution:
      "AI-powered review management system featuring sentiment analysis, topic classification, priority detection, suggested responses, customer review submission, secure employee authentication, and analytics dashboard.",
    contribution: [
      "Implemented sentiment analysis, topic classification, and priority detection workflows for incoming reviews.",
      "Built automated response suggestions to assist resolution and speed up customer support turnaround.",
      "Integrated customer review submission with secure employee authentication and role-based access.",
      "Developed an interactive analytics dashboard for real-time sentiment metrics and review insights.",
    ],
    outcome:
      "Streamlines end-to-end feedback resolution from customer submission to actionable analytics and automated responses.",
    stack: ["Python", "Streamlit", "NLP", "LLM", "Sentiment Analysis", "Data Analytics"],
    links: [
      { label: "Live demo", href: "https://revio-ai-review-assistant.streamlit.app/" },
      {
        label: "Source",
        href: "https://github.com/kiransree2002/revio-ai-review-assistant",
      },
    ],
  },
  {
    name: "Vehicle Damage Assessment & Insurance Claim Assistant",
    featured: true,
    problem:
      "Assessing vehicle damage and handling an insurance claim involves separate steps that rarely connect.",
    solution:
      "An AI workflow that joins vehicle damage detection and severity assessment with an LLM claim assistant grounded in insurance knowledge through RAG.",
    contribution: [
      "Worked with YOLO-based detection and severity classification.",
      "Wrote Python inference modules and integrated the AI components in a modular way.",
      "Connected computer vision output to RAG/LLM claim support using FAISS vector search.",
    ],
    outcome:
      "A working end-to-end flow from damage image to contextual claim guidance.",
    stack: ["YOLO", "OpenCV", "Python", "RAG", "LLM", "FAISS"],
    links: [
      { label: "Source", href: "https://github.com/kiransree2002/vehicle-damage-insurance-ai" },
    ],
  },
  {
    name: "Predicting Election Outcomes: 2019 Portuguese General Election",
    featured: false,
    problem: "A predictive modeling exercise built during the AI/ML program.",
    solution:
      "A machine learning workflow covering EDA, preprocessing, feature engineering, predictive modeling and evaluation.",
    contribution: [],
    outcome: "",
    stack: ["Python", "Pandas", "Scikit-learn"],
    links: [
      { label: "Source", href: "https://github.com/Aravindr017/Election_Dataset_Portugal-Regression" },
    ],
  },
];

export const experience = [
  {
    role: "AI/ML Intern",
    org: "TrackGenesis",
    place: "Trivandrum, Kerala",
    period: "Oct 2026 – Nov 2026",
    points: [
      "Built an AI Resume Screener that parses resumes and ranks candidates against job descriptions, reducing manual shortlisting effort.",
      "Wrote a Python NLP pipeline to extract, clean and structure resume text from PDF and DOCX files.",
      "Implemented skill extraction and semantic matching with TF-IDF/embeddings and similarity scoring.",
      "Designed ranking and shortlisting logic with an explainable breakdown of matched and missing skills.",
      "Deployed a Streamlit interface where recruiters upload resumes, enter a job description and view ranked results.",
      "Validated parsing on 2,484 sample resumes with inconsistent formats, improving accuracy to 100%.",
      "Added automated HR email notifications for shortlisted candidates.",
    ],
  },
  {
    role: "Data Analyst",
    org: "Tata Electronics Products and Solutions Pvt. Ltd.",
    place: "",
    period: "Jun 2024 – Jul 2025",
    points: [
      "Analyzed cycle time and production data to monitor performance and quality.",
      "Tracked UPH (Units Per Hour) daily, weekly, monthly and yearly for performance review.",
      "Prepared process performance and qualification reports for management decisions and production planning.",
      "Ran data validation and analytical review to find inconsistencies, trends and improvement opportunities.",
      "Carried out root cause analysis and tracked downtime trends to support corrective and preventive actions.",
      "Recommended and implemented time utilization improvements to reduce delays in mass production, and analyzed space utilization for layout planning.",
    ],
  },
];

export const skills = [
  { group: "Machine Learning", items: ["Supervised/Unsupervised Learning", "Scikit-learn", "EDA", "Feature Engineering", "Model Evaluation", "Hyperparameter Tuning", "Regression", "Classification", "Clustering", "XAI", "Responsible AI"] },
  { group: "NLP & Generative AI", items: ["TF-IDF / Embeddings", "Semantic Matching", "Transformers (BERT, T5, GPT)", "LLM Applications", "RAG", "FAISS", "AI Agents", "Prompt Engineering"] },
  { group: "Deep Learning & Vision", items: ["TensorFlow", "PyTorch", "CNN", "RNN / LSTM / GRU", "OpenCV", "YOLO"] },
  { group: "Programming & Data", items: ["Python", "NumPy", "Pandas", "SQL", "Microsoft Excel"] },
  { group: "Deployment & Tools", items: ["Streamlit", "FastAPI", "Hugging Face", "Git / GitHub", "Agile / Jira", "AWS / GCP (exposure)", "MLOps (concepts)"] },
  { group: "Data Quality & Analysis", items: ["Data validation", "Performance monitoring", "Root cause analysis", "Reporting", "QMS / QA awareness"] },
];

export const education = [
  {
    title: "B.Tech, Electrical & Electronics Engineering",
    org: "College of Engineering Pathanapuram, APJ Abdul Kalam Technological University",
    period: "2020 – 2024",
    note: "CGPA 6.9. Minor degree: Python for Machine Learning.",
  },
];

export const certifications = [
  {
    title: "Certified Specialist in AI/ML",
    org: "ICT Academy of Kerala",
    period: "May 2026 – Sep 2026",
    note: "Core ML and data science, deep learning, computer vision and NLP, GenAI (LLM applications, RAG, FAISS, AI agents), Streamlit/FastAPI deployment, MLOps, XAI and Responsible AI.",
  },
];
