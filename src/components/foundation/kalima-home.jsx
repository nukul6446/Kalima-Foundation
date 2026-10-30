import { DonationSection } from './donation-section'
import { HeroSection } from './hero-section'
import { MedicalCitySection } from './medical-city-section'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'
import { SiteMotion } from './site-motion'
import {
  AboutSection,
  FocusSection,
  HealthcareApproachSection,
  VisionMissionSection,
  WhoWeServeSection,
} from './story-sections'
import { VolunteerSection } from './volunteer-section'

export function KalimaHome() {
  return (
    <>
      <SiteMotion />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <FocusSection />
        <HealthcareApproachSection />
        <WhoWeServeSection />
        <MedicalCitySection />
        <DonationSection />
        <VolunteerSection />
      </main>
      <SiteFooter />
    </>
  )
}
