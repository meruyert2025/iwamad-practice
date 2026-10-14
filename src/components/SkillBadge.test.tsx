import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { SkillBadge } from './SkillBadge'

describe('SkillBadge Component', () => {
  it('renders skill name correctly', () => {
    const mockSkill = {
      id: 1,
      name: 'TypeScript',
      category: 'frontend' as const,
    }

    render(<SkillBadge skill={mockSkill} />)

    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
})