import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ApproachSection from '@/components/ApproachSection'
import OutcomesSection from '@/components/OutcomesSection'
import PrinciplesSection from '@/components/PrinciplesSection'
import SystemsSection from '@/components/SystemsSection'
import AboutSection from '@/components/AboutSection'
import ContactFooter from '@/components/ContactFooter'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ApproachSection />
      <OutcomesSection />
      <PrinciplesSection />
      <SystemsSection />
      <AboutSection />
      <ContactFooter />
    </main>
  )
}
