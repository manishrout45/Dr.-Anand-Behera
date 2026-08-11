import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Endoscopic Spine Surgery",
    description:
      "Advanced endoscopic spine procedures using small access points to reduce tissue disruption and support faster recovery.",
    image: "https://img.magnific.com/premium-photo/orthopedic-spine-surgeon-performing-surgery-spine-treat-condition-like-herniated-disc-spinal_1359741-16869.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 2,
    title: "Minimally Invasive Spine Surgery",
    description:
      "Modern spine surgery techniques designed to minimize muscle damage, blood loss and postoperative discomfort.",
    image: "https://img.magnific.com/premium-photo/surgeons-action-highstakes-precision-operating-room_984027-223346.jpg?ga=GA1.1.367325703.1777638219&semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 3,
    title: "Endoscopic Discectomy",
    description:
      "A minimally invasive procedure used to remove problematic disc material and relieve pressure on affected spinal nerves.",
    image: "https://img.magnific.com/free-photo/indian-general-practitioner-patient-engage-medical-consultation_482257-124635.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
  },
  {
    id: 4,
    title: "Lumbar Spine Surgery",
    description:
      "Specialized treatment for lumbar disc disorders, nerve compression, spinal stenosis and other lower-back conditions.",
    image: "https://img.magnific.com/premium-photo/doctor-with-lumbar-vertebra-bone-skeleton-nerve-model-treatment-orthopedic-department_39768-17867.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
  },
  {
    id: 5,
    title: "Cervical Spine Surgery",
    description:
      "Advanced surgical treatment for cervical disc disease, nerve compression and other conditions affecting the neck and cervical spine.",
    image: "https://img.magnific.com/free-photo/endocrinologist-examining-throat-young-woman-clinic-women-with-thyroid-gland-test-endocrinology-hormones-treatment-inflammation-sore-throat_657921-274.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
  },
  {
    id: 6,
    title: "Spinal Stenosis Treatment",
    description:
      "Carefully selected decompression techniques to relieve pressure on spinal nerves caused by narrowing of the spinal canal.",
    image: "https://img.magnific.com/free-photo/female-doctor-examining-patient_1170-2113.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
  },
  {
    id: 7,
    title: "Slip Disc Treatment",
    description:
      "Personalized treatment for herniated or slipped discs, with minimally invasive options considered when appropriate.",
    image: "https://img.magnific.com/free-photo/analyzing-spine-structure_1098-18700.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
  },
  {
    id: 8,
    title: "Spinal Decompression",
    description:
      "Specialized decompression procedures aimed at relieving nerve pressure while preserving as much normal spinal structure as possible.",
    image: "https://img.magnific.com/free-photo/chiropractor-provides-aid-patient_482257-90376.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80",
  },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  /* =========================================================
     RESPONSIVE CARD COUNT
  ========================================================= */

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  /* =========================================================
     MAX SLIDE
  ========================================================= */

  const maxIndex = Math.max(
    0,
    services.length - visibleCards
  );

  /* =========================================================
     KEEP INDEX VALID
  ========================================================= */

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }

        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  /* =========================================================
     CONTROLS
  ========================================================= */

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }

      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }

      return prev + 1;
    });
  };

  const totalSlides = maxIndex + 1;

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-32
            top-20
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#EAF4FF]
            blur-[80px]
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-10
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#F0F7FF]
            blur-[80px]
          "
        />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

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
            Specialized Spine Care
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
            Minimally Invasive & Endoscopic
            <span className="text-[#0E5AE8]">
              {" "}Spine Surgery
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
            Specialized spine care focused on minimally invasive
            and endoscopic surgical techniques, with treatment
            tailored to each patient's condition and needs.
          </p>

        </div>

        {/* =======================================================
            CAROUSEL
        ======================================================= */}

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* =====================================================
              LEFT ARROW
          ===================================================== */}

          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous services"
            className="
              absolute
              left-0
              top-1/2
              z-20
              hidden
              h-10
              w-10
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#D8E8F8]
              bg-white
              text-[#0E5AE8]
              shadow-[0_6px_20px_rgba(14,90,232,0.12)]
              transition-all
              duration-300
              hover:bg-[#0E5AE8]
              hover:text-white
              lg:flex
            "
          >
            <ChevronLeft
              size={18}
              strokeWidth={1.8}
            />
          </button>

          {/* =====================================================
              CARDS VIEWPORT
          ===================================================== */}

          <div className="overflow-hidden px-0.5 py-2">
            <div
              className="
                flex
                transition-transform
                duration-700
                ease-out
              "
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="
                    shrink-0
                    px-1.5
                    sm:px-2
                  "
                  style={{
                    width: `${100 / visibleCards}%`,
                  }}
                >
                  {/* =================================================
                      SERVICE CARD
                  ================================================= */}

                  <article
                    className="
                      group
                      h-full
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[#DDEAF6]
                      bg-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#BFDDF7]
                      hover:shadow-[0_12px_35px_rgba(14,90,232,0.10)]
                    "
                  >
                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <div
                      className="
                        relative
                        h-[150px]
                        overflow-hidden
                        bg-[#EAF4FF]
                        sm:h-[160px]
                        lg:h-[155px]
                      "
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#071C3D]/25
                          via-transparent
                          to-transparent
                          opacity-0
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        "
                      />
                    </div>

                    {/* =================================================
                        CARD CONTENT
                    ================================================= */}

                    <div className="p-5 sm:p-5">

                      {/* TITLE */}

                      <h3
                        className="
                          min-h-[48px]
                          font-sans
                          text-[18px]
                          font-semibold
                          leading-6
                          text-[#071C3D]
                        "
                      >
                        {service.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-2.5
                          line-clamp-3
                          min-h-[60px]
                          font-sans
                          text-[13px]
                          font-normal
                          leading-5
                          text-slate-500
                        "
                      >
                        {service.description}
                      </p>

                      {/* CARD FOOTER */}

                      <div
                        className="
                          mt-5
                          flex
                          items-center
                          justify-between
                          gap-2
                          border-t
                          border-[#EDF3F8]
                          pt-4
                        "
                      >
                        {/* DOCTOR */}

                        <div className="flex items-center gap-2.5">

                          {/* Avatar */}

                          <div
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#EAF4FF]
                              font-sans
                              text-[10px]
                              font-semibold
                              text-[#0E5AE8]
                            "
                          >
                            AB
                          </div>

                          {/* Doctor Information */}

                          <div>
                            <p
                              className="
                                font-sans
                                text-[12px]
                                font-semibold
                                leading-4
                                text-[#172B4D]
                              "
                            >
                              Dr. Anand Behera
                            </p>

                            <p
                              className="
                                mt-0.5
                                font-sans
                                text-[10px]
                                font-normal
                                leading-4
                                text-slate-400
                              "
                            >
                              Spine Surgeon
                            </p>
                          </div>

                        </div>

                        {/* LEARN MORE */}

                        <a
                          href="#contact"
                          className="
                            flex
                            shrink-0
                            items-center
                            gap-1
                            font-sans
                            text-[12px]
                            font-semibold
                            text-[#0E5AE8]
                            transition-all
                            duration-300
                            hover:text-[#0B4FCF]
                          "
                        >
                          Learn more

                          <ArrowUpRight
                            size={14}
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
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT ARROW
          ===================================================== */}

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next services"
            className="
              absolute
              right-0
              top-1/2
              z-20
              hidden
              h-10
              w-10
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#D8E8F8]
              bg-white
              text-[#0E5AE8]
              shadow-[0_6px_20px_rgba(14,90,232,0.12)]
              transition-all
              duration-300
              hover:bg-[#0E5AE8]
              hover:text-white
              lg:flex
            "
          >
            <ChevronRight
              size={18}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* =======================================================
            MOBILE / TABLET CONTROLS
        ======================================================= */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-3
            lg:hidden
          "
        >
          {/* Previous */}

          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous services"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#D8E8F8]
              bg-white
              text-[#0E5AE8]
              shadow-sm
              transition-all
              hover:bg-[#EAF4FF]
            "
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots */}

          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalSlides }).map(
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentIndex === index
                        ? "w-5 bg-[#0E5AE8]"
                        : "w-1.5 bg-[#C9D9E8]"
                    }
                  `}
                />
              )
            )}
          </div>

          {/* Next */}

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next services"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#D8E8F8]
              bg-white
              text-[#0E5AE8]
              shadow-sm
              transition-all
              hover:bg-[#EAF4FF]
            "
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* =======================================================
            DESKTOP DOTS
        ======================================================= */}

        <div
          className="
            mt-6
            hidden
            items-center
            justify-center
            gap-1.5
            lg:flex
          "
        >
          {Array.from({ length: totalSlides }).map(
            (_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    currentIndex === index
                      ? "w-5 bg-[#0E5AE8]"
                      : "w-1.5 bg-[#CBD9E7] hover:bg-[#9EBBD7]"
                  }
                `}
              />
            )
          )}
        </div>

      </div>
    </section>
  );
}