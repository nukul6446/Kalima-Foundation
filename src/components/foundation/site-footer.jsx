import { foundationAssets } from './assets'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Vision & Mission', href: '#mission' },
  { label: 'Our Initiatives', href: '#work' },
  { label: 'Global Medical City', href: '#medical-city' },
  { label: 'Donate Now', href: '#donate' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Contact Us', href: '#connect' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100069531152861', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/kalima_fct', icon: 'instagram' },
  { label: 'Telegram', href: 'https://t.me/kalimafct', icon: 'telegram' },
]

function SocialIcon({ type }) {
  if (type === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.75V3.94c-.3-.04-1.34-.14-2.56-.14-2.54 0-4.28 1.55-4.28 4.4V10H7v3h2.91v8h3.59Z" />
      </svg>
    )
  }

  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current" strokeWidth="1.8">
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.45" cy="6.65" r="1" className="fill-current stroke-none" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="m21.6 4.25-3.1 15.07c-.23 1.06-.87 1.32-1.76.82l-4.85-3.58-2.34 2.25c-.26.26-.48.48-.98.48l.35-4.94 8.99-8.12c.39-.35-.09-.55-.61-.2L6.18 12.98l-4.77-1.5c-1.04-.33-1.06-1.04.22-1.54L20.3 3.2c.88-.33 1.65.2 1.3 1.05Z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.2fr_0.9fr_0.7fr_1fr] lg:gap-12">
        <div>
          <a href="#home" aria-label="Kalima Foundation home" className="inline-flex items-center gap-3">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white p-1.5 ring-1 ring-white/25">
              <img
                src={foundationAssets.logoMark}
                alt="Kalima Foundation emblem"
                className="size-full object-contain"
                width="512"
                height="512"
                loading="lazy"
              />
            </span>
            <span className="flex flex-col">
              <span className="font-editorial text-lg font-semibold tracking-[0.03em]">KALIMA</span>
              <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.14em] text-white/60">Foundation &amp; Charitable Trust (R.)</span>
            </span>
          </a>
          <p className="font-editorial mt-6 text-xl leading-snug text-white/90">Building Hope Through Healthcare.</p>
          <p className="mt-3 max-w-[360px] text-xs leading-6 text-white/60">
            Working towards a healthier, educated and empowered society through compassion, service and community development.
          </p>
        </div>

        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-saffron">Quick links</p>
          <nav aria-label="Footer navigation" className="mt-5 flex flex-col items-start gap-3">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xs text-white/70 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-saffron">Social media</p>
          <nav aria-label="Footer social media" className="mt-5 flex flex-col items-start gap-3">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-saffron">
                <span className="flex size-7 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-saffron" aria-hidden="true">
                  <SocialIcon type={link.icon} />
                </span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-saffron">Our motto</p>
          <p className="font-editorial mt-5 text-xl leading-snug text-white/90">
            “From the People, By the People, To the People.”
          </p>
          <p className="mt-5 text-[10px] leading-5 text-white/50">
            All donations and activities are subject to applicable laws, regulations and the Trust&apos;s charitable objectives.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 Kalima Foundation &amp; Charitable Trust (R.). All Rights Reserved.</span>
          <span>Building Hope Through Healthcare.</span>
        </div>
      </div>
    </footer>
  )
}
