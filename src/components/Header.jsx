import React, { useEffect, useState, useCallback } from "react";
import logo from "/src/assets/opticalogo.png";

const NAV_ITEMS = ["About Us", "Manufacturing Facility", "Products", "Resources", "Careers"];

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen(v => !v), []);
  const close  = useCallback(() => setOpen(false), []);

  // Lock page scroll when the mobile menu is open
  useEffect(() => {
    const body = document.body;
    if (!open) return;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    return () => { body.style.overflow = prev; };
  }, [open]);

  // Close with Escape
  useEffect(() => {
    const onKey = e => e.key === "Escape" && close();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Close if viewport grows to desktop (avoids stuck open on resize)
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) close(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [close]);

  const handleClick = (label) => {
    console.log("Clicked:", label); // placeholder
    close();
  };

  return (
    <header className="sticky top-0 z-50 bg-white  backdrop-blur-md border-b border-black/5">
      {/* ✅ Proper centered container */}
      <div className="container  mx-auto w-full px-5 sm:px-6 lg:px-10 py-2 lg:py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Optica Logo" className="h-10 sm:h-11 lg:h-18 w-auto" />
        </div>

        {/* Desktop nav (lg+) */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map(label => (
            <button
              key={label}
              type="button"
              onClick={() => handleClick(label)}
              className="text-[#1F2D5D] text-[16px] xl:text-[17px] font-medium hover:text-[#EF4343] transition-colors"
              style={{ fontFamily: "Clash" }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA (lg+) */}
        <button
          type="button"
          onClick={() => handleClick("Contact Us")}
          className="hidden lg:inline-flex bg-[#EF4343] text-white text-[16px] xl:text-[17px] px-5 py-2 rounded hover:opacity-90 transition-opacity"
          style={{ fontFamily: "Clash" }}
        >
          Contact Us
        </button>

        {/* Burger (mobile + tablet only) */}
        <button
          type="button"
          onClick={toggle}
          aria-controls="mobile-menu"
          aria-expanded={open}
          className="lg:hidden inline-flex items-center justify-center p-2.5 rounded hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4343]"
        >
          <span className="sr-only">Open main menu</span>
          {!open ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#1F2D5D" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="#1F2D5D" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile/Tablet Drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={close}
        />

        {/* Panel */}
        <div
          className={`
            absolute right-0 top-0 h-full
            w-[85%] max-w-[22rem] sm:max-w-[24rem] md:max-w-[26rem]
            bg-white shadow-xl
            transition-transform duration-300 ease-out
            ${open ? "translate-x-0" : "translate-x-full"}
            flex flex-col
          `}
          style={{ paddingTop: "env(safe-area-inset-top)" }}
        >
          {/* Drawer header */}
          <div className="px-5 pt-4 pb-4 flex items-center justify-between border-b">
            <img src={logo} alt="Optica Logo" className="h-9 sm:h-10 w-auto" />
            <button
              type="button"
              onClick={close}
              className="p-2 rounded hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4343]"
            >
              <span className="sr-only">Close menu</span>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6l-12 12" stroke="#1F2D5D" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Drawer content */}
          <nav className="px-5 py-2 overflow-y-auto">
            <ul className="flex flex-col">
              {NAV_ITEMS.map(label => (
                <li key={label} className="border-b border-black/5">
                  <button
                    type="button"
                    onClick={() => handleClick(label)}
                    className="w-full text-left text-[#1F2D5D] text-[17px] sm:text-[18px] py-4 hover:text-[#EF4343] transition-colors"
                    style={{ fontFamily: "Clash" }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-4 pb-6">
              <button
                type="button"
                onClick={() => handleClick("Contact Us")}
                className="w-full justify-center bg-[#EF4343] text-white text-[17px] px-5 py-3 rounded hover:opacity-90 transition-opacity"
                style={{ fontFamily: "Clash" }}
              >
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
