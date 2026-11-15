import { createBrowserRouter, RouterProvider } from 'react-router'
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { RootLayout } from '@/components/layout/RootLayout'
import Home from '@/pages/Home'

/**
 * Routing.
 * - Home is bundled eagerly (it is the landing page / LCP).
 * - Every other route is code-split and currently renders the lightweight
 *   ComingSoon placeholder until each page is developed in its own stage.
 */
const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: 'about',
        lazy: async () => ({ Component: (await import('@/pages/About')).default }),
      },
      {
        path: 'projects',
        lazy: async () => ({ Component: (await import('@/pages/Projects')).default }),
      },
      {
        path: 'projects/birasanzwe-rwanda-tour-edition-1',
        lazy: async () => ({ Component: (await import('@/pages/RwandaTourEdition1')).default }),
      },
      {
        path: 'projects/birasanzwe-rwanda-tour',
        lazy: async () => ({ Component: (await import('@/pages/RwandaTourEdition1')).default }),
      },
      {
        path: 'impact',
        lazy: async () => ({ Component: (await import('@/pages/Impact')).default }),
      },
      {
        path: 'get-involved',
        lazy: async () => ({ Component: (await import('@/pages/GetInvolved')).default }),
      },
      {
        path: 'get-involved/partner',
        lazy: async () => ({ Component: (await import('@/pages/GetInvolved')).default }),
      },
      {
        path: 'get-involved/volunteer',
        lazy: async () => ({ Component: (await import('@/pages/GetInvolved')).default }),
      },
      {
        path: 'support-us',
        lazy: async () => ({ Component: (await import('@/pages/SupportUs')).default }),
      },
      {
        path: 'contact',
        lazy: async () => ({ Component: (await import('@/pages/Contact')).default }),
      },
      {
        path: 'contact-us',
        lazy: async () => ({ Component: (await import('@/pages/Contact')).default }),
      },
      {
        path: '*',
        lazy: async () => ({ Component: (await import('@/pages/ComingSoon')).default }),
      },
    ],
  },
])

export default function App() {
  return (
    // LazyMotion + `m` components keep the Motion bundle small (domAnimation only).
    // reducedMotion="user" disables transform animations for users who prefer reduced motion.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <RouterProvider router={router} />
      </MotionConfig>
    </LazyMotion>
  )
}
