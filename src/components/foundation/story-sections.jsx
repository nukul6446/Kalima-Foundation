import {
  Baby,
  BookOpen,
  Briefcase,
  Heart,
  HeartPulse,
  Users,
} from 'lucide-react'
import { foundationAssets } from './assets'

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
    <section id="about" className="bg-paper py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          <div data-reveal>
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
          </div>

          <div data-reveal className="rounded-[2rem] border border-forest/5 bg-white px-7 py-9 shadow-[0_22px_65px_rgba(22,67,52,0.08)] sm:px-10 sm:py-12">
            <img
              src={foundationAssets.logo}
              alt="Kalima Foundation & Charitable Trust logo"
              className="mx-auto h-40 w-full max-w-[270px] object-contain sm:h-48"
              loading="lazy"
              decoding="async"
            />
            <div className="mt-8 border-t border-forest/10 pt-7">
              <blockquote className="font-editorial mx-auto max-w-[470px] text-center text-[clamp(1.5rem,3vw,2rem)] italic leading-tight text-forest">
                “From the People, By the People, To the People.”
              </blockquote>
            </div>
          </div>
        </div>

        <div data-reveal className="mt-16 sm:mt-20">
          <p className="eyebrow mb-5">Our approach</p>
          <div className="grid border-t border-forest/15 sm:grid-cols-2 lg:grid-cols-3">
            {approachAreas.map((area, index) => (
              <div key={area} className="flex items-center gap-4 border-b border-forest/15 py-5 sm:px-5 lg:px-7">
                <span className="font-editorial text-xl text-mint">0{index + 1}</span>
                <p className="text-sm font-semibold leading-6 text-forest">{area}</p>
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
    <section id="mission" className="relative isolate overflow-hidden bg-forest py-20 text-white sm:py-28 lg:py-32">
      <div className="absolute -right-32 -top-48 -z-10 size-[520px] rounded-full bg-white/[0.035] sm:size-[700px]" aria-hidden="true" />
      <div className="absolute -right-8 top-20 -z-10 size-[320px] rounded-full border border-white/[0.08] sm:size-[450px]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div data-reveal>
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
          </div>

          <div data-reveal>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-saffron">Our mission</p>
            <h3 className="font-editorial mt-5 max-w-[620px] text-[clamp(2.5rem,4.7vw,3.75rem)] leading-[1.08] tracking-[-0.035em] text-white">
              Bringing People Together for Meaningful Change
            </h3>
            <p className="mt-6 max-w-[570px] text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Our mission is to bring visionary initiatives under one united platform where innovation, compassion and community development grow together.
            </p>
          </div>
        </div>

        <div data-reveal className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.1] p-6 sm:mt-16 sm:p-9 lg:p-10">
          <p className="text-sm font-semibold text-white/80">We aim to:</p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {missionGoals.map((goal, index) => (
              <li key={goal} className="flex min-h-[88px] gap-3 border-t border-white/15 pt-4 text-sm leading-6 text-white/85">
                <span className="font-editorial text-lg text-saffron">0{index + 1}</span>
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
    <section id="work" className="bg-paper py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="mx-auto max-w-[780px] text-center">
          <p className="eyebrow">Our key focus areas</p>
          <h2 className="font-editorial mt-5 text-[clamp(2.6rem,5vw,4rem)] leading-[1.08] tracking-[-0.04em] text-forest">
            Where your support <em className="font-normal text-saffron">takes root.</em>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {focusAreas.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              data-reveal
              className="group rounded-[1.5rem] border border-forest/10 bg-white p-6 shadow-[0_12px_35px_rgba(23,71,54,0.035)] transition-all hover:-translate-y-1 hover:border-saffron/50 hover:shadow-[0_20px_50px_rgba(23,71,54,0.08)] sm:p-7"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-forest/5 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
              </span>
              <h3 className="font-editorial mt-6 text-[22px] leading-tight text-forest sm:text-[25px]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HealthcareApproachSection() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <div data-reveal>
          <p className="eyebrow">Healthcare challenges – our approach</p>
          <h2 className="font-editorial mt-5 max-w-[570px] text-[clamp(2.7rem,4.8vw,3.8rem)] leading-[1.06] tracking-[-0.04em] text-forest">
            Healthy Communities, Hopeful Futures
          </h2>
          <p className="mt-6 max-w-[560px] text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
            Many communities face healthcare challenges due to limited medical facilities, financial difficulties, lack of awareness and shortages of trained healthcare professionals.
          </p>
          <div className="mt-8 max-w-[540px] rounded-[1.5rem] bg-saffron/20 px-6 py-6 sm:px-8 sm:py-7">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-forest/65">Our belief</p>
            <p className="font-editorial mt-3 text-[22px] leading-snug text-forest sm:text-[27px]">
              Healthcare should be accessible, affordable and centered on human dignity.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {responseAreas.map((area) => (
            <div key={area} data-reveal className="flex min-h-[96px] items-start gap-3 rounded-[1.25rem] border border-forest/5 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(23,71,54,0.035)] sm:px-6">
              <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-mint" aria-hidden="true" />
              <p className="text-sm font-medium leading-6 text-ink/75">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhoWeServeSection() {
  return (
    <section className="bg-paper pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="max-w-[800px]">
          <p className="eyebrow">Who we serve</p>
          <h2 className="font-editorial mt-5 text-[clamp(2.7rem,5vw,3.9rem)] leading-[1.06] tracking-[-0.04em] text-forest">
            For those who need us the most.
          </h2>
          <p className="mt-5 max-w-[730px] text-sm leading-7 text-ink/65 sm:text-base sm:leading-8">
            Our initiatives are designed to support communities and individuals who need assistance the most.
          </p>
        </div>

        <div className="mt-8 border-t border-forest/15">
          {communities.map(({ title, description }, index) => (
            <article key={title} data-reveal className="grid gap-2 border-b border-forest/15 py-5 sm:py-6 md:grid-cols-[96px_0.9fr_1.1fr] md:items-center md:gap-6">
              <span className="font-editorial text-[28px] leading-none text-mint">0{index + 1}</span>
              <h3 className="font-editorial text-[21px] leading-tight text-forest sm:text-[24px]">{title}</h3>
              <p className="text-sm leading-6 text-ink/65">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
