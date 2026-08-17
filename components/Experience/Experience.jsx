"use client";

import { useEffect, useState } from "react";

export default function Experience() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("experience");

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

  const experiences = [
    {
      year: "June 2026 — Present",
      title: "Freelance Developer",
      company: "Freelance",
      description:
        "Working on modern web applications and client-focused digital solutions, with a focus on responsive interfaces, full-stack development and clean user experiences.",
      technologies: [
        "Next.js",
        "React",
        "JavaScript",
        "Tailwind CSS",
      ],
      current: true,
    },

    {
      year: "March 2026 — May 2026",
      title: "Frontend developer",
      company: "M1",
      description:
        "Gained practical development experience while working with modern web technologies and applying software development concepts in a professional environment.",
      technologies: [
        "Web Development",
        "JavaScript",
        "React",
        "Next.js",
      ],
      current: false,
    },

    {
      year: "2023 — 2026",
      title: "Student Developer",
      company: "Academic & Personal Projects",
      description:
        "Built academic and personal projects while developing skills in frontend development, backend development, databases, APIs and modern software engineering practices.",
      technologies: [
        "React",
        "Next.js",
        "Python",
        "SQL",
      ],
      current: false,
    },
  ];

  return (
    <>
      <style>{`
        /* =====================================
           EXPERIENCE SECTION
        ====================================== */

        .experienceSection {
          position: relative;

          padding: 120px 7%;

          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(133, 76, 230, 0.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 10% 85%,
              rgba(255, 78, 205, 0.07),
              transparent 28%
            ),
            #0a0a0f;

          color: white;

          overflow: hidden;
        }

        .experienceContainer {
          position: relative;

          max-width: 1100px;

          margin: 0 auto;

          z-index: 2;
        }

        /* =====================================
           HEADER
        ====================================== */

        .experienceHeader {
          display: flex;

          justify-content: space-between;

          align-items: flex-end;

          gap: 40px;

          margin-bottom: 80px;

          opacity: 0;

          transform: translateY(35px);
        }

        .experienceSection.isVisible
        .experienceHeader {
          animation:
            experienceHeaderReveal
            0.8s
            ease
            forwards;
        }

        @keyframes experienceHeaderReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .experienceNumber {
          margin-bottom: 14px;

          color: #a875ff;

          font-size: 13px;

          font-weight: 700;

          letter-spacing: 3px;
        }

        .experienceTitle {
          margin: 0;

          font-size:
            clamp(
              3rem,
              6vw,
              5rem
            );

          line-height: 0.95;

          letter-spacing: -4px;

          font-weight: 800;
        }

        .experienceTitle span {
          color: #666673;
        }

        .experienceIntro {
          max-width: 380px;

          margin: 0;

          color: #9999a5;

          font-size: 14px;

          line-height: 1.8;
        }

        /* =====================================
           TIMELINE
        ====================================== */

        .experienceTimeline {
          position: relative;

          padding: 5px 0 20px;
        }

        /*
          Continuous center timeline
        */

        .experienceTimeline::before {
          content: "";

          position: absolute;

          top: 0;

          bottom: 0;

          left: 50%;

          width: 2px;

          transform:
            translateX(-50%)
            scaleY(0);

          transform-origin: top;

          background:
            linear-gradient(
              to bottom,
              transparent 0%,
              rgba(
                133,
                76,
                230,
                0.85
              ) 8%,
              rgba(
                133,
                76,
                230,
                0.65
              ) 45%,
              rgba(
                255,
                78,
                205,
                0.55
              ) 85%,
              transparent 100%
            );

          box-shadow:
            0 0 10px
              rgba(
                133,
                76,
                230,
                0.18
              );
        }

        .experienceSection.isVisible
        .experienceTimeline::before {
          animation:
            timelineGrow
            1.6s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            )
            0.25s
            forwards;
        }

        @keyframes timelineGrow {
          to {
            transform:
              translateX(-50%)
              scaleY(1);
          }
        }

        /* =====================================
           TIMELINE ITEM
        ====================================== */

        .experienceItem {
          position: relative;

          display: grid;

          grid-template-columns:
            1fr
            70px
            1fr;

          gap: 30px;

          margin-bottom: 65px;

          opacity: 0;

          transform: translateY(45px);
        }

        .experienceItem:last-child {
          margin-bottom: 0;
        }

        .experienceSection.isVisible
        .experienceItem:nth-child(1) {
          animation:
            experienceReveal
            0.8s
            ease
            0.45s
            forwards;
        }

        .experienceSection.isVisible
        .experienceItem:nth-child(2) {
          animation:
            experienceReveal
            0.8s
            ease
            0.7s
            forwards;
        }

        .experienceSection.isVisible
        .experienceItem:nth-child(3) {
          animation:
            experienceReveal
            0.8s
            ease
            0.95s
            forwards;
        }

        @keyframes experienceReveal {
          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }

        /* =====================================
           TIMELINE NODE
        ====================================== */

        .timelineNode {
          position: relative;

          display: flex;

          justify-content: center;

          align-items: flex-start;

          height: 100%;
        }

        .timelineDot {
          position: relative;

          width: 15px;

          height: 15px;

          margin-top: 26px;

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              #854ce6,
              #ff4ecd
            );

          border:
            3px solid #0a0a0f;

          box-shadow:
            0 0 0 4px
              rgba(
                133,
                76,
                230,
                0.12
              ),
            0 0 22px
              rgba(
                133,
                76,
                230,
                0.7
              );

          z-index: 5;

          transform: scale(0);
        }

        .experienceSection.isVisible
        .experienceItem:nth-child(1)
        .timelineDot {
          animation:
            dotAppear
            0.5s
            ease
            0.7s
            forwards;
        }

        .experienceSection.isVisible
        .experienceItem:nth-child(2)
        .timelineDot {
          animation:
            dotAppear
            0.5s
            ease
            0.95s
            forwards;
        }

        .experienceSection.isVisible
        .experienceItem:nth-child(3)
        .timelineDot {
          animation:
            dotAppear
            0.5s
            ease
            1.2s
            forwards;
        }

        @keyframes dotAppear {
          0% {
            transform: scale(0);
          }

          70% {
            transform: scale(1.25);
          }

          100% {
            transform: scale(1);
          }
        }

        /* =====================================
           DATE
        ====================================== */

        .experienceDate {
          margin-top: 25px;

          color: #a875ff;

          font-family:
            "Fira Code",
            monospace;

          font-size: 11px;

          font-weight: 600;

          letter-spacing: 0.5px;
        }

        /* =====================================
           ALTERNATING TIMELINE
        ====================================== */

        /*
          ODD ITEMS
          Date LEFT
          Card RIGHT

          1 = Freelance
          3 = Student Developer
        */

        .experienceItem:nth-child(odd)
        .experienceDate {
          grid-column: 1;

          grid-row: 1;

          text-align: right;
        }

        .experienceItem:nth-child(odd)
        .experienceCard {
          grid-column: 3;

          grid-row: 1;
        }

        /*
          EVEN ITEMS
          Card LEFT
          Date RIGHT

          2 = M1 Experience
        */

        .experienceItem:nth-child(even)
        .experienceDate {
          grid-column: 3;

          grid-row: 1;

          text-align: left;
        }

        .experienceItem:nth-child(even)
        .experienceCard {
          grid-column: 1;

          grid-row: 1;
        }

        /* =====================================
           EXPERIENCE CARD
        ====================================== */

        .experienceCard {
          position: relative;

          padding: 30px;

          border:
            1px solid
              rgba(
                255,
                255,
                255,
                0.08
              );

          border-radius: 16px;

          background:
            linear-gradient(
              145deg,
              rgba(
                255,
                255,
                255,
                0.035
              ),
              rgba(
                255,
                255,
                255,
                0.015
              )
            );

          backdrop-filter: blur(10px);

          overflow: hidden;

          transition:
            transform 0.4s ease,
            border-color 0.4s ease,
            box-shadow 0.4s ease,
            background 0.4s ease;
        }

        .experienceCard:hover {
          transform: translateY(-8px);

          border-color:
            rgba(
              133,
              76,
              230,
              0.4
            );

          background:
            linear-gradient(
              145deg,
              rgba(
                133,
                76,
                230,
                0.07
              ),
              rgba(
                255,
                78,
                205,
                0.025
              )
            );

          box-shadow:
            0 25px 60px
              rgba(
                0,
                0,
                0,
                0.3
              ),
            0 0 30px
              rgba(
                133,
                76,
                230,
                0.08
              );
        }

        /* =====================================
           CARD GLOW
        ====================================== */

        .experienceCard::before {
          content: "";

          position: absolute;

          width: 120px;

          height: 120px;

          top: -60px;

          right: -60px;

          border-radius: 50%;

          background: #854ce6;

          filter: blur(40px);

          opacity: 0.08;

          transition:
            opacity 0.4s ease;
        }

        .experienceCard:hover::before {
          opacity: 0.22;
        }

        /* =====================================
           CURRENT BADGE
        ====================================== */

        .currentBadge {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-bottom: 14px;

          padding: 5px 9px;

          border-radius: 20px;

          background:
            rgba(
              39,
              201,
              63,
              0.07
            );

          border:
            1px solid
              rgba(
                39,
                201,
                63,
                0.18
              );

          color: #72e887;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 1px;

          text-transform: uppercase;
        }

        .currentDot {
          width: 5px;

          height: 5px;

          border-radius: 50%;

          background: #27c93f;

          box-shadow:
            0 0 8px
              rgba(
                39,
                201,
                63,
                0.8
              );

          animation:
            currentPulse
            1.5s
            ease-in-out
            infinite;
        }

        @keyframes currentPulse {
          0%,
          100% {
            opacity: 0.5;

            transform: scale(1);
          }

          50% {
            opacity: 1;

            transform: scale(1.5);
          }
        }

        /* =====================================
           CARD CONTENT
        ====================================== */

        .experienceRole {
          margin: 0 0 7px;

          color: #ffffff;

          font-size: 20px;

          font-weight: 750;

          line-height: 1.3;
        }

        .experienceCompany {
          margin: 0 0 18px;

          color: #a875ff;

          font-size: 12px;

          font-weight: 600;

          letter-spacing: 0.5px;
        }

        .experienceDescription {
          margin: 0;

          color: #8e8e99;

          font-size: 13px;

          line-height: 1.8;
        }

        /* =====================================
           TECHNOLOGY TAGS
        ====================================== */

        .experienceTags {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin-top: 22px;
        }

        .experienceTag {
          padding:
            6px 10px;

          border:
            1px solid
              rgba(
                133,
                76,
                230,
                0.2
              );

          border-radius: 6px;

          background:
            rgba(
              133,
              76,
              230,
              0.05
            );

          color: #a9a9b3;

          font-size: 10px;

          transition:
            color 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .experienceTag:hover {
          color: #ffffff;

          background:
            rgba(
              133,
              76,
              230,
              0.12
            );

          border-color:
            rgba(
              133,
              76,
              230,
              0.45
            );

          transform:
            translateY(-2px);
        }

        /* =====================================
           FOOTER
        ====================================== */

        .experienceFooter {
          margin-top: 70px;

          padding-top: 25px;

          border-top:
            1px solid
              rgba(
                255,
                255,
                255,
                0.06
              );

          text-align: center;

          color: #555560;

          font-family:
            "Fira Code",
            monospace;

          font-size: 10px;

          letter-spacing: 1px;

          opacity: 0;
        }

        .experienceSection.isVisible
        .experienceFooter {
          animation:
            footerReveal
            0.8s
            ease
            1.3s
            forwards;
        }

        @keyframes footerReveal {
          to {
            opacity: 1;
          }
        }

        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 800px) {

          .experienceSection {
            padding:
              90px 6%;
          }

          .experienceHeader {
            display: block;

            margin-bottom: 55px;
          }

          .experienceIntro {
            margin-top: 25px;

            max-width: 600px;
          }

          /*
            Move timeline to left
          */

          .experienceTimeline::before {
            left: 8px;

            width: 2px;

            transform:
              translateX(0)
              scaleY(0);
          }

          .experienceSection.isVisible
          .experienceTimeline::before {
            animation:
              mobileTimelineGrow
              1.6s
              ease
              0.25s
              forwards;
          }

          @keyframes mobileTimelineGrow {
            to {
              transform:
                translateX(0)
                scaleY(1);
            }
          }

          /*
            Mobile cards all go
            to the right of timeline
          */

          .experienceItem {
            display: block;

            padding-left: 38px;

            margin-bottom: 45px;
          }

          .timelineNode {
            position: absolute;

            left: 0;

            top: 0;

            width: 16px;

            height: 100%;
          }

          .timelineDot {
            margin-top: 25px;
          }

          .experienceDate {
            margin:
              0 0 12px;

            text-align: left !important;
          }

          /*
            Reset desktop alternating
            positions on mobile
          */

          .experienceItem:nth-child(odd)
          .experienceDate,
          .experienceItem:nth-child(even)
          .experienceDate {
            display: block;

            grid-column: auto;

            grid-row: auto;

            text-align: left;
          }

          .experienceItem:nth-child(odd)
          .experienceCard,
          .experienceItem:nth-child(even)
          .experienceCard {
            display: block;

            grid-column: auto;

            grid-row: auto;
          }

          .experienceCard {
            padding: 24px;
          }
        }

        /* =====================================
           SMALL MOBILE
        ====================================== */

        @media (max-width: 500px) {

          .experienceSection {
            padding:
              75px 20px;
          }

          .experienceTitle {
            font-size:
              3.2rem;

            letter-spacing:
              -2px;
          }

          .experienceRole {
            font-size: 18px;
          }

          .experienceDescription {
            font-size: 12px;
          }

          .experienceCard {
            padding: 21px;
          }
        }

        /* =====================================
           REDUCED MOTION
        ====================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .experienceSection *,
          .experienceSection::before,
          .experienceSection::after {
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
        id="experience"
        className={`experienceSection ${
          visible ? "isVisible" : ""
        }`}
      >
        <div className="experienceContainer">

          {/* =================================
              HEADER
          ================================= */}

          <div className="experienceHeader">

            <div>

              <div className="experienceNumber">
                03 — EXPERIENCE
              </div>

              <h2 className="experienceTitle">
                My{" "}
                <span>journey.</span>
              </h2>

            </div>

            <p className="experienceIntro">
              A timeline of my development journey,
              from academic projects to professional
              experience and freelance development.
            </p>

          </div>

          {/* =================================
              TIMELINE
          ================================= */}

          <div className="experienceTimeline">

            {experiences.map(
              (experience) => (
                <div
                  className="experienceItem"
                  key={experience.title}
                >

                  {/* DATE */}

                  <div className="experienceDate">
                    {experience.year}
                  </div>

                  {/* CENTER NODE */}

                  <div className="timelineNode">

                    <div className="timelineDot"></div>

                  </div>

                  {/* EXPERIENCE CARD */}

                  <div className="experienceCard">

                    {experience.current && (
                      <div className="currentBadge">

                        <span className="currentDot"></span>

                        Current

                      </div>
                    )}

                    <h3 className="experienceRole">
                      {experience.title}
                    </h3>

                    <p className="experienceCompany">
                      {experience.company}
                    </p>

                    <p className="experienceDescription">
                      {experience.description}
                    </p>

                    <div className="experienceTags">

                      {experience.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="experienceTag"
                          >
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                </div>
              )
            )}

          </div>

          {/* =================================
              FOOTER
          ================================= */}

          <div className="experienceFooter">
            BUILDING • LEARNING • IMPROVING
          </div>

        </div>
      </section>
    </>
  );
}