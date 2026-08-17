import { Menu, X, CalendarCheck } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Anatomy", href: "#anatomy" },
    { label: "Procedures", href: "#procedures" },
    { label: "About", href: "#about" },
    { label: "Service", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);

    const sectionId = href.replace("#", "");

    // ==========================================
    // ALREADY ON HOMEPAGE
    // ==========================================

    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update hash
        window.history.replaceState(
          null,
          "",
          `#${sectionId}`
        );
      }

      return;
    }

    // ==========================================
    // ON SERVICE DETAILS PAGE
    // ==========================================

    window.location.href = `/#${sectionId}`;
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", "/");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-[#082B5C]/90
        backdrop-blur-xl
      "
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* =====================================================
            MAIN NAVBAR
        ===================================================== */}

        <div
          className="
            flex
            h-[92px]
            items-center
            justify-between
          "
        >

          {/* ===================================================
              BRAND
          =================================================== */}

          <a
            href="/"
            onClick={handleLogoClick}
            className="
              group
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#9EDCFF]/30
                bg-white/10
                shadow-[0_4px_15px_rgba(0,0,0,0.10)]
                transition-all
                duration-300
                group-hover:border-[#9EDCFF]/60
                group-hover:bg-white/15
              "
            >
              <span
                className="
                  font-sans
                  text-[16px]
                  font-semibold
                  tracking-tight
                  text-[#9EDCFF]
                "
              >
                AB
              </span>
            </div>

            <div className="flex flex-col leading-none">

              <span
                className="
                  font-sans
                  text-[19px]
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                Dr. Anand{" "}
                <span className="text-white">
                  Behera
                </span>
              </span>

              <span
                className="
                  mt-1.5
                  font-sans
                  text-[11px]
                  font-medium
                  tracking-wide
                  text-white/55
                  sm:text-xs
                "
              >
                Spine Specialist
              </span>

            </div>

          </a>

          {/* ===================================================
              DESKTOP NAVIGATION
          =================================================== */}

          <div className="hidden items-center gap-7 lg:flex">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="
                  group
                  relative
                  py-2
                  font-sans
                  text-[15px]
                  font-medium
                  text-white/75
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    rounded-full
                    bg-[#9EDCFF]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}

          </div>

          {/* ===================================================
              DESKTOP CTA
          =================================================== */}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="
              group
              hidden
              items-center
              gap-2
              rounded-full
              bg-white
              px-5
              py-2.5
              font-sans
              text-[13px]
              font-semibold
              text-[#0E4FA8]
              shadow-[0_6px_20px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#EAF4FF]
              hover:shadow-[0_10px_25px_rgba(0,0,0,0.18)]
              lg:flex
            "
          >
            <CalendarCheck
              size={17}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            <span>
              Book Consultation
            </span>
          </a>

          {/* ===================================================
              MOBILE MENU BUTTON
          =================================================== */}

          <button
            type="button"
            aria-label={
              isOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              text-white
              transition-all
              duration-300
              hover:border-white/40
              hover:bg-white/15
              lg:hidden
            "
          >
            {isOpen ? (
              <X
                size={20}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={1.8}
              />
            )}
          </button>

        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={`
            overflow-hidden
            border-t
            border-white/10
            bg-[#08265F]/98
            transition-all
            duration-300
            lg:hidden
            ${
              isOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 border-t-transparent opacity-0"
            }
          `}
        >

          <div className="px-1 pb-6 pt-2">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-2
                  py-4
                  font-sans
                  text-[15px]
                  font-medium
                  text-white/75
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <span>
                  {item.label}
                </span>

                <span
                  className="
                    text-sm
                    font-medium
                    text-[#9EDCFF]/60
                  "
                >
                  →
                </span>
              </a>
            ))}

            {/* MOBILE CTA */}

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="
                mt-5
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                px-5
                py-3.5
                font-sans
                text-[15px]
                font-semibold
                text-[#0E4FA8]
                shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                transition-all
                duration-300
                hover:bg-[#EAF4FF]
              "
            >
              <CalendarCheck
                size={17}
                strokeWidth={2}
              />

              <span>
                Book Consultation
              </span>
            </a>

          </div>

        </div>

      </nav>

      {/* =====================================================
          BOTTOM HIGHLIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#9EDCFF]/50
          to-transparent
        "
      />

    </header>
  );
}