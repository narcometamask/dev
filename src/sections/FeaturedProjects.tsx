import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionOverline from '@/components/SectionOverline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    image: '/assets/project-semi-detached.jpg',
    category: 'New Build',
    title: 'Modern Semi-Detached Home',
    specs: 'Stratford, London | 1,850 sq ft | Completed 2024',
  },
  {
    image: '/assets/project-renovation.jpg',
    category: 'Renovation',
    title: 'Victorian Terrace Renovation',
    specs: 'Leytonstone, London | 1,200 sq ft | Completed 2024',
  },
  {
    image: '/assets/project-extension.jpg',
    category: 'Extension',
    title: 'Contemporary Rear Extension',
    specs: 'East Ham, London | 650 sq ft | Completed 2023',
  },
  {
    image: '/assets/project-apartment.jpg',
    category: 'Conversion',
    title: 'Luxury Apartment Conversion',
    specs: 'Walthamstow, London | 2,100 sq ft | Completed 2023',
  },
  {
    image: '/assets/project-bungalow.jpg',
    category: 'New Build',
    title: 'Custom Bungalow Build',
    specs: 'Ilford, London | 1,500 sq ft | Completed 2023',
  },
  {
    image: '/assets/project-loft.jpg',
    category: 'Renovation',
    title: 'Loft Conversion & Refurbishment',
    specs: 'Forest Gate, London | 400 sq ft | Completed 2024',
  },
]

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionOverline
          overline="Our Portfolio"
          title="Featured Projects"
          description="A selection of our finest residential builds across London."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card group bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-heading font-medium uppercase tracking-wider px-3 py-1 rounded">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-heading text-lg font-semibold text-navy mb-2">
                  {project.title}
                </h4>
                <p className="text-grey-500 text-sm mb-4">
                  {project.specs}
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1 text-amber-500 font-heading text-sm font-medium hover:gap-2 transition-all duration-200"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-heading text-sm font-medium uppercase tracking-wider px-8 py-3 rounded transition-all duration-200"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
