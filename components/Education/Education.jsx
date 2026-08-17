"use client";

import { useEffect, useState } from "react";
import {
  BsMortarboardFill,
  BsBuilding,
  BsAwardFill,
} from "react-icons/bs";

export default function Education() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("education");

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

  const education = [
    {
      icon: <BsMortarboardFill />,
      type: "University",
      title: "BS Software Engineering",
      institution:
        "University of Sargodha",
      duration: "2023 — 2027",
      description:
        "Studying software engineering with a focus on web development, AI and modern application development.",
    },

    {
      icon: <BsBuilding />,
      type: "College",
      title: "College / Intermediate",
      institution: "Punjab College",
      duration: "2021-2023",
      description:"Completed FSc with good grades",
    },
  ];

  const certifications = [
    {
      title: "Meta Front-End Developer",
      issuer: "Coursera",
    },
    {
      title: "Web Development",
      issuer: "Bano Qabil",
    },
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
    },
  ];

  return (
    <>
      <style>{`
        /* =====================================
           EDUCATION SECTION
        ====================================== */

        .educationSection {
          position: relative;

          padding: 120px 7%;

          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(133, 76, 230, 0.09),
              transparent 30%
            ),
            #0a0a0f;

          color: white;

          overflow: hidden;
        }

        .educationContainer {
          max-width: 1000px;

          margin: 0 auto;

          position: relative;

          z-index: 2;
        }

        /* =====================================
           HEADER
        ====================================== */

        .educationHeader {
          text-align: center;

          margin-bottom: 65px;

          opacity: 0;

          transform: translateY(30px);
        }

        .educationSection.visible
        .educationHeader {
          animation:
            educationHeaderReveal
            0.8s
            ease
            forwards;
        }

        @keyframes educationHeaderReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .educationLabel {
          margin-bottom: 12px;

          color: #a875ff;

          font-family:
            "Fira Code",
            monospace;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 3px;
        }

        .educationTitle {
          margin: 0;

          font-size:
            clamp(
              2.8rem,
              5vw,
              4.5rem
            );

          font-weight: 800;

          letter-spacing: -3px;
        }

        .educationTitle span {
          color: #666673;
        }

        .educationSubtitle {
          max-width: 550px;

          margin:
            20px auto 0;

          color: #8d8d99;

          font-size: 14px;

          line-height: 1.8;
        }

        /* =====================================
           EDUCATION TIMELINE
        ====================================== */

        .educationTimeline {
          position: relative;

          display: flex;

          flex-direction: column;

          gap: 35px;
        }

        .educationTimeline::before {
          content: "";

          position: absolute;

          top: 25px;

          bottom: 25px;

          left: 50%;

          width: 1px;

          background:
            linear-gradient(
              to bottom,
              transparent,
              rgba(133, 76, 230, 0.55),
              rgba(255, 78, 205, 0.35),
              transparent
            );

          transform:
            translateX(-50%);
        }

        /* =====================================
           EDUCATION CARD
        ====================================== */

        .educationItem {
          position: relative;

          width: calc(50% - 35px);

          padding: 28px;

          border:
            1px solid
              rgba(
                255,
                255,
                255,
                0.08
              );

          border-radius: 18px;

          background:
            linear-gradient(
              145deg,
              rgba(
                255,
                255,
                255,
                0.04
              ),
              rgba(
                255,
                255,
                255,
                0.015
              )
            );

          backdrop-filter:
            blur(12px);

          opacity: 0;

          transition:
            transform 0.4s ease,
            border-color 0.4s ease,
            box-shadow 0.4s ease;
        }

        .educationItem:nth-child(odd) {
          align-self: flex-start;

          transform:
            translateX(-40px);
        }

        .educationItem:nth-child(even) {
          align-self: flex-end;

          transform:
            translateX(40px);
        }

        .educationSection.visible
        .educationItem:nth-child(1) {
          animation:
            educationCardLeft
            0.8s
            ease
            0.3s
            forwards;
        }

        .educationSection.visible
        .educationItem:nth-child(2) {
          animation:
            educationCardRight
            0.8s
            ease
            0.5s
            forwards;
        }

        @keyframes educationCardLeft {
          to {
            opacity: 1;

            transform:
              translateX(0);
          }
        }

        @keyframes educationCardRight {
          to {
            opacity: 1;

            transform:
              translateX(0);
          }
        }

        .educationItem:hover {
          transform:
            translateY(-7px) !important;

          border-color:
            rgba(
              133,
              76,
              230,
              0.4
            );

          box-shadow:
            0 20px 50px
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
                0.1
              );
        }

        /* =====================================
           TIMELINE DOT
        ====================================== */

        .educationDot {
          position: absolute;

          top: 30px;

          width: 13px;

          height: 13px;

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
            0 0 0 3px
              rgba(
                133,
                76,
                230,
                0.2
              ),
            0 0 18px
              rgba(
                133,
                76,
                230,
                0.5
              );

          z-index: 3;
        }

        .educationItem:nth-child(odd)
        .educationDot {
          right: -42px;
        }

        .educationItem:nth-child(even)
        .educationDot {
          left: -42px;
        }

        /* =====================================
           CARD HEADER
        ====================================== */

        .educationTop {
          display: flex;

          align-items: center;

          gap: 15px;

          margin-bottom: 20px;
        }

        .educationIcon {
          width: 45px;

          height: 45px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          border:
            1px solid
              rgba(
                133,
                76,
                230,
                0.25
              );

          border-radius: 12px;

          background:
            rgba(
              133,
              76,
              230,
              0.08
            );

          color:
            #a875ff;

          font-size: 19px;
        }

        .educationType {
          margin: 0 0 4px;

          color: #a875ff;

          font-family:
            "Fira Code",
            monospace;

          font-size: 9px;

          letter-spacing: 2px;

          text-transform:
            uppercase;
        }

        .educationDuration {
          color: #777783;

          font-size: 11px;
        }

        /* =====================================
           CARD CONTENT
        ====================================== */

        .educationItem h3 {
          margin:
            0 0 8px;

          color: white;

          font-size: 21px;

          font-weight: 750;

          letter-spacing: -0.3px;
        }

        .educationInstitution {
          margin: 0;

          color: #d0d0d8;

          font-size: 13px;

          font-weight: 600;
        }

        .educationDescription {
          margin:
            14px 0 0;

          color: #858590;

          font-size: 12px;

          line-height: 1.8;
        }

        /* =====================================
           COLLEGE PLACEHOLDER
        ====================================== */

        .educationItem.placeholder {
          border-style: dashed;

          border-color:
            rgba(
              133,
              76,
              230,
              0.25
            );
        }

        .placeholderBadge {
          display: inline-block;

          margin-top: 15px;

          padding:
            5px 9px;

          border-radius: 5px;

          background:
            rgba(
              255,
              78,
              205,
              0.06
            );

          color: #ff72d7;

          font-family:
            "Fira Code",
            monospace;

          font-size: 8px;

          letter-spacing: 1px;
        }

        /* =====================================
           CERTIFICATIONS
        ====================================== */

        .certifications {
          margin-top: 105px;

          opacity: 0;

          transform:
            translateY(30px);
        }

        .educationSection.visible
        .certifications {
          animation:
            certificationReveal
            0.8s
            ease
            0.7s
            forwards;
        }

        @keyframes certificationReveal {
          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }

        .certificationHeader {
          text-align: center;

          margin-bottom: 35px;
        }

        .certificationLabel {
          margin-bottom: 10px;

          color: #a875ff;

          font-family:
            "Fira Code",
            monospace;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 3px;
        }

        .certificationHeader h3 {
          margin: 0;

          color: white;

          font-size: 32px;

          font-weight: 800;

          letter-spacing: -1px;
        }

        .certificationHeader h3 span {
          color: #666673;
        }

        .certificationHeader p {
          max-width: 500px;

          margin:
            12px auto 0;

          color: #858590;

          font-size: 12px;

          line-height: 1.7;
        }

        .certificationGrid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 18px;
        }

        .certificationCard {
          position: relative;

          display: flex;

          align-items: flex-start;

          gap: 15px;

          padding: 22px;

          border:
            1px solid
              rgba(
                255,
                255,
                255,
                0.07
              );

          border-radius: 15px;

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
                255,
                255,
                0.02
              )
            );

          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .certificationCard:hover {
          transform:
            translateY(-6px);

          border-color:
            rgba(
              133,
              76,
              230,
              0.4
            );

          box-shadow:
            0 15px 35px
              rgba(
                0,
                0,
                0,
                0.25
              ),
            0 0 25px
              rgba(
                133,
                76,
                230,
                0.1
              );
        }

        .certificationIcon {
          width: 42px;

          height: 42px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 11px;

          background:
            linear-gradient(
              135deg,
              rgba(
                133,
                76,
                230,
                0.18
              ),
              rgba(
                255,
                78,
                205,
                0.12
              )
            );

          border:
            1px solid
              rgba(
                133,
                76,
                230,
                0.2
              );

          color:
            #c084ff;

          font-size: 17px;
        }

        .certificationContent {
          min-width: 0;
        }

        .certificationContent h4 {
          margin:
            0 0 7px;

          color: white;

          font-size: 14px;

          line-height: 1.4;
        }

        .certificationContent p {
          margin: 0;

          color: #777783;

          font-size: 11px;

          line-height: 1.5;
        }

        .certificationBadge {
          display: inline-block;

          margin-top: 10px;

          padding:
            4px 7px;

          border-radius: 4px;

          background:
            rgba(
              255,
              78,
              205,
              0.06
            );

          color: #a875ff;

          font-family:
            "Fira Code",
            monospace;

          font-size: 8px;

          letter-spacing: 0.5px;
        }

        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 800px) {
          .certificationGrid {
            grid-template-columns:
              repeat(2, 1fr);
          }
        }

        @media (max-width: 750px) {

          .educationSection {
            padding:
              90px 6%;
          }

          .educationTimeline {
            gap: 25px;
          }

          .educationTimeline::before {
            left: 10px;
          }

          .educationItem,
          .educationItem:nth-child(odd),
          .educationItem:nth-child(even) {
            width:
              calc(100% - 35px);

            align-self:
              flex-end;

            transform:
              translateX(35px);
          }

          .educationSection.visible
          .educationItem:nth-child(1),
          .educationSection.visible
          .educationItem:nth-child(2) {
            animation:
              educationMobileReveal
              0.8s
              ease
              forwards;
          }

          @keyframes educationMobileReveal {
            to {
              opacity: 1;

              transform:
                translateX(0);
            }
          }

          .educationDot,
          .educationItem:nth-child(odd)
          .educationDot,
          .educationItem:nth-child(even)
          .educationDot {
            left: -31px;

            right: auto;
          }

          .certifications {
            margin-top: 75px;
          }
        }

        @media (max-width: 550px) {

          .certificationGrid {
            grid-template-columns: 1fr;
          }

          .certificationHeader h3 {
            font-size: 27px;
          }
        }

        @media (max-width: 500px) {

          .educationSection {
            padding:
              75px 20px;
          }

          .educationTitle {
            font-size:
              3rem;

            letter-spacing:
              -2px;
          }

          .educationItem,
          .educationItem:nth-child(odd),
          .educationItem:nth-child(even) {
            padding: 22px;
          }
        }

        /* =====================================
           REDUCED MOTION
        ====================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .educationSection *,
          .educationSection::before,
          .educationSection::after {
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
        id="education"
        className={`educationSection ${
          visible ? "visible" : ""
        }`}
      >
        <div className="educationContainer">

          {/* =================================
              HEADER
          ================================= */}

          <div className="educationHeader">

            <div className="educationLabel">
              05 — EDUCATION
            </div>

            <h2 className="educationTitle">
              Academic{" "}
              <span>journey.</span>
            </h2>

            <p className="educationSubtitle">
              My academic background and the
              foundation that supports my journey
              as a software developer.
            </p>

          </div>

          {/* =================================
              EDUCATION TIMELINE
          ================================= */}

          <div className="educationTimeline">

            {education.map((item) => (
              <div
                className={`educationItem ${
                  item.placeholder
                    ? "placeholder"
                    : ""
                }`}
                key={item.type}
              >

                {/* TIMELINE DOT */}

                <div className="educationDot"></div>

                {/* CARD HEADER */}

                <div className="educationTop">

                  <div className="educationIcon">
                    {item.icon}
                  </div>

                  <div>

                    <p className="educationType">
                      {item.type}
                    </p>

                    <span className="educationDuration">
                      {item.duration}
                    </span>

                  </div>

                </div>

                {/* CARD CONTENT */}

                <h3>
                  {item.title}
                </h3>

                <p className="educationInstitution">
                  {item.institution}
                </p>

                <p className="educationDescription">
                  {item.description}
                </p>

                {item.placeholder && (
                  <span className="placeholderBadge">
                    UPDATE THIS INFORMATION
                  </span>
                )}

              </div>
            ))}

          </div>

          {/* =================================
              CERTIFICATIONS
          ================================= */}

          <div className="certifications">

            <div className="certificationHeader">

              <div className="certificationLabel">
                CERTIFICATIONS
              </div>

              <h3>
                Continuous{" "}
                <span>learning.</span>
              </h3>

              <p>
                Professional certifications that
                complement my software engineering
                and development skills.
              </p>

            </div>

            <div className="certificationGrid">

              {certifications.map(
                (cert, index) => (
                  <div
                    className="certificationCard"
                    key={cert.title}
                  >

                    <div className="certificationIcon">
                      <BsAwardFill />
                    </div>

                    <div className="certificationContent">

                      <h4>
                        {cert.title}
                      </h4>

                      <p>
                        {cert.issuer}
                      </p>

                      <span className="certificationBadge">
                        CERTIFICATION
                      </span>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

        </div>
      </section>
    </>
  );
}