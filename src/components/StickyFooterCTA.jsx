// StickyFooterCTA.jsx (responsive)
import phoneIcon from "../assets/icons/phone.png";
import whatsappIcon from "../assets/icons/whatsapp.png";
import mailIcon from "../assets/icons/mail.png";
import downloadIcon from "../assets/icons/download.png";
import cataloguePdf from "../assets/icons/mail.png";

export default function StickyFooterCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#063789] text-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-2 md:py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6 flex-wrap">
          {/* Left text */}
          <p
            className="text-center md:text-left font-medium leading-snug
                       text-sm sm:text-base md:text-[20px]"
            style={{ fontFamily: "Clash" }}
          >
            Precision Optical Solutions Designed for You – Connect with Us Today
          </p>

          {/* Icons + Catalogue */}
          <div className="flex items-center justify-center md:justify-end gap-3 sm:gap-4">
            {/* Contact icons */}
            <a
              href="tel:+919886654729"
              className="bg-white rounded-md p-1 shadow-md"
              title="Call Us"
              aria-label="Call Us"
            >
              <img
                src={phoneIcon}
                alt=""
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-[25px] md:h-[25px]"
              />
            </a>

            <a
              href="https://wa.me/919886654729"
              className="bg-white rounded-md p-1 shadow-md"
              title="WhatsApp"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsappIcon}
                alt=""
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-[25px] md:h-[25px]"
              />
            </a>

            <a
              href="mailto:info@opticsindia.com"
              className="bg-white rounded-md p-1 shadow-md"
              title="Email"
              aria-label="Email"
            >
              <img
                src={mailIcon}
                alt=""
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-[25px] md:h-[25px]"
              />
            </a>

            {/* Divider */}
            <div className="hidden sm:block h-6 w-px bg-white/60 mx-1 sm:mx-2" />

            {/* Catalogue Download */}
            <a
              // href={cataloguePdf}
              download
              className="flex items-center gap-2 text-[20px] sm:text-base "
              style={{ fontFamily: "Clash" }}
              title="Download Optica Catalogue"
              aria-label="Download Optica Catalogue"
            >
              <span>Optica Catalogue</span>
              <img
                src={downloadIcon}
                // alt=""
                className="w-5 h-5 sm:w-5 sm:h-5  md:w-[35px] md:h-[35px] "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
