import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Users, Phone } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CTASection from '@/components/CTASection'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    duration: 'Week 1',
    description: "Every project begins with a conversation. We'll discuss your vision, budget, and timeline, then conduct a free on-site assessment to evaluate your property and understand any constraints or opportunities.",
    items: ['Free initial consultation (phone or video)', 'On-site assessment and measurements', 'Discussion of requirements and preferences', 'Preliminary budget guidance', 'No obligation — we\'re here to advise'],
  },
  {
    number: '02',
    title: 'Planning & Design',
    duration: 'Weeks 2-4',
    description: "Once you're ready to proceed, we develop detailed plans and obtain all necessary permissions. Our design team creates comprehensive specifications, and we provide a transparent, itemised quote with no hidden costs.",
    items: ['Detailed site survey and measurements', 'Architectural drawings and specifications', 'Planning permission applications (if required)', 'Building control submissions', 'Finalised project quote and contract', 'Material selection and ordering'],
  },
  {
    number: '03',
    title: 'Construction',
    duration: 'Varies by project',
    description: "This is where your vision becomes reality. Our skilled team manages every aspect of the build with regular site meetings, quality inspections, and clear communication to keep you informed throughout.",
    items: ['Site preparation and groundwork', 'Structural work (foundations, walls, roof)', 'First fix (plumbing, electrics, HVAC)', 'Plastering and dry lining', 'Second fix (fixtures, fittings, kitchens, bathrooms)', 'Decorating and finishing', 'Regular site meetings and progress updates', 'Quality inspections at every stage'],
  },
  {
    number: '04',
    title: 'Completion & Handover',
    duration: 'Week 1',
    description: "Before we hand over the keys, every detail is checked and perfected. We conduct a thorough walkthrough with you, address any snags, and provide all documentation and warranties for your peace of mind.",
    items: ['Final quality inspection and snag list', 'Building control sign-off', 'Thorough cleaning of the entire property', 'Client walkthrough and handover meeting', 'All documentation provided (certificates, warranties, manuals)', 'Aftercare support and maintenance guidance'],
  },
]

const comms = [
  { icon: MessageSquare, title: 'Regular Updates', description: "Weekly progress reports with photos, keeping you informed even when you can't visit the site." },
  { icon: Users, title: 'Site Meetings', description: 'Scheduled site walkthroughs at key milestones to review progress and make decisions together.' },
  { icon: Phone, title: 'Direct Contact', description: 'Your dedicated project manager is always available by phone or WhatsApp for any questions.' },
]

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-step-detail', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      gsap.fromTo('.comm-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.comm-section', start: 'top 80%' },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-36 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            How We Work
          </h1>
          <p className="text-grey-300 text-lg max-w-xl mx-auto leading-relaxed">
            A proven, transparent process that takes your project from initial idea to finished home — with clear communication at every step.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section ref={sectionRef} className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative">
            {/* Timeline line - desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 -translate-x-1/2" />

            {steps.map((step, index) => (
              <div key={index} className={`process-step-detail relative grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-amber-500 items-center justify-center z-10">
                  <span className="text-white font-heading font-bold text-sm">{step.number}</span>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:text-right lg:pr-16'}`}>
                  <span className="lg:hidden inline-flex w-12 h-12 rounded-full bg-amber-500 items-center justify-center mb-4">
                    <span className="text-white font-heading font-bold text-sm">{step.number}</span>
                  </span>
                  <div className={`${index % 2 === 1 ? 'lg:pl-16' : ''}`}>
                    <span className="inline-block text-xs font-heading font-medium uppercase tracking-wider text-amber-500 bg-amber-50 px-3 py-1 rounded mb-3">
                      {step.duration}
                    </span>
                    <h3 className="font-heading text-2xl font-semibold text-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="text-grey-600 text-base leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-grey-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 md:py-28 bg-grey-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy leading-tight mb-4">
                Our Quality Commitment
              </h2>
              <p className="text-grey-600 text-base leading-relaxed mb-6">
                Quality isn't just a buzzword for us — it's the foundation of everything we do. Every project undergoes rigorous quality checks at key milestones, ensuring workmanship that exceeds industry standards.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'All work inspected at foundation, structural, first fix, and completion stages',
                  'Compliance with current Building Regulations and NHBC standards',
                  'Premium materials sourced from trusted UK suppliers',
                  'All tradespeople are CSCS certified and regularly trained',
                  '12-month defects liability period on all work',
                  'Full documentation and certification provided',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-grey-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/materials"
                className="inline-flex items-center gap-1 text-amber-500 font-heading text-sm font-medium hover:gap-2 transition-all duration-200"
              >
                Learn About Our Materials
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img
                src="/assets/material-bricks.jpg"
                alt="Quality craftsmanship"
                className="w-full rounded shadow-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="comm-section py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-navy mb-2">
              How We Keep You Informed
            </h3>
            <p className="text-grey-600 text-base">Clear communication is at the heart of our process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comms.map((comm, index) => (
              <div key={index} className="comm-card text-center p-8">
                <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
                  <comm.icon className="w-7 h-7 text-amber-500" strokeWidth={1.5} />
                </div>
                <h4 className="font-heading text-lg font-semibold text-navy mb-2">
                  {comm.title}
                </h4>
                <p className="text-grey-600 text-sm leading-relaxed">
                  {comm.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Project?"
        description="Contact us today for a free consultation and take the first step toward your dream home."
        buttonText="Get Free Quote"
        buttonLink="/contact"
      />
    </>
  )
}
