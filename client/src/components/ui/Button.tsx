import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/cn'
import { SmartLink } from './SmartLink'

const base =
  'group relative inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 py-3 ' +
  'font-sans text-[0.95rem] font-bold tracking-[0.01em] whitespace-nowrap ' +
  'transition-[background-color,color,border-color,box-shadow,transform] duration-300 ease-premium ' +
  'active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60'

const primary =
  'bg-gold text-teal-deep shadow-[0_8px_24px_-12px_rgba(244,196,48,0.7)] ' +
  'hover:bg-[#ffd451] hover:shadow-[0_12px_30px_-12px_rgba(244,196,48,0.85)]'

const secondaryVariants = {
  /** For dark (teal) backgrounds */
  light: 'border border-white/40 text-white hover:border-white hover:bg-white/10',
  /** For light backgrounds */
  dark: 'on-light border border-teal/40 text-teal hover:border-teal hover:bg-teal hover:text-white',
} as const

type CommonProps = {
  children: ReactNode
  className?: string
  /** Show the trailing arrow icon (default: true). */
  withArrow?: boolean
}

type LinkProps = CommonProps & { to: string; type?: never; onClick?: never }
type NativeButtonProps = CommonProps & { to?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>

function Arrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="size-4 transition-transform duration-300 ease-premium group-hover:translate-x-1"
      strokeWidth={2.25}
    />
  )
}

function renderButton(classes: string, props: LinkProps | NativeButtonProps) {
  const { children, className, withArrow = true } = props
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <Arrow />}
    </>
  )

  if (props.to !== undefined) {
    return (
      <SmartLink to={props.to} className={cn(classes, className)}>
        {content}
      </SmartLink>
    )
  }

  const { children: _c, className: _cl, withArrow: _w, to: _t, ...buttonProps } = props
  return (
    <button type="button" {...buttonProps} className={cn(classes, className)}>
      {content}
    </button>
  )
}

export function PrimaryButton(props: LinkProps | NativeButtonProps) {
  return renderButton(cn(base, primary), props)
}

export function SecondaryButton(
  props: (LinkProps | NativeButtonProps) & { variant?: keyof typeof secondaryVariants },
) {
  const { variant = 'light', ...rest } = props
  return renderButton(cn(base, secondaryVariants[variant]), rest as LinkProps | NativeButtonProps)
}
