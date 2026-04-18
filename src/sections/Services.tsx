import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Home, Hammer, Paintbrush, KeyRound, ArrowRight } from 'lucide-react'
import SectionOverline from '@/components/SectionOverline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'From foundations to roof, we build new homes with structural integrity and attention to every detail.',
  },
  {
    icon: Hammer,
    title: 'Renovation & Remodeling',
    description: 'Transform your existing space with expert renovations that add value, comfort, and modern functionality.',
  },
  {
    icon: Paintbrush,
    title: 'Interior Finishing',
    description: 'Premium plastering, painting, flooring, and fixtures that bring your interior vision to life.',
  },
  {
    icon: KeyRound,
    title: 'Turnkey Projects',
    description: "End-to-end project management — we handle everything from design to final handover, so you don't have to.",
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionOverline
          overline="What We Do"
          title="Our Services"
          description="Comprehensive building solutions tailored to your vision, delivered with precision and care."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-white p-8 md:p-10 rounded shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded bg-grey-100 flex items-center justify-center mb-5">
                <service.icon className="w-7 h-7 text-amber-500" strokeWidth={1.5} />
              </div>
              <h4 className="font-heading text-xl font-semibold text-navy mb-3">
                {service.title}
              </h4>
              <p className="text-grey-600 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-amber-500 font-heading text-sm font-medium hover:gap-2 transition-all duration-200"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
