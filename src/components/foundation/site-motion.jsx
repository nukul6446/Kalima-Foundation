import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function SiteMotion() {
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const motion = gsap.context(() => {
      const heroSection = document.querySelector('#home')
      const heroLines = gsap.utils.toArray('[data-hero-line]')
      const heroCopy = gsap.utils.toArray('[data-hero-copy]')
      const heroStats = gsap.utils.toArray('[data-hero-stat]')
      const revealElements = gsap.utils.toArray('[data-reveal]')
      const motionElements = gsap.utils.toArray('main > section:not(#home), footer')
      const heroMedia = document.querySelector('[data-hero-media]')
      const heroGlow = document.querySelector('.hero-glow')
      const donationWords = gsap.utils.toArray('[data-donation-word]')
      const hasSectionHash = window.location.hash.length > 1

      if (heroLines.length) {
        gsap.fromTo(
          heroLines,
          { yPercent: 118, rotate: 2.5, autoAlpha: 0 },
          {
            yPercent: 0,
            rotate: 0,
            autoAlpha: 1,
            duration: 1.1,
            stagger: 0.11,
            delay: 0.15,
            ease: 'power4.out',
            clearProps: 'transform,opacity,visibility',
          },
        )
      }

      if (heroCopy.length) {
        gsap.fromTo(
          heroCopy,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            delay: 0.45,
            ease: 'power3.out',
            clearProps: 'transform,opacity,visibility',
          },
        )
      }

      if (heroStats.length) {
        gsap.fromTo(
          heroStats,
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.85,
            ease: 'power3.out',
            clearProps: 'transform,opacity,visibility',
          },
        )
      }

      if (heroMedia) {
        gsap.fromTo(heroMedia, { scale: 1.14 }, { scale: 1, duration: 2.2, ease: 'power2.out' })
      }

      if (heroSection) {
        gsap.to('.hero-copy', {
          yPercent: -8,
          autoAlpha: 0.15,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          },
        })
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
          yPercent: -6,
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
