import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Navbar } from '@/components/navigation/Navbar'
import { FloatingWhatsAppButton } from '@/components/ui/FloatingWhatsAppButton'
import { Footer } from './Footer'

/** Handles scroll position on navigation: hash → target section, otherwise top. */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section exists after route render.
      const id = decodeURIComponent(hash.slice(1))
      const raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' })
      })
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}

function PageFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="flex min-h-[68svh] items-center justify-center bg-teal-deep text-white"
    >
      <span className="size-9 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
    </div>
  )
}

export function RootLayout() {
  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-gold px-5 py-3 font-bold text-teal-deep shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  )
}
