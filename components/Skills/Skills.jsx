"use client";

import { useEffect, useState } from "react";

export default function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("skills");

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

  const skillCategories = [
    {
      title: "Frontend",
      number: "01",
      description:
        "Building responsive and modern interfaces with component-based architecture.",
      skills: [
        { name: "Next.js", level: 90 },
        { name: "React.js", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 82 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 78 },
      ],
    },

    {
      title: "Backend",
      number: "02",
      description:
        "Developing APIs, authentication systems and backend services.",
      skills: [
        { name: "FastAPI", level: 85 },
        { name: "Python", level: 85 },
        { name: "SQLModel", level: 78 },
        { name: "JWT Authentication", level: 75 },
      ],
    },

    {
      title: "Database",
      number: "03",
      description:
        "Working with relational databases and vector search systems.",
      skills: [
        { name: "PostgreSQL", level: 82 },
        { name: "pgvector", level: 72 },
        { name: "SQLite", level: 80 },
        { name: "MySQL", level: 72 },
      ],
    },

    {
      title: "AI & Other",
      number: "04",
      description:
        "Exploring AI-powered applications, semantic search and modern web tools.",
      skills: [
        { name: "RAG", level: 75 },
        { name: "Embeddings", level: 72 },
        { name: "Google Gemini API", level: 70 },
        { name: "WordPress", level: 75 },
        { name: "Github", level: 80 },
      ],
    },
  ];

  return (
    <>
      <style>{`
        /* =====================================
           SKILLS SECTION
        ====================================== */

        .skillsSection {
          position: relative;
          padding: 120px 7%;
          background:
            radial-gradient(
              circle at 15% 25%,
              rgba(133, 76, 230, 0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(255, 78, 205, 0.08),
              transparent 28%
            ),
            #08080c;

          color: white;
          overflow: hidden;
        }

        .skillsContainer {
          position: relative;
          z-index: 2;
          max-width: 1150px;
          margin: 0 auto;
        }

        /* =====================================
           BACKGROUND GLOW
        ====================================== */

        .skillsGlow {
          position: absolute;

          width: 350px;
          height: 350px;

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              rgba(133, 76, 230, 0.12),
              rgba(255, 78, 205, 0.08)
            );

          filter: blur(80px);

          pointer-events: none;

          opacity: 0;

          transform: translate(-100px, 80px);
        }

        .skillsSection.isVisible .skillsGlow {
          animation:
            glowMove
            8s
            ease-in-out
            infinite
            alternate;

          opacity: 1;
        }

        @keyframes glowMove {
          0% {
            transform: translate(-100px, 80px);
          }

          50% {
            transform: translate(180px, 20px);
          }

          100% {
            transform: translate(400px, 100px);
          }
        }

        /* =====================================
           HEADER
        ====================================== */

        .skillsHeader {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          gap: 50px;

          margin-bottom: 65px;

          opacity: 0;
          transform: translateY(35px);
        }

        .skillsSection.isVisible .skillsHeader {
          animation:
            headerReveal
            0.8s
            ease
            forwards;
        }

        @keyframes headerReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skillsNumber {
          margin-bottom: 14px;

          color: #a875ff;

          font-size: 13px;
          font-weight: 700;

          letter-spacing: 3px;
        }

        .skillsHeading {
          margin: 0;

          font-size:
            clamp(
              3rem,
              6vw,
              5.2rem
            );

          line-height: 0.95;

          letter-spacing: -4px;

          font-weight: 800;
        }

        .skillsHeading span {
          color: #666673;
        }

        .skillsIntro {
          max-width: 390px;

          margin: 0;

          color: #9999a5;

          font-size: 15px;

          line-height: 1.8;
        }

        /* =====================================
           GRID
        ====================================== */

        .skillsGrid {
          display: grid;

          grid-template-columns:
            1fr
            1fr;

          gap: 18px;
        }

        /* =====================================
           CARD
        ====================================== */

        .skillCard {
          position: relative;

          padding: 28px;

          background:
            rgba(
              255,
              255,
              255,
              0.025
            );

          border:
            1px solid
              rgba(
                255,
                255,
                255,
                0.08
              );

          border-radius: 14px;

          overflow: hidden;

          opacity: 0;

          transform:
            translateY(55px)
            scale(0.97);

          transition:
            transform 0.4s ease,
            border-color 0.4s ease,
            background 0.4s ease,
            box-shadow 0.4s ease;
        }

        /* Staggered animation */

        .skillsSection.isVisible
        .skillCard:nth-child(1) {
          animation:
            cardReveal
            0.75s
            ease
            0.15s
            forwards;
        }

        .skillsSection.isVisible
        .skillCard:nth-child(2) {
          animation:
            cardReveal
            0.75s
            ease
            0.30s
            forwards;
        }

        .skillsSection.isVisible
        .skillCard:nth-child(3) {
          animation:
            cardReveal
            0.75s
            ease
            0.45s
            forwards;
        }

        .skillsSection.isVisible
        .skillCard:nth-child(4) {
          animation:
            cardReveal
            0.75s
            ease
            0.60s
            forwards;
        }

        @keyframes cardReveal {
          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }

        /* =====================================
           CARD HOVER
        ====================================== */

        .skillCard:hover {
          transform:
            translateY(-8px)
            scale(1.005) !important;

          border-color:
            rgba(
              133,
              76,
              230,
              0.45
            );

          background:
            linear-gradient(
              145deg,
              rgba(
                133,
                76,
                230,
                0.055
              ),
              rgba(
                255,
                78,
                205,
                0.025
              )
            );

          box-shadow:
            0 20px 50px
              rgba(
                0,
                0,
                0,
                0.3
              ),
            0 0 35px
              rgba(
                133,
                76,
                230,
                0.08
              );
        }

        .skillCard::after {
          content: "";

          position: absolute;

          width: 150px;
          height: 150px;

          right: -90px;
          top: -90px;

          border-radius: 50%;

          background: #854ce6;

          opacity: 0.07;

          filter: blur(25px);

          transition:
            opacity 0.4s ease,
            transform 0.4s ease;
        }

        .skillCard:hover::after {
          opacity: 0.2;

          transform: scale(1.4);
        }

        /* =====================================
           CARD HEADER
        ====================================== */

        .skillCardHeader {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 10px;
        }

        .skillCategory {
          display: flex;

          align-items: center;

          gap: 12px;
        }

        .skillNumber {
          color: #854ce6;

          font-family:
            "Fira Code",
            monospace;

          font-size: 11px;

          font-weight: 700;

          transition:
            color 0.3s ease,
            text-shadow 0.3s ease;
        }

        .skillCard:hover .skillNumber {
          color: #ff4ecd;

          text-shadow:
            0 0 12px
              rgba(
                255,
                78,
                205,
                0.5
              );
        }

        .skillTitle {
          margin: 0;

          color: #eeeeF3;

          font-size: 19px;

          font-weight: 750;
        }

        .skillArrow {
          color: #666673;

          font-size: 18px;

          transition:
            transform 0.35s ease,
            color 0.35s ease;
        }

        .skillCard:hover .skillArrow {
          color: #ff4ecd;

          transform:
            translate(
              4px,
              -4px
            );
        }

        .skillDescription {
          margin:
            0 0 24px;

          color: #7f7f8a;

          font-size: 12px;

          line-height: 1.7;
        }

        /* =====================================
           SKILL LIST
        ====================================== */

        .skillList {
          display: flex;

          flex-direction: column;

          gap: 16px;
        }

        .skillItem {
          position: relative;
        }

        .skillInfo {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 7px;
        }

        .skillName {
          color: #cfcfd7;

          font-size: 12px;

          font-weight: 600;

          transition:
            color 0.25s ease;
        }

        .skillItem:hover .skillName {
          color: #ffffff;
        }

        .skillPercent {
          color: #666673;

          font-family:
            "Fira Code",
            monospace;

          font-size: 10px;

          transition:
            color 0.25s ease;
        }

        .skillItem:hover .skillPercent {
          color: #a875ff;
        }

        /* =====================================
           PROGRESS TRACK
        ====================================== */

        .skillTrack {
          width: 100%;

          height: 5px;

          background:
            rgba(
              255,
              255,
              255,
              0.08
            );

          border-radius: 20px;

          overflow: hidden;
        }

        /* =====================================
           PROGRESS BAR
        ====================================== */

        .skillProgress {
          height: 100%;

          border-radius: 20px;

          background:
            linear-gradient(
              90deg,
              #854ce6,
              #b66cff,
              #ff4ecd
            );

          transform:
            scaleX(0);

          transform-origin:
            left center;

          box-shadow:
            0 0 10px
              rgba(
                133,
                76,
                230,
                0.5
              ),
            0 0 20px
              rgba(
                255,
                78,
                205,
                0.2
              );
        }

        /* =====================================
           ANIMATE PROGRESS BARS
        ====================================== */

        .skillsSection.isVisible
        .skillProgress {
          animation:
            growSkillBar
            1.4s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            forwards;
        }

        @keyframes growSkillBar {
          from {
            transform:
              scaleX(0);
          }

          to {
            transform:
              scaleX(
                var(--skill-level)
              );
          }
        }

        /* =====================================
           TECHNOLOGY STRIP
        ====================================== */

        .techStrip {
          display: flex;

          align-items: center;

          gap: 14px;

          margin-top: 45px;

          padding:
            18px 20px;

          border-top:
            1px solid
              rgba(
                255,
                255,
                255,
                0.07
              );

          border-bottom:
            1px solid
              rgba(
                255,
                255,
                255,
                0.07
              );

          opacity: 0;

          transform:
            translateY(25px);
        }

        .skillsSection.isVisible
        .techStrip {
          animation:
            stripReveal
            0.8s
            ease
            1.15s
            forwards;
        }

        @keyframes stripReveal {
          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }

        .techLabel {
          flex-shrink: 0;

          color: #555560;

          font-size: 10px;

          font-weight: 700;

          text-transform:
            uppercase;

          letter-spacing: 1.5px;
        }

        .techPills {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;
        }

        .techPill {
          padding:
            6px 10px;

          border-radius: 6px;

          background:
            rgba(
              255,
              255,
              255,
              0.035
            );

          border:
            1px solid
              rgba(
                255,
                255,
                255,
                0.06
              );

          color: #9999a5;

          font-size: 10px;

          transition:
            transform 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .techPill:hover {
          color: #ffffff;

          border-color:
            rgba(
              133,
              76,
              230,
              0.4
            );

          background:
            rgba(
              133,
              76,
              230,
              0.08
            );

          transform:
            translateY(-3px);
        }

        /* =====================================
           DECORATIVE DOTS
        ====================================== */

        .skillsDots {
          position: absolute;

          right: 6%;
          top: 18%;

          display: grid;

          grid-template-columns:
            repeat(4, 5px);

          gap: 8px;

          opacity: 0.25;
        }

        .skillsDots span {
          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #854ce6;

          animation:
            dotPulse
            2s
            ease-in-out
            infinite;
        }

        .skillsDots span:nth-child(2) {
          animation-delay:
            0.2s;
        }

        .skillsDots span:nth-child(3) {
          animation-delay:
            0.4s;
        }

        .skillsDots span:nth-child(4) {
          animation-delay:
            0.6s;
        }

        .skillsDots span:nth-child(5) {
          animation-delay:
            0.8s;
        }

        .skillsDots span:nth-child(6) {
          animation-delay:
            1s;
        }

        @keyframes dotPulse {
          0%,
          100% {
            opacity: 0.2;

            transform:
              scale(1);
          }

          50% {
            opacity: 1;

            transform:
              scale(1.7);
          }
        }

        /* =====================================
           TABLET
        ====================================== */

        @media (max-width: 850px) {

          .skillsSection {
            padding:
              90px 6%;
          }

          .skillsHeader {
            display: block;

            margin-bottom: 50px;
          }

          .skillsIntro {
            margin-top: 25px;

            max-width: 650px;
          }

          .skillsGrid {
            grid-template-columns:
              1fr;
          }

          .skillsDots {
            display: none;
          }
        }

        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 550px) {

          .skillsSection {
            padding:
              75px 20px;
          }

          .skillsHeading {
            font-size:
              3.2rem;

            letter-spacing:
              -2px;
          }

          .skillsIntro {
            font-size:
              14px;
          }

          .skillCard {
            padding:
              23px;
          }

          .skillTitle {
            font-size:
              17px;
          }

          .techStrip {
            display: block;

            padding:
              17px;
          }

          .techPills {
            margin-top:
              12px;
          }
        }

        /* =====================================
           REDUCED MOTION
        ====================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .skillsSection *,
          .skillsSection::before,
          .skillsSection::after {
            animation-duration:
              0.01ms !important;

            animation-iteration-count:
              1 !important;

            transition-duration:
              0.01ms !important;
          }
        }
      `}</style>

      <section
        id="skills"
        className={`skillsSection ${
          visible
            ? "isVisible"
            : ""
        }`}
      >

        {/* Background glow */}

        <div className="skillsGlow"></div>

        {/* Decorative dots */}

        <div className="skillsDots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="skillsContainer">

          {/* =================================
              HEADER
          ================================= */}

          <div className="skillsHeader">

            <div>

              <div className="skillsNumber">
                02 — SKILLS
              </div>

              <h2 className="skillsHeading">
                What I{" "}
                <span>know.</span>
              </h2>

            </div>

            <p className="skillsIntro">
              Technologies and tools I've been
              working with while building
              full-stack applications, AI systems
              and responsive web experiences.
            </p>

          </div>

          {/* =================================
              SKILL CARDS
          ================================= */}

          <div className="skillsGrid">

            {skillCategories.map(
              (category) => (

                <div
                  key={category.title}
                  className="skillCard"
                >

                  <div className="skillCardHeader">

                    <div className="skillCategory">

                      <span className="skillNumber">
                        {category.number}
                      </span>

                      <h3 className="skillTitle">
                        {category.title}
                      </h3>

                    </div>

                    <span className="skillArrow">
                      ↗
                    </span>

                  </div>

                  <p className="skillDescription">
                    {category.description}
                  </p>

                  <div className="skillList">

                    {category.skills.map(
                      (skill) => (

                        <div
                          key={skill.name}
                          className="skillItem"
                        >

                          <div className="skillInfo">

                            <span className="skillName">
                              {skill.name}
                            </span>

                            <span className="skillPercent">
                              {skill.level}%
                            </span>

                          </div>

                          <div className="skillTrack">

                            <div
                              className="skillProgress"
                              style={{
                                "--skill-level":
                                  skill.level /
                                  100,
                              }}
                            ></div>

                          </div>

                        </div>

                      )
                    )}

                  </div>

                </div>

              )
            )}

          </div>

          {/* =================================
              TECHNOLOGY STRIP
          ================================= */}

          <div className="techStrip">

            <div className="techLabel">
              Stack
            </div>

            <div className="techPills">

              <span className="techPill">
                Next.js
              </span>

              <span className="techPill">
                React
              </span>

              <span className="techPill">
                TypeScript
              </span>

              <span className="techPill">
                FastAPI
              </span>

              <span className="techPill">
                Python
              </span>

              <span className="techPill">
                PostgreSQL
              </span>

              <span className="techPill">
                pgvector
              </span>

              <span className="techPill">
                RAG
              </span>

              <span className="techPill">
                Google Gemini
              </span>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}