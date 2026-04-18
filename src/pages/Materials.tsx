import { useEffect, useRef } from 'react'
import { Leaf, Recycle, Sun, Droplets, Wind } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CTASection from '@/components/CTASection'

gsap.registerPlugin(ScrollTrigger)

const materials = [
  { image: '/assets/material-bricks.jpg', title: 'Bricks & Masonry', description: 'We work with premium clay bricks from leading UK manufacturers including Ibstock, Wienerberger, and Forterra. Our brickwork is laid by skilled masons with decades of combined experience.', brands: 'Ibstock | Wienerberger | Forterra | Hanson' },
  { image: '/assets/material-timber.jpg', title: 'Timber & Joinery', description: 'Sustainably sourced structural timber and high-quality joinery products. From engineered I-joists to bespoke hardwood doors and windows.', brands: 'Elliotis | Metsa Wood | JB Kind | Howdens' },
  { image: '/assets/material-roofing.jpg', title: 'Roofing Materials', description: 'Complete roofing solutions using premium tiles, slates, and flat roofing systems. All installations come with manufacturer warranties of up to 25 years.', brands: 'Marley | Redland | Sandtoft | Velux' },
  { image: '/assets/material-insulation.jpg', title: 'Insulation', description: 'High-performance insulation materials to ensure your home is energy-efficient, comfortable, and compliant with current building regulations.', brands: 'Kingspan | Celotex | Rockwool | Knauf' },
  { image: '/assets/material-windows.jpg', title: 'Windows & Doors', description: 'A-rated uPVC, aluminium, and timber windows and doors from leading manufacturers. Secure, thermally efficient, and available in a wide range of styles.', brands: 'Everest | Safestyle | Origin | Residence' },
  { image: '/assets/material-kitchens.jpg', title: 'Kitchens & Bathrooms', description: 'We partner with leading kitchen and bathroom suppliers to offer premium fixtures, fittings, and cabinetry at competitive trade prices.', brands: 'Howdens | Wickes | B&Q | Magnet' },
]

const sustainabilityPoints = [
  { icon: Recycle, text: '90% of construction waste diverted from landfill through recycling' },
  { icon: Leaf, text: 'Sustainably sourced timber with FSC and PEFC certification' },
  { icon: Sun, text: 'Energy-efficient designs exceeding current building regulations' },
  { icon: Droplets, text: 'Low-VOC paints and environmentally friendly materials where possible' },
  { icon: Wind, text: 'Solar panel and heat pump installation services' },
]

export default function Materials() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.material-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
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
            Materials & Quality
          </h1>
          <p className="text-grey-300 text-lg max-w-xl mx-auto leading-relaxed">
            We believe that exceptional homes are built from exceptional materials. That's why we source only the finest products from trusted UK and European suppliers.
          </p>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="material-card bg-white rounded overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-heading text-lg font-semibold text-navy mb-2">
                    {material.title}
                  </h4>
                  <p className="text-grey-600 text-sm leading-relaxed mb-3">
                    {material.description}
                  </p>
                  <p className="text-grey-400 text-xs">
                    <span className="font-heading font-medium text-grey-500">Brands: </span>
                    {material.brands}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 md:py-28 bg-grey-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy leading-tight mb-4">
                Our Commitment to Sustainability
              </h2>
              <p className="text-grey-600 text-base leading-relaxed mb-6">
                We're committed to reducing the environmental impact of construction. Through careful material selection, waste reduction, and energy-efficient design, we build homes that are better for our clients and the planet.
              </p>
              <div className="space-y-4">
                {sustainabilityPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                      <point.icon className="w-5 h-5 text-amber-500" strokeWidth={1.5} />
                    </div>
                    <p className="text-grey-600 text-sm leading-relaxed pt-2">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/assets/service-residential.jpg"
                alt="Sustainable construction"
                className="w-full rounded shadow-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Quality You Can See and Feel"
        buttonText="Discuss Your Project"
        buttonLink="/contact"
      />
    </>
  )
}
