import { useEffect, useRef } from 'react'
import { Eye, Target } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CTASection from '@/components/CTASection'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 250, suffix: '+', label: 'Projects Completed' },
  { value: 180, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Expert Team Members' },
]

const team = [
  { photo: '/assets/team-founder.jpg', name: 'Labhesh Panchal', role: 'Founder & Director', description: 'Over 15 years in construction. Leads strategy, client relations, and ensures every project meets our high standards.' },
  { photo: '/assets/team-manager.jpg', name: "James O'Connor", role: 'Senior Project Manager', description: "Chartered builder with 12 years' experience managing complex residential projects across London." },
  { photo: '/assets/team-architect.jpg', name: 'Aisha Patel', role: 'Design & Planning Lead', description: 'Architectural technologist specialising in London planning regulations and sustainable design.' },
  { photo: '/assets/team-supervisor.jpg', name: 'Tom Mitchell', role: 'Site Supervisor', description: 'Hands-on leader ensuring quality workmanship, safety compliance, and on-schedule delivery on every site.' },
]

const certifications = ['FMB Member', 'TrustMark Registered', 'CSCS Certified', 'NHBC Registered', 'ISO 9001 Quality']

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1500
          const start = performance.now()
          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = Math.floor(eased * value).toString()
            if (progress < 1) requestAnimationFrame(animate)
            else el.textContent = value.toString()
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-amber-500">
      0{suffix}
    </span>
  )
}

export default function About() {
  const storyRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-story-img', { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.7, ease: 'power2.inOut',
        scrollTrigger: { trigger: storyRef.current, start: 'top 80%' },
      })
      gsap.fromTo('.about-story-text', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.2,
        scrollTrigger: { trigger: storyRef.current, start: 'top 80%' },
      })
      gsap.fromTo('.team-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: teamRef.current, start: 'top 80%' },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-36 pb-20 md:pt-40 md:pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <span className="text-xs font-heading font-medium uppercase tracking-[2px] text-amber-400 mb-4 block">
            About Us
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight">
            Building London's Future, One Home at a Time
          </h1>
          <p className="text-grey-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Founded in 2015, A2Z BuildCare has grown from a small team of dedicated builders into one of East London's most trusted residential construction companies.
          </p>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="about-story-img">
              <img
                src="/assets/about-story.jpg"
                alt="A2Z BuildCare team at work"
                className="w-full rounded shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div className="about-story-text">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy leading-tight mb-6">
                Our Story
              </h2>
              <p className="text-grey-600 text-base leading-relaxed mb-4">
                A2Z BuildCare was founded by Labhesh Panchal with a simple mission: to provide London homeowners with honest, high-quality construction services they could trust. Starting with small renovation projects in East London, we quickly built a reputation for reliability and craftsmanship that word-of-mouth carried across the city.
              </p>
              <p className="text-grey-600 text-base leading-relaxed mb-4">
                Today, we're a full-service residential construction company with a team of skilled builders, project managers, and specialist tradespeople. We've completed hundreds of projects — from single-room renovations to multi-million-pound new builds — and every one receives the same personal attention and commitment to excellence.
              </p>
              <p className="text-grey-600 text-base leading-relaxed mb-6">
                What hasn't changed is our founding principle: treat every client's home as if it were our own. That means honest advice, fair pricing, meticulous workmanship, and a promise to stand behind everything we build.
              </p>
              <p className="font-heading font-medium text-navy italic">
                Labhesh Panchal, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-grey-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 md:p-12 rounded shadow-sm border-l-4 border-amber-500">
              <Eye className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">Our Vision</h3>
              <p className="text-grey-600 text-base leading-relaxed">
                To be London's most trusted name in residential construction — known not just for the quality of our builds, but for the integrity of our relationships. We envision a London where every family has a home built to the highest standards of craftsmanship and care.
              </p>
            </div>
            <div className="bg-white p-10 md:p-12 rounded shadow-sm border-l-4 border-amber-500">
              <Target className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">Our Mission</h3>
              <p className="text-grey-600 text-base leading-relaxed">
                To deliver exceptional construction services that exceed our clients' expectations at every stage. We combine traditional craftsmanship with modern techniques, transparent communication, and unwavering attention to detail to build homes that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-white text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="py-24 md:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs font-heading font-medium uppercase tracking-[2px] text-amber-500 mb-4 block">
              Our Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy leading-tight">
              Meet the People Behind the Builds
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="team-card text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="font-heading text-lg font-semibold text-navy mb-1">
                  {member.name}
                </h5>
                <span className="text-amber-500 text-sm font-heading font-medium block mb-2">
                  {member.role}
                </span>
                <p className="text-grey-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 bg-grey-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <span className="text-xs font-heading font-medium uppercase tracking-[2px] text-amber-500 mb-4 block">
            Trust & Credibility
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy mb-8">
            Certifications & Accreditations
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-white border border-grey-300 rounded hover:border-amber-500 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="font-heading text-sm font-medium text-navy">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Something Great Together"
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </>
  )
}
