import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
  as?: ElementType
  className?: string
  children: ReactNode
  /** Narrow reading width for editorial content. */
  size?: 'default' | 'narrow'
}

export function Container({ as: Tag = 'div', className, children, size = 'default' }: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-5 sm:px-8 lg:px-10',
        size === 'narrow' ? 'max-w-4xl' : 'max-w-site',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
