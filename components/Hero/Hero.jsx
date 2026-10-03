"use client";

import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Hero() {
  /* =====================================================
     LEFT SIDE CONTENT
  ===================================================== */

  const titleText = "Hi, I'm ";
  const nameText = "Eman Fatima";

  const roleText =
    "Software Engineering Student & Full-Stack Developer";

  const subtitleText =
    "I build modern, responsive web applications and AI-powered systems using Next.js, React, FastAPI, PostgreSQL, and RAG technologies. I enjoy turning ideas into reliable and user-friendly digital products.";

  /* =====================================================
     LEFT SIDE STREAMING STATE
  ===================================================== */

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const [leftTyping, setLeftTyping] = useState(true);

  /* =====================================================
     CODE STREAMING STATE
  ===================================================== */

  const [visibleLines, setVisibleLines] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const totalLines = 31;

  /* =====================================================
     TECHNOLOGIES
  ===================================================== */

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "AI / RAG",
    "Wordpress",
    "Git/Github",
  ];

  /* =====================================================
     MAIN ANIMATION
  ===================================================== */

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* ===================================================
       REDUCED MOTION
    =================================================== */

    if (reduceMotion) {
      setTitle(titleText);
      setName(nameText);
      setRole(roleText);
      setSubtitle(subtitleText);

      setVisibleLines(totalLines);

      setIsTyping(false);
      setLeftTyping(false);

      return;
    }

    let cancelled = false;

    /* ===================================================
       DELAY HELPER
    =================================================== */

    const sleep = (ms) =>
      new Promise((resolve) => {
        setTimeout(resolve, ms);
      });

    /* ===================================================
       CHARACTER STREAMING
    =================================================== */

    const streamText = async (text, setter, speed) => {
      for (let i = 0; i < text.length; i++) {
        if (cancelled) return;

        setter(text.slice(0, i + 1));

        /*
          Small random variation makes the
          typing feel more natural.
        */
        const randomSpeed =
          speed + Math.random() * 20;

        await sleep(randomSpeed);
      }
    };

    /* ===================================================
       LEFT SIDE CHATGPT STYLE STREAM
    =================================================== */

    const startLeftStreaming = async () => {
      await sleep(350);

      if (cancelled) return;

      /* -----------------------------------------------
         TITLE
      ------------------------------------------------ */

      await streamText(
        titleText,
        setTitle,
        45
      );

      if (cancelled) return;

      /* -----------------------------------------------
         NAME
      ------------------------------------------------ */

      await streamText(
        nameText,
        setName,
        75
      );

      if (cancelled) return;

      await sleep(180);

      /* -----------------------------------------------
         ROLE
      ------------------------------------------------ */

      await streamText(
        roleText,
        setRole,
        38
      );

      if (cancelled) return;

      await sleep(180);

      /* -----------------------------------------------
         SUBTITLE
      ------------------------------------------------ */

      await streamText(
        subtitleText,
        setSubtitle,
        16
      );

      if (cancelled) return;

      /*
        Keep cursor visible briefly
        after streaming finishes.
      */
      await sleep(700);

      if (!cancelled) {
        setLeftTyping(false);
      }
    };

    /* ===================================================
       CODE WINDOW STREAM
    =================================================== */

    let currentLine = 0;

    const codeStartDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (cancelled) {
          clearInterval(interval);
          return;
        }

        currentLine += 1;

        setVisibleLines(currentLine);

        if (currentLine >= totalLines) {
          clearInterval(interval);

          setTimeout(() => {
            if (!cancelled) {
              setIsTyping(false);
            }
          }, 500);
        }
      }, 90);
    }, 600);

    /* Start left animation */
    startLeftStreaming();

    /* ===================================================
       CLEANUP
    =================================================== */

    return () => {
      cancelled = true;

      clearTimeout(codeStartDelay);
    };
  }, []);

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <>
      <section id="hero" className="hero">
        <div className="heroContainer">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="left">

            {/* =================================================
                TITLE
            ================================================= */}

            <h1 className="title">
              {title}

              <span className="gradientName">
                {name}
              </span>

              {leftTyping && (
                <span className="streamCursor">
                  ▌
                </span>
              )}
            </h1>

            {/* =================================================
                ROLE
            ================================================= */}

            <h2 className="role">
              {role}
            </h2>

            {/* =================================================
                SUBTITLE
            ================================================= */}

            <p className="subtitle">
              {subtitle}

              {leftTyping &&
                role.length === roleText.length && (
                  <span className="streamCursor">
                    ▌
                  </span>
                )}
            </p>

            {/* =================================================
                TECHNOLOGIES
            ================================================= */}

            <div className="techStack">
              {technologies.map((tech) => (
                <span
                  className="tech"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* =================================================
                SOCIAL ICONS
            ================================================= */}

            <div className="icons">

              <a
                href="https://github.com/Eman-fatimeh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <BsGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/eman-fatima16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </a>

            </div>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="buttons">

              <a
                href="#contact"
                className="btn primary"
              >
                Contact Me
              </a>

              <a
                href="/Resume.pdf"
                download
                className="btn outline"
              >
                Download CV
              </a>

            </div>

          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="right">

            <div
              className={`codeWindow ${
                isTyping ? "typing" : ""
              }`}
            >

              {/* =================================================
                  TOP BAR
              ================================================= */}

              <div className="topBar">

                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>

                <span className="fileName">
                  developer.js
                </span>

              </div>

              {/* =================================================
                  CODE
              ================================================= */}

              <pre className="code">

                {/* 1 */}
                {visibleLines >= 1 && (
                  <span className="codeLine">
                    <span className="keyword">
                      const
                    </span>{" "}
                    <span className="property">
                      developer
                    </span>{" "}
                    = {"{"}
                  </span>
                )}

                {/* 2 */}
                {visibleLines >= 2 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">
                      name
                    </span>
                    :{" "}
                    <span className="string">
                      "Amna"
                    </span>
                    ,
                  </span>
                )}

                {/* 3 */}
                {visibleLines >= 3 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">
                      role
                    </span>
                    :{" "}
                    <span className="string">
                      "Full-Stack Developer"
                    </span>
                    ,
                  </span>
                )}

                {/* 4 */}
                {visibleLines >= 4 && (
                  <span className="codeLine">
                    {" "}
                  </span>
                )}

                {/* 5 */}
                {visibleLines >= 5 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">
                      frontend
                    </span>
                    : [
                  </span>
                )}

                {/* 6 */}
                {visibleLines >= 6 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">
                      "Next.js"
                    </span>
                    ,
                  </span>
                )}

                {/* 7 */}
                {visibleLines >= 7 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">
                      "React"
                    </span>
                    ,
                  </span>
                )}

                {/* 8 */}
                {visibleLines >= 8 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">
                      "TypeScript"
                    </span>
                    ,
                  </span>
                )}

                {/* 9 */}
                {visibleLines >= 9 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">
                      "Tailwind CSS"
                    </span>
                  </span>
                )}

                {/* 10 */}
                {visibleLines >= 10 && (
                  <span className="codeLine">
                    {"  "}],
                  </span>
                )}

                {/* 11 */}
                {visibleLines >= 11 && (
                  <span className="codeLine">
                    {" "}
                  </span>
                )}

                {/* 12 */}
                {visibleLines >= 12 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">
                      backend
                    </span>
                    : [
                  </span>
                )}

                {/* 13 */}
                {visibleLines >= 13 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">
                      "FastAPI"
                    </span>
                    ,
                  </span>
                )}

                {/* 14 */}
                {visibleLines >= 14 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">
                      "Python"
                    </span>
                    ,
                  </span>
                )}

                {/* 15 */}
                {visibleLines >= 15 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">
                      "PostgreSQL"
                    </span>
                  </span>
                )}

                {/* 16 */}
                {visibleLines >= 16 && (
                  <span className="codeLine">
                    {"  "}],
                  </span>
                )}

                {/* 17 */}
                {visibleLines >= 17 && (
                  <span className="codeLine">
                    {" "}
                  </span>
                )}

                {/* 18 */}
                {visibleLines >= 18 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">
                      ai
                    </span>
                    : [
                  </span>
                )}

                {/* 19 */}
                {visibleLines >= 19 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">
                      "RAG"
                    </span>
                    ,
                  </span>
                )}

                {/* 20 */}
                {visibleLines >= 20 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">
                      "Embeddings"
                    </span>
                    ,
                  </span>
                )}

                {/* 21 */}
                {visibleLines >= 21 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">
                      "Google Gemini"
                    </span>
                  </span>
                )}

                {/* 22 */}
                {visibleLines >= 22 && (
                  <span className="codeLine">
                    {"  "}],
                  </span>
                )}

                {/* 23 */}
                {visibleLines >= 23 && (
                  <span className="codeLine">
                    {" "}
                  </span>
                )}

                {/* 24 */}
                {visibleLines >= 24 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">
                      problemSolver
                    </span>
                    :{" "}
                    <span className="boolean">
                      true
                    </span>
                    ,
                  </span>
                )}

                {/* 25 */}
                {visibleLines >= 25 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">
                      quickLearner
                    </span>
                    :{" "}
                    <span className="boolean">
                      true
                    </span>
                    ,
                  </span>
                )}

                {/* 26 */}
                {visibleLines >= 26 && (
                  <span className="codeLine">
                    {" "}
                  </span>
                )}

                {/* 27 */}
                {visibleLines >= 27 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">
                      hireable
                    </span>
                    :{" "}
                    <span className="keyword">
                      function
                    </span>
                    () {"{"}
                  </span>
                )}

                {/* 28 */}
                {visibleLines >= 28 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="keyword">
                      return
                    </span>{" "}
                    <span className="boolean">
                      true
                    </span>
                    ;
                  </span>
                )}

                {/* 29 */}
                {visibleLines >= 29 && (
                  <span className="codeLine">
                    {"  }"}
                  </span>
                )}

                {/* 30 */}
                {visibleLines >= 30 && (
                  <span className="codeLine">
                    {"};"}
                  </span>
                )}

                {/* 31 */}
                {visibleLines >= 31 && (
                  <span className="codeLine">
                    <span className="typingCursor">
                      ▋
                    </span>
                  </span>
                )}

              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        /* =================================================
           HERO
        ================================================= */

        .hero {
          min-height: 100vh;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 45px 7% 70px;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(133, 76, 230, 0.16),
              transparent 32%
            ),

            radial-gradient(
              circle at 85% 75%,
              rgba(255, 78, 205, 0.08),
              transparent 30%
            ),

            #08080c;

          color: white;

          overflow: hidden;
        }


        /* =================================================
           CONTAINER
        ================================================= */

        .heroContainer {
          width: 100%;
          max-width: 1200px;

          display: grid;

          grid-template-columns:
            1.05fr
            0.95fr;

          align-items: center;

          gap: 60px;
        }


        /* =================================================
           LEFT SIDE
        ================================================= */

        .left {
          min-width: 0;

          position: relative;

          z-index: 1;
        }


        /*
          This is NOT a permanent decorative line.

          It behaves more like a streaming signal
          moving alongside the text.
        */

        .left::before {
          content: "";

          position: absolute;

          left: -32px;

          top: 0;

          width: 2px;

          height: 100px;

          border-radius: 999px;

          background:
            linear-gradient(
              to bottom,
              transparent,
              #854ce6,
              #b66cff,
              #ff4ecd,
              transparent
            );

          opacity: 0;

          filter:
            blur(1px)
            drop-shadow(
              0 0 8px
              rgba(168, 117, 255, 0.8)
            );

          animation:
            textStreamSignal
            2.4s
            ease-in-out
            infinite;

          pointer-events: none;
        }


        @keyframes textStreamSignal {

          0% {
            opacity: 0;

            transform:
              translateY(-30px)
              scaleY(0.6);
          }

          20% {
            opacity: 0.75;
          }

          50% {
            opacity: 1;

            transform:
              translateY(20px)
              scaleY(1);
          }

          80% {
            opacity: 0.5;
          }

          100% {
            opacity: 0;

            transform:
              translateY(100px)
              scaleY(0.6);
          }
        }


        /* =================================================
           TITLE
        ================================================= */

        .title {
          margin: 0;

          font-size:
            clamp(
              3rem,
              6vw,
              5.3rem
            );

          font-weight: 800;

          line-height: 1.05;

          letter-spacing: -3px;

          min-height: 1.05em;
        }


        .gradientName {
          display: inline-block;

          background:
            linear-gradient(
              90deg,
              #854ce6,
              #b66cff,
              #ff4ecd
            );

          -webkit-background-clip: text;

          -webkit-text-fill-color:
            transparent;

          background-clip: text;
        }


        /* =================================================
           CHATGPT STYLE CURSOR
        ================================================= */

        .streamCursor {
          display: inline-block;

          width: 3px;

          height: 0.9em;

          margin-left: 5px;

          vertical-align: -0.05em;

          background:
            linear-gradient(
              to bottom,
              #b66cff,
              #ff4ecd
            );

          border-radius: 3px;

          box-shadow:
            0 0 7px
            rgba(168, 117, 255, 0.9),

            0 0 16px
            rgba(133, 76, 230, 0.6);

          animation:
            textCursorBlink
            0.85s
            steps(1)
            infinite;
        }


        @keyframes textCursorBlink {

          0%,
          45% {
            opacity: 1;
          }

          46%,
          100% {
            opacity: 0;
          }
        }


        /* =================================================
           ROLE
        ================================================= */

        .role {
          margin-top: 18px;

          margin-bottom: 0;

          min-height: 1.4em;

          font-size:
            clamp(
              1.15rem,
              2vw,
              1.65rem
            );

          font-weight: 600;

          line-height: 1.4;

          color: #dddddf;
        }


        .role span {
          color: #a975ff;
        }


        /* =================================================
           SUBTITLE
        ================================================= */

        .subtitle {
          max-width: 650px;

          min-height: 58px;

          margin-top: 18px;

          color: #9999a5;

          font-size: 16px;

          line-height: 1.8;
        }


        /* =================================================
           TECHNOLOGIES
        ================================================= */

        .techStack {
          display: flex;

          flex-wrap: wrap;

          gap: 9px;

          margin-top: 21px;
        }


        .tech {
          padding:
            7px 12px;

          border-radius: 7px;

          background:
            rgba(
              255,
              255,
              255,
              0.04
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );

          color: #cfcfd8;

          font-size: 12px;

          font-weight: 500;

          transition:
            all
            0.25s
            ease;
        }


        .tech:hover {
          color: white;

          border-color:
            rgba(
              133,
              76,
              230,
              0.6
            );

          background:
            rgba(
              133,
              76,
              230,
              0.09
            );

          transform:
            translateY(-2px);
        }


        /* =================================================
           SOCIAL ICONS
        ================================================= */

        .icons {
          display: flex;

          align-items: center;

          gap: 15px;

          margin-top: 25px;
        }


        .icons a {
          display: flex;

          align-items: center;

          justify-content: center;

          width: 42px;

          height: 42px;

          border-radius: 10px;

          color: #a875ff;

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
              0.07
            );

          font-size: 19px;

          text-decoration: none;

          transition:
            all
            0.3s
            ease;
        }


        .icons a:hover {
          transform:
            translateY(-4px);

          color: white;

          border-color:
            #854ce6;

          background:
            rgba(
              133,
              76,
              230,
              0.15
            );

          box-shadow:
            0 8px 25px
            rgba(
              133,
              76,
              230,
              0.22
            );
        }


        /* =================================================
           BUTTONS
        ================================================= */

        .buttons {
          display: flex;

          align-items: center;

          gap: 14px;

          margin-top: 27px;
        }


        .btn {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          min-width: 140px;

          padding:
            13px 22px;

          border-radius: 9px;

          font-size: 14px;

          font-weight: 700;

          text-decoration: none;

          cursor: pointer;

          transition:
            all
            0.3s
            ease;
        }


        .primary {
          color: white;

          background:
            linear-gradient(
              90deg,
              #854ce6,
              #b14df0,
              #ff4ecd
            );

          border:
            1px solid
            transparent;

          box-shadow:
            0 8px 25px
            rgba(
              133,
              76,
              230,
              0.25
            );
        }


        .primary:hover {
          transform:
            translateY(-3px);

          box-shadow:
            0 12px 30px
            rgba(
              133,
              76,
              230,
              0.4
            );
        }


        .outline {
          color: #ddd;

          background: transparent;

          border:
            1px solid
            rgba(
              133,
              76,
              230,
              0.6
            );
        }


        .outline:hover {
          transform:
            translateY(-3px);

          color: white;

          background:
            rgba(
              133,
              76,
              230,
              0.1
            );

          border-color:
            #a875ff;
        }


        /* =================================================
           RIGHT SIDE
        ================================================= */

        .right {
          position: relative;

          display: flex;

          justify-content: center;

          align-items: center;

          min-width: 0;
        }


        .right::before {
          content: "";

          position: absolute;

          width: 330px;

          height: 330px;

          background:
            #854ce6;

          opacity: 0.10;

          filter:
            blur(100px);

          border-radius: 50%;

          pointer-events: none;
        }


        /* =================================================
           CODE WINDOW
        ================================================= */

        .codeWindow {
          position: relative;

          width: 100%;

          max-width: 500px;

          background:
            rgba(
              13,
              13,
              18,
              0.96
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.09
            );

          border-radius: 15px;

          overflow: hidden;

          box-shadow:
            0 30px 70px
            rgba(
              0,
              0,
              0,
              0.5
            ),

            0 0 45px
            rgba(
              133,
              76,
              230,
              0.16
            );

          transform:
            perspective(1000px)
            rotateY(-3deg);

          transition:
            transform
            0.4s
            ease,

            box-shadow
            0.4s
            ease;
        }


        .codeWindow.typing {
          box-shadow:
            0 30px 70px
            rgba(
              0,
              0,
              0,
              0.5
            ),

            0 0 65px
            rgba(
              133,
              76,
              230,
              0.3
            );
        }


        .codeWindow:hover {
          transform:
            perspective(1000px)
            rotateY(0deg)
            translateY(-5px);

          box-shadow:
            0 35px 75px
            rgba(
              0,
              0,
              0,
              0.55
            ),

            0 0 55px
            rgba(
              133,
              76,
              230,
              0.22
            );
        }


        /* =================================================
           TOP BAR
        ================================================= */

        .topBar {
          height: 43px;

          display: flex;

          align-items: center;

          gap: 8px;

          padding:
            0 15px;

          background:
            #111116;

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.06
            );
        }


        .topBar span {
          width: 11px;

          height: 11px;

          border-radius: 50%;

          flex-shrink: 0;
        }


        .red {
          background:
            #ff5f56;
        }


        .yellow {
          background:
            #ffbd2e;
        }


        .green {
          background:
            #27c93f;
        }


        .fileName {
          margin-left: 10px;

          color: #777;

          font-size: 12px;

          font-family:
            "Fira Code",
            "Courier New",
            monospace;
        }


        /* =================================================
           CODE
        ================================================= */

        .code {
          margin: 0;

          padding:
            28px 30px;

          color:
            #f8f8f2;

          font-family:
            "Fira Code",
            "Courier New",
            monospace;

          font-size: 13px;

          line-height: 1.85;

          overflow-x: auto;

          white-space: pre;
        }


        .codeLine {
          display: block;

          min-height:
            1.85em;

          overflow: hidden;

          white-space: pre;

          animation:
            codeLineReveal
            0.32s
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            )
            both;
        }


        @keyframes codeLineReveal {

          from {
            opacity: 0;

            transform:
              translateX(-8px);

            clip-path:
              inset(
                0 100% 0 0
              );
          }

          to {
            opacity: 1;

            transform:
              translateX(0);

            clip-path:
              inset(
                0 0 0 0
              );
          }
        }


        /* =================================================
           CODE CURSOR
        ================================================= */

        .typingCursor {
          display: inline-block;

          color:
            #a875ff;

          font-size: 13px;

          line-height: 1;

          text-shadow:
            0 0 8px
            rgba(
              168,
              117,
              255,
              0.9
            );

          animation:
            cursorBlink
            0.8s
            steps(1)
            infinite;
        }


        @keyframes cursorBlink {

          0%,
          45% {
            opacity: 1;
          }

          46%,
          100% {
            opacity: 0;
          }
        }


        /* =================================================
           CODE COLORS
        ================================================= */

        .keyword {
          color:
            #ff79c6;
        }


        .property {
          color:
            #8be9fd;
        }


        .string {
          color:
            #f1fa8c;
        }


        .boolean {
          color:
            #bd93f9;
        }


        .function {
          color:
            #50fa7b;
        }


        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 950px) {

          .hero {
            min-height: auto;

            padding:
              55px
              6%
              65px;
          }


          .heroContainer {
            grid-template-columns: 1fr;

            gap: 55px;
          }


          .left {
            text-align: center;
          }


          /*
            On tablet the stream indicator
            moves above the text.
          */

          .left::before {
            left: 50%;

            top: -30px;

            width: 80px;

            height: 2px;

            transform:
              translateX(-50%);

            background:
              linear-gradient(
                90deg,
                transparent,
                #854ce6,
                #b66cff,
                #ff4ecd,
                transparent
              );

            animation:
              tabletStream
              2.4s
              ease-in-out
              infinite;
          }


          @keyframes tabletStream {

            0% {
              opacity: 0;

              width: 30px;
            }

            20% {
              opacity: 0.7;
            }

            50% {
              opacity: 1;

              width: 180px;
            }

            80% {
              opacity: 0.7;
            }

            100% {
              opacity: 0;

              width: 30px;
            }
          }


          .title {
            max-width: 800px;

            margin-left: auto;

            margin-right: auto;
          }


          .subtitle {
            margin-left: auto;

            margin-right: auto;
          }


          .techStack,
          .icons,
          .buttons {
            justify-content: center;
          }


          .right {
            width: 100%;
          }


          .codeWindow {
            width: 100%;

            max-width: 650px;

            transform: none;
          }


          .codeWindow:hover {
            transform:
              translateY(-5px);
          }
        }


        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 550px) {

          .hero {
            padding:
              70px
              16px
              45px;
          }


          .heroContainer {
            gap: 42px;
          }


          .title {
            font-size:
              clamp(
                2.5rem,
                12vw,
                3.2rem
              );

            letter-spacing:
              -2px;

            line-height:
              1.08;
          }


          .gradientName {
            display: inline;
          }


          .role {
            margin-top:
              15px;

            font-size:
              1.05rem;

            line-height:
              1.5;
          }


          .subtitle {
            margin-top:
              15px;

            font-size:
              14px;

            line-height:
              1.7;

            min-height:
              72px;
          }


          /*
            Mobile streaming signal
            sits above the heading.
          */

          .left::before {
            top: -22px;

            width: 60px;

            height: 2px;

            animation:
              mobileStream
              2.2s
              ease-in-out
              infinite;
          }


          @keyframes mobileStream {

            0% {
              opacity: 0;

              width: 20px;
            }

            25% {
              opacity: 0.7;
            }

            50% {
              opacity: 1;

              width: 130px;
            }

            75% {
              opacity: 0.7;
            }

            100% {
              opacity: 0;

              width: 20px;
            }
          }


          .streamCursor {
            width: 2px;

            height:
              0.85em;

            margin-left:
              3px;
          }


          .techStack {
            gap: 7px;

            margin-top:
              18px;
          }


          .tech {
            padding:
              6px 9px;

            font-size:
              11px;
          }


          .icons {
            gap: 10px;

            margin-top:
              21px;
          }


          .icons a {
            width:
              40px;

            height:
              40px;

            font-size:
              17px;
          }


          .buttons {
            flex-direction:
              column;

            width: 100%;

            gap: 10px;

            margin-top:
              24px;
          }


          .btn {
            width: 100%;

            min-width: 0;

            padding:
              13px 18px;
          }


          .right {
            width: 100%;
          }


          .right::before {
            width:
              260px;

            height:
              260px;

            filter:
              blur(70px);
          }


          .codeWindow {
            width:
              100%;

            border-radius:
              11px;

            transform:
              none;
          }


          .codeWindow:hover {
            transform:
              translateY(-3px);
          }


          .topBar {
            height:
              39px;

            padding:
              0 12px;
          }


          .topBar span {
            width:
              9px;

            height:
              9px;
          }


          .fileName {
            margin-left:
              6px;

            font-size:
              10px;
          }


          .code {
            padding:
              18px;

            font-size:
              9px;

            line-height:
              1.7;

            overflow-x:
              auto;
          }


          .codeLine {
            min-height:
              1.7em;
          }


          .typingCursor {
            font-size:
              9px;
          }
        }


        /* =================================================
           VERY SMALL PHONES
        ================================================= */

        @media (max-width: 380px) {

          .hero {
            padding-left:
              12px;

            padding-right:
              12px;
          }


          .heroContainer {
            gap:
              35px;
          }


          .title {
            font-size:
              2.3rem;

            letter-spacing:
              -1.5px;
          }


          .role {
            font-size:
              0.95rem;
          }


          .subtitle {
            font-size:
              13px;
          }


          .tech {
            padding:
              5px 8px;

            font-size:
              10px;
          }


          .btn {
            font-size:
              12px;
          }


          .code {
            padding:
              15px;

            font-size:
              8px;

            line-height:
              1.65;
          }


          .codeLine {
            min-height:
              1.65em;
          }


          .typingCursor {
            font-size:
              8px;
          }
        }


        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {

          .left::before {
            animation:
              none !important;

            opacity:
              0 !important;
          }


          .streamCursor {
            animation:
              none !important;

            opacity:
              1;
          }


          .codeLine {
            opacity:
              1 !important;

            clip-path:
              none !important;

            transform:
              none !important;

            animation:
              none !important;
          }


          .typingCursor {
            animation:
              none !important;

            opacity:
              1;
          }


          .codeWindow,
          .codeWindow:hover,
          .tech,
          .icons a,
          .btn {
            transition:
              none !important;
          }
        }

      `}</style>
    </>
  );
}
