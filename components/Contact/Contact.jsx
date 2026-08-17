"use client";

import { useEffect, useState } from "react";
import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
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

          padding: 120px 7% 80px;

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

        .contactContainer {
          max-width: 1000px;

          margin: 0 auto;

          position: relative;

          z-index: 2;
        }

        /* =====================================
           DECORATIVE GLOW
        ====================================== */

        .contactGlow {
          position: absolute;

          width: 350px;

          height: 350px;

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

          filter:
            blur(130px);

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
          margin: 0;

          font-size:
            clamp(
              3rem,
              7vw,
              5.5rem
            );

          line-height: 0.95;

          letter-spacing: -4px;

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

          -webkit-background-clip:
            text;

          -webkit-text-fill-color:
            transparent;

          background-clip:
            text;
        }

        .contactDescription {
          max-width: 580px;

          margin:
            25px auto 0;

          color: #8f8f9b;

          font-size: 14px;

          line-height: 1.8;
        }

        /* =====================================
           EMAIL CARD
        ====================================== */

        .contactEmailCard {
          max-width: 620px;

          margin:
            50px auto 0;

          padding: 28px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 25px;

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
            0.4s ease;
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

        .emailInfo {
          display: flex;

          align-items: center;

          gap: 17px;

          min-width: 0;
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
          margin: 0 0 5px;

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

          font-size: 14px;

          font-weight: 600;

          word-break:
            break-word;
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

          padding:
            11px 17px;

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

          box-shadow:
            0 7px 20px
              rgba(
                133,
                76,
                230,
                0.2
              );

          transition:
            0.3s ease;
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
          font-size: 13px;
        }

        /* =====================================
           SOCIAL LINKS
        ====================================== */

        .socialSection {
          margin-top: 55px;

          text-align: center;

          opacity: 0;
        }

        .contactSection.visible
        .socialSection {
          animation:
            socialReveal
            0.8s
            ease
            0.5s
            forwards;
        }

        @keyframes socialReveal {
          to {
            opacity: 1;
          }
        }

        .socialText {
          margin:
            0 0 18px;

          color:
            #666673;

          font-family:
            "Fira Code",
            monospace;

          font-size: 10px;

          letter-spacing: 1.5px;
        }

        .socialLinks {
          display: flex;

          justify-content: center;

          gap: 12px;
        }

        .socialLink {
          width: 43px;

          height: 43px;

          display: flex;

          align-items: center;

          justify-content: center;

          border:
            1px solid
              rgba(
                255,
                255,
                255,
                0.09
              );

          border-radius: 10px;

          background:
            rgba(
              255,
              255,
              255,
              0.025
            );

          color:
            #8e8e99;

          text-decoration: none;

          font-size: 17px;

          transition:
            transform 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .socialLink:hover {
          transform:
            translateY(-5px);

          color:
            #ffffff;

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
              0.1
            );

          box-shadow:
            0 8px 25px
              rgba(
                133,
                76,
                230,
                0.15
              );
        }

        /* =====================================
           FOOTER
        ====================================== */

        .contactFooter {
          margin-top: 80px;

          padding-top: 25px;

          border-top:
            1px solid
              rgba(
                255,
                255,
                255,
                0.06
              );

          display: flex;

          justify-content:
            space-between;

          align-items: center;

          color:
            #555560;

          font-family:
            "Fira Code",
            monospace;

          font-size: 9px;

          letter-spacing: 1px;

          opacity: 0;
        }

        .contactSection.visible
        .contactFooter {
          animation:
            footerReveal
            0.8s
            ease
            0.8s
            forwards;
        }

        @keyframes footerReveal {
          to {
            opacity: 1;
          }
        }

        .footerArrow {
          display: inline-flex;

          align-items: center;

          gap: 6px;

          color:
            #777783;

          text-decoration:
            none;

          transition:
            color 0.3s ease;
        }

        .footerArrow:hover {
          color:
            #a875ff;
        }

        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 650px) {

          .contactSection {
            padding:
              90px 20px 50px;
          }

          .contactTitle {
            font-size:
              3.3rem;

            letter-spacing:
              -2px;
          }

          .contactEmailCard {
            flex-direction:
              column;

            align-items:
              stretch;

            padding: 22px;
          }

          .emailButton {
            width: 100%;
          }

          .contactFooter {
            flex-direction:
              column;

            gap: 15px;

            text-align:
              center;
          }
        }

        @media (max-width: 400px) {

          .contactTitle {
            font-size:
              2.8rem;
          }

          .emailAddress {
            font-size:
              12px;
          }
        }

        /* =====================================
           REDUCED MOTION
        ====================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

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

        <div className="contactGlow"></div>

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

          {/* EMAIL */}

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