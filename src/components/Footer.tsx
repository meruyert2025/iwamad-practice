interface FooterProps {
  year: number
  contactEmail: string
}

export function Footer({ year, contactEmail }: FooterProps) {
  return (
    <footer className="p-4 bg-slate-900 text-slate-400 text-center text-sm">
      <p>© {year} All rights reserved.</p>
      <p>Contact: <a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a></p>
    </footer>
  )
}