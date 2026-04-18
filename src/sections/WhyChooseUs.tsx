import { useEffect, useRef } from 'react'
import { CheckCircle } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  { title: 'Experienced Team', description: 'Skilled builders, project managers, and tradespeople with decades of combined experience.' },
  { title: 'Quality Materials', description: 'We source only premium, sustainable materials from trusted UK suppliers.' },
  { title: 'On-Time Delivery', description: 'Clear timelines and proactive project management to keep your build on schedule.' },
  { title: 'Transparent Pricing', description: "Detailed, honest quotes with no hidden costs. You know exactly what you're paying for." },
  { title: 'Local London Expertise', description: 'Deep knowledge of London planning regulations, suppliers, and architectural styles.' },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-image', { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.7, ease: 'power2.inOut',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      gsap.fromTo('.why-content', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      gsap.fromTo('.why-feature', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out', delay: 0.4,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-grey-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="why-image">
            <img
              src="/assets/why-choose-us.jpg"
              alt="Construction team reviewing plans"
              className="w-full rounded shadow-lg object-cover aspect-[4/5]"
            />
          </div>

          {/* Content */}
          <div className="why-content">
            <span className="text-xs font-heading font-medium uppercase tracking-[2px] text-amber-500 mb-4 block">
              Why A2Z BuildCare
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy leading-tight mb-4">
              Building Trust, One Home at a Time
            </h2>
            <p className="text-grey-600 text-base leading-relaxed mb-8">
              With over a decade of experience in London's residential construction market, we've built our reputation on quality, transparency, and unwavering commitment to our clients.
            </p>
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="why-feature flex gap-4">
                  <CheckCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <h5 className="font-heading text-base font-semibold text-navy mb-1">
                      {feature.title}
                    </h5>
                    <p className="text-grey-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
