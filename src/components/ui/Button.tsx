import type { ButtonHTMLAttributes } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export function Button({
  variant = 'primary',
  type = 'button',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}
