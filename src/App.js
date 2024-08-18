// src/App.js
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaSun,
  FaMoon,
  FaArrowUp,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [formStatus, setFormStatus] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(new FormData(e.target));
    emailjs
      .sendForm(
        "service_e0ji6sb",
        "template_s238klp",
        e.target,
        "Npt_ru1WaSc0y7nMf"
      )
      .then(
        (result) => {
          setFormStatus("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send message:", error);
          setFormStatus("Failed to send message. Please try again later.");
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const projects = [
    {
      title: "Booking System",
      shortDescription:
        "A full-featured platform for optimizing booking processes.",
      description:
        "This project involved the creation of a dynamic booking platform aimed at streamlining service reservations for local businesses. It features role-based access control, secure user authentication, and integrated payment processing, all designed to optimize the user experience. Through this project, I honed my skills in developing scalable applications, while also ensuring the platform's security and reliability.",
      keyLearnings: [
        "Enhanced my expertise in backend development by integrating third-party payment systems and implementing secure, role-based access controls.",
      ],
      techStack: ["React", "NestJS", "PostgreSQL", "Stripe"],
      screenshots: ["/bookingsystem1.png", "/bookingsystem2.png"],
      githubLink: "https://github.com/chrispsang/Booking-System.git",
      siteLink: "https://booking-system-muqm.onrender.com/",
    },
    {
      title: "Wellness Wise",
      shortDescription: "A holistic tracker for health and wellness goals.",
      description:
        "Wellness Wise is a comprehensive application designed to monitor and improve users' overall health and wellness. It integrates various data types, such as physical activity, diet, mood, and sleep patterns, into a unified, user-friendly interface. This project allowed me to delve into sentiment analysis and personalized recommendations, sharpening my skills in creating applications that provide actionable insights based on user data.",
      keyLearnings: [
        "Gained experience in handling complex datasets, applying machine learning for sentiment analysis, and delivering actionable insights to users, which deepened my knowledge in full-stack development and data analysis.",
      ],
      techStack: [
        "Angular",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Python",
        "Chart.js",
      ],
      screenshots: ["/wellnesswise.png"],
      githubLink: "https://github.com/chrispsang/Wellness-Wise.git",
      siteLink: "https://wellness-wise.vercel.app",
    },
    {
      title: "LearnHub",
      shortDescription: "An innovative online learning platform.",
      description:
        "LearnHub is an innovative platform designed to facilitate interactive learning through features such as quizzes, progress tracking, and community engagement. This project was an exercise in building scalable, user-friendly educational tools, where I focused on enhancing user interaction through gamified elements and robust backend support.",
      keyLearnings: [
        "Deepened my understanding of building scalable web applications, particularly in the educational technology space.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Sequelize",
      ],
      screenshots: ["learnhub.png"],
      githubLink: "https://github.com/chrispsang/LearnHub.git",
      siteLink: "https://github.com/chrispsang/LearnHub.git",
    },
    {
      title: "Skincare E-Commerce Platform",
      shortDescription:
        "A specialized online store for Korean skincare enthusiasts.",
      description:
        "This e-commerce platform caters to the niche market of Korean skincare products, offering a seamless shopping experience with features like user authentication, product management, and secure checkout. Through this project, I explored various aspects of e-commerce development, including frontend design, backend logic, and secure transaction handling, all aimed at providing users with a reliable and enjoyable shopping experience.",
      keyLearnings: [
        "Enhanced my skills in developing e-commerce platforms, focusing on user experience, secure payment processing, and advanced product management.",
      ],
      techStack: ["JavaScript", "HTML", "CSS", "Django", "SQLite", "Stripe"],
      screenshots: ["skincare.png"],
      githubLink: "https://github.com/chrispsang/Beauty-Skincare.git",
      siteLink: "https://github.com/chrispsang/Beauty-Skincare.git",
    },
    {
      title: "Chris's Arcade",
      shortDescription:
        "A collection of classic mini-games including Brick Breaker and Snake.",
      description:
        "Chris's Arcade is a nostalgic collection of classic mini-games like Brick Breaker and Snake. I enjoyed working on this project as it allowed me to blend creativity with technical skills. The user authentication and leaderboard features provided a challenging yet rewarding experience, directly impacting user engagement and competition. Firebase made real-time score tracking seamless, enhancing the overall gaming experience.",
      keyLearnings: [
        "Enhanced my skills in front-end development and game design by integrating a real-time database and user authentication using Firebase.",
      ],
      techStack: ["JavaScript", "HTML", "CSS", "Firebase"],
      screenshots: ["/arcadegame1.png", "/arcadegame2.png"],
      githubLink: "https://github.com/chrispsang/Arcade-games",
      siteLink: "https://chrispsang.github.io/Arcade-games",
    },
    {
      title: "Weather App",
      shortDescription:
        "A full-stack application providing current weather conditions and 5-day forecasts.",
      description:
        "The Weather App is a comprehensive full-stack web application that enables users to search for current weather conditions and view 5-day forecasts for any city. This project was particularly satisfying as it allowed me to dive deep into full-stack development, from front-end user interface design to backend API integration. Deploying the application with Docker was especially intriguing, providing hands-on experience with containerization. The ability to save favorite locations added a personalized touch that enhances user experience.",
      keyLearnings: [
        "Strengthened my understanding of full-stack development by building a weather application with React.js and Node.js, and gained valuable experience in deploying applications using Docker.",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "OpenWeatherMap API",
        "Docker",
      ],
      screenshots: ["/weatherapp.png"],
      githubLink: "https://github.com/chrispsang/Weather-App",
    },

    {
      title: "Healthcare Data Analysis Project",
      shortDescription:
        "Analyzing synthetic patient data to improve healthcare outcomes using machine learning.",
      description:
        "This project focused on analyzing synthetic patient data to uncover trends and make predictions that could enhance healthcare outcomes. By employing various machine learning models, I explored hidden patterns in the data, contributing to better healthcare decisions. This project deepened my expertise in data exploration, preprocessing, and the application of machine learning techniques in healthcare analytics.",
      keyLearnings: [
        "Developed expertise in data exploration, preprocessing, and model building, and gained insights into the application of machine learning in healthcare analytics.",
      ],
      techStack: [
        "Python",
        "Jupyter Notebook",
        "Scikit-learn",
        "Pandas",
        "Matplotlib",
      ],
      screenshots: ["/feature_importance.png", "/correlation_heatmap.png"],
      githubLink: "https://github.com/chrispsang/HealthCare-DataAnalysis.git",
    },
    {
      title: "Churn Analysis Project",
      shortDescription:
        "Predicting customer churn for a subscription service using data analysis and machine learning.",
      description:
        "This project involved analyzing customer data to identify patterns and predict churn in a subscription-based service. By building and evaluating predictive models, I uncovered key factors driving customer churn, offering actionable insights for retention strategies. The project also emphasized visual storytelling through data, using Tableau to create an insightful dashboard.",
      keyLearnings: [
        "Enhanced skills in data preprocessing, exploratory data analysis, and model evaluation, with a strong emphasis on visual storytelling using Tableau.",
      ],
      techStack: ["Python", "Pandas", "Scikit-learn", "Tableau"],
      screenshots: ["/Dashboard.jpg"],
      githubLink: "https://github.com/chrispsang/CustomerChurnAnalysis.git",
      siteLink:
        "https://public.tableau.com/views/ChurnAnalysisDashboard_17225321250850/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    {
      title: "Library Management System",
      shortDescription: "A Java-based library management system with a GUI.",
      description:
        "As part of a group project for a software design course, we developed a comprehensive library management system featuring a graphical user interface. The system simulates database functionality using CSV files for efficient data storage and retrieval. The project emphasized applying software design principles and patterns, creating a modular and maintainable codebase, and implementing automated testing.",
      keyLearnings: [
        "Gained experience in group collaboration, applying software design principles and patterns, creating a modular codebase, and implementing automated testing to ensure system reliability.",
      ],
      techStack: ["Java", "JUnit", "Randoop", "CSV"],
      screenshots: ["/library.png"],
      githubLink: "https://github.com/chrispsang/Library-Management-System",
    },
    {
      title: "Restaurant Booking App Design",
      shortDescription: "UI/UX design for a restaurant booking app.",
      description:
        "This project involved collaboratively designing a restaurant booking app prototype as part of a user interface course. The design process included conducting user research, creating wireframes, and iteratively refining the interface based on feedback. The project emphasized applying UI/UX principles to create an intuitive and user-friendly app design.",
      keyLearnings: [
        "Enhanced my understanding of user-centered design, from conducting user research to creating wireframes and mockups. Improved my ability to incorporate feedback and iteratively refine designs.",
      ],
      techStack: ["Figma"],
      screenshots: ["/restaurant.png"],
      siteLink:
        "https://www.figma.com/design/CYCLvqAtJ7b1iT5tkxtoH2/Restaurant-Booking-App?node-id=0-1&t=q4sGhikEHVEfju3S-0",
    },
  ];

  const skills = {
    "Programming Languages": [
      {
        label: "Java",
        url: "https://www.java.com/",
        img: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white",
      },
      {
        label: "C",
        url: "https://en.wikipedia.org/wiki/C_(programming_language)",
        img: "https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white",
      },
      {
        label: "Python",
        url: "https://www.python.org/",
        img: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      },
      {
        label: "TypeScript",
        url: "https://www.typescriptlang.org/",
        img: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
      },
      {
        label: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        img: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      },
      {
        label: "Bash Scripting",
        url: "https://www.gnu.org/software/bash/",
        img: "https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white",
      },
    ],
    "Web Development": [
      {
        label: "React",
        url: "https://reactjs.org/",
        img: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white",
      },
      {
        label: "Angular",
        url: "https://angular.io/",
        img: "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",
      },
      {
        label: "Node.js",
        url: "https://nodejs.org/",
        img: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white",
      },
      {
        label: "HTML5",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        img: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      },
      {
        label: "CSS3",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        img: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      },
    ],
    "Database & Tools": [
      {
        label: "PostgreSQL",
        url: "https://www.postgresql.org/",
        img: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white",
      },
      {
        label: "MySQL",
        url: "https://www.mysql.com/",
        img: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
      },
      {
        label: "SQLite",
        url: "https://sqlite.org/",
        img: "https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white",
      },
      {
        label: "Sequelize",
        url: "https://sequelize.org/",
        img: "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white",
      },
      {
        label: "Firebase",
        url: "https://firebase.google.com/",
        img: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white",
      },
      {
        label: "Supabase",
        url: "https://supabase.com/",
        img: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
      },
    ],
    "Frameworks & Libraries": [
      {
        label: "Django",
        url: "https://www.djangoproject.com/",
        img: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
      },
      {
        label: "Nest.js",
        url: "https://nestjs.com/",
        img: "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
      },
      {
        label: "Express.js",
        url: "https://expressjs.com/",
        img: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
      },
      {
        label: "numpy",
        url: "https://numpy.org/",
        img: "https://img.shields.io/badge/numpy-013243?style=for-the-badge&logo=numpy&logoColor=white",
      },
      {
        label: "pandas",
        url: "https://pandas.pydata.org/",
        img: "https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
      },
      {
        label: "matplotlib",
        url: "https://matplotlib.org/",
        img: "https://img.shields.io/badge/matplotlib-3776AB?style=for-the-badge&logo=python&logoColor=white",
      },
      {
        label: "scikit-learn",
        url: "https://scikit-learn.org/",
        img: "https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white",
      },
      {
        label: "Seaborn",
        url: "https://seaborn.pydata.org/",
        img: "https://img.shields.io/badge/Seaborn-3776AB?style=for-the-badge&logo=python&logoColor=white",
      },
    ],
    "Testing & DevOps": [
      {
        label: "JUnit",
        url: "https://junit.org/junit5/",
        img: "https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white",
      },
      {
        label: "Randoop",
        url: "https://randoop.github.io/randoop/",
        img: "https://img.shields.io/badge/Randoop-000000?style=for-the-badge&logo=github&logoColor=white",
      },
      {
        label: "Maven",
        url: "https://maven.apache.org/",
        img: "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white",
      },
      {
        label: "Postman",
        url: "https://www.postman.com/",
        img: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
      },
      {
        label: "Git",
        url: "https://git-scm.com/",
        img: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
      },
      {
        label: "GitHub",
        url: "https://github.com/",
        img: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
      },
      {
        label: "CI/CD",
        url: "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment",
        img: "https://img.shields.io/badge/CI%2FCD-007ACC?style=for-the-badge&logo=githubactions&logoColor=white",
      },
      {
        label: "Docker",
        url: "https://www.docker.com/",
        img: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
      },
    ],
    "Deployment & Hosting Platforms": [
      {
        label: "Render",
        url: "https://render.com/",
        img: "https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white",
      },
      {
        label: "Vercel",
        url: "https://vercel.com/",
        img: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
      },
      {
        label: "Fly.io",
        url: "https://fly.io/",
        img: "https://img.shields.io/badge/Fly.io-8F00FF?style=for-the-badge&logo=flydotio&logoColor=white",
      },
    ],
    "Design & Productivity Tools": [
      {
        label: "Tableau",
        url: "https://www.tableau.com/",
        img: "https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white",
      },
      {
        label: "Figma",
        url: "https://www.figma.com/",
        img: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
      },
    ],
  };

  const categoryNames = Object.keys(skills);

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <nav>
        <button onClick={() => scrollToSection(aboutRef)}>About</button>
        <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
        <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        <button
          onClick={toggleDarkMode}
          className="theme-toggle"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </nav>

      <header className="header">
        <h1>Christina Piang Sang</h1>
        <p>
          Full-Stack Developer | Passionate about crafting clean, efficient, and
          impactful solutions.
        </p>
      </header>

      <div id="about" className="section about" ref={aboutRef}>
        <div data-aos="fade-up">
          <h2>About Me</h2>
          <img src="profile.jpg" alt="Profile" className="profile-pic" />
          <p style={{ marginBottom: "20px" }}>
            Hello, and welcome to my portfolio! My passion for technology began
            in high school when I first explored{" "}
            <strong>Computer Science</strong>. This initial exposure ignited a
            desire to explore the field further, leading me to pursue my studies
            at <strong>York University</strong>. Throughout my academic journey,
            I’ve developed a deep understanding of various{" "}
            <strong> programming languages, frameworks, and tools</strong>. My
            projects reflect my enthusiasm for creating user-centric
            applications that solve real-world problems, from personalized
            wellness trackers to dynamic e-commerce platforms.
          </p>
          <p style={{ marginBottom: "20px" }}>
            I’m driven by a curiosity to continuously explore{" "}
            <strong>new technologies</strong> and improve my skills. I enjoy
            taking on challenges that push me to think{" "}
            <strong>critically and creatively</strong>, and I’m always eager to{" "}
            <strong>collaborate</strong> with others who share a similar passion
            for technology.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Beyond my tech interests, I find joy and balance in dance and music.
            Playing the piano and exploring different dance styles are my
            creative outlets, allowing me to express myself artistically. This
            blend of technical skills and artistic pursuits keeps me creative
            and motivated, both in my academic projects and in my personal life.
          </p>
        </div>
      </div>

      <div id="skills" className="section skills" ref={skillsRef}>
        <div data-aos="fade-up">
          <h2 className="skills-title">Skills</h2>
          <div className="category-buttons">
            <button
              className={`category-button ${
                selectedCategory === "All" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            {categoryNames.map((category, index) => (
              <button
                key={index}
                className={`category-button ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="badges">
            {categoryNames.map(
              (category) =>
                (selectedCategory === "All" || selectedCategory === category) &&
                skills[category].map((skill, index) => (
                  <a
                    key={index}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-badge"
                  >
                    <img
                      src={skill.img}
                      alt={skill.label}
                      className="skill-img"
                    />
                  </a>
                ))
            )}
          </div>
        </div>
      </div>

      <div id="projects" className="section projects" ref={projectsRef}>
        <div data-aos="fade-up">
          <h2>Projects</h2>

          <div className="project-list">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => handleProjectClick(project)}
              >
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-bubble">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="overlay">
                  <span className="click-for-more">Click for more</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>
                &times;
              </button>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <h4>Key Learnings:</h4>
              <p>{selectedProject.keyLearnings.join(", ")}</p>
              <h4>Tech Stack:</h4>
              <p>{selectedProject.techStack.join(" | ")}</p>
              <div className="screenshots">
                {selectedProject.screenshots.map((screenshot, idx) => (
                  <img
                    key={idx}
                    src={screenshot}
                    alt={`Screenshot ${idx + 1}`}
                    onClick={() => handleImageClick(screenshot)}
                    className="clickable-image"
                  />
                ))}
              </div>
              <div className="modal-links">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    View GitHub
                  </a>
                )}
                {selectedProject.siteLink && (
                  <a
                    href={selectedProject.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    View Site
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {selectedImage && (
          <div className="image-modal" onClick={closeImageModal}>
            <div
              className="image-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Selected Screenshot" />
              <button className="close-button" onClick={closeImageModal}>
                &times;
              </button>
            </div>
          </div>
        )}
      </div>

      <div id="contact" className="section contact" ref={contactRef}>
        <div data-aos="fade-up">
          <h2>Contact</h2>
          <form onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="from_name" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" name="reply_to" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea name="message" id="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>

            {formStatus && <p className="form-status">{formStatus}</p>}
          </form>
          <div className="contact-icons">
            <a href="mailto:christinapsang@gmail.com" aria-label="Email">
              <FaEnvelope size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/christina-p-9ba2b5a0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              href="https://github.com/chrispsang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>
      {showBackToTop && (
        <button
          onClick={() => scrollToSection({ current: document.body })}
          className="back-to-top"
          aria-label="Back to Top"
        >
          <FaArrowUp size={24} />
        </button>
      )}

      <footer>
        <p>&copy; 2024 Christina Piang Sang. All rights reserved.</p>
        <p>
          This portfolio was built in React and deployed using GitHub Pages.
        </p>
      </footer>
    </div>
  );
}

export default App;
