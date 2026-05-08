import Link from 'next/link'

export default function BookingButton({ label = 'Book Now', href = '/contact', size = 'md', variant = 'primary', className = '' }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    white: 'bg-white text-green-700 hover:bg-green-50 font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2',
  }

  return (
    <Link
      href={href}
      className={`${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  )
}
