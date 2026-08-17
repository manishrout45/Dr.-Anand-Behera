import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Stethoscope,
  ShieldCheck,
  Sparkles,
  CircleCheck,
} from "lucide-react";

import services from "../data/servicesData";

export default function ServiceDetails() {
  const { slug } = useParams();

  const serviceIndex = services.findIndex(
    (service) => service.slug === slug
  );

  const service =
    serviceIndex !== -1 ? services[serviceIndex] : services[0];

  const previousService =
    serviceIndex > 0
      ? services[serviceIndex - 1]
      : services[services.length - 1];

  const nextService =
    serviceIndex < services.length - 1
      ? services[serviceIndex + 1]
      : services[0];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    document.title = `${service.title} | Dr. Anand Behera`;
  }, [service]);

  return (
    <main className="min-h-screen bg-white font-sans text-[#071C3D]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#F5F9FE]">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#DCEEFF] blur-[120px]" />

          <div className="absolute right-[-180px] top-[120px] h-[500px] w-[500px] rounded-full bg-[#E6F2FF] blur-[130px]" />

          <div className="absolute bottom-[-150px] left-[35%] h-[350px] w-[350px] rounded-full bg-[#EDF6FF] blur-[110px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#0E5AE8 1px, transparent 1px), linear-gradient(90deg, #0E5AE8 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />

        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24 lg:pt-32">

          {/* Breadcrumb */}

          <div className="mb-10 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">

            <Link
              to="/"
              className="transition-colors hover:text-[#0E5AE8]"
            >
              Home
            </Link>

            <span className="text-slate-300">/</span>

            <Link
              to="/#services"
              className="transition-colors hover:text-[#0E5AE8]"
            >
              Services
            </Link>

            <span className="text-slate-300">/</span>

            <span className="font-semibold text-[#0E5AE8]">
              {service.shortTitle}
            </span>

          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-20">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#CFE3F8] bg-white/80 px-4 py-2 text-xs font-semibold text-[#0E5AE8] shadow-sm backdrop-blur">

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F3FF]">
                  <Sparkles size={11} />
                </span>

                Specialized Spine Care

              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#071C3D] sm:text-5xl lg:text-[58px]">
                {service.title}
              </h1>

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-slate-500 sm:text-base">
                {service.description}
              </p>

              <div className="mt-9 flex items-center gap-4">

                <div className="relative">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0E5AE8] to-[#1646B8] text-xs font-bold text-white shadow-lg shadow-blue-500/20">
                    AB
                  </div>

                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#F5F9FE] bg-emerald-500" />

                </div>

                <div>

                  <p className="text-sm font-semibold text-[#172B4D]">
                    Dr. Anand Behera
                  </p>

                  <p className="mt-0.5 text-xs text-slate-400">
                    Spine Surgeon
                  </p>

                </div>

              </div>

              <div className="mt-9 flex flex-wrap gap-3">

                {[
                  "Specialized Care",
                  "Patient-Centered",
                  "Advanced Techniques",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-[#DCE8F3] bg-white/80 px-3.5 py-2 text-[11px] font-medium text-slate-500 shadow-sm"
                  >

                    <CircleCheck
                      size={14}
                      className="text-[#0E5AE8]"
                    />

                    {item}

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="relative">

              <div className="absolute -inset-6 rounded-[40px] bg-[#CFE5FF] opacity-60 blur-3xl" />

              <div className="relative">

                <div className="overflow-hidden rounded-[30px] border-[6px] border-white bg-white shadow-[0_30px_80px_rgba(14,90,232,0.15)]">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[330px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[420px] lg:h-[470px]"
                  />

                </div>

                <div className="absolute -left-4 -top-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white bg-white shadow-xl sm:-left-6 sm:-top-6 sm:h-20 sm:w-20">

                  <div className="text-center">

                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                      Service
                    </p>

                    <p className="mt-0.5 text-xl font-bold text-[#0E5AE8]">
                      {String(serviceIndex + 1).padStart(2, "0")}
                    </p>

                  </div>

                </div>

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#0E5AE8]">
                      <Stethoscope size={19} />
                    </div>

                    <div className="min-w-0">

                      <p className="text-xs font-bold text-[#071C3D]">
                        Personalized Spine Care
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-400">
                        Treatment tailored to your condition and needs
                      </p>

                    </div>

                    <div className="ml-auto hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF4FF] text-[#0E5AE8] sm:flex">
                      <ArrowUpRight size={15} />
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          QUICK NAV
      ========================================================= */}

      <div className="sticky top-0 z-40 border-b border-[#E6EEF6] bg-white/90 shadow-[0_4px_20px_rgba(20,60,100,0.04)] backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 overflow-x-auto px-5 py-3.5 sm:px-6 lg:px-10">

          <div className="flex shrink-0 items-center gap-6 text-xs font-semibold text-slate-500 sm:gap-8">

            {[
              ["#overview", "Overview"],
              ["#benefits", "Highlights"],
              ["#procedure", "Procedure"],
              ["#recovery", "Recovery"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (

              <a
                key={href}
                href={href}
                className="whitespace-nowrap transition-colors hover:text-[#0E5AE8]"
              >
                {label}
              </a>

            ))}

          </div>

          <a
            href="#contact"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#0E5AE8] px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-[#0B4FCF] sm:flex"
          >
            Book Consultation
            <ArrowUpRight size={14} />
          </a>

        </div>

      </div>

      {/* =========================================================
    MAIN CONTENT
========================================================= */}

<section className="relative bg-white py-16 sm:py-20 lg:py-24">

  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

    {/* =====================================================
        MAIN TWO COLUMN LAYOUT

        IMPORTANT:
        - Left column controls the height
        - Right column is sticky
        - items-start prevents grid stretching
    ===================================================== */}

    <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-20">

      {/* ===================================================
          LEFT — LONG CONTENT
      =================================================== */}

      <div className="min-w-0">

        {/* ================= OVERVIEW ================= */}

        <section
          id="overview"
          className="scroll-mt-28"
        >

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#0E5AE8]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E5AE8]">
              About the procedure
            </span>

          </div>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#071C3D] sm:text-4xl">

            Understanding{" "}

            <span className="text-[#0E5AE8]">
              {service.shortTitle}
            </span>

          </h2>

          <p className="mt-6 max-w-3xl text-[15px] leading-8 text-slate-500">
            {service.overview}
          </p>

        </section>


        {/* ================= HIGHLIGHTS ================= */}

        <section
          id="benefits"
          className="mt-20 scroll-mt-28"
        >

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#0E5AE8]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E5AE8]">
              Key highlights
            </span>

          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[#071C3D] sm:text-4xl">
            What this approach focuses on
          </h2>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">

            {service.highlights.map((item, index) => (

              <div
                key={item}
                className="group relative overflow-hidden rounded-2xl border border-[#E3ECF5] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7DFF7] hover:shadow-[0_18px_45px_rgba(14,90,232,0.09)]"
              >

                <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#F0F7FF] opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                <div className="relative">

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#0E5AE8] transition-all duration-300 group-hover:bg-[#0E5AE8] group-hover:text-white">

                      <Check
                        size={18}
                        strokeWidth={2.5}
                      />

                    </div>

                    <span className="text-[10px] font-bold tracking-widest text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <p className="mt-5 text-sm font-semibold leading-6 text-[#172B4D]">
                    {item}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ================= SUITABLE FOR ================= */}

        <section className="mt-20">

          <div className="relative overflow-hidden rounded-[28px] bg-[#F4F8FC] p-7 sm:p-9">

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#DCEEFF] blur-3xl" />

            <div className="relative">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#0E5AE8] shadow-sm">
                  <ShieldCheck size={21} />
                </div>

                <div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E5AE8]">
                    When it may be considered
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold text-[#071C3D]">
                    Conditions & situations
                  </h3>

                </div>

              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {service.suitableFor.map((item) => (

                  <div
                    key={item}
                    className="group flex items-start gap-3 rounded-xl border border-transparent bg-white px-4 py-3.5 transition hover:border-[#D9E8F7] hover:shadow-sm"
                  >

                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-[#0E5AE8]"
                    />

                    <span className="text-sm leading-6 text-slate-500">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ================= PROCEDURE ================= */}

        <section
          id="procedure"
          className="mt-20 scroll-mt-28"
        >

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#0E5AE8]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E5AE8]">
              Treatment pathway
            </span>

          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[#071C3D] sm:text-4xl">
            How the process works
          </h2>

          <div className="relative mt-10">

            <div className="absolute bottom-6 left-5 top-6 hidden w-px bg-gradient-to-b from-[#0E5AE8] via-[#CFE1F5] to-transparent sm:block" />

            <div className="space-y-7">

              {service.procedure.map((step, index) => (

                <div
                  key={step.number}
                  className="relative flex gap-5 sm:gap-7"
                >

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#0E5AE8] text-[10px] font-bold text-white shadow-lg shadow-blue-500/20">
                    {step.number}
                  </div>

                  <div className="group flex-1 rounded-2xl border border-[#E3EBF3] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#C8DFF5] hover:shadow-[0_12px_35px_rgba(14,90,232,0.07)]">

                    <div className="flex items-start justify-between gap-4">

                      <h3 className="text-[16px] font-semibold text-[#172B4D]">
                        {step.title}
                      </h3>

                      <span className="hidden text-[10px] font-bold tracking-widest text-slate-300 sm:block">
                        STEP {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {step.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= RECOVERY ================= */}

        <section
          id="recovery"
          className="mt-20 scroll-mt-28"
        >

          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#0E5AE8] via-[#145FD9] to-[#0A48B7] p-8 text-white shadow-[0_20px_50px_rgba(14,90,232,0.2)] sm:p-10">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

            <div className="relative">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <Clock3 size={19} />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
                  Recovery & follow-up
                </span>

              </div>

              <h2 className="mt-5 max-w-xl text-2xl font-semibold leading-tight sm:text-3xl">
                A recovery plan designed around you
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50/85">
                {service.recovery}
              </p>

            </div>

          </div>

        </section>


        {/* ================= FAQ ================= */}

        <section
          id="faq"
          className="mt-20 scroll-mt-28"
        >

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#0E5AE8]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E5AE8]">
              Common questions
            </span>

          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[#071C3D] sm:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mt-9 overflow-hidden rounded-2xl border border-[#E2EBF4] bg-white">

            {service.faqs.map((faq) => (

              <details
                key={faq.question}
                className="group border-b border-[#E7EEF5] p-5 last:border-b-0 sm:p-6"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold leading-6 text-[#172B4D]">

                  <span>
                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1F7FD] text-[#0E5AE8] transition-all group-open:bg-[#0E5AE8] group-open:text-white">

                    <ChevronDown
                      size={16}
                      className="transition-transform duration-300 group-open:rotate-180"
                    />

                  </span>

                </summary>

                <p className="mt-4 max-w-3xl pr-8 text-sm leading-7 text-slate-500">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </section>

      </div>


      {/* ===================================================
          RIGHT — STICKY SIDEBAR
          
          THIS IS THE IMPORTANT PART
      =================================================== */}

      <aside
        className="
          hidden
          self-start
          lg:sticky
          lg:top-[110px]
          lg:block
        "
      >

        {/* QUICK OVERVIEW */}

        <div className="overflow-hidden rounded-[28px] border border-[#DDE8F2] bg-white shadow-[0_20px_50px_rgba(14,90,232,0.08)]">

          <div className="relative overflow-hidden bg-[#F3F8FD] p-7">

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DCEEFF] blur-2xl" />

            <div className="relative">

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E5AE8]">
                Quick overview
              </span>

              <h3 className="mt-3 text-xl font-semibold leading-7 text-[#071C3D]">
                {service.shortTitle}
              </h3>

            </div>

          </div>


          <div className="p-5">

            <div className="space-y-1">

              <div className="rounded-xl px-3 py-3.5 transition hover:bg-[#F7FAFD]">

                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  Specialist
                </p>

                <p className="mt-1.5 text-sm font-semibold text-[#172B4D]">
                  Dr. Anand Behera
                </p>

              </div>


              <div className="rounded-xl px-3 py-3.5 transition hover:bg-[#F7FAFD]">

                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  Specialty
                </p>

                <p className="mt-1.5 text-sm font-semibold text-[#172B4D]">
                  Spine Surgery
                </p>

              </div>


              <div className="rounded-xl px-3 py-3.5 transition hover:bg-[#F7FAFD]">

                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  Approach
                </p>

                <p className="mt-1.5 text-sm font-semibold text-[#172B4D]">
                  Specialized surgical care
                </p>

              </div>

            </div>


            <div className="mt-4 border-t border-[#EAF0F5] pt-5">

              <a
                href="#contact"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0E5AE8] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:bg-[#0B4FCF]"
              >

                Book a Consultation

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

              </a>

            </div>

          </div>

        </div>


        {/* HELP CARD */}

        <div className="relative mt-5 overflow-hidden rounded-[28px] bg-[#071C3D] p-7 text-white">

          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#0E5AE8]/30 blur-3xl" />

          <div className="relative">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Stethoscope size={18} />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
              Have questions?
            </p>

            <h3 className="mt-2 text-xl font-semibold leading-7">
              Discuss your spine condition
            </h3>

            <p className="mt-3 text-xs leading-6 text-blue-100/70">
              Get a personalized evaluation and understand the treatment
              options available for your condition.
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white"
            >

              Contact the clinic

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />

            </a>

          </div>

        </div>

      </aside>

    </div>

  </div>

</section>

      {/* =========================================================
          PREVIOUS / NEXT
      ========================================================= */}

      <section className="border-t border-[#E5EDF5] bg-[#F7FAFD] py-14 sm:py-16">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

          <div className="mb-7 text-center">

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0E5AE8]">
              Explore more
            </span>

            <h2 className="mt-2 text-xl font-semibold text-[#071C3D]">
              Other spine procedures
            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            <Link
              to={`/services/${previousService.slug}`}
              className="group rounded-2xl border border-[#DFE9F2] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7DDF3] hover:shadow-[0_15px_35px_rgba(14,90,232,0.08)]"
            >

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">

                <ArrowLeft size={14} />

                Previous service

              </div>

              <h3 className="mt-3 text-base font-semibold text-[#071C3D] transition-colors group-hover:text-[#0E5AE8]">
                {previousService.shortTitle}
              </h3>

              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0E5AE8] opacity-0 transition-all group-hover:opacity-100">
                View service
                <ArrowRight size={13} />
              </span>

            </Link>

            <Link
              to={`/services/${nextService.slug}`}
              className="group rounded-2xl border border-[#DFE9F2] bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#C7DDF3] hover:shadow-[0_15px_35px_rgba(14,90,232,0.08)] sm:text-right"
            >

              <div className="flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">

                Next service

                <ArrowRight size={14} />

              </div>

              <h3 className="mt-3 text-base font-semibold text-[#071C3D] transition-colors group-hover:text-[#0E5AE8]">
                {nextService.shortTitle}
              </h3>

              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0E5AE8] opacity-0 transition-all group-hover:opacity-100">
                View service
                <ArrowRight size={13} />
              </span>

            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          DISCLAIMER
      ========================================================= */}

      <div className="border-t border-[#E8EEF4] bg-white px-5 py-7">

        <p className="mx-auto max-w-4xl text-center text-[11px] leading-5 text-slate-400">
          Treatment suitability, procedure selection and recovery vary from
          patient to patient. A specialist consultation and appropriate
          evaluation are required to determine the most suitable treatment
          approach.
        </p>

      </div>

    </main>
  );
}
