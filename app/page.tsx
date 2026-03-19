'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';

const projects = [
  {
    id: '001',
    title: 'AI Mental Health Bot',
    year: '2025',
    type: 'AI/NLP',
    description:
      'Conversational AI for safe, non-medical emotional support with preprocessing, intent detection, sentiment analysis, and context-aware responses.',
  },
  {
    id: '002',
    title: 'Stock Market Dashboard',
    year: '2025',
    type: 'Data/ML',
    description:
      'Interactive dashboard combining sentiment scoring, EDA, visualization, and forecasting experiments for practical financial insights.',
  },
  {
    id: '003',
    title: 'Spring Boot Social Media API',
    year: '2024',
    type: 'Backend',
    description:
      'Production-style backend with JWT authentication, REST endpoints for users/posts/comments, validation, error handling, and database integration.',
  },
  {
    id: '004',
    title: 'Pac-Man Style Game',
    year: '2024',
    type: 'Game Dev',
    description:
      'Arcade game focused on movement logic, collision detection, scoring, and basic enemy behavior to demonstrate problem-solving and gameplay systems.',
  },
];

const skillCards = [
  {
    icon: 'AI',
    title: 'AI / Data Science',
    description:
      'Building practical ML pipelines for NLP, sentiment analysis, preprocessing, and evaluation with real-world focus.',
    tags: ['Machine Learning', 'NLP', 'Sentiment Analysis', 'Model Evaluation'],
  },
  {
    icon: 'BE',
    title: 'Backend Development',
    description:
      'Designing scalable APIs and backend services with clean architecture, authentication, and reliable data workflows.',
    tags: ['Spring Boot', 'REST APIs', 'JWT', 'Database Design'],
  },
  {
    icon: 'DV',
    title: 'Data Visualization',
    description:
      'Converting raw data into clear visual stories and dashboards that support decisions and experimentation.',
    tags: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly'],
  },
  {
    icon: 'PG',
    title: 'Programming',
    description:
      'Strong implementation fundamentals across Python, Java, and JavaScript for product features and systems work.',
    tags: ['Python', 'Java', 'JavaScript', 'Problem Solving'],
  },
  {
    icon: 'TL',
    title: 'Tools / Workflow',
    description:
      'Daily workflow centered around modern tooling for collaboration, debugging, API testing, and deployment.',
    tags: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel'],
  },
];

const certificates = [
  'Data Structures & Algorithms',
  'Java Programming',
  'Python for Data Science',
  'Cloud Computing (IIT Kharagpur - NPTEL)',
  'Machine Learning Basics',
  'Data Analysis with Python',
  'NLP Fundamentals',
  'Backend Development (Spring Boot)',
  'API Development & Testing',
];

export default function Home() {
  return (
    <div className="portfolio-shell">
      <nav className="portfolio-nav">
        <div className="portfolio-logo">pm_</div>
        <ul className="portfolio-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="hero" className="portfolio-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="portfolio-status"
        >
          <span className="portfolio-dot" />
          Available for opportunities · Pre-final year CS
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="portfolio-tag"
        >
          Computer Science · Data Science · AI · Backend
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="portfolio-name"
        >
          Punya<br />
          <span>Mohun</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="portfolio-sub"
        >
          I&apos;m Punya Mohun, a Data Science and AI Engineer with a strong interest in backend development and intelligent systems. I build practical applications combining machine learning, data analysis, and scalable APIs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="portfolio-cta"
        >
          <MagneticButton href="#projects" className="portfolio-btn portfolio-btn-filled">
            See My Work
          </MagneticButton>
          <MagneticButton href="#contact" className="portfolio-btn">
            Get in Touch
          </MagneticButton>
        </motion.div>

        <div className="portfolio-bg-text">DS</div>
      </section>

      <section id="about" className="portfolio-section">
        <p className="section-label">01 — About</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="about-grid">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-bio"
          >
            <p>
              I&apos;m <strong>Punya Mohun</strong>, a Data Science and AI engineer with a strong interest in backend development and intelligent systems.
            </p>
            <p>
              I work on practical applications involving machine learning, data analysis, and scalable APIs. My projects range from sentiment analysis systems to full-stack dashboards and backend services.
            </p>
            <p>
              I enjoy solving complex problems, learning new technologies, and building work that combines logic, data, and real-world impact.
            </p>
            <p>
              Currently, I am focused on strengthening AI/ML, backend engineering, and system design while preparing for opportunities like GSoC and software engineering roles.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="about-stats"
          >
            <div className="stat-box">
              <p className="stat-num">4</p>
              <p className="stat-label">Core Projects</p>
            </div>
            <div className="stat-box">
              <p className="stat-num">5</p>
              <p className="stat-label">Skill Tracks</p>
            </div>
            <div className="stat-box">
              <p className="stat-num">9</p>
              <p className="stat-label">Certificates</p>
            </div>
            <div className="stat-box">
              <p className="stat-num">AI</p>
              <p className="stat-label">Focus Area</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="portfolio-section">
        <p className="section-label">02 — Skills</p>
        <h2 className="section-title">What I Work With</h2>
        <div className="skills-grid">
          {skillCards.map((card) => (
            <motion.article
              key={card.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 28 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="skill-card"
            >
              <p className="skill-icon">{card.icon}</p>
              <h3 className="skill-name">{card.title}</h3>
              <p className="skill-desc">{card.description}</p>
              <div className="skill-tags">
                {card.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="portfolio-section">
        <p className="section-label">03 — Projects</p>
        <h2 className="section-title">Things I&apos;ve Built</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 28 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
              className="project-row"
            >
              <p className="project-num">{project.id}</p>
              <div>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                <span className="project-type">{project.type}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="certificates" className="portfolio-section">
        <p className="section-label">04 — Certificates</p>
        <h2 className="section-title">Achievement Badges</h2>
        <div className="cert-grid">
          {certificates.map((cert) => (
            <motion.div
              key={cert}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="cert-card"
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="portfolio-section portfolio-contact">
        <p className="section-label">05 — Contact</p>
        <h2 className="section-title contact-title">
          Let&apos;s<br /><span>Talk.</span>
        </h2>
        <p className="contact-sub">
          Open to internships, collaborations, projects, or a conversation about CS, AI, and backend systems.
        </p>
        <div className="contact-links">
          <MagneticButton href="mailto:your.email@example.com" className="portfolio-btn portfolio-btn-filled">
            your.email@example.com
          </MagneticButton>
          <MagneticButton href="#" className="portfolio-btn">GitHub</MagneticButton>
          <MagneticButton href="#" className="portfolio-btn">LinkedIn</MagneticButton>
        </div>
      </section>

      <footer className="portfolio-footer">
        <span>© 2026 Punya Mohun</span>
        <span>Built from scratch. Updated always.</span>
      </footer>
    </div>
  );
}

