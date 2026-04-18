import { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CTASection from '@/components/CTASection'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'New Build', 'Renovation', 'Extension', 'Conversion', 'Interior']

const projects = [
  { image: '/assets/project-semi-detached.jpg', category: 'New Build', title: 'Modern Semi-Detached Home', location: 'Stratford, London', specs: '1,850 sq ft | 4 Bedrooms | Completed 2024', brief: 'A contemporary semi-detached family home built to Passivhaus principles, featuring open-plan living spaces and a landscaped garden.' },
  { image: '/assets/project-renovation.jpg', category: 'Renovation', title: 'Victorian Terrace Restoration', location: 'Leytonstone, London', specs: '1,200 sq ft | 3 Bedrooms | Completed 2024', brief: 'Complete renovation of a Victorian terraced house, preserving original features while introducing modern amenities and energy efficiency.' },
  { image: '/assets/project-extension.jpg', category: 'Extension', title: 'Contemporary Rear Extension', location: 'East Ham, London', specs: '650 sq ft added | Kitchen-Diner | Completed 2023', brief: 'A stunning glass and steel rear extension creating a seamless indoor-outdoor kitchen and dining space.' },
  { image: '/assets/project-apartment.jpg', category: 'Conversion', title: 'Warehouse Apartment Conversion', location: 'Walthamstow, London', specs: '2,100 sq ft | 3 Bedrooms | Completed 2023', brief: 'Conversion of a former industrial warehouse into a luxury three-bedroom apartment with exposed brick and original features.' },
  { image: '/assets/project-bungalow.jpg', category: 'New Build', title: 'Custom Contemporary Bungalow', location: 'Ilford, London', specs: '1,500 sq ft | 3 Bedrooms | Completed 2023', brief: 'A bespoke single-story home designed for accessibility, featuring underfloor heating and smart home technology throughout.' },
  { image: '/assets/project-loft.jpg', category: 'Renovation', title: 'Loft Conversion & Full Refurbishment', location: 'Forest Gate, London', specs: '400 sq ft added | 2 Bedrooms | Completed 2024', brief: 'A dormer loft conversion adding a master bedroom and en-suite, alongside a full ground-floor refurbishment.' },
  { image: '/assets/project-kitchen.jpg', category: 'Interior', title: 'Luxury Kitchen Installation', location: 'Manor Park, London', specs: '320 sq ft | Completed 2024', brief: 'A high-end kitchen installation featuring bespoke cabinetry, quartz countertops, and integrated appliances.' },
  { image: '/assets/project-basement.jpg', category: 'Conversion', title: 'Basement Conversion', location: 'Stratford, London', specs: '550 sq ft | Home Cinema + Gym | Completed 2023', brief: 'A dark, unused basement transformed into a bright entertainment space with cinema room and home gym.' },
  { image: '/assets/project-terrace.jpg', category: 'Renovation', title: 'Georgian Terrace Modernisation', location: 'Leyton, London', specs: '1,800 sq ft | 4 Bedrooms | Completed 2024', brief: 'Sympathetic modernisation of a Grade II listed Georgian terrace, balancing heritage requirements with contemporary living.' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-item', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
      })
    })
    return () => ctx.revert()
  }, [activeCategory])

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-36 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            Our Projects
          </h1>
          <p className="text-grey-300 text-lg max-w-xl mx-auto leading-relaxed">
            Browse our portfolio of completed residential projects across London. Each build represents our commitment to quality craftsmanship and client satisfaction.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-8 border-b border-grey-200 sticky top-16 z-30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-heading text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-white'
                    : 'bg-grey-100 text-charcoal hover:bg-grey-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20 bg-grey-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={`${activeCategory}-${index}`} className="project-item group bg-white rounded overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
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
                  <h4 className="font-heading text-lg font-semibold text-navy mb-1">
                    {project.title}
                  </h4>
                  <p className="text-grey-500 text-sm mb-1">{project.location}</p>
                  <p className="text-grey-400 text-xs mb-3">{project.specs}</p>
                  <p className="text-grey-600 text-sm leading-relaxed mb-4">
                    {project.brief}
                  </p>
                  <span className="inline-flex items-center gap-1 text-amber-500 font-heading text-sm font-medium">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <p className="text-center text-grey-500 py-12">No projects found in this category.</p>
          )}
        </div>
      </section>

      <CTASection
        title="Interested in a Similar Project?"
        description="Contact us to discuss your project requirements and get a free consultation."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  )
}
