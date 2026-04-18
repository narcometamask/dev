import { useEffect, useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionOverline from '@/components/SectionOverline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: "A2Z BuildCare transformed our outdated Victorian terrace into a stunning modern family home. Their attention to detail and transparent communication throughout the project was exceptional.",
    stars: 5,
    name: "Sarah & James Mitchell",
    location: "Stratford, London",
    avatar: "/assets/avatar-1.jpg",
  },
  {
    quote: "From the first consultation to the final handover, the team was professional, punctual, and incredibly skilled. Our loft conversion exceeded all expectations.",
    stars: 5,
    name: "David Chen",
    location: "Leytonstone, London",
    avatar: "/assets/avatar-2.jpg",
  },
  {
    quote: "We've worked with several builders over the years, but A2Z BuildCare stands out for their quality and reliability. They delivered our extension two weeks ahead of schedule.",
    stars: 4.5,
    name: "Priya & Raj Patel",
    location: "East Ham, London",
    avatar: "/assets/avatar-3.jpg",
  },
  {
    quote: "The team's knowledge of London planning regulations saved us months of delays. They handled everything seamlessly and the craftsmanship is top-notch.",
    stars: 5,
    name: "Emma Thompson",
    location: "Walthamstow, London",
    avatar: "/assets/avatar-4.jpg",
  },
  {
    quote: "Honest pricing, no hidden costs, and beautiful results. Our kitchen-diner extension is the heart of our home now. Highly recommend A2Z BuildCare.",
    stars: 5,
    name: "Michael & Lisa O'Brien",
    location: "Forest Gate, London",
    avatar: "/assets/avatar-5.jpg",
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonial-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const visibleTestimonials = typeof window !== 'undefined' && window.innerWidth >= 1024
    ? [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
      ]
    : [testimonials[currentIndex]]

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-grey-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionOverline
          overline="Testimonials"
          title="What Our Clients Say"
        />
        <div className="testimonial-card relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((t, i) => (
              <div key={`${currentIndex}-${i}`} className="bg-white p-8 rounded border-l-4 border-amber-500 shadow-sm">
                <Quote className="w-8 h-8 text-amber-500 mb-4" />
                <p className="text-charcoal text-base italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${s <= t.stars ? 'text-amber-500 fill-amber-500' : s - 0.5 <= t.stars ? 'text-amber-500 fill-amber-500/50' : 'text-grey-300'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h6 className="font-heading font-semibold text-navy text-sm">{t.name}</h6>
                    <span className="text-grey-500 text-xs">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-600 flex items-center justify-center text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-amber-500' : 'bg-grey-300 hover:bg-grey-400'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-600 flex items-center justify-center text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
