export default function TestimonialCard({ testimonial }) {
  const { name, district, rating, text, program, year } = testimonial

  return (
    <div className="card p-6 flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <div className="relative">
        <svg
          className="absolute -top-1 -left-1 w-6 h-6 text-green-200"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-earth text-sm leading-relaxed font-body pl-5 italic">{text}</p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-green-50">
        <div className="w-10 h-10 bg-gradient-green rounded-full flex items-center justify-center shrink-0">
          <span className="text-white font-display font-bold text-sm">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-green-900 text-sm font-body">{name}</p>
          <p className="text-earth text-xs font-body">{program} · From {district}</p>
        </div>
      </div>
    </div>
  )
}
