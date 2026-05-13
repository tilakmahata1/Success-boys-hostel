import Image from 'next/image'
import Link from 'next/link'

export default function PageHero({ title, subtitle, image, breadcrumb }) {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/fronthostel.jpg"
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-emerald-900/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center py-16">
        {breadcrumb && (
          <div className="flex items-center justify-center gap-2 mb-4 text-green-200 text-sm font-body">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">{breadcrumb}</span>
          </div>
        )}
        <h1 className="section-heading text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-green-100 text-lg max-w-2xl mx-auto font-body leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
