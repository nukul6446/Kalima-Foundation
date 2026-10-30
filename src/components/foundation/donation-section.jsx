import { useState } from 'react'
import { Check, Copy, Heart, ShieldCheck } from 'lucide-react'
import { foundationAssets } from './assets'

const accounts = [
  {
    bank: 'Bank of Baroda',
    account: '74520100007694',
    ifsc: 'BARB0VJMMAN',
    micr: '576012020',
    branch: 'Manipal Branch',
    qr: foundationAssets.barodaQr,
    qrAlt: 'Bank of Baroda QR code to donate',
    upi: 'kalim95352694@barodampay',
  },
  {
    bank: 'Axis Bank',
    account: '923020062661915',
    ifsc: 'UTIB0005199',
    micr: '576211008',
    branch: 'Brahmavara Branch',
    qr: foundationAssets.axisQr,
    qrAlt: 'Axis Bank QR code to donate',
  },
]

const donationCategories = [
  {
    title: 'Healthcare Initiatives',
    items: [
      'Medical treatment assistance.',
      'Medicines and hospital care support.',
      'Free medical camps and health awareness programs.',
      'Healthcare infrastructure development.',
    ],
  },
  {
    title: 'Education Programs',
    items: [
      'Books and educational materials.',
      'Scholarships and education assistance.',
      'Literacy and learning initiatives.',
    ],
  },
  {
    title: 'Community Development',
    items: [
      'Community welfare initiatives.',
      'Collaboration with NGOs and local institutions.',
      'Volunteer and social development activities.',
    ],
  },
  {
    title: 'Operational & Administrative Support',
    items: [
      'Program management.',
      'Essential operational expenses.',
      'Administrative and coordination costs.',
    ],
  },
]

function CopyButton({ value, label, onCopy, copied }) {
  return (
    <button
      type="button"
      onClick={() => onCopy(value)}
      aria-label={`Copy ${label}`}
      className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-white/25 px-2.5 text-[10px] font-semibold text-white/85 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
    >
      {copied ? <Check aria-hidden="true" className="size-3.5" /> : <Copy aria-hidden="true" className="size-3.5" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

export function DonationSection() {
  const [copiedValue, setCopiedValue] = useState(null)
  const [copyFailed, setCopyFailed] = useState(false)

  async function copyValue(value) {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedValue(value)
      setCopyFailed(false)
      window.setTimeout(() => setCopiedValue((current) => (current === value ? null : current)), 1800)
    } catch {
      setCopyFailed(true)
    }
  }

  return (
    <>
      <section id="donation-utilisation" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div data-reveal className="max-w-[800px]">
            <p className="eyebrow">Donation utilisation</p>
            <h2 className="font-editorial mt-5 text-[clamp(2.7rem,5vw,4rem)] leading-[1.06] tracking-[-0.045em] text-forest">
              Your Contribution Can Make a Difference
            </h2>
            <p className="mt-5 max-w-[760px] text-sm leading-7 text-ink/65 sm:text-base sm:leading-8">
              Every contribution can support meaningful social initiatives and help improve the lives of people in need. Donations are intended to support the following areas:
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {donationCategories.map(({ title, items }) => (
              <article key={title} data-reveal className="rounded-[1.5rem] border border-forest/10 bg-white p-5 sm:p-6">
                <h3 className="font-editorial text-[20px] leading-tight text-forest sm:text-[22px]">{title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-5 text-ink/65">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-mint" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p data-reveal className="mt-7 flex items-start gap-2.5 text-xs leading-6 text-ink/55">
            <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-forest/65" />
            Kalima Foundation &amp; Charitable Trust aims to utilize contributions responsibly and efficiently in support of its charitable objectives.
          </p>
        </div>
      </section>

      <section id="donate" className="bg-paper px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest px-5 py-10 text-white sm:rounded-[2.5rem] sm:px-8 sm:py-14 lg:px-16 lg:py-20">
          <div className="absolute -bottom-32 -left-24 size-80 rounded-full bg-white/[0.045]" aria-hidden="true" />
          <div className="absolute -right-24 -top-32 size-96 rounded-full border border-white/[0.08]" aria-hidden="true" />
          <div className="relative">
            <div data-reveal className="max-w-[820px]">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-saffron sm:text-xs">Support our cause – donate now</p>
              <h2
                aria-label="Be a Part of Someone's Hope."
                className="donation-title font-editorial mt-5 max-w-[760px] text-[clamp(2.35rem,5vw,4rem)] leading-[1.06] tracking-[-0.04em] text-white"
              >
                {['Be', 'a', 'Part', 'of', "Someone's"].map((word) => (
                  <span key={word} data-donation-word className="inline-block">
                    {word}{' '}
                  </span>
                ))}
                <em data-donation-word className="inline-block font-normal text-saffron">Hope.</em>
              </h2>
              <p className="mt-5 max-w-[820px] text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8">
                Your support can help provide healthcare assistance, educational opportunities and essential community support to people who need it. Whether you contribute financially, volunteer your time or help spread awareness, every effort matters.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3" data-reveal>
              <Heart aria-hidden="true" className="size-4 text-saffron" />
              <h3 className="text-sm font-semibold text-saffron">Bank Transfer &amp; UPI Donations</h3>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:gap-7">
              {accounts.map((account) => (
                <article key={account.bank} data-reveal className="rounded-[1.5rem] border border-white/15 bg-white/[0.045] p-5 sm:p-7 lg:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-editorial text-[25px] leading-tight text-white sm:text-[30px] lg:text-[34px]">{account.bank}</h3>
                    <span className="pt-1 text-[9px] font-extrabold uppercase tracking-[0.19em] text-saffron sm:text-[10px]">Trust account</span>
                  </div>

                  <div className="mt-5 grid gap-6 sm:grid-cols-[minmax(0,1fr)_220px] sm:items-center sm:gap-6 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-8">
                    <dl className="min-w-0 space-y-3.5 lg:space-y-4">
                      <div>
                        <dt className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/55 lg:text-[10px]">Account name</dt>
                        <dd className="mt-1 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold leading-5 text-white/90 lg:text-sm">
                          <span>Kalima Foundation and Charitable Trust</span>
                          <CopyButton value="Kalima Foundation and Charitable Trust" label="account name" onCopy={copyValue} copied={copiedValue === 'Kalima Foundation and Charitable Trust'} />
                        </dd>
                      </div>
                      {[
                        ['Account number', account.account],
                        ['IFSC code', account.ifsc],
                        ['MICR code', account.micr],
                        ['Branch', account.branch],
                        ...(account.upi ? [['UPI ID', account.upi]] : []),
                      ].map(([label, value]) => (
                        <div key={label} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-white/10 pt-2.5">
                          <dt className="text-[10px] text-white/60 lg:text-xs">{label}</dt>
                          <dd className="inline-flex max-w-full items-center gap-2 text-right text-[11px] font-bold tracking-[0.025em] text-white/90 sm:text-xs lg:text-sm">
                            <span className="break-all">{value}</span>
                            <CopyButton value={value} label={label.toLowerCase()} onCopy={copyValue} copied={copiedValue === value} />
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mx-auto w-full max-w-[230px] rounded-2xl bg-white p-3 text-center sm:mx-0 lg:max-w-[290px] lg:p-4">
                      <p className="mb-2 text-[9px] font-extrabold uppercase tracking-[0.14em] text-forest/65 lg:text-[10px]">Scan &amp; Pay</p>
                      <div className="flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-xl border-2 border-white bg-white p-1 shadow-[0_0_0_1px_rgba(7,62,51,0.12)]">
                        <img src={account.qr} alt={account.qrAlt} className="block h-full w-full object-contain" loading="lazy" decoding="async" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 max-w-[1000px] text-xs leading-6 text-white/65">
              Use the official Bank of Baroda or Axis Bank QR code displayed on this website to make a UPI payment. After making a donation, donors may contact the Trust through its official communication channels for donation confirmation and receipt-related assistance.
            </p>
            <p className="mt-3 min-h-5 text-xs text-white/75" aria-live="polite" role="status">
              {copyFailed ? 'Copy is unavailable. Please select and copy the details manually.' : copiedValue ? 'Copied to clipboard.' : ''}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
