import React from "react";
import { ArrowUpRight, CheckCircle2, Phone, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-10
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-40
            top-20
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#0E5AE8]/5
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#2F78FF]/5
            blur-[100px]
          "
        />
      </div>

      {/* ================= CONTAINER ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            items-center
            gap-10
            md:grid-cols-2
            lg:gap-16
            xl:gap-20
          "
        >
          {/* =====================================================
              LEFT IMAGE
          ===================================================== */}

          <div className="relative">
            {/* Decorative background */}

            <div
              className="
                absolute
                -left-3
                -top-3
                h-full
                w-full
                rounded-[24px]
                bg-[#EAF4FF]
                sm:-left-4
                sm:-top-4
                sm:rounded-[30px]
              "
            />

            {/* Image */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
                sm:rounded-[26px]
              "
            >
              <img
                src="/assets/images/Picture1.png"
                alt="Dr. Ananda Kumar Behera - Spine Specialist"
                className="
                  h-[360px]
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700

                  sm:h-[450px]

                  lg:h-[520px]
                "
              />

              {/* Soft overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#071C3D]/25
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* =================================================
                EXPERIENCE BADGE
            ================================================= */}

            <div
              className="
                absolute
                -bottom-5
                right-3
                rounded-2xl
                border
                border-white
                bg-white
                px-4
                py-3
                shadow-[0_12px_35px_rgba(14,90,232,0.14)]

                sm:right-5
                sm:px-5
                sm:py-4

                lg:-bottom-6
                lg:right-6
              "
            >
              <p
                className="
                  font-sans
                  text-[10px]
                  font-medium
                  text-slate-400
                  sm:text-xs
                "
              >
                Professional Experience
              </p>

              <p
                className="
                  mt-0.5
                  font-sans
                  text-lg
                  font-bold
                  text-[#071C3D]
                  sm:text-xl
                "
              >
                15 Years
              </p>
            </div>

            {/* =================================================
                LOCATION BADGE
            ================================================= */}

            <div
              className="
                absolute
                left-3
                top-4
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/70
                bg-white/90
                px-3
                py-2
                shadow-[0_8px_25px_rgba(7,28,61,0.10)]
                backdrop-blur-md

                sm:left-5
                sm:top-5
              "
            >
              <MapPin
                size={14}
                className="text-[#0E5AE8]"
                strokeWidth={2.2}
              />

              <span
                className="
                  font-sans
                  text-[10px]
                  font-semibold
                  text-[#071C3D]
                  sm:text-xs
                "
              >
                CDA, Cuttack
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT CONTENT
          ===================================================== */}

          <div className="pt-4 md:pt-0">
            {/* Small label */}

            <div
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#EAF4FF]
                px-4
                py-2
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#0E5AE8]
                "
              />

              <span
                className="
                  font-sans
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#0E5AE8]
                  sm:text-xs
                "
              >
                About Dr. Ananda Kumar Behera
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h2
              className="
                max-w-xl
                font-sans
                text-3xl
                font-bold
                leading-[1.12]
                tracking-tight
                text-[#071C3D]

                sm:text-4xl

                lg:text-5xl
              "
            >
              Dedicated to<br />
              <span className="text-[#0E5AE8]">
                {" "}
                Advanced Spine Care
              </span>
            </h2>

            {/* =================================================
                INTRODUCTION
            ================================================= */}

            <p
              className="
                mt-5
                max-w-xl
                font-sans
                text-sm
                leading-7
                text-slate-500

                sm:text-base
                sm:leading-7
              "
            >
              Dr. Ananda Kumar Behera is an experienced orthopedic and spine
              surgeon with{" "}
              <span className="font-semibold text-[#071C3D]">
                15 years of experience
              </span>
              , specializing in{" "}
              <span className="font-semibold text-[#0E5AE8]">
                Minimally Invasive and Endoscopic Spine Surgery
              </span>
              .
            </p>

            <p
              className="
                mt-4
                max-w-xl
                font-sans
                text-sm
                leading-7
                text-slate-500

                sm:text-base
                sm:leading-7
              "
            >
              He currently provides specialized spine care at{" "}
              <span className="font-semibold text-[#071C3D]">
                Ashwini Trauma Centre, CDA, Cuttack
              </span>
              , with a focus on modern surgical techniques, precise treatment
              planning and helping patients return to their everyday
              activities with confidence.
            </p>

            {/* =================================================
                SPECIALIZATION CARD
            ================================================= */}

            <div
              className="
                mt-6
                rounded-2xl
                border
                border-[#E6F2FF]
                bg-[#F5FAFF]
                p-4
                sm:p-5
              "
            >
              <div className="flex items-start gap-3">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#0E5AE8]
                    text-white
                    shadow-[0_6px_18px_rgba(14,90,232,0.18)]
                  "
                >
                  <CheckCircle2 size={18} strokeWidth={2} />
                </span>

                <div>
                  <p
                    className="
                      font-sans
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.1em]
                      text-[#64748B]
                    "
                  >
                    Specialization
                  </p>

                  <h3
                    className="
                      mt-1
                      font-sans
                      text-sm
                      font-semibold
                      leading-6
                      text-[#071C3D]
                      sm:text-base
                    "
                  >
                    Minimally Invasive & Endoscopic Spine Surgery
                  </h3>
                </div>
              </div>
            </div>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}

            <div
              className="
                mt-7
                grid
                gap-x-6
                gap-y-5
                sm:grid-cols-2
              "
            >
              {/* Item 1 */}

              <div className="flex items-start gap-3">
                <span
                  className="
                    mt-0.5
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF4FF]
                    text-[#0E5AE8]
                  "
                >
                  <CheckCircle2 size={15} strokeWidth={2} />
                </span>

                <div>
                  <h3
                    className="
                      font-sans
                      text-sm
                      font-semibold
                      text-[#172B4D]
                    "
                  >
                    15 Years Experience
                  </h3>

                  <p
                    className="
                      mt-1
                      font-sans
                      text-xs
                      leading-5
                      text-slate-400
                    "
                  >
                    Extensive experience in orthopedic and spine care.
                  </p>
                </div>
              </div>

              {/* Item 2 */}

              <div className="flex items-start gap-3">
                <span
                  className="
                    mt-0.5
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF4FF]
                    text-[#0E5AE8]
                  "
                >
                  <CheckCircle2 size={15} strokeWidth={2} />
                </span>

                <div>
                  <h3
                    className="
                      font-sans
                      text-sm
                      font-semibold
                      text-[#172B4D]
                    "
                  >
                    Minimally Invasive
                  </h3>

                  <p
                    className="
                      mt-1
                      font-sans
                      text-xs
                      leading-5
                      text-slate-400
                    "
                  >
                    Focus on less invasive surgical approaches.
                  </p>
                </div>
              </div>

              {/* Item 3 */}

              <div className="flex items-start gap-3">
                <span
                  className="
                    mt-0.5
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF4FF]
                    text-[#0E5AE8]
                  "
                >
                  <CheckCircle2 size={15} strokeWidth={2} />
                </span>

                <div>
                  <h3
                    className="
                      font-sans
                      text-sm
                      font-semibold
                      text-[#172B4D]
                    "
                  >
                    Endoscopic Spine Surgery
                  </h3>

                  <p
                    className="
                      mt-1
                      font-sans
                      text-xs
                      leading-5
                      text-slate-400
                    "
                  >
                    Specialized endoscopic spine procedures.
                  </p>
                </div>
              </div>

              {/* Item 4 */}

              <div className="flex items-start gap-3">
                <span
                  className="
                    mt-0.5
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF4FF]
                    text-[#0E5AE8]
                  "
                >
                  <CheckCircle2 size={15} strokeWidth={2} />
                </span>

                <div>
                  <h3
                    className="
                      font-sans
                      text-sm
                      font-semibold
                      text-[#172B4D]
                    "
                  >
                    Patient-Centered Care
                  </h3>

                  <p
                    className="
                      mt-1
                      font-sans
                      text-xs
                      leading-5
                      text-slate-400
                    "
                  >
                    Focused on clear guidance and recovery.
                  </p>
                </div>
              </div>
            </div>


            {/* =================================================
                CTA
            ================================================= */}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Book Consultation */}

              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0E5AE8]
                  px-5
                  py-3
                  font-sans
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_8px_25px_rgba(14,90,232,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0B4FCF]
                  hover:shadow-[0_12px_30px_rgba(14,90,232,0.25)]
                "
              >
                Book a Consultation

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                  "
                >
                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </span>
              </a>

              {/* Call Button */}

              <a
                href="tel:8144319133"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#D9E8FF]
                  bg-white
                  px-5
                  py-3
                  font-sans
                  text-sm
                  font-semibold
                  text-[#0E5AE8]
                  transition-all
                  duration-300
                  hover:border-[#0E5AE8]
                  hover:bg-[#EAF4FF]
                "
              >
                <Phone size={16} strokeWidth={2} />

                8144319133
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}