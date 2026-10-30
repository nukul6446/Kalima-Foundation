import { ArrowUpRight, HeartHandshake } from 'lucide-react'
import { foundationAssets } from './assets'

const waysToHelp = [
  'Medical and healthcare assistance.',
  'Education and student support.',
  'Social awareness campaigns.',
  'Community welfare activities.',
  'Event management and volunteering.',
  'Fundraising and outreach.',
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100069531152861' },
  { label: 'Instagram', href: 'https://www.instagram.com/kalima_fct' },
  { label: 'Telegram', href: 'https://t.me/kalimafct' },
]

export function VolunteerSection() {
  return (
    <>
      <section id="volunteer" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div data-reveal>
            <p className="eyebrow">Become a volunteer</p>
            <h2 className="font-editorial mt-5 max-w-[690px] text-[clamp(2.7rem,5vw,4rem)] leading-[1.06] tracking-[-0.045em] text-forest">
              Your Time Can Change <em className="font-normal text-saffron">Someone&apos;s Life.</em>
            </h2>
            <p className="mt-5 max-w-[620px] text-sm leading-7 text-ink/70 sm:text-base sm:leading-8">
              Join hands with Kalima Foundation &amp; Charitable Trust and become part of a community committed to humanity.
            </p>
            <a
              href="https://t.me/kalimafct"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-saffron px-6 text-[13px] font-bold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-[#f6b342]"
            >
              Join as a Volunteer <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <div data-reveal className="lg:pt-3">
            <p className="text-sm font-semibold text-forest/80">We welcome individuals who wish to contribute through:</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {waysToHelp.map((way) => (
                <li key={way} className="flex min-h-[76px] items-center gap-3 rounded-[1.25rem] bg-white px-5 py-4 text-sm font-medium leading-6 text-forest shadow-[0_10px_30px_rgba(23,71,54,0.045)]">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest">
                    <HeartHandshake aria-hidden="true" className="size-4" strokeWidth={1.7} />
                  </span>
                  {way}
                </li>
              ))}
            </ul>
            <p className="font-editorial mt-6 text-xl italic text-forest sm:text-2xl">Together, We Can Make a Difference.</p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-5 sm:mt-14 sm:px-8">
          <figure data-reveal className="relative overflow-hidden rounded-[1.75rem] bg-forest sm:rounded-[2rem]">
            <img
              src={foundationAssets.volunteersAid}
              alt="Volunteers serving food and water at a community aid station"
              className="h-[260px] w-full object-cover object-center sm:h-[360px] lg:h-[420px]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#052e26]/92 via-[#052e26]/45 to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-y-0 left-0 flex max-w-[520px] flex-col justify-center p-6 text-white sm:p-9 lg:p-12">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-saffron">Volunteers in action</p>
              <p className="font-editorial mt-2 text-[clamp(1.5rem,2.8vw,2.2rem)] leading-tight">
                Every hour given becomes hope for a family.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="connect" className="border-t border-forest/10 bg-white py-14 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div data-reveal>
            <p className="eyebrow">Connect with us</p>
            <h2 className="font-editorial mt-3 text-[clamp(2rem,3.5vw,2.8rem)] leading-tight text-forest">Let&apos;s Work Together for Humanity.</h2>
            <p className="mt-3 max-w-[650px] text-sm leading-6 text-ink/65">
              Follow our activities, initiatives and updates through our official social media channels.
            </p>
          </div>
          <nav aria-label="Social media" className="flex flex-wrap gap-3" data-reveal>
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-forest/15 px-5 text-xs font-semibold text-forest transition-colors hover:border-forest hover:bg-forest hover:text-white"
              >
                {label} <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            ))}
          </nav>
        </div>
      </section>
    </>
  )
}
