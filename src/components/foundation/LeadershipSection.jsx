import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Users,
  GraduationCap,
  Landmark,
  ArrowLeft,
  ArrowRight,
  User,
  Sparkles,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

// ============================================================
// LEADERSHIP IMAGES
// ============================================================

const leadershipImages = import.meta.glob(
  '../../assets/leadership/*.{png,jpg,jpeg,webp,avif}',
  {
    eager: true,
    import: 'default',
  }
)

const getLeadershipImage = (fileName) => {
  if (!fileName) return ''

  const imagePath = Object.keys(leadershipImages).find((path) =>
    path.endsWith(`/${fileName}`)
  )

  return imagePath ? leadershipImages[imagePath] : ''
}

// ============================================================
// LEADERSHIP DATA
// ============================================================

const BOARDS_DATA = [
  {
    id: 'trustees',
    step: '01',
    subtitle: 'Executive Governance',
    title: 'Board of Trustees',
    description:
      "The core leadership guiding the foundation's mission and long-term vision.",
    icon: Users,
    badgeStyle: 'pill',
    members: [
      {
        id: 't-1',
        name: 'Dr. Sibgath Ulla Sharieff R',
        role: 'President / Author',
        image: 'sibgath-ulla-sharieff.png',
      },
      {
        id: 't-2',
        name: 'Dr. Sayed Moinuddin Abdul Gani',
        role: 'Vice President',
        image: 'sayed-moinuddin.png',
      },
      {
        id: 't-3',
        name: 'Mr. Divakara D Shetty',
        role: 'General Secretary',
        image: 'divakara-shetty.png',
      },
      {
        id: 't-4',
        name: 'Mr. Nagendra Shanbhag',
        role: 'Joint Secretary',
        image: 'nagendra-shanbhag.png',
      },
      {
        id: 't-5',
        name: 'Dr. Akhil Manoj',
        role: 'Chief Executive Officer',
        image: 'akhil-manoj.png',
      },
    ],
  },
  {
    id: 'advisors',
    step: '02',
    subtitle: 'Strategic Counsel',
    title: 'Board of Advisors',
    description:
      'Esteemed experts providing strategic guidance and counsel.',
    icon: GraduationCap,
    badgeStyle: 'location',
    members: [
      {
        id: 'a-1',
        name: 'Dr. G M Kanthi',
        role: null,
        image: 'gm-kanthi.png',
      },
      {
        id: 'a-2',
        name: 'Dr. Channabasavarajappa',
        role: null,
        image: 'channabasavarajappa.png',
      },
      {
        id: 'a-3',
        name: 'Dr. A Revanna Swamy',
        role: 'Mauritius',
        image: 'revanna-swamy.png',
      },
      {
        id: 'a-4',
        name: 'Dr. Farha Ansari',
        role: 'Maldives',
        image: 'farha-ansari.png',
      },
    ],
  },
  {
    id: 'directors',
    step: '03',
    subtitle: 'Institutional Operations',
    title: 'Board of Directors',
    description:
      "A diverse team of professionals driving the foundation's initiatives and governance.",
    icon: Landmark,
    badgeStyle: 'text',
    members: [
      {
        id: 'd-1',
        name: 'Dr. Vijaykumar Halli',
        role: null,
        image: 'vijaykumar-halli.png',
      },
      {
        id: 'd-2',
        name: 'Dr. Murgesh Sunkad',
        role: null,
        image: 'murgesh-sunkad.png',
      },
      {
        id: 'd-3',
        name: 'Dr. HariKrishna DS',
        role: null,
        image: 'harikrishna-ds.png',
      },
      {
        id: 'd-4',
        name: 'Dr. Anamika Das',
        role: null,
        image: 'anamika-das.png',
      },
      {
        id: 'd-5',
        name: 'Dr. Namira Sheikh',
        role: null,
        image: 'namira-sheikh.png',
      },
      {
        id: 'd-6',
        name: 'Dr. Azma Andar',
        role: null,
        image: 'azma-ansar.png',
      },
      {
        id: 'd-7',
        name: 'Mr. Ramananda Shirva',
        role: null,
        image: 'ramananda-shirva.png',
      },
      {
        id: 'd-8',
        name: 'Mr. Asrar Ahmed Katingeri',
        role: null,
        image: 'asrar-ahmed.png',
      },
      {
        id: 'd-9',
        name: 'Mr. Habibur Rahman Jemai',
        role: null,
        image: 'habibur-rahman.png',
      },
      {
        id: 'd-10',
        name: 'Mr. Farhathunnisa',
        role: null,
        image: 'farhathunnisa.png',
      },
      {
        id: 'd-11',
        name: 'Mrs. Shabana Winfinith',
        role: null,
        image: 'shabana-winfinith.png',
      },
      {
        id: 'd-12',
        name: 'Mrs. Farhana Razvi',
        role: null,
        image: 'farhana-razvi.png',
      },
    ],
  },
]

// ============================================================
// HELPERS
// ============================================================

const getInitials = (name) => {
  const cleaned = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s*/i, '')
  const parts = cleaned.trim().split(/\s+/)

  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
  }

  return cleaned.slice(0, 2).toUpperCase()
}

// ============================================================
// MEMBER CARD
// ============================================================

function MemberCard({ member, index, badgeStyle, shouldReduceMotion }) {
  const [imgError, setImgError] = useState(false)
  const imageUrl = getLeadershipImage(member.image)
  const formattedNumber = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full w-full"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.14] bg-gradient-to-b from-white/[0.12] via-white/[0.06] to-white/[0.03] p-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-500 hover:border-saffron/60 hover:bg-white/[0.13] hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
        {/* Top Specular Highlight */}
        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent transition-opacity duration-500 group-hover:via-saffron/70" />

        {/* Portrait Frame */}
        <div className="relative mb-3 aspect-[4/3.85] w-full overflow-hidden rounded-xl bg-forest-deep/80 ring-1 ring-inset ring-white/15">
          {/* Subtle Index Badge */}
          <span className="absolute right-2.5 top-2.5 z-10 rounded-full border border-white/15 bg-forest-deep/65 px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider text-white/75 backdrop-blur-md transition-colors duration-300 group-hover:border-saffron/50 group-hover:text-saffron">
            {formattedNumber}
          </span>

          {!imgError && imageUrl ? (
            <img
              src={imageUrl}
              alt={member.name}
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
              className={`h-full w-full object-cover object-top transition-transform duration-700 ease-out ${
                shouldReduceMotion ? '' : 'group-hover:scale-105'
              }`}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-white/[0.08] to-transparent text-white/80">
              <div className="relative mb-2 flex h-16 w-16 items-center justify-center rounded-full border border-saffron/30 bg-saffron/10 shadow-inner">
                <span className="font-editorial text-xl font-bold tracking-tight text-saffron">
                  {getInitials(member.name)}
                </span>
              </div>
              <User className="h-4 w-4 text-white/35" />
            </div>
          )}

          {/* Cinematic Vignette Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/75 via-forest-deep/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

          {/* Bottom Laser Accent inside Portrait */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-center scale-x-0 bg-gradient-to-r from-transparent via-saffron to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </div>

        {/* Member Details */}
        <div className="flex min-h-[78px] flex-grow flex-col items-center justify-center px-2 pb-1.5 text-center">
          <h4 className="line-clamp-2 font-editorial text-[15px] font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-saffron sm:text-[15.5px]">
            {member.name}
          </h4>

          {member.role ? (
            <div className="mt-2.5 flex w-full justify-center">
              {badgeStyle === 'pill' ? (
                <span className="inline-flex max-w-[96%] items-center justify-center truncate rounded-full border border-saffron/35 bg-saffron/15 px-3 py-1 text-[11px] font-semibold tracking-wide text-saffron shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
                  {member.role}
                </span>
              ) : badgeStyle === 'location' ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.07] px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-white/80">
                  <MapPin className="h-3 w-3 text-saffron" />
                  {member.role}
                </span>
              ) : (
                <span className="text-xs font-medium tracking-wide text-white/65">
                  {member.role}
                </span>
              )}
            </div>
          ) : (
            <div className="mt-2.5 flex items-center gap-1.5 opacity-45 transition-opacity duration-300 group-hover:opacity-80">
              <span className="h-1 w-1 rounded-full bg-saffron" />
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/70">
                Board Member
              </span>
              <span className="h-1 w-1 rounded-full bg-saffron" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ============================================================
// BOARD CAROUSEL
// ============================================================

function BoardRow({ board, shouldReduceMotion }) {
  const scrollContainerRef = useRef(null)
  const activeIndexRef = useRef(0)
  const manualInteractionRef = useRef(false)
  const resumeTimeoutRef = useRef(null)

  const [activeIndex, setActiveIndex] = useState(0)
  const [totalPages, setTotalPages] = useState(board.members.length)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const IconComponent = board.icon

  // Get card positions relative to the scroll container.
  const getCardPositions = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return []

    const cards = Array.from(
      container.querySelectorAll('[data-carousel-card]')
    )

    const containerRect = container.getBoundingClientRect()

    return cards.map((card) => {
      const cardRect = card.getBoundingClientRect()

      return cardRect.left - containerRect.left + container.scrollLeft
    })
  }, [])

  // Calculate how many cards are visible and the last valid position.
  const getMaxStartIndex = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return 0

    const cards = Array.from(
      container.querySelectorAll('[data-carousel-card]')
    )

    if (!cards.length) return 0

    const cardWidth = cards[0].getBoundingClientRect().width
    const gap =
      parseFloat(window.getComputedStyle(container).columnGap) || 0

    const visibleCards = Math.max(
      1,
      Math.floor((container.clientWidth + gap) / (cardWidth + gap))
    )

    return Math.max(0, cards.length - visibleCards)
  }, [])

  // Scroll to selected card position.
  const scrollToPage = useCallback(
    (index, behavior = 'smooth') => {
      const container = scrollContainerRef.current
      if (!container) return

      const positions = getCardPositions()
      if (!positions.length) return

      const maxIndex = getMaxStartIndex()
      const safeIndex = Math.max(0, Math.min(index, maxIndex))

      const maxScroll = Math.max(
        0,
        container.scrollWidth - container.clientWidth
      )

      const targetPosition = Math.min(positions[safeIndex], maxScroll)

      activeIndexRef.current = safeIndex
      setActiveIndex(safeIndex)

      container.scrollTo({
        left: targetPosition,
        behavior: shouldReduceMotion ? 'auto' : behavior,
      })
    },
    [getCardPositions, getMaxStartIndex, shouldReduceMotion]
  )

  // Update pagination and arrow states.
  const updateScrollMetrics = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const positions = getCardPositions()
    if (!positions.length) return

    const currentScroll = container.scrollLeft
    const maxIndex = getMaxStartIndex()

    let nearestIndex = 0
    let nearestDistance = Infinity

    positions.forEach((position, index) => {
      const distance = Math.abs(position - currentScroll)

      if (distance < nearestDistance) {
        nearestDistance = distance
        nearestIndex = index
      }
    })

    const safeIndex = Math.min(nearestIndex, maxIndex)

    activeIndexRef.current = safeIndex
    setActiveIndex(safeIndex)
    setTotalPages(maxIndex + 1)

    const maxScroll = Math.max(
      0,
      container.scrollWidth - container.clientWidth
    )

    setCanScrollPrev(currentScroll > 8)
    setCanScrollNext(currentScroll < maxScroll - 8)
  }, [getCardPositions, getMaxStartIndex])

  // Resize observer.
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    updateScrollMetrics()

    const resizeObserver = new ResizeObserver(() => {
      updateScrollMetrics()
    })

    resizeObserver.observe(container)

    container
      .querySelectorAll('[data-carousel-card]')
      .forEach((card) => resizeObserver.observe(card))

    window.addEventListener('resize', updateScrollMetrics)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateScrollMetrics)
    }
  }, [updateScrollMetrics])

  // Pause auto-scroll after manual interaction.
  const pauseAutoSlide = useCallback(() => {
    manualInteractionRef.current = true
    setIsPaused(true)

    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current)
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      manualInteractionRef.current = false
      setIsPaused(false)
    }, 2500)
  }, [])

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current)
      }
    }
  }, [])

  // Manual arrow navigation.
  const scrollByStep = (direction) => {
    pauseAutoSlide()

    const maxIndex = getMaxStartIndex()

    const nextIndex = Math.max(
      0,
      Math.min(activeIndexRef.current + direction, maxIndex)
    )

    scrollToPage(nextIndex)
  }

  // ==========================================================
  // AUTO SCROLL - ALL DEVICES - EVERY 2 SECONDS
  // ==========================================================

  useEffect(() => {
    const autoSlide = window.setInterval(() => {
      if (manualInteractionRef.current) return

      const container = scrollContainerRef.current
      if (!container) return

      const maxIndex = getMaxStartIndex()

      if (maxIndex <= 0) return

      const currentIndex = activeIndexRef.current
      const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1

      scrollToPage(nextIndex, 'smooth')
    }, 2000)

    return () => window.clearInterval(autoSlide)
  }, [getMaxStartIndex, scrollToPage])

  const handleTouchStart = () => {
    pauseAutoSlide()
  }

  const handleTouchEnd = () => {
    pauseAutoSlide()
  }

  const handleDotClick = (index) => {
    pauseAutoSlide()
    scrollToPage(index)
  }

  return (
    <div className="group/board relative overflow-hidden rounded-[28px] border border-forest/15 bg-gradient-to-br from-forest via-forest to-forest-deep p-5 shadow-[0_16px_45px_rgba(0,0,0,0.14)] transition-all duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:p-7 lg:p-9">
      {/* Top Specular Saffron Border Glow */}
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-saffron/60 to-transparent" />

      {/* Ambient Radial Spotlights */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-saffron/10 blur-3xl transition-opacity duration-700 group-hover/board:opacity-100" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />

      {/* Subtle Architectural Dot Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-10">
        {/* Board Introduction Column */}
        <div className="relative flex w-full shrink-0 flex-col justify-between lg:w-[265px] lg:border-r lg:border-white/10 lg:pr-7 xl:w-[295px] xl:pr-8">
          {/* Editorial Watermark Number */}
          <span className="pointer-events-none absolute -top-3 right-2 select-none font-editorial text-6xl font-bold leading-none tracking-tighter text-white/[0.05] lg:right-6 lg:text-7xl">
            {board.step}
          </span>

          <div>
            {/* Subtitle Pill */}
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
                {board.subtitle}
              </span>
            </div>

            {/* Icon + Title */}
            <div className="flex items-start gap-3.5">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-saffron/35 bg-gradient-to-br from-saffron/25 to-white/5 text-saffron shadow-[0_4px_16px_rgba(0,0,0,0.18)]">
                <IconComponent className="h-6 w-6 stroke-[2]" />
              </div>

              <div>
                <h3 className="font-editorial text-xl font-bold leading-tight text-white sm:text-2xl">
                  {board.title}
                </h3>
                <div className="mt-2 flex items-center gap-1.5">
                  <div className="h-1 w-8 rounded-full bg-saffron" />
                  <div className="h-1 w-2 rounded-full bg-saffron/40" />
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-[14.5px]">
              {board.description}
            </p>
          </div>

          {/* Member Count Footer Badge */}
          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3.5">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
              Active Roster
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron/15 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-saffron">
              {board.members.length} Members
            </span>
          </div>
        </div>

        {/* Carousel Column */}
        <div className="relative min-w-0 flex-1 lg:max-w-[720px] xl:max-w-none">
          <div className="relative flex items-center">
            {/* Desktop Previous Arrow */}
            <motion.button
              type="button"
              onClick={() => scrollByStep(-1)}
              disabled={!canScrollPrev}
              whileHover={
                shouldReduceMotion || !canScrollPrev
                  ? undefined
                  : { scale: 1.08 }
              }
              whileTap={
                shouldReduceMotion || !canScrollPrev
                  ? undefined
                  : { scale: 0.95 }
              }
              aria-label={`Previous ${board.title} members`}
              className={`absolute -left-3 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-forest-deep/90 text-white shadow-[0_6px_20px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-200 sm:flex lg:-left-4 ${
                canScrollPrev
                  ? 'cursor-pointer hover:border-saffron hover:bg-saffron hover:text-forest-deep'
                  : 'cursor-not-allowed opacity-30'
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
            </motion.button>

            {/* Horizontal Scroll Track */}
            <div
              ref={scrollContainerRef}
              onScroll={updateScrollMetrics}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={pauseAutoSlide}
              onMouseLeave={() => {
                manualInteractionRef.current = false
                setIsPaused(false)

                if (resumeTimeoutRef.current) {
                  window.clearTimeout(resumeTimeoutRef.current)
                }
              }}
              className="no-scrollbar flex w-full snap-x snap-mandatory items-stretch gap-0 overflow-x-auto px-0 py-2 sm:gap-4 sm:px-1"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollSnapStop: 'always',
              }}
            >
              {board.members.map((member, idx) => (
                <div
                  key={member.id}
                  data-carousel-card
                  className="w-full shrink-0 snap-center sm:w-[195px] sm:snap-start md:w-[200px]"
                >
                  <MemberCard
                    member={member}
                    index={idx}
                    badgeStyle={board.badgeStyle}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                </div>
              ))}
            </div>

            {/* Desktop Next Arrow */}
            <motion.button
              type="button"
              onClick={() => scrollByStep(1)}
              disabled={!canScrollNext}
              whileHover={
                shouldReduceMotion || !canScrollNext
                  ? undefined
                  : { scale: 1.08 }
              }
              whileTap={
                shouldReduceMotion || !canScrollNext
                  ? undefined
                  : { scale: 0.95 }
              }
              aria-label={`Next ${board.title} members`}
              className={`absolute -right-3 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-forest-deep/90 text-white shadow-[0_6px_20px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-200 sm:flex lg:-right-4 ${
                canScrollNext
                  ? 'cursor-pointer hover:border-saffron hover:bg-saffron hover:text-forest-deep'
                  : 'cursor-not-allowed opacity-30'
              }`}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Pagination + Status Bar */}
          <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3.5 py-2 backdrop-blur-sm">
            {/* Left: Slide Counter */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-saffron">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-xs text-white/30">/</span>
              <span className="font-mono text-xs text-white/60">
                {String(totalPages).padStart(2, '0')}
              </span>
            </div>

            {/* Center: Mobile Arrows + Pagination Dots */}
            <div className="flex items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => scrollByStep(-1)}
                disabled={!canScrollPrev}
                aria-label={`Previous ${board.title} members`}
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:border-saffron hover:text-saffron sm:hidden ${
                  canScrollPrev
                    ? 'opacity-100'
                    : 'cursor-not-allowed opacity-30'
                }`}
              >
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>

              <div className="flex max-w-[180px] items-center justify-center gap-1.5 overflow-hidden sm:max-w-xs">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to position ${index + 1} in ${board.title}`}
                    aria-current={activeIndex === index ? 'true' : undefined}
                    onClick={() => handleDotClick(index)}
                    className={`h-2 shrink-0 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? 'w-7 bg-saffron shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                        : 'w-2 bg-white/25 hover:bg-white/55'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollByStep(1)}
                disabled={!canScrollNext}
                aria-label={`Next ${board.title} members`}
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:border-saffron hover:text-saffron sm:hidden ${
                  canScrollNext
                    ? 'opacity-100'
                    : 'cursor-not-allowed opacity-30'
                }`}
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Right: Auto-Scroll Status Indicator */}
            <div className="hidden items-center gap-1.5 sm:flex">
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                  isPaused ? 'bg-white/40' : 'animate-pulse bg-saffron'
                }`}
              />
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
                {isPaused ? 'Paused' : 'Auto'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// MAIN LEADERSHIP SECTION
// ============================================================

export default function LeadershipSection() {
  const shouldReduceMotion = useReducedMotion()

  // const totalLeaders = BOARDS_DATA.reduce(
  //   (sum, board) => sum + board.members.length,
  //   0
  // )

  return (
    <section
      id="leadership"
      className="relative w-full overflow-hidden bg-white py-20 lg:py-28"
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Subtle Background Ambient Accents */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[460px] w-[460px] rounded-full bg-saffron/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -left-40 h-[420px] w-[420px] rounded-full bg-forest/[0.04] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          data-reveal="left"
          className="mb-14 flex flex-col justify-between gap-8 border-b border-forest/10 pb-10 lg:mb-20 lg:flex-row lg:items-end"
        >
          <div>
            <div className="inline-flex items-center gap-2.5">
              
              <p className="eyebrow flex items-center gap-1.5">
            
                OUR LEADERSHIP
              </p>
            </div>

            <h2 className="font-editorial mt-4 max-w-[690px] text-[clamp(2.7rem,5vw,4rem)] leading-[1.06] tracking-[-0.045em] text-forest">
              Foundation{' '}
              <em className="font-normal text-saffron">Leadership.</em>
            </h2>

            <p className="mt-3.5 max-w-[630px] text-sm leading-relaxed text-ink/75 sm:text-[15px]">
              Meet the dedicated leaders, advisors and professionals whose
              experience and commitment guide our foundation towards a
              meaningful and lasting impact.
            </p>
          </div>

          {/* Right Header Summary Pill */}
          
             
           
        </div>

        {/* Board Rows */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {BOARDS_DATA.map((board, index) => (
            <motion.div
              key={board.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <BoardRow
                board={board}
                shouldReduceMotion={shouldReduceMotion}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}