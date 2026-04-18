import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Home, Hammer, Paintbrush, KeyRound } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CTASection from '@/components/CTASection'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Home,
    image: '/assets/service-residential.jpg',
    title: 'Residential Construction',
    description: "We specialise in building new homes from the ground up. Whether you're looking for a traditional British design or a contemporary architectural statement, our team delivers exceptional craftsmanship at every stage.",
    includes: ['Foundation and groundworks', 'Structural brickwork and framing', 'Roofing (pitched, flat, or specialist)', 'Window and door installation', 'External finishing and landscaping'],
  },
  {
    icon: Hammer,
    image: '/assets/service-renovation.jpg',
    title: 'Renovation & Remodeling',
    description: "Breathe new life into your existing property. Our renovation services transform outdated spaces into modern, functional homes while preserving character and maximising value.",
    includes: ['Structural alterations and wall removal', 'Kitchen and bathroom renovations', 'Period property restoration', 'Energy efficiency upgrades', 'Permitted development and planning support'],
  },
  {
    icon: Paintbrush,
    image: '/assets/service-interior.jpg',
    title: 'Interior Finishing',
    description: "The details that make a house a home. Our interior finishing services ensure every surface, fixture, and fitting meets the highest standards of quality and aesthetics.",
    includes: ['Plastering and dry lining', 'Painting and decorating', 'Flooring installation (wood, tile, carpet)', 'Kitchen and bathroom fitting', 'Bespoke joinery and cabinetry'],
  },
  {
    icon: KeyRound,
    image: '/assets/service-turnkey.jpg',
    title: 'Turnkey Projects',
    description: "Sit back and watch your dream home come to life. Our turnkey service handles every aspect of your project from initial concept to final handover, with a single point of contact throughout.",
    includes: ['Complete project management', 'Architectural design coordination', 'Planning permission assistance', 'All trades and subcontractors managed', 'Regular progress updates and site meetings'],
  },
]

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-grid-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
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
            Our Services
          </h1>
          <p className="text-grey-300 text-lg max-w-xl mx-auto leading-relaxed">
            From new builds to complete renovations, we offer a full spectrum of residential construction services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={gridRef} className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-grid-card bg-white rounded overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded bg-grey-100 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-amber-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-navy">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-grey-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-grey-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-heading text-xs font-medium uppercase tracking-wider px-5 py-2.5 rounded transition-all duration-200"
                    >
                      Get a Quote
                    </Link>
                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-1 text-amber-500 font-heading text-sm font-medium hover:gap-2 transition-all duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {[
        {
          badge: 'New Build Specialists',
          title: 'Residential Construction',
          description: "Building a new home is one of the most significant investments you'll make. At A2Z BuildCare, we bring over a decade of experience to every new build project across London. From compact urban plots to spacious suburban sites, we navigate the unique challenges of London construction to deliver homes that exceed expectations.",
          approach: "Every new build begins with a thorough site assessment and feasibility study. We work closely with architects, structural engineers, and local authorities to ensure your project proceeds smoothly from planning to completion.",
          quality: "All work complies with current Building Regulations and NHBC standards. We conduct regular quality inspections at every stage and provide full documentation upon completion.",
          image: '/assets/detail-residential.jpg',
          reverse: false,
        },
        {
          badge: 'Transformation Experts',
          title: 'Renovation & Remodeling',
          description: "London's housing stock is rich with character — and potential. Our renovation team specialises in unlocking that potential, transforming tired, outdated properties into modern, efficient homes while respecting their original character and architectural heritage.",
          approach: "We start with a comprehensive property assessment, identifying structural opportunities and constraints. Our designs balance modern living requirements with period features, creating spaces that feel both contemporary and timeless.",
          quality: "Period property restoration | Listed building expertise | Structural alterations | Basement conversions | Kitchen and bathroom redesign",
          image: '/assets/detail-renovation.jpg',
          reverse: true,
        },
        {
          badge: 'Premium Finishes',
          title: 'Interior Finishing',
          description: "The finishing touches are what transform a construction project into a home. Our interior finishing team comprises skilled plasterers, painters, decorators, and joiners who take pride in delivering flawless results that stand the test of time.",
          approach: "We coordinate all finishing trades to ensure seamless sequencing and quality control. From the first skim of plaster to the final coat of paint, every step is executed with precision and care.",
          quality: "Plastering and dry lining | Painting and wallpapering | Flooring (hardwood, engineered, tile, carpet) | Kitchen fitting and cabinetry | Bathroom installation | Bespoke joinery",
          image: '/assets/detail-interior.jpg',
          reverse: false,
        },
        {
          badge: 'End-to-End Solutions',
          title: 'Turnkey Projects',
          description: "For clients who want a single point of contact and complete peace of mind, our turnkey service delivers. We manage every aspect of your construction project — from initial design discussions through to the moment you receive your keys.",
          approach: "Initial consultation and brief | Architect and designer coordination | Planning and building control submissions | Full project management | All trades coordinated | Regular site meetings and updates | Final inspection and handover | Post-completion support",
          quality: "One contract, one contact, complete accountability. No juggling multiple contractors or worrying about scheduling conflicts. We handle everything, keeping you informed at every step.",
          image: '/assets/detail-turnkey.jpg',
          reverse: true,
        },
      ].map((detail, index) => (
        <section key={index} className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-grey-100' : 'bg-white'}`}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${detail.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className={detail.reverse ? 'lg:order-2' : ''}>
                <span className="inline-block text-xs font-heading font-medium uppercase tracking-wider text-white bg-amber-500 px-3 py-1 rounded mb-4">
                  {detail.badge}
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy mb-4">
                  {detail.title}
                </h2>
                <p className="text-grey-600 text-base leading-relaxed mb-6">
                  {detail.description}
                </p>
                <h4 className="font-heading text-lg font-semibold text-navy mb-2">
                  {index < 2 ? 'Our Approach' : index === 2 ? 'Our Approach' : 'How It Works'}
                </h4>
                <p className="text-grey-600 text-sm leading-relaxed mb-6">
                  {detail.approach}
                </p>
                <h4 className="font-heading text-lg font-semibold text-navy mb-2">
                  {index < 2 ? 'Quality Assurance' : index === 2 ? 'Services Include' : 'Why Turnkey?'}
                </h4>
                <p className="text-grey-600 text-sm leading-relaxed mb-6">
                  {detail.quality}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-heading text-sm font-medium uppercase tracking-wider px-6 py-3 rounded transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {index === 0 ? 'Start Your New Build' : index === 1 ? 'Discuss Your Renovation' : index === 2 ? 'Get an Interior Quote' : 'Start a Turnkey Project'}
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1 text-amber-500 font-heading text-sm font-medium hover:gap-2 transition-all duration-200"
                  >
                    {index === 0 ? 'View Related Projects' : index === 1 ? 'View Renovation Projects' : index === 2 ? 'See Finished Interiors' : 'View Turnkey Builds'}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className={detail.reverse ? 'lg:order-1' : ''}>
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full rounded shadow-lg object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Not Sure Which Service You Need?"
        description="Contact us for a free consultation. We'll assess your project and recommend the best approach."
        buttonText="Get Free Advice"
        buttonLink="/contact"
      />
    </>
  )
}
