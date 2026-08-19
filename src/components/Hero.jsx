import React from "react";
import {
  ArrowRight,
  Calendar,
  Plus,
  ShieldCheck,
  Star,
  Phone,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0E5AE8]">

      {/* ===================== BACKGROUND ===================== */}

      {/* Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E5AE8] via-[#1858ce] to-[#EAF4FF]" />

      {/* Radial Lights */}
      <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-cyan-300/20 blur-[150px]" />

      <div className="absolute top-0 right-0 h-[700px] w-[700px] rounded-full bg-white/20 blur-[150px]" />

      <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-300/20 blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Blur */}
      <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-32 right-20 h-60 w-60 rounded-full bg-cyan-200/10 blur-3xl" />

      {/* Dot Pattern */}
      <div className="absolute left-10 top-28 hidden lg:block opacity-20">
        <div className="grid grid-cols-8 gap-3">
          {[...Array(64)].map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid min-h-screen items-center gap-16 py-24 lg:grid-cols-2">

          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <div className="text-center text-white lg:text-left">


            {/* Heading */}
            <h1 className="mt-8 text-5xl font-light leading-[1] tracking-tight md:text-6xl xl:text-7xl">
              Expert Care

              <span className="mt-2 block font-black text-white drop-shadow-xl">
                For Your Spine
              </span>

              <span className="mt-2 block font-bold text-[#082B5C]">
                & Better Movement
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-xl text-lg leading-9 text-white/85 lg:mx-0">
              Comprehensive spine care backed by advanced diagnostics, modern surgical
              techniques, minimally invasive procedures, and personalized rehabilitation—
              helping you overcome spinal conditions, reduce pain, and get back to the
              life you love.
            </p>

            {/* CTA Buttons */}

<div className="relative z-[100] mt-12 flex flex-col gap-5 sm:flex-row sm:justify-center lg:justify-start">

  {/* Book Appointment */}
  <button
    onClick={() => {
      window.location.href = "tel:+918144319133";
    }}
    className="
      group
      relative
      z-[100]
      inline-flex
      items-center
      justify-center
      gap-3
      rounded-full
      bg-white
      px-8
      py-4
      font-semibold
      text-[#0E5AE8]
      shadow-[0_20px_50px_rgba(255,255,255,0.25)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:scale-105
    "
  >
    <Calendar
      size={20}
      className="transition-transform duration-300 group-hover:rotate-6"
    />

    Book Appointment
  </button>

  {/* Explore Services */}
  <button
    onClick={() => {
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
    className="
      group
      relative
      z-[100]
      inline-flex
      items-center
      justify-center
      gap-3
      rounded-full
      border
      border-white/25
      bg-white/10
      px-8
      py-4
      font-semibold
      text-white
      backdrop-blur-xl
      transition-all
      duration-300
      hover:bg-white
      hover:text-[#0E5AE8]
    "
  >
    Explore Services

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </button>

</div>
      

            </div> 
                      {/* ================================================= */}
          {/* RIGHT IMAGE */}
          {/* ================================================= */}

          <div className="relative flex items-end justify-center">

            {/* Main Glow */}
            <div className="absolute h-[650px] w-[650px] rounded-full bg-gradient-to-br from-white/40 via-cyan-300/20 to-transparent blur-3xl" />

            {/* Concentric Rings */}
            <div className="absolute h-[580px] w-[580px] rounded-full border border-white/15" />

            <div className="absolute h-[500px] w-[500px] rounded-full border border-white/10" />

            <div className="absolute h-[420px] w-[420px] rounded-full border border-white/10" />

            {/* Floating Plus Icon */}
            <div className="absolute left-8 top-24 hidden h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl lg:flex">

              <Plus className="text-white" size={28} />

            </div>

            {/* Doctor Image */}
            <img
              src="/assets/images/Picture1.png"
              alt="Orthopedic Surgeon"
              className="
                relative
                z-20
                mx-auto
                w-full
                -mb-24
                max-w-[380px]
                object-contain
                drop-shadow-[0_45px_90px_rgba(0,0,0,0.35)]
                transition-all
                duration-700
                hover:scale-[1.02]
                sm:max-w-[460px]
                md:max-w-[560px]
                lg:max-w-[680px]
                xl:max-w-[760px]
              "
            />

            {/* White Smoke Effect 
            <div
              className="
                pointer-events-none
                absolute
                -bottom-56
                left-1/2
                z-30
                h-44
                w-[90%]
                -translate-x-1/2
                rounded-full
                bg-white/90
                blur-[70px]
              "
            /> */}

          </div>

        </div>

      </div>
            {/* ================================================= */}
      {/* BOTTOM WAVE */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 z-40 w-full overflow-hidden leading-none">

        <svg
          viewBox="0 0 1440 220"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-[140px] md:h-[180px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,128L60,138.7C120,149,240,171,360,176C480,181,600,171,720,154.7C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

      </div>

      {/* ================================================= */}
      {/* EXTRA DECORATIVE GLOWS */}
      {/* ================================================= */}

      {/* Bottom Center Glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[1100px] -translate-x-1/2 rounded-full bg-white blur-[120px] opacity-90" />

      {/* Bottom Right Glow */}
      <div className="pointer-events-none absolute bottom-12 right-10 h-60 w-60 rounded-full bg-white/15 blur-[100px]" />

      {/* Bottom Left Glow */}
      <div className="pointer-events-none absolute bottom-24 left-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-[80px]" />

      {/* Top Floating Glow */}
      <div className="pointer-events-none absolute top-40 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-white/20 blur-[60px]" />

      {/* Small Floating Circles */}
      <div className="pointer-events-none absolute top-24 right-[18%] h-4 w-4 rounded-full bg-white/40" />

      <div className="pointer-events-none absolute top-[30%] left-[20%] h-3 w-3 rounded-full bg-cyan-200/70" />

      <div className="pointer-events-none absolute bottom-[18%] right-[28%] h-5 w-5 rounded-full bg-white/30" />

    </section>
  );
}