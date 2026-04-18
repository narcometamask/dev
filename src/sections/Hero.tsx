import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero-bg', { opacity: 0 }, { opacity: 1, duration: 0.8 })
        .fromTo('.hero-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.3)
        .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, 0.5)
        .fromTo('.hero-subtitle', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0.7)
        .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.9)
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 0.6, duration: 0.4 }, 1.2)
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="hero-bg absolute inset-0">
        <img
          src="/assets/hero-bg.jpg"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/65" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 text-center pt-20">
        <span className="hero-badge inline-block text-xs font-heading font-medium uppercase tracking-[2px] text-amber-500 bg-amber-500/15 px-4 py-2 rounded mb-6">
          London's Trusted Building Specialists
        </span>
        <h1 className="hero-title font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold text-white leading-[1.05] tracking-tight mb-5">
          Building Your Dream Home with Precision
        </h1>
        <p className="hero-subtitle text-grey-300 text-base md:text-lg max-w-xl mx-auto mb-9 leading-relaxed">
          Over 10 years of crafting quality homes across London. From initial consultation to final handover, we deliver exceptional craftsmanship with complete transparency.
        </p>
        <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-heading text-sm font-medium uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/25"
          >
            Get Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-heading text-sm font-medium uppercase tracking-wider px-8 py-3.5 rounded transition-all duration-200"
          >
            View Our Projects
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <ChevronDown className="w-6 h-6 text-white/60 animate-bounce-subtle" />
      </div>
    </section>
  )
}
