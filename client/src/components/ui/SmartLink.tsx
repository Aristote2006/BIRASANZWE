import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'

interface SmartLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string
  children: ReactNode
}

/**
 * Renders a plain anchor for in-page hashes and external URLs,
 * and a React Router <Link> for internal routes. All links remain crawlable.
 */
export function SmartLink({ to, children, ...rest }: SmartLinkProps) {
  const isHash = to.startsWith('#')
  const isExternal = /^(https?:|mailto:|tel:)/.test(to)

  if (isHash || isExternal) {
    return (
      <a
        href={to}
        {...(isExternal && to.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  )
}
