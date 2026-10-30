import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function SiteMotion() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const motion = gsap.context(() => {
      const heroCopy = gsap.utils.toArray('[data-hero-copy]')
      const revealElements = gsap.utils.toArray('[data-reveal]')
      const motionElements = gsap.utils.toArray('main > section:not(#home), footer')
      const heroMedia = document.querySelector('[data-hero-media]')
      const heroGlow = document.querySelector('.hero-glow')
      const donationWords = gsap.utils.toArray('[data-donation-word]')
      const hasSectionHash = window.location.hash.length > 1

      if (heroCopy.length) {
        gsap.from(
          heroCopy,
          {
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            delay: 0.12,
            clearProps: 'transform',
          },
        )
      }

      if (heroMedia) {
        gsap.fromTo(heroMedia, { scale: 1.08 }, { scale: 1, duration: 2.2, ease: 'power2.out' })
      }

      if (donationWords.length) {
        gsap.fromTo(
          donationWords,
          { autoAlpha: 0, y: 18, rotateX: -45 },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: donationWords[0],
              start: 'top 82%',
              once: true,
            },
          },
        )
      }

      if (heroGlow) {
        gsap.to(heroGlow, {
          scale: 1.16,
          opacity: 0.55,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }

      if (hasSectionHash) {
        gsap.set(revealElements, { autoAlpha: 1, y: 0 })
      } else {
        revealElements.forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.72,
              ease: 'power2.out',
              clearProps: 'transform,opacity,visibility',
              scrollTrigger: {
                trigger: element,
                start: 'top 89%',
                once: true,
              },
            },
          )
        })
      }

      motionElements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            delay: Math.min(index * 0.03, 0.3),
            ease: 'power2.out',
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: {
              trigger: element,
              start: 'top 94%',
              once: true,
            },
          },
        )
      })

      const parallaxImage = document.querySelector('[data-parallax]')
      if (parallaxImage) {
        gsap.to(parallaxImage, {
          yPercent: -4,
          ease: 'none',
          scrollTrigger: {
            trigger: parallaxImage,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        })
      }

      ScrollTrigger.refresh()
    })

    return () => motion.revert()
  }, [])

  return null
}
