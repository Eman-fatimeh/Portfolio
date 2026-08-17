"use client";

export default function About() {
  return (
    <>
      <style>{`
        /* =====================================
           ABOUT SECTION
        ====================================== */

        .aboutSection {
          position: relative;
          padding: 110px 7%;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(133, 76, 230, 0.10),
              transparent 30%
            ),
            #08080c;
          color: white;
          overflow: hidden;
        }

        .aboutContainer {
          position: relative;
          max-width: 1150px;
          margin: 0 auto;
        }

        /* =====================================
           HEADER
        ====================================== */

        .aboutHeader {
          display: grid;
          grid-template-columns: 1fr 0.7fr;
          align-items: end;
          gap: 60px;
          margin-bottom: 65px;
        }

        .sectionNumber {
          margin-bottom: 14px;
          color: #a875ff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .aboutHeading {
          margin: 0;
          font-size: clamp(3rem, 6vw, 5.2rem);
          line-height: 0.95;
          letter-spacing: -4px;
          font-weight: 800;
        }

        .aboutHeading span {
          color: #666673;
        }

        .aboutIntro {
          margin: 0;
          color: #9999a5;
          font-size: 15px;
          line-height: 1.8;
        }

        /* =====================================
           MAIN GRID
        ====================================== */

        .aboutGrid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 80px;
          align-items: start;
        }

        /* =====================================
           PERSONAL INTRO
        ====================================== */

        .introCard {
          position: relative;
          padding: 32px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;

          transition:
            transform 0.35s ease,
            border-color 0.35s ease;
        }

        .introCard:hover {
          transform: translateY(-6px);
          border-color: rgba(133, 76, 230, 0.45);
        }

        .introCard::after {
          content: "";
          position: absolute;
          width: 120px;
          height: 120px;
          right: -55px;
          top: -55px;
          border-radius: 50%;
          background: #854ce6;
          opacity: 0.12;
          filter: blur(25px);
        }

        .introLabel {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #a875ff;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .introLabel::before {
          content: "";
          width: 24px;
          height: 2px;
          background: linear-gradient(90deg, #854ce6, #ff4ecd);
        }

        .introTitle {
          margin-top: 22px;
          font-size: 28px;
          line-height: 1.2;
          font-weight: 750;
        }

        .introText {
          margin-top: 18px;
          color: #9999a5;
          font-size: 14px;
          line-height: 1.85;
        }

        .introText strong {
          color: #e5e5eb;
        }

        /* status pill inside intro card */
        .statusPill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(133, 76, 230, 0.08);
          border: 1px solid rgba(133, 76, 230, 0.25);
          color: #d5baff;
          font-size: 12px;
          font-weight: 700;
        }

        .statusDot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
        }

        /* =====================================
           RIGHT SIDE
        ====================================== */

        .detailsSide {
          display: flex;
          flex-direction: column;
          gap: 35px;
        }

        .detailSection {
          position: relative;
        }

        .detailHeader {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: #e8e8ed;
          font-size: 14px;
          font-weight: 750;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .detailHeader::before {
          content: "";
          width: 28px;
          height: 2px;
          background: linear-gradient(90deg, #854ce6, #ff4ecd);
        }

        /* =====================================
           QUICK FACTS
        ====================================== */

        .factsGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .factCard {
          padding: 18px 20px;
          background: #101016;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease;
        }

        .factCard:hover {
          transform: translateY(-4px);
          border-color: rgba(133, 76, 230, 0.4);
        }

        .factLabel {
          color: #777782;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .factValue {
          margin-top: 8px;
          color: #f1f1f5;
          font-size: 14px;
          font-weight: 650;
          line-height: 1.4;
        }

        /* =====================================
           WHAT I VALUE
        ====================================== */

        .valuesList {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .valueRow {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 16px;
          align-items: flex-start;

          padding: 16px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .valueRow:hover {
          transform: translateX(5px);
          background: rgba(133, 76, 230, 0.06);
          border-color: rgba(133, 76, 230, 0.35);
        }

        .valueIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: linear-gradient(
            135deg,
            rgba(133, 76, 230, 0.2),
            rgba(255, 78, 205, 0.12)
          );
          color: #b88cff;
          font-size: 15px;
          font-weight: 800;
        }

        .valueName {
          color: #e5e5eb;
          font-size: 13px;
          font-weight: 700;
        }

        .valueText {
          margin-top: 4px;
          color: #8f8f9a;
          font-size: 12px;
          line-height: 1.6;
        }

        /* =====================================
           ANIMATION
        ====================================== */

        .reveal {
          opacity: 0;
          animation: aboutReveal 0.8s ease forwards;
        }

        .revealDelay {
          animation-delay: 0.15s;
        }

        .revealDelay2 {
          animation-delay: 0.3s;
        }

        @keyframes aboutReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================
           DECORATIVE LINE
        ====================================== */

        .aboutLine {
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent,
            #854ce6,
            #ff4ecd,
            transparent
          );
          opacity: 0.4;
        }

        /* =====================================
           TABLET
        ====================================== */

        @media (max-width: 900px) {
          .aboutSection {
            padding: 90px 6%;
          }
          .aboutHeader {
            grid-template-columns: 1fr;
            gap: 25px;
            margin-bottom: 50px;
          }
          .aboutIntro {
            max-width: 650px;
          }
          .aboutGrid {
            grid-template-columns: 1fr;
            gap: 45px;
          }
          .introCard {
            max-width: 650px;
          }
        }

        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 550px) {
          .aboutSection {
            padding: 75px 20px;
          }
          .aboutHeading {
            font-size: 3.2rem;
            letter-spacing: -2px;
          }
          .aboutIntro {
            font-size: 14px;
          }
          .introCard {
            padding: 24px;
          }
          .introTitle {
            font-size: 24px;
          }
          .factsGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="about" className="aboutSection">
        <div className="aboutLine"></div>

        <div className="aboutContainer">
          {/* HEADER */}
          <div className="aboutHeader reveal">
            <div>
              <div className="sectionNumber">01 — ABOUT</div>
              <h2 className="aboutHeading">
                A little <span>about me.</span>
              </h2>
            </div>

            <p className="aboutIntro">
              Software Engineering student passionate about
              building modern web applications and exploring
              intelligent software solutions.
            </p>
          </div>

          {/* CONTENT */}
          <div className="aboutGrid">
            {/* LEFT — bio */}
            <div className="introCard reveal">
              <div className="introLabel">Who I am</div>

              <h3 className="introTitle">
                Turning ideas into useful software.
              </h3>

              <p className="introText">
                I'm a <strong>Software Engineering student</strong>{" "}
                at the University of Sargodha with a strong
                interest in full-stack development and
                AI-powered applications.
              </p>

              <p className="introText">
                I enjoy working across the development
                process — from creating responsive interfaces
                to developing APIs, databases and intelligent
                features.
              </p>

              <div className="statusPill">
                <span className="statusDot"></span>
                Open to opportunities
              </div>
            </div>

            {/* RIGHT — facts + values */}
            <div className="detailsSide">
              {/* QUICK FACTS */}
              <div className="detailSection revealDelay reveal">
                <div className="detailHeader">Quick Facts</div>

                <div className="factsGrid">
                  <div className="factCard">
                    <div className="factLabel">Based in</div>
                    <div className="factValue"> Pakistan</div>
                  </div>

                  <div className="factCard">
                    <div className="factLabel">Focus</div>
                    <div className="factValue">Full-Stack & AI</div>
                  </div>

                  <div className="factCard">
                    <div className="factLabel">Currently</div>
                    <div className="factValue">
                      AI powered apps
                    </div>
                  </div>

                  <div className="factCard">
                    <div className="factLabel">Availability</div>
                    <div className="factValue">Open to opportunities</div>
                  </div>
                </div>
              </div>

              {/* WHAT I VALUE */}
              <div className="detailSection revealDelay2 reveal">
                <div className="detailHeader">What I Value</div>

                <div className="valuesList">
                  <div className="valueRow">
                    <div className="valueIcon">C</div>
                    <div>
                      <div className="valueName">Curiosity</div>
                      <div className="valueText">
                        I like understanding how things work under
                        the hood, not just using them.
                      </div>
                    </div>
                  </div>

                  <div className="valueRow">
                    <div className="valueIcon">D</div>
                    <div>
                      <div className="valueName">Detail</div>
                      <div className="valueText">
                        Clean code and thoughtful UI matter as much
                        as working features.
                      </div>
                    </div>
                  </div>

                  <div className="valueRow">
                    <div className="valueIcon">S</div>
                    <div>
                      <div className="valueName">Speed of learning</div>
                      <div className="valueText">
                        Comfortable picking up new tools and
                        frameworks fast when a project needs it.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}