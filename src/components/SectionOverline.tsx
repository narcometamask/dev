interface SectionOverlineProps {
  overline: string
  title: string
  description?: string
  light?: boolean
  align?: 'left' | 'center'
}

export default function SectionOverline({ overline, title, description, light = false, align = 'center' }: SectionOverlineProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12`}>
      <span className={`inline-block text-xs font-heading font-medium uppercase tracking-[2px] mb-4 ${light ? 'text-amber-400' : 'text-amber-500'}`}>
        {overline}
      </span>
      <h2 className={`font-heading text-3xl md:text-4xl font-semibold leading-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-grey-300' : 'text-grey-600'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
