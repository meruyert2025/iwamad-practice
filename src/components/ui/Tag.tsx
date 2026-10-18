import type { HTMLAttributes } from 'react'

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: string
}

export function Tag({ label, className = '', ...props }: TagProps) {
  return (
    <span className={`tag ${className}`.trim()} {...props}>
      {label}
    </span>
  )
}
