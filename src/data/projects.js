export const projects = {
  cp: {
    title: "CP Assistant",
    category: "AI APPLICATION / DEC 2024 — JAN 2025",
    summary:
      "A competitive programming analytics platform and Chrome extension, developed through Google Development Group, IIT Kanpur.",
    points: [
      "Codeforces profile and submission analytics, rating prediction, and personalized practice roadmaps.",
      "AI-assisted code reviews using problem statements and editorial context.",
      "A Manifest V3 extension adds problem-fit insights and recommendations directly to Codeforces problemset pages.",
      "PostgreSQL-backed user and performance data, with Docker and Gunicorn deployment.",
    ],
    tags: ["Python", "Django", "PostgreSQL", "Groq", "Chrome Extension"],
    repo: "CP-Assistant",
  },
  rl: {
    title: "Predator–Prey RL Simulator",
    category: "REINFORCEMENT LEARNING / MAR — APR 2026",
    summary:
      "A course project under Prof. Washim Mondal, exploring decision-making in a stochastic predator-prey grid world.",
    points: [
      "Modeled states, actions, transition probabilities, and rewards.",
      "Implemented Value Iteration, Policy Iteration, and neural-network policy gradients.",
      "Benchmarked runtime, convergence, and scalability with sparse matrices.",
      "Reported approximately 13+ reward per episode with Adam versus approximately 11 with Stochastic Gradient Ascent.",
    ],
    tags: ["Python", "PyTorch", "NumPy", "SciPy"],
    repo: "Predator-Prey-RL-Simulator",
    note: "Performance figures are from project experiments reported in my résumé.",
  },
  stunt: {
    title: "STUNT Reimplementation",
    category: "SELF-SUPERVISED LEARNING / AUG 2026",
    summary:
      "An independent educational reproduction of STUNT for few-shot classification on tabular data.",
    points: [
      "Built preprocessing, perturbation-based task generation, episodic ProtoNet training, validation, and checkpointing.",
      "Evaluated 1-, 2-, 5-, and 10-shot performance on WDBC and Census Income.",
      "Compared embeddings with raw features using matched support sets over 100 trials.",
      "Reported +6.2 percentage points in accuracy and +10.7 percentage points in F1 at 1-shot on Census Income.",
    ],
    tags: ["PyTorch", "scikit-learn", "Pandas", "ProtoNet"],
    repo: "STUNT-Reimplementation",
    note: "An independent reproduction of published STUNT research. Numerical results are reported in my résumé.",
  },
  rag: {
    title: "Illuminating Language",
    category: "RAG / MAY — JUL 2024",
    summary:
      "An IIT Kanpur knowledge assistant developed through the Brain and Cognitive Science Club.",
    points: [
      "Scraped institute-specific resources and built semantic retrieval with InstructorEmbeddings and ChromaDB.",
      "Combined RAG Fusion, query rewriting, query routing, and conversation history.",
      "Built an interactive Streamlit interface for contextual institutional questions.",
    ],
    tags: ["Python", "ChromaDB", "InstructorEmbeddings", "Streamlit"],
    repo: "BCS-Lluminating-Language",
    note: "Club learning project. The linked repository is a fork of the program repository; contributions are described in my résumé.",
  },
  social: {
    title: "Social Media Web App",
    category: "FULL-STACK DEVELOPMENT / JUN 2024",
    summary:
      "A full-stack social experience built with independently deployable React and Express services.",
    points: [
      "User authentication, profiles, friend requests, and post sharing.",
      "Image uploads, likes, comments, and social interactions.",
      "RESTful APIs with MongoDB and Mongoose for persistence.",
      "Responsive React frontend with Zustand state management and Cloudinary media storage.",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Zustand"],
    repo: "social-media-website",
  },
};
