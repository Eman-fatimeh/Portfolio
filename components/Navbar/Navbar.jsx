"use client";

import { useEffect, useState } from "react";
import { BsArrowRight, BsCodeSlash } from "react-icons/bs";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  /* =====================================
     SCROLL HANDLER
  ====================================== */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 40);

      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "contact",
      ];

      let currentSection = "hero";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const offset = section.offsetTop - 150;

        if (scrollY >= offset) {
          currentSection = id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =====================================
     SCROLL TO SECTION
  ====================================== */

  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;

      const position =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <>
      <style>{`
        /* =====================================
           NAVBAR
        ====================================== */

        .navbar {
          position: fixed;

          top: 0;
          left: 0;

          width: 100%;

          height: 82px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding:
            0 7%;

          z-index: 9999;

          background:
            rgba(
              7,
              7,
              10,
              0.35
            );

          border-bottom:
            1px solid
              transparent;

          transition:
            height 0.35s ease,
            background 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease,
            backdrop-filter 0.35s ease;
        }

        /* =====================================
           SCROLLED NAVBAR
        ====================================== */

        .navbar.scrolled {
          height: 68px;

          background:
            rgba(
              8,
              8,
              12,
              0.82
            );

          backdrop-filter:
            blur(18px);

          -webkit-backdrop-filter:
            blur(18px);

          border-bottom:
            1px solid
              rgba(
                255,
                255,
                255,
                0.06
              );

          box-shadow:
            0 10px 35px
              rgba(
                0,
                0,
                0,
                0.2
              ),
            0 0 25px
              rgba(
                133,
                76,
                230,
                0.05
              );
        }

        /* =====================================
           LOGO
        ====================================== */

        .navbarLogo {
          display: flex;

          align-items: center;

          gap: 10px;

          cursor: pointer;

          user-select: none;
        }

        .logoBox {
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

          font-size: 12px;

          font-weight: 800;

          box-shadow:
            0 5px 20px
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

        .navbarLogo:hover
        .logoBox {
          transform:
            rotate(-5deg)
            scale(1.05);

          box-shadow:
            0 8px 25px
              rgba(
                133,
                76,
                230,
                0.35
              );
        }

        .logoText {
          display: flex;

          flex-direction: column;

          line-height: 1.1;
        }

        .logoName {
          color: white;

          font-size: 13px;

          font-weight: 750;
        }

        .logoRole {
          margin-top: 3px;

          color: #666673;

          font-family:
            "Fira Code",
            monospace;

          font-size: 8px;

          letter-spacing: 0.5px;
        }

        /* =====================================
           NAV LINKS
        ====================================== */

        .navLinks {
          display: flex;

          align-items: center;

          gap: 5px;

          margin-left: auto;

          margin-right: 25px;
        }

        .navLink {
          position: relative;

          padding:
            8px 11px;

          border-radius: 7px;

          color: #858590;

          background: transparent;

          border: none;

          font-family:
            inherit;

          font-size: 11px;

          font-weight: 500;

          cursor: pointer;

          transition:
            color 0.3s ease,
            background 0.3s ease;
        }

        .navLink::after {
          content: "";

          position: absolute;

          left: 50%;

          bottom: 3px;

          width: 0;

          height: 2px;

          border-radius: 5px;

          transform:
            translateX(-50%);

          background:
            linear-gradient(
              90deg,
              #854ce6,
              #ff4ecd
            );

          transition:
            width 0.3s ease;
        }

        .navLink:hover {
          color: white;

          background:
            rgba(
              255,
              255,
              255,
              0.035
            );
        }

        .navLink:hover::after {
          width: 18px;
        }

        /* =====================================
           ACTIVE LINK
        ====================================== */

        .navLink.active {
          color: white;

          background:
            rgba(
              133,
              76,
              230,
              0.08
            );
        }

        .navLink.active::after {
          width: 18px;
        }

        /* =====================================
           CONTACT BUTTON
        ====================================== */

        .navContact {
          display: flex;

          align-items: center;

          gap: 7px;

          padding:
            9px 15px;

          border:
            1px solid
              rgba(
                133,
                76,
                230,
                0.35
              );

          border-radius: 8px;

          background:
            rgba(
              133,
              76,
              230,
              0.08
            );

          color: #c59bff;

          font-size: 10px;

          font-weight: 650;

          cursor: pointer;

          transition:
            0.3s ease;
        }

        .navContact:hover {
          color: white;

          background:
            linear-gradient(
              135deg,
              #854ce6,
              #a34fe8
            );

          border-color:
            transparent;

          transform:
            translateY(-2px);

          box-shadow:
            0 7px 20px
              rgba(
                133,
                76,
                230,
                0.2
              );
        }

        .navContact svg {
          transition:
            transform 0.3s ease;
        }

        .navContact:hover svg {
          transform:
            translateX(3px);
        }

        /* =====================================
           MOBILE MENU BUTTON
        ====================================== */

        .menuButton {
          display: none;

          width: 38px;

          height: 38px;

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
              0.03
            );

          cursor: pointer;
        }

        .menuIcon {
          position: relative;

          width: 18px;

          height: 14px;
        }

        .menuIcon span {
          position: absolute;

          left: 0;

          width: 18px;

          height: 1.5px;

          border-radius: 5px;

          background: white;

          transition:
            0.3s ease;
        }

        .menuIcon span:nth-child(1) {
          top: 0;
        }

        .menuIcon span:nth-child(2) {
          top: 6px;
        }

        .menuIcon span:nth-child(3) {
          top: 12px;
        }

        .menuButton.open
        .menuIcon span:nth-child(1) {
          top: 6px;

          transform:
            rotate(45deg);
        }

        .menuButton.open
        .menuIcon span:nth-child(2) {
          opacity: 0;
        }

        .menuButton.open
        .menuIcon span:nth-child(3) {
          top: 6px;

          transform:
            rotate(-45deg);
        }

        /* =====================================
           MOBILE NAV
        ====================================== */

        .mobileMenu {
          position: fixed;

          top: 75px;

          left: 15px;

          right: 15px;

          padding: 10px;

          border:
            1px solid
              rgba(
                255,
                255,
                255,
                0.07
              );

          border-radius: 14px;

          background:
            rgba(
              10,
              10,
              15,
              0.95
            );

          backdrop-filter:
            blur(20px);

          -webkit-backdrop-filter:
            blur(20px);

          box-shadow:
            0 20px 50px
              rgba(
                0,
                0,
                0,
                0.35
              );

          opacity: 0;

          visibility: hidden;

          transform:
            translateY(-10px)
            scale(0.98);

          transition:
            0.3s ease;
        }

        .mobileMenu.open {
          opacity: 1;

          visibility: visible;

          transform:
            translateY(0)
            scale(1);
        }

        .mobileLink {
          width: 100%;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding:
            13px 14px;

          border: none;

          border-radius: 9px;

          background: transparent;

          color: #888894;

          font-family:
            inherit;

          font-size: 12px;

          text-align: left;

          cursor: pointer;

          transition:
            0.25s ease;
        }

        .mobileLink:hover,
        .mobileLink.active {
          color: white;

          background:
            rgba(
              133,
              76,
              230,
              0.09
            );
        }

        .mobileLinkArrow {
          color: #854ce6;

          opacity: 0;

          transform:
            translateX(-5px);

          transition:
            0.25s ease;
        }

        .mobileLink:hover
        .mobileLinkArrow,
        .mobileLink.active
        .mobileLinkArrow {
          opacity: 1;

          transform:
            translateX(0);
        }

        /* =====================================
           RESPONSIVE
        ====================================== */

        @media (max-width: 950px) {

          .navbar {
            padding:
              0 5%;
          }

          .navLinks {
            gap: 0;
          }

          .navLink {
            padding:
              8px 8px;

            font-size: 10px;
          }

          .navContact {
            display: none;
          }
        }

        @media (max-width: 768px) {

          .navbar {
            height: 72px;

            padding:
              0 20px;
          }

          .navbar.scrolled {
            height: 64px;
          }

          .navLinks {
            display: none;
          }

          .menuButton {
            display: flex;
          }

          .logoRole {
            display: none;
          }

          .logoBox {
            width: 36px;

            height: 36px;
          }

          .mobileMenu {
            top: 68px;
          }
        }

        @media (max-width: 420px) {

          .logoName {
            font-size: 12px;
          }

          .mobileMenu {
            left: 10px;
            right: 10px;
          }
        }

        /* =====================================
           REDUCED MOTION
        ====================================== */

        @media (
          prefers-reduced-motion: reduce
        ) {

          .navbar *,
          .mobileMenu {
            transition:
              none !important;
          }
        }
      `}</style>

      {/* =====================================
          DESKTOP NAVBAR
      ====================================== */}

      <nav
        className={`navbar ${
          scrolled ? "scrolled" : ""
        }`}
      >

        {/* LOGO */}

        <div
          className="navbarLogo"
          onClick={() => scrollTo("hero")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" ||
              e.key === " "
            ) {
              scrollTo("hero");
            }
          }}
        >

          <div className="logoBox">
            EF
          </div>

          <div className="logoText">

            <span className="logoName">
              Eman Fatima
            </span>

            <span className="logoRole">
              &lt; developer /&gt;
            </span>

          </div>

        </div>

        {/* DESKTOP LINKS */}

        <div className="navLinks">

          {navItems.map((item) => (
            <button
              key={item.id}
              className={`navLink ${
                active === item.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                scrollTo(item.id)
              }
            >
              {item.label}
            </button>
          ))}

        </div>

        {/* CONTACT BUTTON */}

        <button
          className="navContact"
          onClick={() =>
            scrollTo("contact")
          }
        >
          Let's Talk
          <BsArrowRight />
        </button>

        {/* MOBILE BUTTON */}

        <button
          className={`menuButton ${
            open ? "open" : ""
          }`}
          onClick={() =>
            setOpen(!open)
          }
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <div className="menuIcon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

      </nav>

      {/* =====================================
          MOBILE MENU
      ====================================== */}

      <div
        className={`mobileMenu ${
          open ? "open" : ""
        }`}
      >

        {navItems.map((item) => (
          <button
            key={item.id}
            className={`mobileLink ${
              active === item.id
                ? "active"
                : ""
            }`}
            onClick={() =>
              scrollTo(item.id)
            }
          >

            {item.label}

            <span className="mobileLinkArrow">
              <BsArrowRight />
            </span>

          </button>
        ))}

      </div>
    </>
  );
}