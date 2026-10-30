import { ArrowUpRight } from 'lucide-react'
import { foundationAssets } from './assets'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex h-[100svh] min-h-[740px] max-h-[980px] items-center overflow-hidden bg-forest text-white"
    >
      <img
        src={foundationAssets.healthCamp}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-[54%_center]"
        fetchPriority="high"
        decoding="async"
        data-parallax
        data-hero-media
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06271f]/85 via-[#06271f]/65 to-[#06271f]/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#063b30]/75" aria-hidden="true" />
      <div className="hero-glow absolute -right-32 top-1/4 size-[28rem] rounded-full bg-saffron/10 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-8 pt-24 sm:px-8 lg:pt-28">
        <div className="hero-copy max-w-[920px]">
          <p data-hero-copy className="font-editorial text-base text-saffron sm:text-lg lg:text-xl">
            परोपकारार्थ इदं शरीरम्
          </p>
          <h1
            data-hero-copy
            className="font-editorial mt-6 max-w-[920px] text-[clamp(2.35rem,5.6vw,5.35rem)] leading-[1.02] tracking-[-0.045em] text-[#fffaf0] sm:mt-7"
          >
            <span className="block">Together, We Can Build</span>
            <span className="block">a Healthier and More</span>
            <em className="block font-normal text-saffron">Hopeful Tomorrow.</em>
          </h1>
          <p data-hero-copy className="mt-7 max-w-[680px] text-[15px] leading-7 text-white/80 sm:text-base sm:leading-7">
            Kalima Foundation &amp; Charitable Trust is committed to uplifting humanity through healthcare, education, social welfare and community development.
          </p>
          <div data-hero-copy className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#donate"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-saffron px-7 text-[13px] font-bold text-forest-deep shadow-[0_12px_35px_rgba(239,161,43,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#f6b342]"
            >
              Donate Now <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="#mission"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 text-[13px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Explore Our Mission
            </a>
            <a
              href="#volunteer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 text-[13px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
