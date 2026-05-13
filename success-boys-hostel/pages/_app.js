import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal')
      elements.forEach((el) => observer.observe(el))
    }

    // run on first load
    observeElements()

    // run again on route change
    router.events.on('routeChangeComplete', observeElements)

    return () => {
      observer.disconnect()
      router.events.off('routeChangeComplete', observeElements)
    }
  }, [router.events])

  return <Component {...pageProps} />
}