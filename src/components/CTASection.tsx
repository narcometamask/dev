import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title: string
  description?: string
  buttonText: string
  buttonLink: string
  phone?: string
}

export default function CTASection({ title, description, buttonText, buttonLink, phone }: CTASectionProps) {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="font-heading text-3xl md:text-[40px] font-semibold text-white mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-grey-300 text-lg max-w-xl mx-auto mb-8">
            {description}
          </p>
        )}
        <Link
          to={buttonLink}
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-heading text-base font-medium uppercase tracking-wider px-10 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/25"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </Link>
        {phone && (
          <p className="mt-6 text-white">
            Or call us directly:{" "}
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-amber-500 hover:text-amber-400 font-heading font-medium">
              {phone}
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
