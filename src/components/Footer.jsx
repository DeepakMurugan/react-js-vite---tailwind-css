// Footer.jsx
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/opticalogo.png";

/* ---- Social icon images (normal/hover) ---- */
import f1 from "../assets/icons/f1.png"; // Facebook normal
import f2 from "../assets/icons/f2.png"; // Facebook hover

import i1 from "../assets/icons/i1.png"; // Instagram normal
import i2 from "../assets/icons/i2.png"; // Instagram hover

import l1 from "../assets/icons/l1.png"; // LinkedIn normal
import l2 from "../assets/icons/l2.png"; // LinkedIn hover

import u1 from "../assets/icons/u1.png"; // YouTube normal
import u2 from "../assets/icons/u2.png"; // YouTube hover

import x1 from "../assets/icons/x1.png"; // X (Twitter) normal
import x2 from "../assets/icons/x2.png"; // X (Twitter) hover

const SOCIALS = [
  { name: "Facebook",  href: "https://www.facebook.com/profile.php?id=100068558976784", normal: f1, hover: f2, alt: "Facebook" },
  { name: "X",         href: "https://x.com/optics_india", normal: x1, hover: x2, alt: "X (Twitter)" },
  { name: "Instagram", href: "https://www.instagram.com/opticaindia/", normal: i1, hover: i2, alt: "Instagram" },

  { name: "LinkedIn",  href: "https://in.linkedin.com/company/optics-allied-engineering-pvt-ltd", normal: l1, hover: l2, alt: "LinkedIn" },
  { name: "YouTube",   href: "https://www.youtube.com/@opticaBengaluru", normal: u1, hover: u2, alt: "YouTube" },
];

/* A tiny helper component for the swap */
function SocialIcon({ name, href, normal, hover, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      aria-label={name}
      className="
        group relative inline-flex h-10 w-auto items-center justify-center  "

    >
      {/* normal state */}
      <img
        src={normal}
        alt={alt}
        loading="lazy"
        className=" group relative inline-flex h-10 w-10 items-center justify-center
    rounded-full 
    
    
    
    "
      />
      {/* hover state (stacked) */}
      <img
        src={hover}
        alt=""
        aria-hidden="true"
        className="  absolute h-8 w-8 sm:h-9 sm:w-9 object-contain opacity-0 
        transition-opacity duration-150 group-hover:opacity-100"

      />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#F1F1F1] text-[#364274] text-sm">
      {/* Main container */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12 lg:px-20 pt-12 pb-10 relative border-t border-dotted border-[#A3A3A3]">
        {/* Grid */}
        <div className="relative grid gap-10 md:grid-cols-3">
          {/* Vertical dotted dividers (md+) */}
          <div className="absolute top-0 bottom-0 left-1/3 border-r border-dotted border-[#A3A3A3] hidden md:block" />
          <div className="absolute top-0 bottom-0 left-2/3 border-r border-dotted border-[#A3A3A3] hidden md:block" />

          {/* Column 1 — Brand & address */}
          <div className="flex flex-col items-start gap-3 pr-0 md:pr-4">
            <img
              src={logo}
              alt="Optica Logo"
              className="h-16 sm:h-20 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />

            <address className="not-italic mt-2">
              <h3
                className="text-[#002D7B] text-[20px] sm:text-[22px] font-bold leading-snug"
                style={{ fontFamily: "Clash" }}
              >
                Optics & Allied Engg. Pvt. Ltd.
              </h3>
              <p
                className="text-[#2A2B66] text-[15px] leading-relaxed mt-2"
                style={{ fontFamily: "Gilroy" }}
              >
                #9Q, Bommasandra Jigani Link Rd, 1st Phase,<br />
                Bommasandra Industrial Area,<br />
                Bengaluru, Karnataka, India - 560099
              </p>
            </address>
          </div>

          {/* Column 2 — Enquiries & Social */}
          <div className="px-0 md:px-4 flex flex-col justify-between">
            <div>
              <h3
                className="text-[20px] font-semibold text-[#EF4343] mb-4"
                style={{ fontFamily: "Clash" }}
              >
                Enquiries
              </h3>

              <ul
                className="space-y-3 text-[#2A2B66] text-[15px] mb-6"
                style={{ fontFamily: "Gilroy" }}
              >
                <li>
                  <a
                    href="mailto:info@opticsindia.com"
                    className="flex items-center gap-2 "
                    aria-label="Email info@opticsindia.com"
                  >
                    <FaEnvelope className="text-[#2A2B66]" />
                    info@opticsindia.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919886654729"
                    className="flex items-center gap-2 "
                    aria-label="Call +91 98866 54729"
                  >
                    <FaPhoneAlt className="text-[#2A2B66]" />
                    +91-9886654729
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919886654729"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 "
                    aria-label="WhatsApp +91 98866 54729"
                  >
                    <FaWhatsapp className="text-[#2A2B66]" />
                    +91-9886654729
                  </a>
                </li>
              </ul>

              <div className="border-t border-dotted border-[#A3A3A3] my-4" />

              <h4
                className="text-[20px] font-semibold text-[#EF4343] mb-3"
                style={{ fontFamily: "Clash" }}
              >
                Follow Us
              </h4>

              {/* Social icons — image swap on hover */}
              <div className="flex flex-wrap gap-3">
                {SOCIALS.map((s) => (
                  <SocialIcon key={s.name} {...s} />
                ))}
              </div>
            </div>
          </div>

          {/* Column 3 — Google Map */}
          <div className="pl-0 md:pl-0">
            <div className="w-full h-75 md:h-65 rounded-md  overflow-hidden">
              <iframe
                title="Office Map"
                src="https://maps.google.com/maps?q=Optics%20and%20Allied%20Engineering%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="border-t border-dotted border-[#A3A3A3] text-center pt-3 pb-17 text-[#364274]"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "150%",
          letterSpacing: "0.36px",
        }}
      >
        Copyright ©2025 OPTICA. All Rights Reserved.
      </div>
    </footer>
  );
}
