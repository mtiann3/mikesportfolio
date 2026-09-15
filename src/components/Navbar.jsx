import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from "../assets/Mike Iannotti Resume.pdf";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "focus", label: "Interests" },
  { to: "experience", label: "Experience" },
  { to: "education", label: "Education" },
  { to: "projects", label: "Projects" },
  { to: "skills", label: "Skills" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const closeMenu = () => {
    setNav(false);
    menuButtonRef.current?.focus();
  };

  const selectSection = (id) => {
    if (!nav) return;
    setNav(false);
    // Wait for the menu to close and the destination to stop being inert.
    requestAnimationFrame(() => {
      document.getElementById(id)?.focus({ preventScroll: true });
    });
  };

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        "--navigation-height",
        `${navRef.current.getBoundingClientRect().height}px`,
      );
    });
    observer.observe(navRef.current);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--navigation-height");
    };
  }, []);

  useEffect(() => {
    let frame;
    const updateActiveSection = () => {
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      const current = [...navLinks]
        .reverse()
        .find(
          ({ to }) =>
            document.getElementById(to)?.getBoundingClientRect().top <=
            navRef.current.getBoundingClientRect().height + 40,
        );
      setActiveSection(atBottom ? "contact" : current?.to || "home");
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };
    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!nav) return undefined;

    const previousOverflow = document.body.style.overflow;
    const background = [
      ...document.querySelectorAll('main, footer, a[href="#main-content"]'),
    ];
    const previousInert = background.map((element) => element.inert);
    document.body.style.overflow = "hidden";
    background.forEach((element) => {
      element.inert = true;
    });
    menuRef.current?.querySelector("a")?.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      }
      if (event.key === "Tab") {
        const focusable = [
          ...navRef.current.querySelectorAll("a[href], button"),
        ].filter(
          (element) =>
            element.getClientRects().length &&
            getComputedStyle(element).visibility === "visible",
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element, index) => {
        element.inert = previousInert[index];
      });
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [nav]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) {
        if (
          menuRef.current?.contains(document.activeElement) ||
          document.activeElement === menuButtonRef.current
        ) {
          navRef.current
            ?.querySelector('a[href="#home"]')
            ?.focus({ preventScroll: true });
        }
        setNav(false);
      }
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Primary navigation"
      className="fixed left-0 top-0 z-50 w-full border-b border-slate-700/90 bg-[#050d18]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex min-h-[79px] max-w-[75rem] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3 sm:px-6">
        <a
          href="#home"
          onClick={() => selectSection("home")}
          className="flex flex-shrink-0 items-center gap-3"
          aria-label="Michael Iannotti — back to top"
        >
          <img
            src={`${process.env.PUBLIC_URL}/icon.svg`}
            alt=""
            width="44"
            height="44"
            className="h-11 w-11 rounded-full"
          />
          <span className="brand-type hidden text-sm font-bold tracking-wide text-white sm:block">
            Michael Iannotti
          </span>
        </a>

        <ul className="hidden max-w-full flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-slate-200 lg:flex xl:gap-x-5">
          {navLinks.map((item) => (
            <li key={item.to}>
              <a
                href={`#${item.to}`}
                aria-current={
                  activeSection === item.to ? "location" : undefined
                }
                className={`relative inline-flex min-h-[44px] items-center py-2 font-semibold transition hover:text-red-400 after:absolute after:bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-red-500 after:transition-all hover:after:w-full ${activeSection === item.to ? "nav-link-active after:w-full" : "after:w-0"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={Resume}
              download="Michael_Iannotti_Resume.pdf"
              aria-label="Download resume (PDF)"
              className="flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-500 px-4 py-2 text-white transition hover:border-slate-300 hover:bg-slate-800"
            >
              <BsFillPersonLinesFill aria-hidden="true" /> Resume
            </a>
          </li>
        </ul>

        <div className="hidden items-center gap-2 text-lg 2xl:flex">
          <a
            href="https://linkedin.com/in/michael-iannotti-5a9043417"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="icon-button"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href="mailto:miannotti06@gmail.com"
            aria-label="Email Michael Iannotti"
            className="icon-button"
          >
            <FaEnvelope aria-hidden="true" />
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => (nav ? closeMenu() : setNav(true))}
          aria-label={nav ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={nav}
          aria-controls="mobile-menu"
          className="icon-button text-xl lg:hidden"
        >
          {nav ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      <div
        ref={menuRef}
        id="mobile-menu"
        hidden={!nav}
        style={{ top: "var(--navigation-height, 5rem)", maxHeight: "calc(100dvh - var(--navigation-height, 5rem))" }}
        className="fixed left-0 w-full overflow-y-auto overscroll-contain border-b border-slate-700 bg-[#050d18] lg:hidden"
      >
        <ul
          className="flex flex-col items-center pt-3"
          style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        >
          {navLinks.map((item) => (
            <li key={item.to} className="w-full px-5 text-center">
              <a
                href={`#${item.to}`}
                onClick={() => selectSection(item.to)}
                aria-current={
                  activeSection === item.to ? "location" : undefined
                }
                className={`block w-full border-b border-white/5 py-3 text-lg font-semibold transition hover:text-red-400 ${activeSection === item.to ? "rounded-lg bg-red-500/10 text-red-300" : "text-slate-100"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={Resume}
              download="Michael_Iannotti_Resume.pdf"
              aria-label="Download resume (PDF)"
              onClick={closeMenu}
              className="button-secondary mt-5 gap-2"
            >
              <BsFillPersonLinesFill aria-hidden="true" /> Resume
            </a>
          </li>
          <li className="mt-5 flex gap-3 text-xl">
            <a
              href="https://linkedin.com/in/michael-iannotti-5a9043417"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="icon-button"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <a
              href="mailto:miannotti06@gmail.com"
              aria-label="Email Michael Iannotti"
              className="icon-button"
            >
              <FaEnvelope aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
