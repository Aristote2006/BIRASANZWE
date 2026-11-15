import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import { RootLayout } from '@/components/layout/RootLayout'
import Home from '@/pages/Home'

const About = lazy(() => import('@/pages/About'))
const Projects = lazy(() => import('@/pages/Projects'))
const RwandaTourEdition1 = lazy(() => import('@/pages/RwandaTourEdition1'))
const Impact = lazy(() => import('@/pages/Impact'))
const GetInvolved = lazy(() => import('@/pages/GetInvolved'))
const SupportUs = lazy(() => import('@/pages/SupportUs'))
const Contact = lazy(() => import('@/pages/Contact'))
const ComingSoon = lazy(() => import('@/pages/ComingSoon'))

/**
 * Routing.
 * - Home is bundled eagerly (it is the landing page / LCP).
 * - Secondary pages use React.lazy wrapped in RootLayout's <Suspense>,
 *   avoiding data-router hydration issues on direct page refresh.
 */
const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'projects', Component: Projects },
      { path: 'projects/birasanzwe-rwanda-tour-edition-1', Component: RwandaTourEdition1 },
      { path: 'projects/birasanzwe-rwanda-tour', Component: RwandaTourEdition1 },
      { path: 'impact', Component: Impact },
      { path: 'get-involved', Component: GetInvolved },
      { path: 'get-involved/partner', Component: GetInvolved },
      { path: 'get-involved/volunteer', Component: GetInvolved },
      { path: 'support-us', Component: SupportUs },
      { path: 'contact', Component: Contact },
      { path: 'contact-us', Component: Contact },
      { path: '*', Component: ComingSoon },
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
