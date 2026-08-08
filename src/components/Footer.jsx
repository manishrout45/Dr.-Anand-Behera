import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#top" },
    { label: "Anatomy", href: "#anatomy" },
    { label: "Procedures", href: "#procedures" },
    { label: "About Dr. Anand", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Spine Consultation", href: "#contact" },
    { label: "Spine Surgery", href: "#procedures" },
    { label: "Neurosurgery", href: "#procedures" },
    { label: "Second Opinion", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/17zE2848W3/?mibextid=wwXIfr",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-[17px] w-[17px]"
          aria-hidden="true"
        >
          <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/dranandorthospine?igsh=ZWlpOWxwYnFpZ2Z6",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-[17px] w-[17px]"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
          />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@dranandbeheraorthospine?si=xGmj7kDLbqqZowK2",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-[17px] w-[17px]"
          aria-hidden="true"
        >
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.5 3.8-6.5 3.8Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#082B5C] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Top Right Glow */}
        <div
          className="
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0E5AE8]/20
            blur-[100px]
          "
        />

        {/* Bottom Left Glow */}
        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#2F78FF]/10
            blur-[100px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* ================= CONSULTATION ================= */}

        <section className="border-b border-white/10 py-12 sm:py-14 lg:py-16">

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">

            <div>

              <div className="mb-4 flex items-center gap-3">

                <span className="h-px w-8 bg-[#63C5F2]" />

                <span
                  className="
                    font-sans
                    text-[13px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#9DDBFA]
                  "
                >
                  Consultation
                </span>

              </div>

              <h2
                className="
                  max-w-3xl
                  font-sans
                  text-4xl
                  font-semibold
                  leading-[1.1]
                  tracking-tight
                  text-white
                  sm:text-5xl
                  lg:text-[52px]
                "
              >
                Bring your scans.
                <br />

                <span className="text-[#63C5F2]">
                  We'll walk the column together.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  font-sans
                  text-[15px]
                  leading-7
                  text-white/65
                  sm:text-base
                "
              >
                Most first consultations are spent reviewing imaging
                side by side, level by level — the same way this page
                shows the spine to you.
              </p>

            </div>

            {/* CTA */}

            <div className="lg:flex lg:justify-end">

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-white
                  px-7
                  py-3.5
                  font-sans
                  text-[15px]
                  font-semibold
                  text-[#0E5AE8]
                  shadow-[0_12px_40px_rgba(0,0,0,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#E6F2FF]
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]
                  sm:w-auto
                "
              >
                Request Appointment

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />

              </a>

            </div>

          </div>

        </section>

        {/* ================= MAIN FOOTER ================= */}

        <section className="py-10 sm:py-12 lg:py-14">

          <div
            className="
              grid
              gap-10
              sm:grid-cols-2
              lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr]
              lg:gap-8
            "
          >

            {/* ================= BRAND ================= */}

            <div>

              <a
                href="#top"
                className="group inline-flex items-center gap-3"
              >

                {/* Doctor Avatar */}

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#63C5F2]/30
                    bg-[#0E5AE8]/20
                    transition-all
                    duration-300
                    group-hover:border-[#63C5F2]/60
                    group-hover:bg-[#0E5AE8]/30
                  "
                >
                  <span
                    className="
                      font-sans
                      text-xs
                      font-bold
                      tracking-tight
                      text-[#9DDBFA]
                    "
                  >
                    AB
                  </span>
                </div>

                <div className="leading-none">

                  <div
                    className="
                      font-sans
                      text-xl
                      font-bold
                      tracking-tight
                      text-white
                    "
                  >
                    Dr. Anand Behera
                  </div>

                  <div
                    className="
                      mt-1.5
                      font-sans
                      text-[11px]
                      font-medium
                      tracking-wide
                      text-white/45
                    "
                  >
                    Spine Specialist
                  </div>

                </div>

              </a>

              <p
                className="
                  mt-4
                  max-w-md
                  font-sans
                  text-[15px]
                  leading-6
                  text-white/55
                "
              >
                Focused spine and neurosurgical care with an emphasis
                on clear diagnosis, precise treatment, and informed
                patient decisions.
              </p>

              {/* ================= SOCIAL MEDIA ================= */}

              <div className="mt-5 flex items-center gap-2.5">

                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      font-sans
                      text-white/55
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#63C5F2]/50
                      hover:bg-[#0E5AE8]
                      hover:text-white
                      hover:shadow-[0_6px_18px_rgba(14,90,232,0.3)]
                    "
                  >
                    {social.icon}
                  </a>
                ))}

              </div>

            </div>

            {/* ================= QUICK LINKS ================= */}

            <div>

              <h3
                className="
                  mb-4
                  font-sans
                  text-base
                  font-semibold
                  text-white
                "
              >
                Quick Links
              </h3>

              <ul className="space-y-2.5">

                {quickLinks.map((link) => (
                  <li key={link.label}>

                    <a
                      href={link.href}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-1.5
                        font-sans
                        text-[15px]
                        text-white/55
                        transition-colors
                        duration-300
                        hover:text-[#63C5F2]
                      "
                    >
                      {link.label}

                      <ArrowUpRight
                        size={13}
                        className="
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                          group-hover:opacity-100
                        "
                      />

                    </a>

                  </li>
                ))}

              </ul>

            </div>

            {/* ================= SERVICES ================= */}

            <div>

              <h3
                className="
                  mb-4
                  font-sans
                  text-base
                  font-semibold
                  text-white
                "
              >
                Services
              </h3>

              <ul className="space-y-2.5">

                {services.map((service) => (
                  <li key={service.label}>

                    <a
                      href={service.href}
                      className="
                        font-sans
                        text-[15px]
                        text-white/55
                        transition-colors
                        duration-300
                        hover:text-[#63C5F2]
                      "
                    >
                      {service.label}
                    </a>

                  </li>
                ))}

              </ul>

            </div>

            {/* ================= CONTACT ================= */}

            <div>

              <h3
                className="
                  mb-4
                  font-sans
                  text-base
                  font-semibold
                  text-white
                "
              >
                Contact
              </h3>

              <div className="space-y-4">

                {/* Office */}

                <div className="flex gap-3">

                  <MapPin
                    size={18}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-[#63C5F2]"
                  />

                  <div>

                    <p
                      className="
                        font-sans
                        text-[15px]
                        font-medium
                        text-white/80
                      "
                    >
                      Dr. Anand Behera
                    </p>

                    <p
                      className="
                        mt-1
                        font-sans
                        text-[13px]
                        leading-5
                        text-white/45
                      "
                    >
                      CDA, Cuttack
                    </p>

                  </div>

                </div>

                {/* Email */}

                <a
                  href="mailto:appointments@example.com"
                  className="
                    flex
                    items-center
                    gap-3
                    font-sans
                    text-[15px]
                    text-white/55
                    transition-colors
                    hover:text-[#63C5F2]
                  "
                >

                  <Mail
                    size={17}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#63C5F2]"
                  />

                  dranandbehera@gmail.com

                </a>

                {/* Phone */}

                <a
                  href="tel:+918144319133"
                  className="
                    flex
                    items-center
                    gap-3
                    font-sans
                    text-[15px]
                    text-white/55
                    transition-colors
                    hover:text-[#63C5F2]
                  "
                >

                  <Phone
                    size={17}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#63C5F2]"
                  />

                  +91 81443 19133

                </a>

              </div>

            </div>

          </div>

        </section>

        {/* ================= BOTTOM BAR ================= */}

        <div
          className="
            flex
            flex-col
            gap-3
            border-t
            border-white/10
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p
            className="
              font-sans
              text-[13px]
              text-white/35
            "
          >
            © {new Date().getFullYear()} Dr. Anand Behera.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">

            <a
              href="#"
              className="
                font-sans
                text-[13px]
                text-white/35
                transition-colors
                hover:text-white/70
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                font-sans
                text-[13px]
                text-white/35
                transition-colors
                hover:text-white/70
              "
            >
              Terms
            </a>

            <span
              className="
                font-sans
                text-[13px]
                text-white/25
              "
            >
              For illustrative purposes only — not medical advice.
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}