"use client";

import { BsArrowUp, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <style>{`
        /* =====================================
           FOOTER
        ====================================== */

        .footer {
          position: relative;

          padding: 35px 7% 25px;

          background:
            linear-gradient(
              180deg,
              #0a0a0f,
              #07070a
            );

          color: white;

          border-top:
            1px solid
              rgba(
                255,
                255,
                255,
                0.06
              );

          overflow: hidden;
        }

        /* Top gradient line */

        .footer::before {
          content: "";

          position: absolute;

          top: 0;

          left: 50%;

          width: 180px;

          height: 1px;

          transform:
            translateX(-50%);

          background:
            linear-gradient(
              90deg,
              transparent,
              #854ce6,
              #ff4ecd,
              transparent
            );

          box-shadow:
            0 0 15px
              rgba(
                133,
                76,
                230,
                0.5
              );
        }

        .footerContainer {
          max-width: 1100px;

          margin: 0 auto;
        }

        /* =====================================
           MAIN FOOTER
        ====================================== */

        .footerMain {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 30px;

          padding-bottom: 28px;
        }

        /* =====================================
           BRAND
        ====================================== */

        .footerBrand {
          display: flex;

          align-items: center;

          gap: 13px;
        }

        .footerLogo {
          width: 38px;

          height: 38px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 10px;

          background:
            linear-gradient(
              135deg,
              #854ce6,
              #ff4ecd
            );

          color: white;

          font-family:
            "Fira Code",
            monospace;

          font-size: 13px;

          font-weight: 800;

          box-shadow:
            0 5px 20px
              rgba(
                133,
                76,
                230,
                0.2
              );
        }

        .footerName {
          margin: 0;

          color: #ffffff;

          font-size: 14px;

          font-weight: 700;
        }

        .footerRole {
          margin: 3px 0 0;

          color: #666673;

          font-family:
            "Fira Code",
            monospace;

          font-size: 9px;

          letter-spacing: 0.5px;
        }

        /* =====================================
           SOCIAL LINKS
        ====================================== */

        .footerSocials {
          display: flex;

          align-items: center;

          gap: 9px;
        }

        .footerSocial {
          width: 36px;

          height: 36px;

          display: flex;

          align-items: center;

          justify-content: center;

          border:
            1px solid
              rgba(
                255,
                255,
                255,
                0.08
              );

          border-radius: 9px;

          background:
            rgba(
              255,
              255,
              255,
              0.025
            );

          color: #777783;

          text-decoration: none;

          font-size: 14px;

          transition:
            0.3s ease;
        }

        .footerSocial:hover {
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
            translateY(-4px);

          box-shadow:
            0 7px 20px
              rgba(
                133,
                76,
                230,
                0.12
              );
        }

        /* =====================================
           BOTTOM
        ====================================== */

        .footerBottom {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 20px;

          padding-top: 20px;

          border-top:
            1px solid
              rgba(
                255,
                255,
                255,
                0.05
              );

          color: #555560;

          font-family:
            "Fira Code",
            monospace;

          font-size: 9px;

          letter-spacing: 0.5px;
        }

        .footerCopyright {
          margin: 0;
        }

        .footerBuilt {
          display: flex;

          align-items: center;

          gap: 5px;

          margin: 0;
        }

        .footerBuilt span {
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

          font-weight: 700;
        }

        /* =====================================
           BACK TO TOP
        ====================================== */

        .backTop {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          color: #777783;

          text-decoration: none;

          font-family:
            "Fira Code",
            monospace;

          font-size: 9px;

          letter-spacing: 1px;

          transition:
            0.3s ease;
        }

        .backTop:hover {
          color: #a875ff;

          transform:
            translateY(-2px);
        }

        .backTopIcon {
          width: 25px;

          height: 25px;

          display: flex;

          align-items: center;

          justify-content: center;

          border:
            1px solid
              rgba(
                133,
                76,
                230,
                0.2
              );

          border-radius: 7px;

          background:
            rgba(
              133,
              76,
              230,
              0.05
            );

          transition:
            0.3s ease;
        }

        .backTop:hover
        .backTopIcon {
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
              0.4
            );
        }

        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 600px) {

          .footer {
            padding:
              30px 20px 20px;
          }

          .footerMain {
            flex-direction:
              column;

            text-align:
              center;
          }

          .footerBrand {
            flex-direction:
              column;

            gap: 8px;
          }

          .footerBottom {
            flex-direction:
              column;

            text-align:
              center;

            gap: 15px;
          }

          .backTop {
            order: -1;
          }
        }

        /* =====================================
           REDUCED MOTION
        ====================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .footer *,
          .footer::before {
            transition:
              none !important;

            animation:
              none !important;
          }
        }
      `}</style>

      <footer className="footer">

        <div className="footerContainer">

          {/* =================================
              MAIN FOOTER
          ================================= */}

          <div className="footerMain">

            {/* BRAND */}

            <div className="footerBrand">

              <div className="footerLogo">
                FK
              </div>

              <div>
                <p className="footerName">
                  Fatima Khan
                </p>

                <p className="footerRole">
                  Frontend / Full Stack Developer
                </p>
              </div>

            </div>

            {/* SOCIALS */}

            <div className="footerSocials">

              <a
                href="https://github.com/Eman-fatimeh"
                target="_blank"
                rel="noopener noreferrer"
                className="footerSocial"
                aria-label="GitHub"
              >
                <BsGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/eman-fatima16"
                target="_blank"
                rel="noopener noreferrer"
                className="footerSocial"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>

            </div>

          </div>

          {/* =================================
              BOTTOM
          ================================= */}

          <div className="footerBottom">

            <p className="footerCopyright">
              © {new Date().getFullYear()} Fatima Khan.
              All rights reserved.
            </p>

            <p className="footerBuilt">
              Built with
              <span> Next.js</span>
            </p>

            <a
              href="#hero"
              className="backTop"
            >
              BACK TO TOP

              <span className="backTopIcon">
                <BsArrowUp />
              </span>

            </a>

          </div>

        </div>

      </footer>
    </>
  );
}
