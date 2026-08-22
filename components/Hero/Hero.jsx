"use client";

import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const totalLines = 31;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setVisibleLines(totalLines);
      setIsTyping(false);
      return;
    }

    let currentLine = 0;

    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        currentLine += 1;
        setVisibleLines(currentLine);

        if (currentLine >= totalLines) {
          clearInterval(interval);
          setTimeout(() => setIsTyping(false), 400);
        }
      }, 95);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <>
      <style>{`
        /* ================================
           HERO SECTION
        ================================= */

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

        .heroContainer {
          width: 100%;
          max-width: 1200px;

          display: grid;
          grid-template-columns: 1.05fr 0.95fr;

          align-items: center;

          gap: 60px;
        }

        /* ================================
           LEFT SIDE
        ================================= */

        .left {
          min-width: 0;
        }

        .title {
          margin: 0;

          font-size: clamp(3rem, 6vw, 5.3rem);
          font-weight: 800;

          line-height: 1.05;
          letter-spacing: -3px;
        }

        .gradientName {
          display: inline-block;

          background: linear-gradient(
            90deg,
            #854ce6,
            #b66cff,
            #ff4ecd
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .role {
          margin-top: 18px;
          margin-bottom: 0;

          font-size: clamp(1.15rem, 2vw, 1.65rem);

          font-weight: 600;

          line-height: 1.4;

          color: #dddddf;
        }

        .role span {
          color: #a975ff;
        }

        .subtitle {
          max-width: 650px;

          margin-top: 18px;

          color: #9999a5;

          font-size: 16px;

          line-height: 1.8;
        }

        /* ================================
           TECHNOLOGIES
        ================================= */

        .techStack {
          display: flex;
          flex-wrap: wrap;

          gap: 9px;

          margin-top: 21px;
        }

        .tech {
          padding: 7px 12px;

          border-radius: 7px;

          background: rgba(255, 255, 255, 0.04);

          border: 1px solid rgba(255, 255, 255, 0.08);

          color: #cfcfd8;

          font-size: 12px;

          font-weight: 500;

          transition: all 0.25s ease;
        }

        .tech:hover {
          color: white;

          border-color: rgba(133, 76, 230, 0.6);

          background: rgba(133, 76, 230, 0.09);

          transform: translateY(-2px);
        }

        /* ================================
           SOCIAL ICONS
        ================================= */

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

          background: rgba(255, 255, 255, 0.035);

          border: 1px solid rgba(255, 255, 255, 0.07);

          font-size: 19px;

          text-decoration: none;

          transition: all 0.3s ease;
        }

        .icons a:hover {
          transform: translateY(-4px);

          color: white;

          border-color: #854ce6;

          background: rgba(133, 76, 230, 0.15);

          box-shadow:
            0 8px 25px rgba(133, 76, 230, 0.22);
        }

        /* ================================
           BUTTONS
        ================================= */

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

          padding: 13px 22px;

          border-radius: 9px;

          font-size: 14px;

          font-weight: 700;

          text-decoration: none;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .primary {
          color: white;

          background: linear-gradient(
            90deg,
            #854ce6,
            #b14df0,
            #ff4ecd
          );

          border: 1px solid transparent;

          box-shadow:
            0 8px 25px rgba(133, 76, 230, 0.25);
        }

        .primary:hover {
          transform: translateY(-3px);

          box-shadow:
            0 12px 30px rgba(133, 76, 230, 0.4);
        }

        .outline {
          color: #ddd;

          background: transparent;

          border: 1px solid rgba(133, 76, 230, 0.6);
        }

        .outline:hover {
          transform: translateY(-3px);

          color: white;

          background: rgba(133, 76, 230, 0.1);

          border-color: #a875ff;
        }

        /* ================================
           RIGHT SIDE
        ================================= */

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

          background: #854ce6;

          opacity: 0.10;

          filter: blur(100px);

          border-radius: 50%;

          pointer-events: none;
        }

        /* ================================
           CODE WINDOW
        ================================= */

        .codeWindow {
          position: relative;

          width: 100%;
          max-width: 500px;

          background: rgba(13, 13, 18, 0.96);

          border: 1px solid rgba(255, 255, 255, 0.09);

          border-radius: 15px;

          overflow: hidden;

          box-shadow:
            0 30px 70px rgba(0, 0, 0, 0.5),
            0 0 45px rgba(133, 76, 230, 0.16);

          transform:
            perspective(1000px)
            rotateY(-3deg);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .codeWindow.typing {
          box-shadow:
            0 30px 70px rgba(0, 0, 0, 0.5),
            0 0 55px rgba(133, 76, 230, 0.24);
        }

        .codeWindow:hover {
          transform:
            perspective(1000px)
            rotateY(0deg)
            translateY(-5px);

          box-shadow:
            0 35px 75px rgba(0, 0, 0, 0.55),
            0 0 55px rgba(133, 76, 230, 0.22);
        }

        /* ================================
           TOP BAR
        ================================= */

        .topBar {
          height: 43px;

          display: flex;

          align-items: center;

          gap: 8px;

          padding: 0 15px;

          background: #111116;

          border-bottom:
            1px solid rgba(255, 255, 255, 0.06);
        }

        .topBar span {
          width: 11px;
          height: 11px;

          border-radius: 50%;

          flex-shrink: 0;
        }

        .red {
          background: #ff5f56;
        }

        .yellow {
          background: #ffbd2e;
        }

        .green {
          background: #27c93f;
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

        /* ================================
           CODE
        ================================= */

        .code {
          margin: 0;

          padding: 28px 30px;

          color: #f8f8f2;

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

          min-height: 1.85em;

          overflow: hidden;

          white-space: pre;

          animation:
            codeLineReveal
            0.28s
            cubic-bezier(0.16, 1, 0.3, 1)
            both;
        }

        @keyframes codeLineReveal {
          from {
            opacity: 0;
            clip-path: inset(0 100% 0 0);
            transform: translateX(-4px);
          }
          to {
            opacity: 1;
            clip-path: inset(0 0 0 0);
            transform: translateX(0);
          }
        }

        .typingCursor {
          display: inline-block;

          width: 8px;

          margin-left: 3px;

          color: #a875ff;

          font-size: 13px;

          line-height: 1;

          vertical-align: middle;

          animation: cursorBlink 0.8s steps(1) infinite;

          text-shadow: 0 0 8px rgba(168, 117, 255, 0.9);
        }

        @keyframes cursorBlink {
          0%, 45% { opacity: 1; }
          46%, 100% { opacity: 0; }
        }

        .keyword {
          color: #ff79c6;
        }

        .property {
          color: #8be9fd;
        }

        .string {
          color: #f1fa8c;
        }

        .boolean {
          color: #bd93f9;
        }

        .function {
          color: #50fa7b;
        }

        /* ================================
           TABLET
        ================================= */

        @media (max-width: 950px) {

          .hero {
            min-height: auto;

            padding:
              40px
              6%
              60px;
          }

          .heroContainer {
            grid-template-columns: 1fr;

            gap: 50px;

            transform: none;
          }

          .left {
            text-align: center;
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
            transform: translateY(-5px);
          }
        }

        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 550px) {

          .hero {
            padding:
              30px
              16px
              45px;
          }

          .heroContainer {
            gap: 38px;
          }

          .title {
            font-size: clamp(2.5rem, 12vw, 3.2rem);

            letter-spacing: -2px;

            line-height: 1.08;
          }

          .gradientName {
            display: inline;
          }

          .role {
            margin-top: 15px;

            font-size: 1.05rem;

            line-height: 1.5;
          }

          .subtitle {
            margin-top: 15px;

            font-size: 14px;

            line-height: 1.7;
          }

          .techStack {
            gap: 7px;

            margin-top: 18px;
          }

          .tech {
            padding:
              6px
              9px;

            font-size: 11px;
          }

          .icons {
            gap: 10px;

            margin-top: 21px;
          }

          .icons a {
            width: 40px;
            height: 40px;

            font-size: 17px;
          }

          .buttons {
            flex-direction: column;

            width: 100%;

            gap: 10px;

            margin-top: 24px;
          }

          .btn {
            width: 100%;

            min-width: 0;

            padding: 13px 18px;
          }

          .right {
            width: 100%;
          }

          .right::before {
            width: 260px;
            height: 260px;

            filter: blur(70px);
          }

          .codeWindow {
            width: 100%;

            border-radius: 11px;

            transform: none;
          }

          .codeWindow:hover {
            transform: translateY(-3px);
          }

          .topBar {
            height: 39px;

            padding: 0 12px;
          }

          .topBar span {
            width: 9px;
            height: 9px;
          }

          .fileName {
            margin-left: 6px;

            font-size: 10px;
          }

          .code {
            padding:
              18px;

            font-size: 9px;

            line-height: 1.7;

            overflow-x: auto;
          }

          .codeLine {
            min-height: 1.7em;
          }

          .typingCursor {
            width: 6px;

            font-size: 9px;
          }
        }

        /* ================================
           VERY SMALL PHONES
        ================================= */

        @media (max-width: 380px) {

          .hero {
            padding-left: 12px;
            padding-right: 12px;
          }

          .heroContainer {
            gap: 32px;
          }

          .title {
            font-size: 2.3rem;

            letter-spacing: -1.5px;
          }

          .role {
            font-size: 0.95rem;
          }

          .subtitle {
            font-size: 13px;
          }

          .tech {
            padding: 5px 8px;

            font-size: 10px;
          }

          .btn {
            font-size: 12px;
          }

          .code {
            padding: 15px;

            font-size: 8px;

            line-height: 1.65;
          }

          .codeLine {
            min-height: 1.65em;
          }

          .typingCursor {
            font-size: 8px;
          }
        }

        /* ================================
           REDUCED MOTION
        ================================= */

        @media (prefers-reduced-motion: reduce) {

          .codeLine {
            opacity: 1 !important;
            clip-path: inset(0 0 0 0) !important;
            transform: none !important;
            animation: none !important;
          }

          .typingCursor {
            animation: none !important;
            opacity: 1;
          }

          .codeWindow,
          .codeWindow:hover,
          .tech,
          .icons a,
          .btn {
            transition: none !important;
          }
        }
      `}</style>

      <section id="hero" className="hero">
        <div className="heroContainer">

          <div className="left">

            <h1 className="title">
              Hi, I'm{" "}
              <span className="gradientName">
                Eman Fatima
              </span>
            </h1>

            <h2 className="role">
              Software Engineering Student &{" "}
              <span>Full-Stack Developer</span>
            </h2>

            <p className="subtitle">
              I build modern, responsive web applications and
              AI-powered systems using Next.js, React, FastAPI,
              PostgreSQL, and RAG technologies. I enjoy turning
              ideas into reliable and user-friendly digital products.
            </p>

            <div className="techStack">
              <span className="tech">Next.js</span>
              <span className="tech">React</span>
              <span className="tech">TypeScript</span>
              <span className="tech">FastAPI</span>
              <span className="tech">PostgreSQL</span>
              <span className="tech">AI / RAG</span>
              <span className="tech">Wordpress</span>
              <span className="tech">Git/Github</span>
            </div>

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

          <div className="right">

            <div className={`codeWindow ${isTyping ? "typing" : ""}`}>

              <div className="topBar">

                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>

                <span className="fileName">
                  developer.js
                </span>

              </div>

              <pre className="code">

                {visibleLines >= 1 && (
                  <span className="codeLine">
                    <span className="keyword">const</span>{" "}
                    <span className="property">developer</span> = {"{"}
                  </span>
                )}

                {visibleLines >= 2 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">name</span>:{" "}
                    <span className="string">"Fatima Khan"</span>,
                  </span>
                )}

                {visibleLines >= 3 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">role</span>:{" "}
                    <span className="string">"Full-Stack Developer"</span>,
                  </span>
                )}

                {visibleLines >= 4 && (
                  <span className="codeLine"> </span>
                )}

                {visibleLines >= 5 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">frontend</span>: [
                  </span>
                )}

                {visibleLines >= 6 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">"Next.js"</span>,
                  </span>
                )}

                {visibleLines >= 7 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">"React"</span>,
                  </span>
                )}

                {visibleLines >= 8 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">"TypeScript"</span>,
                  </span>
                )}

                {visibleLines >= 9 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">"Tailwind CSS"</span>
                  </span>
                )}

                {visibleLines >= 10 && (
                  <span className="codeLine">{"  "}],</span>
                )}

                {visibleLines >= 11 && (
                  <span className="codeLine"> </span>
                )}

                {visibleLines >= 12 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">backend</span>: [
                  </span>
                )}

                {visibleLines >= 13 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">"FastAPI"</span>,
                  </span>
                )}

                {visibleLines >= 14 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">"Python"</span>,
                  </span>
                )}

                {visibleLines >= 15 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">"PostgreSQL"</span>
                  </span>
                )}

                {visibleLines >= 16 && (
                  <span className="codeLine">{"  "}],</span>
                )}

                {visibleLines >= 17 && (
                  <span className="codeLine"> </span>
                )}

                {visibleLines >= 18 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">ai</span>: [
                  </span>
                )}

                {visibleLines >= 19 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">"RAG"</span>,
                  </span>
                )}

                {visibleLines >= 20 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">"Embeddings"</span>,
                  </span>
                )}

                {visibleLines >= 21 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="string">"Google Gemini"</span>
                  </span>
                )}

                {visibleLines >= 22 && (
                  <span className="codeLine">{"  "}],</span>
                )}

                {visibleLines >= 23 && (
                  <span className="codeLine"> </span>
                )}

                {visibleLines >= 24 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">problemSolver</span>:{" "}
                    <span className="boolean">true</span>,
                  </span>
                )}

                {visibleLines >= 25 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">quickLearner</span>:{" "}
                    <span className="boolean">true</span>,
                  </span>
                )}

                {visibleLines >= 26 && (
                  <span className="codeLine"> </span>
                )}

                {visibleLines >= 27 && (
                  <span className="codeLine">
                    {"  "}
                    <span className="property">hireable</span>:{" "}
                    <span className="keyword">function</span>() {"{"}
                  </span>
                )}

                {visibleLines >= 28 && (
                  <span className="codeLine">
                    {"    "}
                    <span className="keyword">return</span>{" "}
                    <span className="boolean">true</span>;
                  </span>
                )}

                {visibleLines >= 29 && (
                  <span className="codeLine">{"  "}{"}"}</span>
                )}

                {visibleLines >= 30 && (
                  <span className="codeLine">{"}"};</span>
                )}

                {visibleLines >= 31 && (
                  <span className="codeLine">
                    <span className="typingCursor">▋</span>
                  </span>
                )}

              </pre>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}