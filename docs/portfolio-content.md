# Harsh Sarawagi - Portfolio Content for Review

Status: Content approved by Harsh with the revisions below. Only the five projects listed in the resume are included. Website design and implementation are the next stage.

Collected on: 11 November 2026. Updated after your review on the same date.

This file combines resume content with public GitHub information for the resume projects and the accessible public summary of the LinkedIn profile you supplied. Suggested portfolio copy is labeled separately from collected facts. JEE ranks were supplied directly by you during review. Project results are reported by their sources; experiments and deployed applications have not been independently tested.

## 1. Sources and coverage

| Source | Reference | What was collected |
| --- | --- | --- |
| Resume | [230448_harsh_sarawagi_bt_ee_compressed.pdf](C:/Users/DELL/Desktop/230448_harsh_sarawagi_bt_ee_compressed.pdf) | Complete one-page text, education, experience, five projects, achievements, skills, mentoring, courses, and embedded links |
| GitHub profile | [Harsh-sarawagi](https://github.com/Harsh-sarawagi) | Public profile metadata and the five repositories corresponding to resume projects, including fork status |
| GitHub project sources | Linked under each project below | Available READMEs, repository descriptions, selected documentation, and frontend/backend package manifests |
| LinkedIn | [Harsh Sarawagi](https://www.linkedin.com/in/harsh-sarawagi-7607aa300/) | Search-indexed public profile summary: location, IIT Kanpur, education years, BNY association, and an internship announcement |

LinkedIn's full profile could not be fetched. Its complete About section, job descriptions, skills, certifications, recommendations, and other sections have not been verified. Search results belonging to other people with the same name were excluded.

The current GitHub API README was used for CP Assistant. A search-cached page described an older Algolytics/SQLite version; that older description has not been merged into the current project copy.

## 2. Identity and contact

| Field | Collected content | Source / review note |
| --- | --- | --- |
| Full name | Harsh Sarawagi | Resume and LinkedIn |
| Current academic description | Final Year Undergraduate | Resume; confirm before publishing |
| Department | Electrical Engineering | Resume |
| Institution | Indian Institute of Technology Kanpur | Resume and LinkedIn |
| Degree | Bachelor of Technology (B.Tech) | Resume |
| Education period | 2023-2027 | LinkedIn public summary; resume gives graduation year 2027 |
| Expected graduation | 2027 | Resume |
| CPI | 7.7/10.0 | Resume; confirm whether to display and whether it is current |
| Email | [harshsara23@iitk.ac.in](mailto:harshsara23@iitk.ac.in) | Resume |
| GitHub | [github.com/Harsh-sarawagi](https://github.com/Harsh-sarawagi) | Resume hyperlink and live GitHub API |
| LinkedIn | [harsh-sarawagi-7607aa300](https://www.linkedin.com/in/harsh-sarawagi-7607aa300/) | User-provided URL and resume hyperlink |
| Location | Jhansi, Uttar Pradesh, India | LinkedIn public summary; confirm preferred portfolio location |
| GitHub avatar | [Profile image](https://avatars.githubusercontent.com/u/153839252?v=4) | Available as an optional image; selection pending |

The public GitHub profile currently has no populated name, bio, company, location, public email, or personal website field. No telephone number or preferred contact method was provided.

## 3. Suggested introduction copy

The following wording is drafted from the collected material. It is proposed portfolio copy, not an existing biography copied from your profiles.

### Hero

**Name:** Harsh Sarawagi

**Suggested headline:** Building software with AI, data, and a strong engineering foundation.

**Suggested supporting line:** Final-year Electrical Engineering undergraduate at IIT Kanpur, with experience in backend development, AI applications, full-stack systems, and machine learning.

**Suggested short credential line:** IIT Kanpur '27 | Software Developer Intern at BNY, May-Jul 2026

**Suggested actions:** View Projects, Download Resume, Get in Touch.

### About

I'm Harsh, a final-year Electrical Engineering undergraduate at IIT Kanpur. My work spans backend development, full-stack applications, and machine learning, with projects in retrieval-augmented generation, reinforcement learning, and competitive programming tools.

During my software development internship at BNY, I built a Python/FastAPI monitoring agent with MCP tools, integrated operational data sources, and connected monitoring workflows to an internal AI platform. My projects include a competitive programming assistant, an IIT Kanpur knowledge chatbot, a full-stack social media app, a predator-prey reinforcement learning simulator, and a reproduction of STUNT for few-shot learning on tabular data.

### Possible focus areas

- Backend engineering and APIs.
- AI assistants, RAG, and tool-connected workflows.
- Full-stack web applications.
- Machine learning and reinforcement learning.

These focus areas are inferred from your experience and projects. Your preferred job title, target roles, and availability still need confirmation.

## 4. Work experience

### Software Developer Intern - BNY

- **Period:** May 2026-Jul 2026.
- **Location:** LinkedIn's public summary associates BNY with Pune District, Maharashtra; confirm the internship location.
- **Source:** Resume. LinkedIn independently shows a BNY association and a historical announcement about joining as an SDE intern in Pune in May 2026, but does not expose the full role details.

Collected responsibilities and contributions:

- Designed and developed a unified Health Check Agent using Python and FastAPI, implementing MCP with JSON-RPC 2.0.
- Exposed 19+ tools for application monitoring and operational support through MCP clients and Swagger UI.
- Integrated Oracle DB, Splunk, and App Engine for centralized application health, log, and operational monitoring across production and QA environments.
- Built a separate RAG-based tool for retrieving application-specific information and technical documentation.
- Built an hourly monitoring pipeline that ran health checks in parallel, detected application anomalies, and sent severity-based email alerts to the team.
- Integrated the MCP server with BNY's internal AI platform using Nuggets, allowing an LLM-powered chatbot to interpret requests, choose monitoring tools, and return results.

**Suggested experience summary:** Built an AI-connected monitoring backend at BNY, exposing 19+ MCP tools and automating hourly health checks, operational monitoring, and severity-based alerts.

**Internship learning themes added during website review:** Connected the stages of the software development lifecycle (SDLC), from understanding requirements through implementation, integration, and validation. Developed an understanding of professional work culture through communicating progress, asking focused questions, responding to feedback, and taking responsibility within a larger team. This is drafted reflective copy requested by Harsh, rather than an additional resume-sourced achievement.

**Technologies explicitly described:** Python, FastAPI, MCP, JSON-RPC 2.0, Oracle DB, Splunk, App Engine, Swagger UI, RAG, and Nuggets.

**Review notes:** Confirm whether the resume wording and internal platform names should appear publicly. The source says "App Engine" without identifying its vendor, so it has not been expanded to "Google App Engine." No public code or demo was supplied for this work.

## 5. Projects

Only the five projects listed in the resume are included, as requested during your review. Project dates come from the resume; repository creation dates are not treated as project start dates.

### 5.1 Predator-Prey RL Simulator

- **Category:** Reinforcement learning / course project.
- **Period:** Mar 2026-Apr 2026.
- **Context:** Course project under Prof. Washim Mondal; GitHub documentation identifies EE765 Assignments 1 and 2.
- **Repository:** [Predator-Prey-RL-Simulator](https://github.com/Harsh-sarawagi/Predator-Prey-RL-Simulator).
- **Documentation:** [Assignment 1](https://github.com/Harsh-sarawagi/Predator-Prey-RL-Simulator/blob/main/assignment_1/README.md), [Assignment 2](https://github.com/Harsh-sarawagi/Predator-Prey-RL-Simulator/blob/main/assignment_2/README.md).

Collected content:

- Modeled a predator-prey grid world with states, actions, stochastic transitions, and rewards.
- Implemented Value Iteration, Policy Iteration, and neural network policy-gradient methods.
- Used PyTorch and SciPy sparse matrices for computation and memory efficiency.
- Benchmarked runtime, convergence, and scalability as the state space grew.
- Compared Adam against Stochastic Gradient Ascent and reported more stable policies with smoother, faster convergence.
- GitHub documentation additionally describes policy evaluation, transition-kernel estimation through sampling, and REINFORCE training.

**Reported result:** Approximately 13+ reward per episode with Adam versus approximately 11 with Stochastic Gradient Ascent. This result is from the resume; the experiments were not rerun.

**Stack:** Python, PyTorch, NumPy, SciPy, Matplotlib.

**Suggested project card:** A predator-prey grid-world simulator comparing classical planning and policy-gradient methods, with benchmarks for convergence, scalability, and policy stability.

### 5.2 AI Assistant for Programming / CP Assistant

- **Category:** AI application / competitive programming / browser extension.
- **Period:** Dec 2024-Jan 2025.
- **Context:** Google Development Group, IIT Kanpur, as named in the resume.
- **Repository:** [CP-Assistant](https://github.com/Harsh-sarawagi/CP-Assistant).
- **Primary documentation:** [Current README](https://github.com/Harsh-sarawagi/CP-Assistant/blob/main/README.md).

Collected content:

- Built a competitive programming platform for Codeforces analytics, rating predictions, and personalized practice.
- Developed a Chrome extension providing contextual insights on Codeforces problem pages.
- Designed a PostgreSQL-backed system for user profiles, submissions, contests, and performance data.
- Developed RESTful APIs with authentication and deployed using Docker and Gunicorn on Oracle Cloud, according to the resume.
- The current README describes profile and submission analytics, rating trajectories, solved-problem statistics, weak-tag analysis, AI-assisted code review, and personalized practice roadmaps.
- Recommendations filter candidates using problem tags, difficulty, and submission history, then use AI to select a candidate with a deterministic fallback.
- The extension uses Manifest V3 and currently supports Codeforces `/problemset/problem/` pages. Its README explicitly excludes `/contest/` pages.

**Stack:** Python, Django, PostgreSQL, HTML, CSS, Bootstrap, JavaScript, Chrome Manifest V3, Groq-compatible AI API, BeautifulSoup, Docker, Gunicorn, WhiteNoise, Oracle Cloud.

**Suggested project card:** A Codeforces analytics platform and Chrome extension that turn submission history into problem insights, AI-assisted code reviews, and personalized practice recommendations.

**Review notes:** Confirm the preferred display name, current demo URL, and whether the dates represent the initial build or a larger development period. A dated cached README used the name "Algolytics" and described SQLite, but the current API-fetched README confirms PostgreSQL and CP Assistant. No current demo URL appears in that README.

### 5.3 STUNT Reimplementation

- **Category:** Self-supervised learning / few-shot tabular learning.
- **Period:** Aug 2026.
- **Context:** Self-project.
- **Repository:** [STUNT-Reimplementation](https://github.com/Harsh-sarawagi/STUNT-Reimplementation).
- **Documentation:** [README](https://github.com/Harsh-sarawagi/STUNT-Reimplementation/blob/main/README.md).

Collected content:

- Independently reimplemented STUNT for self-supervised tabular representations and few-shot classification.
- Used perturbation-based task generation and episodic Prototypical Network training.
- Built preprocessing, training, pseudo-validation, checkpointing, and evaluation pipelines.
- Evaluated 1-, 2-, 5-, and 10-shot performance on Wisconsin Diagnostic Breast Cancer (WDBC) and Adult/Census Income data.
- The README describes K-means pseudo-label generation, feature permutation, an MLP encoder, and downstream logistic regression on frozen embeddings.
- Compared learned embeddings with raw features using matched support sets over 100 trials, reporting mean and standard deviation.
- The repository describes this as an educational/research reproduction and credits the original STUNT work.

**Reported result:** On Census Income at 1-shot, +6.2 percentage points in accuracy and +10.7 percentage points in F1 over raw features across 100 evaluation trials. The numerical gains come from the resume; the README documents the protocol but the runs were not independently reproduced.

**Stack:** Python, PyTorch, NumPy, Pandas, scikit-learn, SciPy, Matplotlib, Seaborn, PyYAML, pytest.

**Suggested project card:** An independent STUNT reproduction for few-shot tabular learning, with an end-to-end training pipeline and controlled comparisons against raw-feature baselines.

### 5.4 Illuminating Language - IITK RAG Chatbot

- **Category:** NLP / retrieval-augmented generation.
- **Period:** May 2024-Jul 2024.
- **Context:** The Brain and Cognitive Science Club, IIT Kanpur.
- **Repository:** [BCS-Lluminating-Language](https://github.com/Harsh-sarawagi/BCS-Lluminating-Language).
- **Documentation:** [README](https://github.com/Harsh-sarawagi/BCS-Lluminating-Language/blob/main/README.md).

Collected content from the resume:

- Built an IITK-specific RAG chatbot to answer questions using institutional information.
- Scraped IITK resources and implemented semantic search with InstructorEmbeddings and ChromaDB.
- Used RAG Fusion, query rewriting, conversation history, and query routing to improve retrieval.
- Used system prompting to improve response relevance.
- Developed a Streamlit interface for contextual question answering.

**Stack:** Python, InstructorEmbeddings, ChromaDB, Streamlit, RAG techniques.

**Suggested project card:** An IIT Kanpur knowledge assistant that combines semantic retrieval, query rewriting, and conversation context to answer institute-specific questions.

**Attribution note:** GitHub marks this repository as a fork. Its README primarily describes the club's learning program and resources, rather than documenting the complete final chatbot. The implementation claims above come from your resume. Confirm your individual contribution and the best link to the final implementation before featuring it.

### 5.5 Full-Stack Social Media Web App

- **Category:** Full-stack web development.
- **Period:** Jun 2024, as listed in the resume.
- **Context:** Self-project.
- **Repository:** [social-media-website](https://github.com/Harsh-sarawagi/social-media-website).
- **Listed demo:** [client-rw4x.onrender.com](https://client-rw4x.onrender.com/) - taken from the README; availability and functionality have not been tested.

Collected content:

- Built authentication, friend requests, post sharing, likes, comments, and user interactions.
- Developed RESTful APIs with Node.js and Express, using MongoDB and Mongoose for persistence and schemas.
- Built a responsive React frontend with Zustand state management.
- Separated the frontend and backend into independently deployable services.
- The repository description additionally lists profile management, cookie-based authentication, image uploads, and Cloudinary storage.
- Package manifests confirm React, Zustand, React Router, Axios, Vite, Tailwind CSS, Express, Mongoose, Cloudinary, JWT, and bcryptjs dependencies.

**Stack:** React, JavaScript, Zustand, Tailwind CSS, Vite, Node.js, Express, MongoDB, Mongoose, Cloudinary.

**Suggested project card:** A full-stack social platform with profiles, friend requests, image posts, and social interactions, built with React, Zustand, Express, and MongoDB.

**Review note:** The resume dates this project to Jun 2024; the public repository was created in Jul 2025. This may reflect a later upload. Confirm the original development date.

## 6. Selected GitHub repositories

Only repositories corresponding to the five resume projects are included in the portfolio content.

| Project | Repository | Type |
| --- | --- | --- |
| Predator-Prey RL Simulator | [Predator-Prey-RL-Simulator](https://github.com/Harsh-sarawagi/Predator-Prey-RL-Simulator) | Non-fork |
| AI Assistant for Programming / CP Assistant | [CP-Assistant](https://github.com/Harsh-sarawagi/CP-Assistant) | Non-fork |
| STUNT Reimplementation | [STUNT-Reimplementation](https://github.com/Harsh-sarawagi/STUNT-Reimplementation) | Non-fork |
| Illuminating Language - IITK RAG Chatbot | [BCS-Lluminating-Language](https://github.com/Harsh-sarawagi/BCS-Lluminating-Language) | Fork |
| Full-Stack Social Media Web App | [social-media-website](https://github.com/Harsh-sarawagi/social-media-website) | Non-fork |

Fork status is GitHub metadata, not a judgment about contribution. The club project is attributed in its description above.

## 7. Technical skills

### Explicitly listed in the resume

| Group | Skills |
| --- | --- |
| Programming languages | C, C++, Python, JavaScript, SQL |
| Libraries and utilities | NumPy, Pandas, PyTorch, scikit-learn, Mongoose, LangChain, BeautifulSoup, Selenium |
| Frameworks and technologies | React, Express, FastAPI, Django, MongoDB, Streamlit, MCP, JSON-RPC, HTML, CSS |

### Additional technologies evidenced by projects

These are evidenced by project descriptions, documentation, or dependency manifests. They are not claims of expert proficiency.

| Area | Technologies and concepts | Evidence |
| --- | --- | --- |
| Frontend | Tailwind CSS, Vite, Zustand, Bootstrap | Social app manifests; CP Assistant README |
| Backend and data | Node.js, PostgreSQL, Oracle DB | Resume and CP Assistant README |
| Deployment and operations | Docker, Gunicorn, WhiteNoise, Oracle Cloud, Splunk, Swagger UI | Resume and CP Assistant README |
| AI and retrieval | RAG, InstructorEmbeddings, ChromaDB, Groq-compatible APIs | Resume and project READMEs |
| ML and scientific computing | SciPy, Matplotlib, Seaborn, reinforcement learning, few-shot learning, self-supervised learning, Prototypical Networks | Simulator and STUNT documentation; resume |
| Browser and storage integrations | Chrome Manifest V3, Cloudinary | CP Assistant README and social app description/manifests |

Avoid percentage-based skill bars or proficiency rankings until you choose how you want to represent your experience.

## 8. Education

| Qualification | Institution | Year / period | Result |
| --- | --- | --- | --- |
| B.Tech, Electrical Engineering | Indian Institute of Technology Kanpur | 2023-2027; expected graduation 2027 | CPI 7.7/10.0 |
| CBSE Class XII | Mahatma Hansraj Modern School, Jhansi | 2023 | 91.2% |
| CBSE Class X | Jai Academy, Jhansi | 2021 | 97.8% |

Source: Resume; LinkedIn's public summary additionally supports the IIT Kanpur period of 2023-2027. Decide whether the school-level entries and grades belong on the website or only in the downloadable resume.

## 9. Scholastic achievements

### JEE Advanced, 2023

- Secured rank **2295** in JEE Advanced 2023.
- Source: Supplied directly by Harsh during content review.

### JEE Main, 2023

- Secured rank **3106** in JEE Main 2023.
- Source: Supplied directly by Harsh during content review.

### National Talent Search Examination (NTSE), 2021

- Qualified for NTSE, ranking among the top 0.02% of more than one million candidates. The percentage was corrected directly by Harsh during website review; the supplied PDF still shows the earlier figure.
- Suggested concise wording: "Qualified NTSE in 2021, among the top 0.02% of 1M+ candidates."
- Confirm the stage/qualification wording and numerical claim before publication. No additional award certificate or external result was supplied.

## 10. Leadership and mentoring

### Academic Mentor

- **Organization:** Center for Mental Health and Wellbeing, IIT Kanpur.
- **Period:** Jul 2024-May 2025.
- **Source:** Resume.
- Provided academic mentorship to first-year students in Engineering Drawing (TA111), including regular doubt sessions.
- Assisted the Institute Counselling Service (ICS) with a 10-day orientation program serving more than 1,200 newly admitted students.

**Suggested summary:** Mentored first-year students in Engineering Drawing and helped run a 10-day orientation program for 1,200+ incoming students.

The 1,200+ figure refers to the orientation cohort, not the number of students personally mentored.

## 11. Relevant coursework

Collected from the resume, with capitalization normalized:

- Data Structures and Algorithms.
- Introduction to Machine Learning.
- Introduction to Reinforcement Learning.
- Fundamentals of Computing.
- Machine Learning for Signal Processing.
- Blockchain Technology and Application.
- Probability and Statistics.
- Foundation of Modern AI.

## 12. Review outcome and remaining assets

Content reviewed by Harsh on 11 November 2026:

- [x] Include only the five projects mentioned in the resume.
- [x] Add JEE Advanced 2023 rank 2295 to scholastic achievements.
- [x] Add JEE Main 2023 rank 3106 to scholastic achievements.
- [x] Remaining collected content and suggested copy accepted: "else everything is looking good."

The source limitations and provenance notes above remain for reference; the content review is complete. Optional assets for the design stage include a preferred headshot/avatar, project screenshots, and working demo URLs. Target roles and availability can be added if supplied.

## 13. Handoff for the design stage

Your requested direction is an attractive, eye-catching portfolio inspired by open-source designs. Design references, layout, animations, color palette, framework selection, and implementation will follow after this content review.

This file records the reviewed content and requested revisions. Current website development and preview are localhost-only. Deployment will be handled later.
