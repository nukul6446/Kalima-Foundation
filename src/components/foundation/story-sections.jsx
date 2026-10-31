import {
  ArrowUpRight,
  Baby,
  BookOpen,
  Briefcase,
  Check,
  Heart,
  HeartHandshake,
  HeartPulse,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'
import { foundationAssets } from './assets'
import { BrandWordmark, SpotlightCard } from './premium-ui'

const approachAreas = [
  'Humanity and Compassion',
  'Healthcare Accessibility',
  'Education and Empowerment',
  'Community Development',
  'Transparency and Accountability',
  'Sustainable Social Impact',
]

const focusAreas = [
  {
    icon: HeartPulse,
    title: 'Healthcare & Medical Support',
    description:
      'Working towards accessible and affordable healthcare through patient assistance, medical camps, awareness initiatives and healthcare infrastructure development.',
  },
  {
    icon: BookOpen,
    title: 'Education & Learning',
    description:
      'Supporting disadvantaged children through educational materials, literacy programs, scholarships and learning opportunities.',
  },
  {
    icon: Baby,
    title: 'Women & Child Welfare',
    description:
      'Supporting pregnant women, new mothers, children and vulnerable families through community-focused initiatives.',
  },
  {
    icon: Heart,
    title: 'Food & Community Security',
    description:
      'Working towards food security and essential support for economically disadvantaged families.',
  },
  {
    icon: Briefcase,
    title: 'Employment & Skill Development',
    description:
      'Encouraging opportunities for unemployed individuals through skill development, training and community empowerment.',
  },
  {
    icon: Users,
    title: 'Community Development',
    description:
      'Collaborating with local communities, NGOs and institutions to address social challenges and create sustainable solutions.',
  },
]

const missionGoals = [
  'Improve access to quality healthcare.',
  'Support underprivileged families and patients.',
  'Promote education for disadvantaged children.',
  'Organize healthcare awareness and medical camps.',
  'Empower women, children and vulnerable communities.',
  'Encourage employment and skill development.',
  'Develop sustainable community initiatives.',
  'Build partnerships for long-term social development.',
]

const responseAreas = [
  'Free medical camps and health check-up initiatives.',
  'Health awareness and preventive healthcare programs.',
  'Medical assistance for deserving patients.',
  'Maternal and child healthcare support.',
  'Healthcare education and research collaborations.',
  'Community outreach programs.',
  'Technology-enabled healthcare solutions.',
  'Partnerships with hospitals and medical institutions.',
]

const communities = [
  {
    title: 'Underprivileged Communities',
    description: 'Rural and urban poor, marginalized groups and economically vulnerable families.',
  },
  {
    title: 'Disadvantaged Children',
    description: 'Children from low-income families, orphans and those with limited access to education and healthcare.',
  },
  {
    title: 'Patients in Need',
    description: 'Individuals requiring medical treatment, financial assistance, rehabilitation and healthcare support.',
  },
  {
    title: 'Women and Children',
    description: 'Pregnant women, new mothers and children under five.',
  },
  {
    title: 'Remote and Rural Communities',
    description: 'People living in rural and tribal regions with limited access to essential healthcare services.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="section-glow bg-paper py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          <div data-reveal="left">
            <p className="eyebrow">Who we are</p>
            <h2 className="font-editorial mt-5 max-w-[620px] text-[clamp(2.7rem,5vw,3.9rem)] leading-[1.05] tracking-[-0.045em] text-forest">
              Built on compassion, <em className="font-normal text-saffron">unity</em> and responsibility.
            </h2>
            <p className="mt-6 max-w-[600px] text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
              Kalima Foundation &amp; Charitable Trust (R.), established on <strong className="font-bold text-forest">18 July 2023</strong>, is a charitable organization built on the principles of compassion, unity and social responsibility.
            </p>
            <p className="mt-5 max-w-[620px] text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
              Our foundation brings together people from diverse backgrounds, ideologies and communities with one common purpose: serving humanity. We focus on supporting underprivileged communities, improving healthcare accessibility, promoting education and creating opportunities for people who need them most.
            </p>
            <p className="mt-5 max-w-[620px] text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
              We believe in being <strong className="font-bold text-forest">DFO – Different From Others</strong> – through our commitment to thinking differently, planning responsibly and taking meaningful action.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest/55">
                <span className="size-1.5 rounded-full bg-saffron" aria-hidden="true" />
                Compassion-led
              </span>
              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest/55">
                <span className="size-1.5 rounded-full bg-mint" aria-hidden="true" />
                Community-first
              </span>
              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest/55">
                <span className="size-1.5 rounded-full bg-saffron" aria-hidden="true" />
                Transparent
              </span>
            </div>
          </div>

          <figure
            data-reveal="scale"
            data-image-reveal
            className="image-frame group relative overflow-hidden rounded-[2rem] bg-forest shadow-[0_28px_70px_rgba(22,67,52,0.2)]"
          >
            <img
              src={foundationAssets.aboutCommunity}
              alt="Mothers and children gathered at a community programme"
              className="h-[420px] w-full object-cover object-center sm:h-[500px] lg:h-[560px]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#052e26]/95 via-[#052e26]/45 to-[#052e26]/25" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-110" aria-hidden="true" />

            <div className="absolute inset-x-0 top-0 flex items-center gap-3 p-6 sm:p-7">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                <img
                  src={foundationAssets.logoMark}
                  alt=""
                  className="size-full object-contain"
                  width="512"
                  height="512"
                  loading="lazy"
                />
              </span>
              <span className="flex flex-col leading-tight text-white">
                <BrandWordmark variant="light" className="h-4 w-auto sm:h-[18px]" />
                <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.16em] text-white/70">Foundation &amp; Charitable Trust</span>
              </span>
            </div>

            <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-saffron">Our promise</p>
              <blockquote className="font-editorial mt-2 max-w-[440px] text-[clamp(1.5rem,2.6vw,2rem)] italic leading-tight text-white">
                “From the People, By the People, To the People.”
              </blockquote>
              <p className="mt-3 text-[11px] leading-5 text-white/65">Serving communities with compassion since 18 July 2023.</p>
            </figcaption>
          </figure>
        </div>

        <div data-reveal="up" className="mt-16 sm:mt-20">
          <div className="mb-5 flex items-end justify-between gap-4">
            <p className="eyebrow">Our approach</p>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-forest/35 sm:block">Six principles, one purpose</span>
          </div>
          <div className="grid border-t border-forest/15 sm:grid-cols-2 lg:grid-cols-3">
            {approachAreas.map((area, index) => (
              <div
                key={area}
                className="group flex items-center gap-4 border-b border-forest/15 py-5 transition-colors duration-300 hover:bg-forest/[0.035] sm:px-5 lg:px-7"
              >
                <span className="font-editorial text-xl text-mint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110">
                  0{index + 1}
                </span>
                <p className="text-sm font-semibold leading-6 text-forest">{area}</p>
                <ArrowUpRight
                  aria-hidden="true"
                  className="ml-auto size-4 shrink-0 text-forest/25 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function VisionMissionSection() {
  return (
    <section id="mission" className="section-glow relative isolate overflow-hidden bg-forest py-20 text-white sm:py-28 lg:py-32">
      <div className="absolute -right-32 -top-48 -z-10 size-[520px] rounded-full bg-white/[0.035] sm:size-[700px]" aria-hidden="true" />
      <div className="absolute -right-8 top-20 -z-10 size-[320px] rounded-full border border-white/[0.08] sm:size-[450px]" aria-hidden="true" />
      <div className="absolute -left-24 bottom-0 -z-10 size-[360px] rounded-full bg-saffron/[0.06] blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div data-reveal="left">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-saffron">Our vision</p>
            <h2 className="font-editorial mt-5 max-w-[610px] text-[clamp(2.5rem,4.7vw,3.75rem)] leading-[1.08] tracking-[-0.035em] text-white">
              Rebuilding Human Dignity and Empowering Communities
            </h2>
            <p className="mt-6 max-w-[570px] text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Our vision is to rebuild the dignity of poor and marginalized communities through empowerment, healthcare, education, food security and employment opportunities.
            </p>
            <p className="mt-4 max-w-[570px] text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              We aspire to create a sustainable society where everyone has the opportunity to live a healthier, safer and more dignified life.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-saffron/70" aria-hidden="true" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/45">Dignity in every step</span>
            </div>
          </div>

          <div data-reveal="right">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-saffron">Our mission</p>
            <h3 className="font-editorial mt-5 max-w-[620px] text-[clamp(2.5rem,4.7vw,3.75rem)] leading-[1.08] tracking-[-0.035em] text-white">
              Bringing People Together for Meaningful Change
            </h3>
            <p className="mt-6 max-w-[570px] text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Our mission is to bring visionary initiatives under one united platform where innovation, compassion and community development grow together.
            </p>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4 backdrop-blur-sm">
              <Quote aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-saffron" />
              <p className="text-sm leading-6 text-white/75">
                When compassion becomes collective action, whole communities begin to rise.
              </p>
            </div>
          </div>
        </div>

        <div data-reveal="scale" className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.1] p-6 sm:mt-16 sm:p-9 lg:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-white/10" aria-hidden="true" />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-white/80">We aim to:</p>
            <span className="premium-tag">
              <Sparkles aria-hidden="true" className="size-3" />
              Our shared purpose
            </span>
          </div>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {missionGoals.map((goal, index) => (
              <li
                key={goal}
                className="group flex min-h-[88px] gap-3 rounded-xl border-t border-white/15 pt-4 text-sm leading-6 text-white/85 transition-colors duration-300 hover:border-saffron/50 hover:text-white"
              >
                <span className="font-editorial text-lg text-saffron transition-transform duration-300 group-hover:-translate-y-0.5">0{index + 1}</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function FocusSection() {
  return (
    <section id="work" className="section-glow bg-paper py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal="up" className="mx-auto max-w-[780px] text-center">
          <p className="eyebrow">Our key focus areas</p>
          <h2 className="font-editorial mt-5 text-[clamp(2.6rem,5vw,4rem)] leading-[1.08] tracking-[-0.04em] text-forest">
            Where your support <em className="font-normal text-saffron">takes root.</em>
          </h2>
        </div>

        <figure
          data-reveal="scale"
          data-image-reveal
          className="image-frame group relative mt-10 overflow-hidden rounded-[1.75rem] bg-forest sm:mt-12 sm:rounded-[2rem]"
        >
          <img
            src={foundationAssets.healthCheckup}
            alt="A doctor checking a patient with a stethoscope at a clinic"
            className="h-[240px] w-full object-cover object-center sm:h-[320px] lg:h-[360px]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#052e26]/95 via-[#052e26]/45 to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-saffron/10 to-transparent lg:block" aria-hidden="true" />
          <figcaption className="absolute inset-x-0 bottom-0 max-w-[560px] p-6 sm:p-9 lg:p-10">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-saffron">Care that reaches people</p>
            <p className="font-editorial mt-2 text-[clamp(1.4rem,2.6vw,2rem)] leading-tight text-white">
              Every check-up is a step towards a healthier community.
            </p>
          </figcaption>
          <span className="absolute right-6 top-6 hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:inline-flex">
            <HeartPulse aria-hidden="true" className="size-3.5 text-saffron" />
            Care in action
          </span>
        </figure>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-5">
          {focusAreas.map(({ icon: Icon, title, description }, index) => (
            <SpotlightCard
              key={title}
              data-reveal="up"
              className="premium-card group relative flex flex-col overflow-hidden rounded-[1.6rem] border border-forest/10 bg-white p-6 shadow-[0_14px_40px_rgba(23,71,54,0.045)] hover:border-saffron/40 hover:shadow-[0_28px_70px_rgba(23,71,54,0.12)] sm:p-7"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-saffron/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex items-start justify-between gap-4">
                <span className="card-icon flex size-12 items-center justify-center rounded-2xl text-forest transition-all duration-500 group-hover:bg-forest group-hover:text-saffron">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
                </span>
                <span className="card-number font-editorial text-sm text-forest/25 transition-colors duration-300 group-hover:text-saffron/80">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-editorial mt-6 text-[22px] leading-tight text-forest sm:text-[25px]">{title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-ink/75">{description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.18em] text-forest/50 transition-colors duration-300 group-hover:text-forest/80">
                Our commitment
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HealthcareApproachSection() {
  return (
    <section className="section-glow bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <div data-reveal="left">
          <p className="eyebrow">Healthcare challenges – our approach</p>
          <h2 className="font-editorial mt-5 max-w-[570px] text-[clamp(2.7rem,4.8vw,3.8rem)] leading-[1.06] tracking-[-0.04em] text-forest">
            Healthy Communities, Hopeful Futures
          </h2>
          <p className="mt-6 max-w-[560px] text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
            Many communities face healthcare challenges due to limited medical facilities, financial difficulties, lack of awareness and shortages of trained healthcare professionals.
          </p>
          <div className="group relative mt-8 max-w-[540px] overflow-hidden rounded-[1.5rem] bg-saffron/20 px-6 py-6 transition-colors duration-500 hover:bg-saffron/25 sm:px-8 sm:py-7">
            <span className="absolute inset-y-0 left-0 w-1 bg-saffron" aria-hidden="true" />
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest/65">Our belief</p>
            <p className="font-editorial mt-3 text-[22px] leading-snug text-forest sm:text-[27px]">
              Healthcare should be accessible, affordable and centered on human dignity.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.18em] text-forest/50">
              <HeartPulse aria-hidden="true" className="size-3.5 text-forest/70" />
              Dignity at the centre
            </span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {responseAreas.map((area, index) => (
            <SpotlightCard
              key={area}
              data-reveal="up"
              className="premium-card group flex min-h-[96px] items-start gap-3 rounded-[1.25rem] border border-forest/5 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(23,71,54,0.035)] hover:border-saffron/30 hover:shadow-[0_20px_50px_rgba(23,71,54,0.09)] sm:px-6"
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-mint/15 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-saffron">
                <Check aria-hidden="true" className="size-3.5" strokeWidth={2.4} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium leading-6 text-ink/75">{area}</p>
                <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[0.16em] text-forest/25 transition-colors duration-300 group-hover:text-saffron/70">
                  Response 0{index + 1}
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhoWeServeSection() {
  return (
    <section className="section-glow bg-paper pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.68fr] lg:gap-14">
          <div data-reveal="left" className="max-w-[800px]">
            <p className="eyebrow">Who we serve</p>
            <h2 className="font-editorial mt-5 text-[clamp(2.7rem,5vw,3.9rem)] leading-[1.06] tracking-[-0.04em] text-forest">
              For those who need us the most.
            </h2>
            <p className="mt-5 max-w-[730px] text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
              Our initiatives are designed to support communities and individuals who need assistance the most.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {['Rural families', 'Children', 'Patients', 'Women', 'Remote communities'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-forest/12 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-forest/60 transition-colors duration-300 hover:border-saffron/50 hover:text-forest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <figure
            data-reveal="right"
            data-image-reveal
            className="image-frame group relative mx-auto w-full max-w-[440px] overflow-hidden rounded-[1.5rem] bg-forest shadow-[0_20px_55px_rgba(22,67,52,0.16)] sm:rounded-[1.75rem] lg:mx-0 lg:max-w-none"
          >
            <img
              src={foundationAssets.ruralClassroom}
              alt="Children learning together in a rural classroom"
              className="h-[280px] w-full object-cover object-[center_35%] sm:h-[340px] lg:h-[320px]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#052e26]/85 via-transparent to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-[11px] font-semibold leading-5 text-white/90 sm:p-6">
              Education opens the door to a better future.
            </figcaption>
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md">
              <Sparkles aria-hidden="true" className="size-3 text-saffron" />
              Hope in motion
            </span>
          </figure>
        </div>

        <div className="mt-10 border-t border-forest/15">
          {communities.map(({ title, description }, index) => (
            <article
              key={title}
              data-reveal="up"
              className="group grid gap-2 border-b border-forest/15 py-5 transition-colors duration-300 hover:bg-forest/[0.025] sm:py-6 md:grid-cols-[96px_0.9fr_1.1fr] md:items-center md:gap-6"
            >
              <span className="font-editorial text-[28px] leading-none text-mint transition-transform duration-300 group-hover:-translate-y-0.5">
                0{index + 1}
              </span>
              <h3 className="font-editorial text-[21px] leading-tight text-forest sm:text-[24px]">{title}</h3>
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm leading-6 text-ink/75">{description}</p>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-forest/25 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const momentImages = [
  {
    src: foundationAssets.healthCamp,
    alt: 'A community health camp with families waiting for care',
    caption: 'Care that travels to where it is needed most.',
    label: 'Health camps',
    className: 'lg:col-span-7 lg:row-span-2',
    imageClassName: 'h-[300px] sm:h-[420px] lg:h-full lg:min-h-[520px]',
  },
  {
    src: foundationAssets.aboutCommunity,
    alt: 'Mothers and children at a community gathering',
    caption: 'Togetherness is where change begins.',
    label: 'Community',
    className: 'lg:col-span-5',
    imageClassName: 'h-[260px] sm:h-[300px]',
  },
  {
    src: foundationAssets.ruralClassroom,
    alt: 'Children learning in a rural classroom',
    caption: 'A classroom can change a whole future.',
    label: 'Education',
    className: 'lg:col-span-5',
    imageClassName: 'h-[260px] sm:h-[300px]',
  },
]

export function MomentsSection() {
  return (
    <section id="moments" data-nav-section="work" className="relative isolate overflow-hidden bg-forest-deep py-20 text-white sm:py-28">
      <div className="absolute -left-24 top-0 -z-10 size-[420px] rounded-full bg-mint/[0.07] blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 -z-10 size-[420px] rounded-full bg-saffron/[0.08] blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-12">
          <div data-reveal="left">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-saffron">Moments of hope</p>
            <h2 className="font-editorial mt-5 max-w-[720px] text-[clamp(2.6rem,5vw,4rem)] leading-[1.06] tracking-[-0.04em] text-white">
              Small acts. <em className="font-normal text-saffron">Lasting change.</em>
            </h2>
          </div>
          <p data-reveal="right" className="max-w-[430px] text-sm leading-7 text-white/65 sm:text-base sm:leading-8 md:justify-self-end">
            Behind every initiative is a real person, a real family and a reason to keep going. These are the moments your kindness makes possible.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {momentImages.map((image, index) => (
            <figure
              key={image.src}
              data-reveal="scale"
              data-image-reveal
              className={`image-frame group relative overflow-hidden rounded-[1.6rem] bg-forest sm:rounded-[2rem] ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover object-center transition-transform duration-700 ${image.imageClassName}`}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031f19]/95 via-[#031f19]/45 to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-saffron">{image.label}</p>
                  <p className="font-editorial mt-2 max-w-[360px] text-[clamp(1.2rem,2vw,1.65rem)] leading-snug text-white">
                    {image.caption}
                  </p>
                </div>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 group-hover:border-saffron group-hover:bg-saffron group-hover:text-forest-deep">
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </span>
              </figcaption>
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md sm:left-6 sm:top-6">
                0{index + 1}
              </span>
            </figure>
          ))}
        </div>

        <div data-reveal="up" className="mt-10 flex flex-col items-start justify-between gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.055] px-6 py-6 backdrop-blur-sm sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-start gap-4">
            <span className="card-icon--dark flex size-11 shrink-0 items-center justify-center rounded-full text-saffron">
              <HeartHandshake aria-hidden="true" className="size-5" strokeWidth={1.7} />
            </span>
            <div>
              <p className="font-editorial text-[22px] leading-snug text-white sm:text-[26px]">Be part of the next moment.</p>
              <p className="mt-1 text-xs leading-5 text-white/70">Your time, your support or your voice can become someone&apos;s turning point.</p>
            </div>
          </div>
          <div className="flex w-full flex-wrap gap-3 sm:w-auto">
            <a
              href="#donate"
              data-magnetic
              data-magnetic-strength="0.16"
              className="group inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-saffron px-5 text-[12px] font-bold text-forest-deep transition-colors hover:bg-[#f6b342] sm:flex-none"
            >
              Donate
              <ArrowUpRight aria-hidden="true" className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#volunteer"
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-white/25 px-5 text-[12px] font-semibold text-white transition-colors hover:border-saffron/60 hover:bg-white/10 sm:flex-none"
            >
              Volunteer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
