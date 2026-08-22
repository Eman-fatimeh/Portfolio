"use client";

import { useEffect, useState } from "react";
import {
  BsEnvelopeFill,
  BsArrowUpRight,
} from "react-icons/bs";

export default function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("contact");

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

  return (
    <>
      <style>{`
        /* =====================================
           CONTACT SECTION
        ====================================== */

        .contactSection {
          position: relative;

          width: 100%;
          box-sizing: border-box;

          padding:
            clamp(80px, 10vw, 120px)
            5%
            clamp(70px, 8vw, 100px);

          background:
            radial-gradient(
              circle at 50% 20%,
              rgba(133, 76, 230, 0.13),
              transparent 35%
            ),
            radial-gradient(
              circle at 15% 80%,
              rgba(255, 78, 205, 0.07),
              transparent 30%
            ),
            #0a0a0f;

          color: white;

          overflow: hidden;
        }

        /* =====================================
           CONTAINER
        ====================================== */

        .contactContainer {
          position: relative;

          z-index: 2;

          width: 100%;
          max-width: 1000px;

          margin: 0 auto;

          box-sizing: border-box;
        }

        /* =====================================
           DECORATIVE GLOW
        ====================================== */

        .contactGlow {
          position: absolute;

          width: clamp(250px, 35vw, 350px);
          height: clamp(250px, 35vw, 350px);

          left: 50%;
          top: 30%;

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              #854ce6,
              #ff4ecd
            );

          filter: blur(130px);

          opacity: 0.08;

          pointer-events: none;

          animation:
            contactGlowAnimation
            5s
            ease-in-out
            infinite
            alternate;
        }

        @keyframes contactGlowAnimation {
          from {
            transform:
              translate(-50%, -50%)
              scale(0.9);
          }

          to {
            transform:
              translate(-50%, -50%)
              scale(1.15);
          }
        }

        /* =====================================
           HEADER
        ====================================== */

        .contactHeader {
          width: 100%;

          text-align: center;

          opacity: 0;

          transform:
            translateY(35px);
        }

        .contactSection.visible
        .contactHeader {
          animation:
            contactHeaderReveal
            0.8s
            ease
            forwards;
        }

        @keyframes contactHeaderReveal {
          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }

        .contactLabel {
          margin-bottom: 14px;

          color: #a875ff;

          font-family:
            "Fira Code",
            monospace;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 3px;
        }

        .contactTitle {
          width: 100%;

          margin: 0;

          color: #ffffff;

          font-size:
            clamp(
              2.8rem,
              7vw,
              5.5rem
            );

          line-height: 0.95;

          letter-spacing:
            clamp(
              -2px,
              -0.4vw,
              -4px
            );

          font-weight: 800;
        }

        .contactTitle span {
          display: block;

          background:
            linear-gradient(
              90deg,
              #854ce6,
              #ff4ecd
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          background-clip: text;
        }

        .contactDescription {
          width: 100%;
          max-width: 580px;

          margin:
            25px auto 0;

          color: #8f8f9b;

          font-size:
            clamp(12px, 1.5vw, 14px);

          line-height: 1.8;
        }

        /* =====================================
           EMAIL CARD
        ====================================== */

        .contactEmailCard {
          width: 100%;
          max-width: 620px;

          margin:
            clamp(35px, 5vw, 50px)
            auto 0;

          padding:
            clamp(20px, 3vw, 28px);

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;

          box-sizing: border-box;

          border:
            1px solid
            rgba(
              133,
              76,
              230,
              0.22
            );

          border-radius: 18px;

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
                0.025
              )
            );

          backdrop-filter:
            blur(15px);

          box-shadow:
            0 20px 60px
            rgba(
              0,
              0,
              0,
              0.25
            );

          opacity: 0;

          transform:
            translateY(35px);

          transition:
            transform 0.4s ease,
            border-color 0.4s ease,
            box-shadow 0.4s ease;
        }

        .contactSection.visible
        .contactEmailCard {
          animation:
            contactCardReveal
            0.8s
            ease
            0.25s
            forwards;
        }

        @keyframes contactCardReveal {
          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }

        .contactEmailCard:hover {
          transform:
            translateY(-5px);

          border-color:
            rgba(
              133,
              76,
              230,
              0.45
            );

          box-shadow:
            0 25px 70px
              rgba(
                0,
                0,
                0,
                0.35
              ),
            0 0 35px
              rgba(
                133,
                76,
                230,
                0.12
              );
        }

        /* =====================================
           EMAIL INFO
        ====================================== */

        .emailInfo {
          display: flex;

          align-items: center;

          gap: 17px;

          min-width: 0;

          flex: 1;
        }

        .emailIcon {
          width: 50px;
          height: 50px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 13px;

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
                0.1
              )
            );

          border:
            1px solid
            rgba(
              133,
              76,
              230,
              0.25
            );

          color:
            #b47dff;

          font-size: 19px;
        }

        .emailLabel {
          margin:
            0 0 5px;

          color:
            #777783;

          font-family:
            "Fira Code",
            monospace;

          font-size: 9px;

          letter-spacing: 1.5px;

          text-transform:
            uppercase;
        }

        .emailAddress {
          margin: 0;

          color: white;

          font-size:
            clamp(12px, 1.5vw, 14px);

          font-weight: 600;

          word-break: break-word;

          overflow-wrap: anywhere;
        }

        /* =====================================
           EMAIL BUTTON
        ====================================== */

        .emailButton {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          flex-shrink: 0;

          min-height: 42px;

          padding:
            11px 17px;

          box-sizing: border-box;

          border-radius: 9px;

          background:
            linear-gradient(
              90deg,
              #854ce6,
              #ff4ecd
            );

          color: white;

          text-decoration: none;

          font-size: 11px;

          font-weight: 700;

          white-space: nowrap;

          box-shadow:
            0 7px 20px
            rgba(
              133,
              76,
              230,
              0.2
            );

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .emailButton:hover {
          transform:
            translateY(-3px)
            scale(1.02);

          box-shadow:
            0 10px 30px
            rgba(
              133,
              76,
              230,
              0.4
            );
        }

        .emailButton svg {
          flex-shrink: 0;

          font-size: 13px;
        }

        /* =====================================
           TABLET
        ====================================== */

        @media (max-width: 800px) {
          .contactSection {
            padding-left: 5%;
            padding-right: 5%;
          }

          .contactEmailCard {
            max-width: 650px;
          }
        }

        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 600px) {
          .contactSection {
            padding:
              80px
              20px
              70px;
          }

          .contactTitle {
            font-size:
              clamp(
                2.8rem,
                12vw,
                3.8rem
              );

            letter-spacing:
              -2px;
          }

          .contactDescription {
            margin-top: 22px;

            font-size: 13px;

            line-height: 1.75;
          }

          .contactEmailCard {
            flex-direction: column;

            align-items: stretch;

            gap: 20px;

            padding: 22px;

            border-radius: 16px;
          }

          .emailInfo {
            width: 100%;
          }

          .emailIcon {
            width: 46px;
            height: 46px;

            border-radius: 11px;

            font-size: 17px;
          }

          .emailButton {
            width: 100%;

            min-height: 44px;
          }
        }

        /* =====================================
           SMALL MOBILE
        ====================================== */

        @media (max-width: 400px) {
          .contactSection {
            padding:
              70px
              16px
              60px;
          }

          .contactLabel {
            font-size: 10px;

            letter-spacing: 2px;
          }

          .contactTitle {
            font-size: 2.7rem;

            letter-spacing:
              -1.5px;
          }

          .contactDescription {
            font-size: 12px;
          }

          .contactEmailCard {
            padding: 18px;

            gap: 18px;
          }

          .emailInfo {
            gap: 12px;
          }

          .emailIcon {
            width: 43px;
            height: 43px;

            font-size: 16px;
          }

          .emailLabel {
            font-size: 8px;
          }

          .emailAddress {
            font-size: 11px;
          }

          .emailButton {
            font-size: 10px;
          }
        }

        /* =====================================
           VERY SMALL PHONES
        ====================================== */

        @media (max-width: 340px) {
          .contactSection {
            padding-left: 12px;
            padding-right: 12px;
          }

          .contactTitle {
            font-size: 2.45rem;
          }

          .contactEmailCard {
            padding: 16px;
          }

          .emailAddress {
            font-size: 10.5px;
          }
        }

        /* =====================================
           REDUCED MOTION
        ====================================== */

        @media (prefers-reduced-motion: reduce) {
          .contactSection *,
          .contactSection::before,
          .contactSection::after {
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
        id="contact"
        className={`contactSection ${
          visible ? "visible" : ""
        }`}
      >
        {/* Background glow */}

        <div className="contactGlow" />

        <div className="contactContainer">

          {/* HEADER */}

          <div className="contactHeader">
            <div className="contactLabel">
              06 — CONTACT
            </div>

            <h2 className="contactTitle">
              Let's build
              <span>something.</span>
            </h2>

            <p className="contactDescription">
              Have a project idea, freelance opportunity,
              or simply want to connect? Feel free to
              reach out. I'm always open to discussing
              interesting ideas and opportunities.
            </p>
          </div>

          {/* EMAIL CARD */}

          <div className="contactEmailCard">

            <div className="emailInfo">

              <div className="emailIcon">
                <BsEnvelopeFill />
              </div>

              <div>
                <p className="emailLabel">
                  Email me
                </p>

                <p className="emailAddress">
                  emaankhan63421@gmail.com
                </p>
              </div>

            </div>

            <a
              href="mailto:emaankhan63421@gmail.com"
              className="emailButton"
            >
              Get in touch
              <BsArrowUpRight />
            </a>

          </div>

        </div>
      </section>
    </>
  );
}