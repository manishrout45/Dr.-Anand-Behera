import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "When should I see a spine specialist?",
      answer:
        "You should consider consulting a spine specialist if you have persistent back or neck pain, pain that radiates into your arms or legs, numbness, weakness, difficulty walking, or symptoms that are affecting your daily activities.",
    },
    {
      question: "Do all spine problems require surgery?",
      answer:
        "No. Many spine conditions can be managed without surgery through appropriate medication, physiotherapy, activity modification, injections, and other conservative treatments. Surgery is considered when symptoms are severe, persistent, or when there is significant nerve or spinal cord compression.",
    },
    {
      question: "What happens during a spine consultation?",
      answer:
        "A consultation generally includes a detailed discussion of your symptoms and medical history, a physical and neurological examination, and review of relevant imaging such as X-rays, CT scans, or MRI scans. A treatment plan is then discussed based on your condition.",
    },
    {
      question: "What is minimally invasive spine surgery?",
      answer:
        "Minimally invasive spine surgery uses smaller incisions and specialized instruments or endoscopic techniques to access the affected area. When appropriate, these techniques may help reduce tissue disruption and support a quicker recovery.",
    },
    {
      question: "How do I know if my back pain is serious?",
      answer:
        "Back pain should receive prompt medical attention when it is associated with significant weakness, loss of bladder or bowel control, severe numbness, difficulty walking, major trauma, or rapidly worsening symptoms.",
    },
    {
      question: "Can I get a second opinion for my spine condition?",
      answer:
        "Yes. A second opinion can help you better understand your diagnosis, available treatment options, and whether surgery or another approach is appropriate for your particular condition.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-[#082B5C]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Top right glow */}

        <div
          className="
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0E5AE8]/20
            blur-[110px]
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
            bg-[#63C5F2]/10
            blur-[110px]
          "
        />

        {/* Subtle grid */}

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

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-5xl
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* ===================================================
            HEADING
        =================================================== */}

        <div className="mb-10 text-center sm:mb-12">

          {/* Label */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#63C5F2]/25
              bg-[#0E5AE8]/15
              px-4
              py-1.5
              font-sans
              text-xs
              font-medium
              text-[#9DDBFA]
            "
          >
            Frequently Asked Questions
          </span>

          {/* Heading */}

          <h2
            className="
              mt-3
              font-sans
              text-2xl
              font-semibold
              leading-tight
              text-white
              sm:text-3xl
              lg:text-[34px]
            "
          >
            Questions About Your
            <span className="text-[#63C5F2]">
              {" "}Spine Care
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
              text-white/60
              sm:text-[15px]
            "
          >
            Find answers to common questions about spine conditions,
            consultations, treatment options, and recovery.
          </p>
        </div>

        {/* ===================================================
            FAQ LIST
        =================================================== */}

        <div className="space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-[#63C5F2]/40 bg-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.12)]"
                      : "border-white/10 bg-white/[0.035] hover:border-[#63C5F2]/25 hover:bg-white/[0.055]"
                  }
                `}
              >

                {/* =================================================
                    QUESTION BUTTON
                ================================================= */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-5
                    py-5
                    text-left
                    sm:px-6
                    sm:py-5
                  "
                >

                  {/* Number + Question */}

                  <div className="flex min-w-0 items-center gap-4">

                    {/* Number */}

                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        font-sans
                        text-xs
                        font-semibold
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "border-[#63C5F2] bg-[#0E5AE8] text-white"
                            : "border-white/15 bg-white/[0.04] text-white/45"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}

                    <span
                      className={`
                        font-sans
                        text-[15px]
                        font-semibold
                        leading-6
                        transition-colors
                        duration-300
                        sm:text-base
                        ${
                          isOpen
                            ? "text-white"
                            : "text-white/80"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                  </div>

                  {/* Chevron */}

                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "rotate-180 border-[#63C5F2]/40 bg-[#0E5AE8] text-white"
                          : "border-white/10 bg-white/[0.04] text-white/50"
                      }
                    `}
                  >
                    <ChevronDown
                      size={17}
                      strokeWidth={2}
                    />
                  </span>

                </button>

                {/* =================================================
                    ANSWER
                ================================================= */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">

                    <div
                      className="
                        border-t
                        border-white/10
                        px-5
                        pb-5
                        pt-4
                        sm:px-6
                        sm:pb-6
                      "
                    >
                      <p
                        className="
                          max-w-3xl
                          pl-12
                          font-sans
                          text-sm
                          leading-7
                          text-white/60
                          sm:text-[15px]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-2xl
            border
            border-[#63C5F2]/20
            bg-[#0E5AE8]/10
            px-6
            py-6
            sm:flex-row
            sm:px-7
          "
        >

          <div className="text-center sm:text-left">

            <h3
              className="
                font-sans
                text-base
                font-semibold
                text-white
                sm:text-lg
              "
            >
              Still have questions?
            </h3>

            <p
              className="
                mt-1
                font-sans
                text-sm
                text-white/55
              "
            >
              Discuss your spine condition with our specialist.
            </p>

          </div>

          <a
            href="#contact"
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              px-5
              py-2.5
              font-sans
              text-sm
              font-semibold
              text-[#0E5AE8]
              shadow-[0_8px_25px_rgba(0,0,0,0.15)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#EAF4FF]
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]
            "
          >
            Contact Us
          </a>

        </div>

      </div>
    </section>
  );
}