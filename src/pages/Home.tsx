import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import WhyChooseUs from '@/sections/WhyChooseUs'
import FeaturedProjects from '@/sections/FeaturedProjects'
import ProcessSection from '@/sections/ProcessSection'
import Testimonials from '@/sections/Testimonials'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <ProcessSection />
      <Testimonials />
      <CTASection
        title="Ready to Start Your Project?"
        description="Get in touch for a free, no-obligation consultation. We'll discuss your vision and provide expert advice on bringing it to life."
        buttonText="Contact Us Today"
        buttonLink="/contact"
        phone="+44 7775 375757"
      />
    </>
  )
}
