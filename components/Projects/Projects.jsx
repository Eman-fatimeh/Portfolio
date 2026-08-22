"use client";

import { useEffect, useState } from "react";
import { BsGithub, BsPlayCircleFill } from "react-icons/bs";

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("projects");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      number: "01",
      title: "VaultMind AI",
      category: "AI-Powered Knowledge Base",
      description:
        "A full-stack RAG application that allows users to upload documents and ask natural-language questions about their own content. It combines document processing, semantic search and AI-powered chat.",
      image: "/vaultmind.jpeg",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
        "SQLModel",
        "JWT",
        "Google Gemini",
      ],
      github: "https://github.com/Eman-fatimeh/VaultMind",
      demo: "https://vaultmind-demo.vercel.app",
      demoLabel: "Demo Video",
    },
    {
      number: "02",
      title: "Smart OPD",
      category: "Healthcare Management System",
      description:
        "A web-based Out-Patient Department management system designed to automate patient registration, token and queue management, doctor scheduling and appointment tracking.",
      image: "/careflow.jpeg",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "FastAPI",
        "SQLite",
      ],
      github: "https://github.com/Eman-fatimeh/SMART-OPD-Project",
      demo: "https://www.linkedin.com/posts/eman-fatima16_webdevelopment-python-fastapi-activity-7477048782271102976-b2PJ",
      demoLabel: "Demo Video",
    },
  ];

  return (
    <>
      <style>{`
        /* =====================================
           PROJECTS SECTION
        ====================================== */

        .projectsSection {
          position: relative;
          width: 100%;
          box-sizing: border-box;

          padding: clamp(75px, 10vw, 120px) 5%;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(133, 76, 230, 0.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(255, 78, 205, 0.07),
              transparent 30%
            ),
            #0a0a0f;

          color: white;
          overflow: hidden;
        }

        /* =====================================
           MAIN CONTAINER
        ====================================== */

        .projectsContainer {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1100px;

          margin: 0 auto;
          box-sizing: border-box;
        }

        /* =====================================
           HEADER
        ====================================== */

        .projectsHeader {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          width: 100%;

          gap: clamp(30px, 5vw, 60px);

          margin: 0 auto clamp(45px, 6vw, 65px);

          opacity: 0;
          transform: translateY(35px);
        }

        .projectsSection.isVisible .projectsHeader {
          animation: projectsHeaderReveal 0.8s ease forwards;
        }

        @keyframes projectsHeaderReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .projectsNumber {
          margin-bottom: 14px;

          color: #a875ff;

          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .projectsTitle {
          margin: 0;

          color: #ffffff;

          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 0.95;

          letter-spacing: clamp(-2px, -0.4vw, -4px);

          font-weight: 800;
        }

        .projectsTitle span {
          color: #666673;
        }

        .projectsIntro {
          width: 100%;
          max-width: 390px;

          margin: 0;

          color: #9999a5;

          font-size: 14px;
          line-height: 1.8;
        }

        /* =====================================
           PROJECT GRID
        ====================================== */

        .projectsGrid {
          width: 100%;
          max-width: 1050px;

          margin: 0 auto;

          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 28px;

          justify-content: center;
          align-items: stretch;

          box-sizing: border-box;
        }

        /* =====================================
           PROJECT CARD
        ====================================== */

        .projectCard {
          position: relative;

          width: 100%;
          max-width: 510px;

          margin: 0 auto;

          min-width: 0;

          box-sizing: border-box;

          border: 1px solid rgba(255, 255, 255, 0.08);

          border-radius: 20px;

          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.04),
            rgba(255, 255, 255, 0.015)
          );

          backdrop-filter: blur(12px);

          overflow: hidden;

          opacity: 0;

          transform: translateY(45px);

          transition:
            transform 0.45s ease,
            border-color 0.45s ease,
            box-shadow 0.45s ease;
        }

        .projectsSection.isVisible
        .projectCard:nth-child(1) {
          animation:
            projectReveal
            0.8s
            ease
            0.35s
            forwards;
        }

        .projectsSection.isVisible
        .projectCard:nth-child(2) {
          animation:
            projectReveal
            0.8s
            ease
            0.55s
            forwards;
        }

        @keyframes projectReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .projectCard:hover {
          transform: translateY(-10px);

          border-color: rgba(133, 76, 230, 0.4);

          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.35),
            0 0 35px rgba(133, 76, 230, 0.10);
        }

        /* =====================================
           PROJECT IMAGE
        ====================================== */

        .projectImage {
          position: relative;

          width: 100%;

          height: clamp(200px, 22vw, 230px);

          overflow: hidden;

          background: #111118;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .projectImage img {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          transition: transform 0.6s ease;
        }

        .projectCard:hover
        .projectImage img {
          transform: scale(1.06);
        }

        /* =====================================
           PROJECT NUMBER BADGE
        ====================================== */

        .projectNumberBadge {
          position: absolute;

          top: 18px;
          left: 18px;

          z-index: 3;

          padding: 6px 9px;

          border: 1px solid
            rgba(255, 255, 255, 0.12);

          border-radius: 7px;

          background:
            rgba(10, 10, 15, 0.65);

          backdrop-filter: blur(8px);

          color: #ffffff;

          font-family: "Fira Code", monospace;

          font-size: 10px;
          font-weight: 600;
        }

        /* =====================================
           PROJECT CONTENT
        ====================================== */

        .projectContent {
          width: 100%;
          box-sizing: border-box;

          padding: clamp(22px, 3vw, 30px);
        }

        .projectCategory {
          display: inline-block;

          max-width: 100%;

          margin-bottom: 13px;

          padding: 5px 9px;

          border: 1px solid
            rgba(133, 76, 230, 0.2);

          border-radius: 20px;

          background:
            rgba(133, 76, 230, 0.05);

          color: #a875ff;

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 1px;

          text-transform: uppercase;
        }

        .projectTitle {
          margin: 0 0 14px;

          color: #ffffff;

          font-size: clamp(22px, 2.5vw, 26px);

          font-weight: 750;

          letter-spacing: -0.5px;

          overflow-wrap: anywhere;
        }

        .projectDescription {
          margin: 0;

          color: #8e8e99;

          font-size: 13px;

          line-height: 1.8;

          overflow-wrap: anywhere;
        }

        /* =====================================
           TECHNOLOGIES
        ====================================== */

        .projectTechnologies {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin-top: 22px;
        }

        .projectTech {
          max-width: 100%;

          padding: 6px 10px;

          border: 1px solid
            rgba(255, 255, 255, 0.08);

          border-radius: 6px;

          background:
            rgba(255, 255, 255, 0.025);

          color: #aaaab5;

          font-family: "Fira Code", monospace;

          font-size: 9px;

          transition: 0.25s ease;
        }

        .projectTech:hover {
          color: #ffffff;

          border-color:
            rgba(133, 76, 230, 0.35);

          background:
            rgba(133, 76, 230, 0.08);

          transform: translateY(-2px);
        }

        /* =====================================
           BUTTONS
        ====================================== */

        .projectButtons {
          display: flex;

          flex-wrap: wrap;

          gap: 10px;

          margin-top: 28px;
        }

        .projectButton {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          min-height: 40px;

          padding: 10px 16px;

          box-sizing: border-box;

          border-radius: 8px;

          text-decoration: none;

          font-size: 11px;

          font-weight: 700;

          white-space: nowrap;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .projectButton svg {
          flex-shrink: 0;

          font-size: 15px;
        }

        /* =====================================
           GITHUB BUTTON
        ====================================== */

        .githubButton {
          border: 1px solid
            rgba(255, 255, 255, 0.15);

          background:
            rgba(255, 255, 255, 0.04);

          color: #ffffff;
        }

        .githubButton:hover {
          transform: translateY(-3px);

          background:
            rgba(255, 255, 255, 0.09);

          border-color:
            rgba(255, 255, 255, 0.3);

          box-shadow:
            0 8px 25px rgba(0, 0, 0, 0.25);
        }

        /* =====================================
           DEMO BUTTON
        ====================================== */

        .demoButton {
          border: none;

          background:
            linear-gradient(
              90deg,
              #854ce6,
              #ff4ecd
            );

          color: #ffffff;

          box-shadow:
            0 5px 20px
            rgba(133, 76, 230, 0.2);
        }

        .demoButton:hover {
          transform:
            translateY(-3px)
            scale(1.02);

          box-shadow:
            0 10px 30px
            rgba(133, 76, 230, 0.35);
        }

        /* =====================================
           FOOTER
        ====================================== */

        .projectsFooter {
          width: 100%;

          margin-top: 70px;

          padding-top: 25px;

          border-top: 1px solid
            rgba(255, 255, 255, 0.06);

          text-align: center;

          color: #555560;

          font-family: "Fira Code", monospace;

          font-size: 10px;

          letter-spacing: 1px;

          opacity: 0;
        }

        .projectsSection.isVisible
        .projectsFooter {
          animation:
            footerReveal
            0.8s
            ease
            1s
            forwards;
        }

        @keyframes footerReveal {
          to {
            opacity: 1;
          }
        }

        /* =====================================
           TABLET
        ====================================== */

        @media (max-width: 900px) {
          .projectsSection {
            padding-left: 5%;
            padding-right: 5%;
          }

          .projectsGrid {
            width: 100%;

            max-width: 650px;

            grid-template-columns: 1fr;

            margin-left: auto;
            margin-right: auto;
          }

          .projectCard {
            width: 100%;

            max-width: 650px;

            margin-left: auto;
            margin-right: auto;
          }

          .projectImage {
            height: clamp(
              220px,
              38vw,
              300px
            );
          }
        }

        /* =====================================
           MOBILE / TABLET
        ====================================== */

        @media (max-width: 700px) {
          .projectsSection {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .projectsHeader {
            display: block;

            margin-bottom: 45px;
          }

          .projectsIntro {
            max-width: 600px;

            margin-top: 23px;
          }

          .projectsTitle {
            font-size:
              clamp(
                2.8rem,
                11vw,
                4rem
              );
          }

          .projectCard:hover {
            transform: translateY(-5px);
          }
        }

        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 500px) {
          .projectsSection {
            padding: 70px 16px;
          }

          .projectsContainer {
            width: 100%;
            max-width: 100%;
          }

          .projectsHeader {
            width: 100%;
          }

          .projectsNumber {
            margin-bottom: 12px;

            font-size: 11px;

            letter-spacing: 2px;
          }

          .projectsTitle {
            font-size: 3rem;

            letter-spacing: -2px;
          }

          .projectsIntro {
            font-size: 13px;

            line-height: 1.7;
          }

          .projectsGrid {
            width: 100%;

            max-width: 100%;

            margin-left: auto;
            margin-right: auto;

            gap: 20px;
          }

          .projectCard {
            width: 100%;

            max-width: 100%;

            margin-left: auto;
            margin-right: auto;

            border-radius: 16px;
          }

          .projectImage {
            height: 190px;
          }

          .projectNumberBadge {
            top: 12px;
            left: 12px;
          }

          .projectContent {
            padding: 22px 18px;
          }

          .projectCategory {
            font-size: 8px;
          }

          .projectTitle {
            font-size: 22px;
          }

          .projectDescription {
            font-size: 12px;

            line-height: 1.75;
          }

          .projectTechnologies {
            gap: 6px;

            margin-top: 20px;
          }

          .projectTech {
            padding: 5px 8px;

            font-size: 8px;
          }

          .projectButtons {
            flex-direction: column;

            width: 100%;

            gap: 9px;

            margin-top: 24px;
          }

          .projectButton {
            width: 100%;

            min-height: 44px;
          }
        }

        /* =====================================
           VERY SMALL PHONES
        ====================================== */

        @media (max-width: 360px) {
          .projectsSection {
            padding-left: 12px;
            padding-right: 12px;
          }

          .projectsTitle {
            font-size: 2.65rem;
          }

          .projectImage {
            height: 175px;
          }

          .projectContent {
            padding: 20px 16px;
          }

          .projectTitle {
            font-size: 21px;
          }

          .projectDescription {
            font-size: 11.5px;
          }
        }

        /* =====================================
           REDUCED MOTION
        ====================================== */

        @media (prefers-reduced-motion: reduce) {
          .projectsSection *,
          .projectsSection::before,
          .projectsSection::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <section
        id="projects"
        className={`projectsSection ${
          visible ? "isVisible" : ""
        }`}
      >
        <div className="projectsContainer">

          {/* HEADER */}

          <div className="projectsHeader">
            <div>
              <div className="projectsNumber">
                04 — PROJECTS
              </div>

              <h2 className="projectsTitle">
                Selected <span>work.</span>
              </h2>
            </div>

            <p className="projectsIntro">
              A selection of projects I've built while
              working with modern web development, backend
              systems and AI-powered technologies.
            </p>
          </div>

          {/* PROJECT GRID */}

          <div className="projectsGrid">
            {projects.map((project) => (
              <article
                className="projectCard"
                key={project.title}
              >
                {/* IMAGE */}

                <div className="projectImage">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                  />

                  <div className="projectNumberBadge">
                    {project.number}
                  </div>
                </div>

                {/* CONTENT */}

                <div className="projectContent">

                  <div className="projectCategory">
                    {project.category}
                  </div>

                  <h3 className="projectTitle">
                    {project.title}
                  </h3>

                  <p className="projectDescription">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="projectTechnologies">
                    {project.technologies.map(
                      (technology) => (
                        <span
                          className="projectTech"
                          key={technology}
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  {/* BUTTONS */}

                  <div className="projectButtons">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectButton githubButton"
                    >
                      <BsGithub />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectButton demoButton"
                    >
                      <BsPlayCircleFill />
                      {project.demoLabel}
                    </a>
                  </div>

                </div>
              </article>
            ))}
          </div>

          {/* FOOTER */}

          <div className="projectsFooter">
            BUILDING • LEARNING • CREATING
          </div>

        </div>
      </section>
    </>
  );
}