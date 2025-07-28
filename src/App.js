import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Brain, Award, GraduationCap, Star, TrendingUp, Database, Cloud, Eye, Target, BookOpen, Settings } from 'lucide-react';

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #334155',
      padding: '1rem 0'
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #c084fc, #f472b6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem',
      paddingTop: '5rem',
      position: 'relative'
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 8vw, 6rem)',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(to right, #c084fc, #f472b6, #06b6d4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#cbd5e1',
      maxWidth: '600px',
      margin: '0 auto 3rem',
      lineHeight: 1.6
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '3rem'
    },
    primaryButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'linear-gradient(to right, #7c3aed, #ec4899)',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      textDecoration: 'none',
      color: 'white',
      fontWeight: '500',
      transition: 'transform 0.3s',
      border: 'none',
      cursor: 'pointer'
    },
    secondaryButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      border: '1px solid #475569',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      textDecoration: 'none',
      color: 'white',
      fontWeight: '500',
      transition: 'background-color 0.3s',
      backgroundColor: 'transparent'
    },
    section: {
      padding: '5rem 1.5rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '4rem',
      background: 'linear-gradient(to right, #c084fc, #f472b6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    card: {
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid #475569',
      transition: 'all 0.3s',
      marginBottom: '2rem'
    },
    grid: {
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    projectCard: {
      background: 'linear-gradient(135deg, #1e293b, #334155)',
      padding: '1.5rem',
      borderRadius: '1rem',
      border: '1px solid #475569',
      transition: 'all 0.3s'
    },
    iconBox: {
      width: '3rem',
      height: '3rem',
      borderRadius: '0.5rem',
      background: 'linear-gradient(to right, #7c3aed, #ec4899)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem'
    },
    techTag: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      backgroundColor: '#374151',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      color: '#c084fc',
      margin: '0.25rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center'
    },
    socialLink: {
      padding: '0.75rem',
      backgroundColor: '#1e293b',
      borderRadius: '50%',
      color: 'white',
      textDecoration: 'none',
      transition: 'background-color 0.3s'
    }
  };

  const projects = [
    {
      title: "Quad AI",
      description: "Autonomous quadcopter with 85% object detection accuracy using TensorFlow Lite on Raspberry Pi. Patent published and presented at National Conference.",
      tech: ["TensorFlow Lite", "Raspberry Pi", "ArduPilot", "Computer Vision"],
      highlights: ["Patent Published", "500+ images per flight", "Real-time surveillance"],
      icon: <Eye size={24} />
    },
    {
      title: "Brain Tumor Detection",
      description: "CNN model achieving 94% accuracy on 3,000+ MRI images with automated PDF report generation and management system.",
      tech: ["Python", "CNN", "Streamlit", "Docker", "AWS"],
      highlights: ["94% Accuracy", "3,000+ MRI Images", "Medical Diagnosis"],
      icon: <Brain size={24} />
    },
    {
      title: "License Plate Recognition",
      description: "Recognition system achieving 92% character recognition using custom CNN and EasyOCR validation with automated data extraction.",
      tech: ["Python", "CNN", "EasyOCR", "OpenCV", "Streamlit"],
      highlights: ["92% Recognition", "1,000+ Vehicles", "Excel Export"],
      icon: <Target size={24} />
    }
  ];

  const experience = [
    {
      title: "Technical Graduate Trainee",
      company: "NTT Data",
      period: "Jan 2025 - July 2025",
      location: "Bangalore, India",
      achievements: [
        "Resolved 150+ technical issues weekly",
        "40% reduction in average resolution time",
        "Documented 50+ technical solutions"
      ]
    },
    {
      title: "ML Research Intern",
      company: "Araikay",
      period: "Feb 2024 - May 2024",
      location: "Bangalore, India",
      achievements: [
        "Developed CV model with 87% accuracy",
        "Elderly activity monitoring for 20+ participants",
        "Created comprehensive documentation"
      ]
    }
  ];

  const skills = {
    "Programming": ["Python", "C++", "C", "SQL"],
    "AI/ML": ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "YOLO", "CNN"],
    "Data": ["Pandas", "NumPy", "Data Preprocessing", "Feature Engineering"],
    "Cloud": ["AWS (EC2, S3)", "GCP (Cloud Run)", "Docker", "CI/CD"]
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Sanjeev P Patil</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>AI/ML Engineer</h1>
          <p style={styles.heroSubtitle}>
            Transforming ideas into intelligent solutions through cutting-edge machine learning and computer vision technologies.
          </p>
          <div style={styles.buttonGroup}>
            <a href="mailto:sanjeev.patil9802@gmail.com" style={styles.primaryButton}>
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="tel:+916366558899" style={styles.secondaryButton}>
              <Phone size={20} />
              Call Me
            </a>
          </div>
          <div style={styles.socialLinks}>
            <a href="https://github.com/Sanjeev9802" style={styles.socialLink}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sanjeev-p-patil-2b3206214/" style={styles.socialLink}>
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.iconBox}>
              <GraduationCap size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Education</h3>
            <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>BE in Artificial Intelligence and Machine Learning</p>
            <p style={{ color: '#c084fc', fontWeight: '600' }}>RNS Institute of Technology, Bangalore</p>
            <p style={{ color: '#94a3b8' }}>2020 - 2024 | CGPA: 7.44</p>
          </div>
          <div style={styles.card}>
            <div style={styles.iconBox}>
              <Award size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Achievements</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>
                <Star size={16} color="#fbbf24" />
                Patent Published - Quad AI System
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>
                <BookOpen size={16} color="#10b981" />
                National Conference Presentation
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
                <Settings size={16} color="#3b82f6" />
                Multiple Technical Certifications
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <div style={styles.iconBox}>
                {project.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: '#cbd5e1', marginBottom: '1rem', fontSize: '0.9rem', lineHeight: 1.5 }}>
                {project.description}
              </p>
              <div style={{ marginBottom: '1rem' }}>
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span key={techIndex} style={styles.techTag}>{tech}</span>
                ))}
              </div>
              <div style={{ marginBottom: '1rem' }}>
                {project.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                    • {highlight}
                  </div>
                ))}
              </div>
              <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c084fc', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500' }}>
                <ExternalLink size={16} />
                View Project
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Work Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} style={{ ...styles.card, marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{exp.title}</h3>
                <p style={{ color: '#c084fc', fontWeight: '600', fontSize: '1.1rem' }}>{exp.company}</p>
                <p style={{ color: '#94a3b8' }}>{exp.location}</p>
              </div>
              <div style={{ color: '#cbd5e1', fontWeight: '500' }}>{exp.period}</div>
            </div>
            <div>
              <h4 style={{ color: '#c084fc', fontWeight: '600', marginBottom: '1rem' }}>Key Achievements</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem', color: '#cbd5e1' }}>
                    <TrendingUp size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <div style={styles.grid}>
          {Object.entries(skills).map(([category, skillList], index) => {
            const icons = {
              "Programming": <Code size={32} />,
              "AI/ML": <Brain size={32} />,
              "Data": <Database size={32} />,
              "Cloud": <Cloud size={32} />
            };
            
            return (
              <div key={index} style={styles.card}>
                <div style={{ color: '#c084fc', marginBottom: '1rem' }}>
                  {icons[category]}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>{category}</h3>
                <div>
                  {skillList.map((skill, skillIndex) => (
                    <div key={skillIndex} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#c084fc', borderRadius: '50%' }}></div>
                      <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Let's Build Something Amazing</h2>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Ready to collaborate on your next AI/ML project? Let's discuss how we can transform your ideas into intelligent solutions.
          </p>
          <div style={styles.buttonGroup}>
            <a href="mailto:sanjeev.patil9802@gmail.com" style={styles.primaryButton}>
              <Mail size={20} />
              sanjeev.patil9802@gmail.com
            </a>
            <a href="tel:+916366558899" style={styles.secondaryButton}>
              <Phone size={20} />
              +91 6366558899
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 1.5rem', borderTop: '1px solid #334155', textAlign: 'center' }}>
        <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
          © 2025 Sanjeev P Patil. Crafted with React & modern web technologies.
        </p>
        <div style={styles.socialLinks}>
          <a href="#" style={styles.socialLink}>
            <Github size={20} />
          </a>
          <a href="#" style={styles.socialLink}>
            <Linkedin size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;