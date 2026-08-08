import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function HealthInformation() {
  const articles = [
    {
      id: 1,
      title: "Understanding Degenerative Spine Conditions",
      description:
        "Learn about common degenerative spine conditions, their symptoms, causes, and the treatment options available for better spinal health.",
      image: "https://img.magnific.com/premium-photo/man-suffering-from-lower-back-pain-with-his-hands-his-back_605905-126365.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
      href: "#",
    },
    {
      id: 2,
      title: "Neck Pain: Causes, Treatment & Prevention",
      description:
        "Neck pain can affect everyday movement and quality of life. Understand common causes, warning signs, treatment options, and prevention.",
      image: "https://img.magnific.com/premium-photo/man-experiences-severe-neck-pain-illustrated-by-highlighted-spinal-column-indicating-possible-injury-inflammation_890077-13166.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
      href: "#",
    },
    {
      id: 3,
      title: "Spinal Compression Fractures",
      description:
        "Learn how spinal compression fractures can affect mobility and comfort, and understand the modern treatment approaches available.",
      image: "https://img.magnific.com/premium-photo/physiotherapist-doing-back-massage-his-patient_13339-224657.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
      href: "#",
    },
  ];

  return (
    <section
      id="health-information"
      className="
        relative
        overflow-hidden
        bg-[#F4F8FC]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top right glow */}
        <div
          className="
            absolute
            -right-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0E5AE8]/[0.07]
            blur-[100px]
          "
        />

        {/* Bottom left glow */}
        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#63C5F2]/[0.08]
            blur-[110px]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#0E5AE8_1px,transparent_1px),linear-gradient(90deg,#0E5AE8_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-10
        "
      >
       {/* =======================================================
    HEADING
======================================================= */}

<div className="mb-9 text-center sm:mb-11">

  {/* Label */}

  <span
    className="
      inline-flex
      items-center
      rounded-full
      border
      border-[#D6E8FA]
      bg-[#EAF4FF]
      px-4
      py-1.5
      font-sans
      text-xs
      font-medium
      text-[#0E5AE8]
    "
  >
    Spine Health
  </span>

  {/* Heading */}

  <h2
    className="
      mt-3
      font-sans
      text-2xl
      font-semibold
      leading-tight
      text-[#071C3D]
      sm:text-3xl
      lg:text-[34px]
    "
  >
    Learn More About Your
    <span className="text-[#0E5AE8]">
      {" "}Spine Health
    </span>
  </h2>

  {/* Description */}

  <p
    className="
      mx-auto
      mt-3
      max-w-2xl
      font-sans
      text-sm
      font-normal
      leading-6
      text-slate-500
      sm:text-[15px]
    "
  >
    Explore helpful information about common spine conditions,
    treatment options, and ways to maintain a healthy spine.
  </p>

</div>

        {/* ===================================================
            ARTICLE CARDS
        =================================================== */}

        <div
          className="
            grid
            gap-7
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {articles.map((article) => (
            <article
              key={article.id}
              className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-[#D8E7F5]
                bg-white
                shadow-[0_8px_30px_rgba(8,43,92,0.07)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#63C5F2]/60
                hover:shadow-[0_18px_45px_rgba(8,43,92,0.13)]
              "
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  h-[220px]
                  overflow-hidden
                  bg-[#EAF3FA]
                  sm:h-[230px]
                "
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                  loading="lazy"
                />

                {/* Image overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#082B5C]/20
                    via-transparent
                    to-transparent
                    opacity-60
                  "
                />

                {/* Category badge */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    rounded-full
                    border
                    border-white/40
                    bg-[#082B5C]/85
                    px-3.5
                    py-1.5
                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      font-sans
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-white
                    "
                  >
                    Spine Health
                  </span>
                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  px-6
                  pb-6
                  pt-6
                  sm:px-7
                  sm:pb-7
                "
              >
                {/* Title */}

                <h3
                  className="
                    font-sans
                    text-xl
                    font-bold
                    leading-[1.35]
                    tracking-tight
                    text-[#082B5C]
                    transition-colors
                    duration-300
                    group-hover:text-[#0E5AE8]
                    sm:text-[22px]
                  "
                >
                  {article.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-4
                    line-clamp-3
                    font-sans
                    text-[15px]
                    leading-7
                    text-[#60748B]
                    sm:text-base
                  "
                >
                  {article.description}
                </p>

                {/* Read More */}

                <div className="mt-auto pt-6">
                  <a
                    href={article.href}
                    className="
                      group/read
                      inline-flex
                      items-center
                      gap-3
                      font-sans
                      text-sm
                      font-bold
                      text-[#082B5C]
                      transition-colors
                      duration-300
                      hover:text-[#0E5AE8]
                    "
                  >
                    {/* Circular arrow */}

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-[#0E5AE8]
                        text-white
                        shadow-[0_5px_15px_rgba(14,90,232,0.22)]
                        transition-all
                        duration-300
                        group-hover/read:scale-105
                        group-hover/read:bg-[#082B5C]
                      "
                    >
                      <ArrowUpRight
                        size={17}
                        strokeWidth={2.2}
                        className="
                          transition-transform
                          duration-300
                          group-hover/read:translate-x-0.5
                          group-hover/read:-translate-y-0.5
                        "
                      />
                    </span>

                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ===================================================
            OPTIONAL VIEW ALL BUTTON
        =================================================== */}

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href="#"
            className="
              group
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-[#0E5AE8]
              bg-white
              px-6
              py-3
              font-sans
              text-sm
              font-semibold
              text-[#0E5AE8]
              shadow-[0_6px_20px_rgba(14,90,232,0.08)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0E5AE8]
              hover:text-white
              hover:shadow-[0_10px_25px_rgba(14,90,232,0.18)]
            "
          >
            View All Health Information

            <ArrowUpRight
              size={16}
              strokeWidth={2}
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
  );
}