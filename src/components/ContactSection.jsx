import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("Please accept the Terms of Service.");
      return;
    }

    console.log("Contact Form:", formData);
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#F5FAFF]
        py-12
        sm:py-14
        lg:py-16
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Left Glow */}
        <div
          className="
            absolute
            -left-40
            top-10
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#2F78FF]/10
            blur-[90px]
          "
        />

        {/* Right Glow */}
        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#0E5AE8]/10
            blur-[90px]
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
            CONTACT CARD
        ======================================================= */}

        <div
          className="
            overflow-hidden
            rounded-[24px]
            border
            border-[#D8E9FA]
            bg-white
            shadow-[0_20px_60px_rgba(14,90,232,0.09)]
          "
        >

          <div
            className="
              grid
              lg:grid-cols-[1.05fr_0.95fr]
            "
          >

            {/* ===================================================
                LEFT IMAGE
            =================================================== */}

            <div
              className="
                relative
                min-h-[300px]
                overflow-hidden
                bg-[#082B5C]
                sm:min-h-[400px]
                lg:min-h-[480px]
              "
            >

              {/* Main Image */}

              <img
                src="https://img.magnific.com/premium-photo/doctor-pointing-anatomical-model-spine-clinic_1313853-118284.jpg?ga=GA1.1.367325703.1777638219&semt=ais_test_b&w=740&q=80"
                alt="Patient receiving medical care"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

              {/* Image Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-tr
                  from-[#0E5AE8]/25
                  via-transparent
                  to-transparent
                "
              />

              {/* =================================================
                  CURVED IMAGE EDGE
              ================================================= */}

              <div
                className="
                  absolute
                  -right-[1px]
                  top-0
                  hidden
                  h-full
                  w-[75px]
                  bg-white
                  lg:block
                "
                style={{
                  clipPath: "ellipse(100% 55% at 100% 50%)",
                }}
              />

              {/* =================================================
                  DOCTOR LABEL
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  rounded-xl
                  border
                  border-white/20
                  bg-[#061B3F]/70
                  px-4
                  py-3
                  backdrop-blur-md
                  sm:bottom-6
                  sm:left-6
                "
              >

                <p
                  className="
                    font-sans
                    text-base
                    font-semibold
                    text-white
                  "
                >
                  Dr. Anand Behera
                </p>

                <p
                  className="
                    mt-0.5
                    font-sans
                    text-sm
                    font-normal
                    text-white/70
                  "
                >
                  Spine & Neurosurgery
                </p>

              </div>

            </div>

            {/* ===================================================
                RIGHT CONTACT FORM
            =================================================== */}

            <div
              className="
                flex
                flex-col
                justify-center
                px-6
                py-8
                sm:px-9
                sm:py-9
                lg:px-11
                lg:py-10
                xl:px-12
              "
            >

              {/* =================================================
                  HEADING
              ================================================= */}

              <div className="mb-6">

                <span
                  className="
                    mb-2
                    block
                    font-sans
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-[#0E5AE8]
                  "
                >
                  Get In Touch
                </span>

                <h2
                  className="
                    font-sans
                    text-3xl
                    font-semibold
                    leading-tight
                    tracking-tight
                    text-[#071C3D]
                    sm:text-[36px]
                  "
                >
                  Contact Us
                </h2>

                <p
                  className="
                    mt-3
                    max-w-md
                    font-sans
                    text-[15px]
                    font-normal
                    leading-6
                    text-slate-500
                  "
                >
                  Have questions about your spine condition or
                  treatment options? Send us a message and our team
                  will get back to you.
                </p>

              </div>

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* =================================================
                    NAME
                ================================================= */}

                <div>

                  <label
                    htmlFor="name"
                    className="
                      mb-1.5
                      block
                      font-sans
                      text-sm
                      font-semibold
                      text-[#172B4D]
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="
                      h-11
                      w-full
                      rounded-lg
                      border
                      border-[#D8E3EF]
                      bg-[#F9FCFF]
                      px-3.5
                      font-sans
                      text-sm
                      font-normal
                      text-[#172B4D]
                      outline-none
                      transition-all
                      duration-200
                      placeholder:font-sans
                      placeholder:text-sm
                      placeholder:text-slate-400
                      focus:border-[#2F78FF]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#2F78FF]/10
                    "
                  />

                </div>

                {/* =================================================
                    EMAIL
                ================================================= */}

                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-1.5
                      block
                      font-sans
                      text-sm
                      font-semibold
                      text-[#172B4D]
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter a valid email address"
                    required
                    className="
                      h-11
                      w-full
                      rounded-lg
                      border
                      border-[#D8E3EF]
                      bg-[#F9FCFF]
                      px-3.5
                      font-sans
                      text-sm
                      font-normal
                      text-[#172B4D]
                      outline-none
                      transition-all
                      duration-200
                      placeholder:font-sans
                      placeholder:text-sm
                      placeholder:text-slate-400
                      focus:border-[#2F78FF]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#2F78FF]/10
                    "
                  />

                </div>

                {/* =================================================
                    MESSAGE
                ================================================= */}

                <div>

                  <label
                    htmlFor="message"
                    className="
                      mb-1.5
                      block
                      font-sans
                      text-sm
                      font-semibold
                      text-[#172B4D]
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                    rows={4}
                    className="
                      min-h-[100px]
                      w-full
                      resize-none
                      rounded-lg
                      border
                      border-[#D8E3EF]
                      bg-[#F9FCFF]
                      px-3.5
                      py-3
                      font-sans
                      text-sm
                      font-normal
                      leading-5
                      text-[#172B4D]
                      outline-none
                      transition-all
                      duration-200
                      placeholder:font-sans
                      placeholder:text-sm
                      placeholder:text-slate-400
                      focus:border-[#2F78FF]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#2F78FF]/10
                    "
                  />

                </div>

                {/* =================================================
                    TERMS
                ================================================= */}

                <label
                  className="
                    flex
                    cursor-pointer
                    items-start
                    gap-2.5
                    font-sans
                    text-[13px]
                    font-normal
                    leading-5
                    text-slate-500
                  "
                >

                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      cursor-pointer
                      accent-[#0E5AE8]
                    "
                  />

                  <span className="font-sans">

                    I accept the{" "}

                    <a
                      href="#"
                      className="
                        font-sans
                        font-semibold
                        text-[#0E5AE8]
                        hover:underline
                      "
                    >
                      Terms of Service
                    </a>

                  </span>

                </label>

                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}

                <button
                  type="submit"
                  className="
                    group
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#0E5AE8]
                    px-5
                    font-sans
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_7px_20px_rgba(14,90,232,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#0B4FCF]
                    hover:shadow-[0_10px_25px_rgba(14,90,232,0.25)]
                    active:translate-y-0
                  "
                >

                  <span className="font-sans">
                    Submit
                  </span>

                  <Send
                    size={16}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </button>

              </form>

              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  border-t
                  border-[#E5EDF6]
                  pt-5
                  sm:grid-cols-2
                "
              >

                {/* =================================================
                    PHONE
                ================================================= */}

                <a
                  href="tel:+918144319133"
                  className="
                    flex
                    items-center
                    gap-2.5
                    font-sans
                    text-sm
                    font-normal
                    text-slate-500
                    transition-colors
                    hover:text-[#0E5AE8]
                  "
                >

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EAF4FF]
                      text-[#0E5AE8]
                    "
                  >
                    <Phone size={16} />
                  </span>

                  <span className="font-sans">

                    <span
                      className="
                        block
                        font-sans
                        text-[11px]
                        font-normal
                        text-slate-400
                      "
                    >
                      Call Us
                    </span>

                    <span
                      className="
                        font-sans
                        text-sm
                        font-semibold
                        text-[#172B4D]
                      "
                    >
                      +91 81443 19133
                    </span>

                  </span>

                </a>

                {/* =================================================
                    EMAIL
                ================================================= */}

                <a
                  href="mailto:dranandbehera@gmail.com"
                  className="
                    flex
                    items-center
                    gap-2.5
                    font-sans
                    text-sm
                    font-normal
                    text-slate-500
                    transition-colors
                    hover:text-[#0E5AE8]
                  "
                >

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EAF4FF]
                      text-[#0E5AE8]
                    "
                  >
                    <Mail size={16} />
                  </span>

                  <span className="font-sans">

                    <span
                      className="
                        block
                        font-sans
                        text-[11px]
                        font-normal
                        text-slate-400
                      "
                    >
                      Email Us
                    </span>

                    <span
                      className="
                        font-sans
                        text-sm
                        font-semibold
                        text-[#172B4D]
                      "
                    >
                      dranandbehera@gmail.com
                    </span>

                  </span>

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}