import { useEffect, useRef } from 'react'
import { MessageSquare, FileText, HardHat, KeyRound } from 'lucide-react'
import SectionOverline from '@/components/SectionOverline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: "We discuss your vision, requirements, and budget. A free on-site assessment helps us understand your project fully.",
  },
  {
    number: '02',
    icon: FileText,
    title: 'Planning & Design',
    description: 'Our team creates detailed plans, obtains necessary permissions, and provides a transparent, itemised quote.',
  },
  {
    number: '03',
    icon: HardHat,
    title: 'Construction',
    description: 'Skilled craftsmen bring your project to life with regular updates, quality checks, and meticulous attention to detail.',
  },
  {
    number: '04',
    icon: KeyRound,
    title: 'Handover',
    description: 'Final inspections, snag list completion, and a thorough walkthrough. Your dream home, delivered exactly as promised.',
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-step', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-navy">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionOverline
          overline="How We Work"
          title="Our Process"
          description="A streamlined approach from first conversation to keys in hand."
          light
        />
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line - desktop only */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-white/15" />

          {steps.map((step, index) => (
            <div key={index} className="process-step relative text-center">
              <span className="text-amber-500/40 font-heading text-5xl md:text-6xl font-bold mb-4 block">
                {step.number}
              </span>
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-amber-500" strokeWidth={1.5} />
              </div>
              <h4 className="font-heading text-xl font-semibold text-white mb-3">
                {step.title}
              </h4>
              <p className="text-grey-300 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
