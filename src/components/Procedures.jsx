import React from "react";

const procedures = [
  {
    region: "Minimally Invasive",
    name: "Minimally Invasive Spine Surgery",
    description:
      "Advanced spine procedures performed through smaller incisions and specialized approaches to reduce tissue disruption and support a smoother recovery.",
  },
  {
    region: "Endoscopic",
    name: "Endoscopic Spine Surgery",
    description:
      "A minimally invasive technique that uses an endoscope to access and treat selected spinal conditions through a small working channel.",
  },
  {
    region: "Lumbar & Cervical",
    name: "Endoscopic Disc & Nerve Decompression",
    description:
      "Focused treatment for selected disc and nerve compression conditions, helping relieve pressure on affected nerves while minimizing surgical disruption.",
  },
];

export default function Procedures() {
  return (
    <section
      id="procedures"
      className="
        relative
        overflow-hidden
        bg-[#082B5C]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}

        <div
          className="
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0E5AE8]/25
            blur-[130px]
          "
        />

        {/* Cyan glow */}

        <div
          className="
            absolute
            -bottom-40
            -right-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#4AAFE5]/15
            blur-[130px]
          "
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
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
        {/* ================= HEADER ================= */}

        <div className="max-w-3xl">
          {/* Eyebrow */}

          <div className="mb-4 flex items-center gap-3">
            <span
              className="
                h-px
                w-8
                bg-[#9DDBFA]
                sm:w-10
              "
            />

            <p
              className="
                font-sans
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#9DDBFA]
                sm:text-xs
              "
            >
              Spine Procedures
            </p>
          </div>

          {/* Heading */}

          <h2
            className="
              font-sans
              text-3xl
              font-bold
              leading-[1.12]
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
              xl:text-6xl
            "
          >
            Advanced techniques for
            <span className="text-[#8ED4E8]">
              {" "}
              precise spine care.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl
              font-sans
              text-sm
              font-normal
              leading-7
              text-white/70
              sm:text-base
              sm:leading-7
            "
          >
            Dr. Anand Behera specializes in minimally invasive and
            endoscopic spine surgery, with treatment selected according to
            the patient's condition, symptoms, spinal level and individual
            needs.
          </p>
        </div>

        {/* ================= PROCEDURE CARDS ================= */}

        <div
          className="
            mt-10
            grid
            gap-5
            md:mt-14
            md:grid-cols-3
          "
        >
          {procedures.map((p, index) => (
            <div
              key={p.name}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#9DDBFA]/50
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
                sm:p-7
                lg:p-8
              "
            >
              {/* Top accent */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full
                  bg-gradient-to-r
                  from-[#0E5AE8]
                  via-[#2F78FF]
                  to-[#8ED4E8]
                "
              />

              {/* Number */}

              <div
                className="
                  absolute
                  right-6
                  top-5
                  font-sans
                  text-4xl
                  font-bold
                  text-[#EAF4FF]
                  transition-colors
                  duration-300
                  group-hover:text-[#DCEEFF]
                "
              >
                0{index + 1}
              </div>

              {/* Region */}

              <p
                className="
                  relative
                  z-10
                  font-sans
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#0E5AE8]
                  sm:text-[11px]
                "
              >
                {p.region}
              </p>

              {/* Procedure Name */}

              <h3
                className="
                  relative
                  z-10
                  mt-3
                  max-w-[280px]
                  font-sans
                  text-xl
                  font-semibold
                  leading-snug
                  tracking-tight
                  text-[#071C3D]
                  sm:text-2xl
                "
              >
                {p.name}
              </h3>

              {/* Divider */}

              <div
                className="
                  my-5
                  h-px
                  w-full
                  bg-[#E5EDF6]
                "
              />

              {/* Description */}

              <p
                className="
                  font-sans
                  text-sm
                  font-normal
                  leading-6
                  text-slate-500
                "
              >
                {p.description}
              </p>

              {/* Bottom */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    flex
                    h-2
                    w-2
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0E5AE8]
                    ring-4
                    ring-[#EAF4FF]
                  "
                />

                <span
                  className="
                    font-sans
                    text-xs
                    font-medium
                    text-[#0E5AE8]
                  "
                >
                  Specialized Spine Care
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}