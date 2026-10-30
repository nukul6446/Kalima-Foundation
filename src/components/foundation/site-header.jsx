import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { foundationAssets } from './assets'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Mission', href: '#mission' },
  { label: 'Initiatives', href: '#work' },
  { label: 'Medical City', href: '#medical-city' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Contact', href: '#connect' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between gap-4 px-5 sm:h-[92px] sm:px-8">
        <a
          href="#home"
          aria-label="Kalima Foundation home"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={foundationAssets.logo}
            alt="Kalima Foundation logo"
            className="size-11 rounded-full bg-white p-1.5 object-contain sm:size-12"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-editorial text-[18px] font-semibold tracking-[0.03em] text-white sm:text-[20px]">
              KALIMA
            </span>
            <span className="mt-1 text-[8px] font-medium leading-tight tracking-[0.16em] text-white/80 sm:text-[9px]">
              FOUNDATION &amp; CHARITABLE TRUST
            </span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-medium text-white/90 transition-colors hover:text-saffron"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#donate"
            className="ml-1 inline-flex min-h-10 items-center gap-2 rounded-full bg-saffron px-6 text-[13px] font-bold text-forest-deep transition-all hover:-translate-y-0.5 hover:bg-[#f6b342]"
          >
            Donate Now <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-t border-white/15 bg-forest-deep/95 px-5 pb-5 pt-3 shadow-xl backdrop-blur-xl lg:hidden`}
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="rounded-xl px-3 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-saffron"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#donate"
          onClick={() => setMenuOpen(false)}
          className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-saffron px-5 text-sm font-bold text-forest-deep"
        >
          Donate Now <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </nav>
    </header>
  )
}
