import { useRef } from "react";
import useScrollProgress from "../hooks/useScrollProgress.js";
import SpineCanvas from "./SpineCanvas.jsx";
import { STAGES, getActiveStageIndex } from "../spineData.js";

export default function ScrollSpineSection() {
  const containerRef = useRef(null);

  const progress = useScrollProgress(containerRef);

  const activeIdx = getActiveStageIndex(progress);
  const stage = STAGES[activeIdx];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white"
      style={{ height: "200vh" }}
    >
      {/* =========================================================
          STICKY VIEWPORT
      ========================================================= */}

      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">

        {/* =======================================================
            BACKGROUND / LEFT FADE

            IMPORTANT:
            z-0

            It must remain BELOW the 3D canvas.
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            bg-white
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-0
            w-full

            bg-gradient-to-r
            from-white
            via-white
            to-transparent

            md:w-[58%]
            md:via-white/98

            lg:w-[54%]
            lg:via-white/92

            xl:w-[50%]
            xl:via-white/75
          "
        />

        {/* =======================================================
            3D SPINE

            ABOVE ALL BACKGROUND FADES
        ======================================================= */}

        <div
          className="
            absolute
            inset-0
            z-[1]

            translate-x-[8%]

            sm:translate-x-[10%]

            md:translate-x-[13%]

            lg:translate-x-[17%]

            xl:translate-x-[20%]

            2xl:translate-x-[23%]
          "
        >
          <SpineCanvas progress={progress} />
        </div>

        {/* =======================================================
            TOP FADE

            IMPORTANT:
            BELOW THE CANVAS
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            z-0

            h-20

            bg-gradient-to-b
            from-white
            via-white/60
            to-transparent
          "
        />

        {/* =======================================================
            BOTTOM FADE

            IMPORTANT:
            BELOW THE CANVAS
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-0

            h-20

            bg-gradient-to-t
            from-white
            via-white/60
            to-transparent
          "
        />

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div
          className="
            relative
            z-10

            flex
            h-full
            w-full
            items-center

            mx-auto
            max-w-7xl

            px-5

            sm:px-8

            md:px-10

            lg:px-14

            xl:px-16

            2xl:px-20
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div
            className="
              w-full

              max-w-[360px]

              sm:max-w-[420px]

              md:max-w-[450px]

              lg:max-w-[500px]

              xl:max-w-[530px]
            "
          >
            {/* ===================================================
                EYEBROW
            =================================================== */}

            <div className="flex items-center gap-3">
              <span
                className="
                  h-px
                  w-7
                  shrink-0
                  bg-[#0E5AE8]

                  sm:w-9

                  md:w-10
                "
              />

              <p
                className="
                  font-poppins
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#0E5AE8]

                  sm:text-[10px]

                  md:text-xs
                "
              >
                {String(activeIdx + 1).padStart(2, "0")} /{" "}
                {String(STAGES.length).padStart(2, "0")}{" "}
                — REGION IN VIEW
              </p>
            </div>

            {/* ===================================================
                HEADING
            =================================================== */}

            <h3
              className="
                mt-5

                font-poppins
                font-semibold
                leading-[1.02]
                tracking-[-0.025em]
                text-[#071C3D]

                text-4xl

                sm:text-5xl

                md:text-5xl

                lg:text-6xl

                xl:text-7xl
              "
            >
              {stage.label}
            </h3>

            {/* ===================================================
                UNDERLINE
            =================================================== */}

            <div
              className="
                mt-5

                h-1
                w-14

                rounded-full

                bg-[#0E5AE8]

                sm:w-16

                md:w-20
              "
            />

            {/* ===================================================
                DESCRIPTION
            =================================================== */}

            <p
              className="
                mt-6

                max-w-lg

                font-poppins
                text-sm
                font-normal
                leading-7

                text-[#475569]

                sm:text-[15px]
                sm:leading-7

                md:text-base
                md:leading-8

                lg:text-[17px]
                lg:leading-8
              "
            >
              {stageCopy[stage.id]}
            </p>

            {/* ===================================================
                PROGRESS
            =================================================== */}

            <div
              className="
                mt-8

                flex
                w-full
                max-w-sm
                gap-2

                sm:mt-9

                md:mt-10
              "
            >
              {STAGES.map((s, i) => (
                <div
                  key={s.id}
                  className={`
                    h-1.5
                    flex-1
                    rounded-full

                    transition-all
                    duration-500

                    ${
                      i === activeIdx
                        ? "bg-[#0E5AE8]"
                        : "bg-[#D9E8F7]"
                    }
                  `}
                />
              ))}
            </div>

            {/* ===================================================
                SCROLL INSTRUCTION
            =================================================== */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-3

                sm:mt-6
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#C9DDF2]

                  bg-white

                  sm:h-8
                  sm:w-8
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5

                    rounded-full

                    bg-[#0E5AE8]
                  "
                />
              </span>

              <p
                className="
                  font-poppins
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.06em]

                  text-[#64748B]

                  sm:text-[10px]

                  md:text-[11px]
                "
              >
                Keep scrolling — model rotates to reveal the next region.
              </p>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM RIGHT LABEL
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-6
            right-5
            z-10

            hidden

            font-poppins
            text-[9px]
            font-medium
            uppercase
            tracking-[0.16em]

            text-[#94A3B8]

            sm:right-7

            md:block

            lg:right-10
          "
        >
          SPINAL ANATOMY
        </div>

        {/* =======================================================
            BOTTOM LEFT ACCENT
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-6
            left-5
            z-10

            hidden

            h-px
            w-12

            bg-[#0E5AE8]

            sm:left-7
            sm:w-14

            md:block

            lg:left-10
            lg:w-16
          "
        />

        {/* =======================================================
            RIGHT DECORATION
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-1/2

            z-0

            hidden

            h-32
            w-px

            -translate-y-1/2

            bg-gradient-to-b
            from-transparent
            via-[#2F78FF]/20
            to-transparent

            lg:block
          "
        />
      </div>
    </section>
  );
}

/* ===============================================================
   STAGE CONTENT
================================================================ */

const stageCopy = {
  cervical:
    "Seven vertebrae carry the full weight of the skull while permitting more rotation than any other segment of the spine — and more risk when that mobility is lost.",

  thoracic:
    "Twelve vertebrae anchor the rib cage, trading mobility for stability. Pain here is often referred from elsewhere, which is why an accurate map matters.",

  lumbar:
    "The five lowest vertebrae absorb the greatest mechanical load. This is where most disc degeneration and nerve compression is diagnosed.",
};