interface FooterProps {
  year: number;
  contactEmail: string;
}

export const Footer = ({ year, contactEmail }: FooterProps) => {
  return (
    <footer className="w-full text-center py-5 bg-white border-t border-slate-200 text-xs text-slate-500">
      <p>© {year} Student Profile Project. All rights reserved.</p>
      <p className="mt-1">
        Contact:{' '}
        <a href={`mailto:${contactEmail}`} className="text-emerald-600 hover:underline">
          {contactEmail}
        </a>
      </p>
    </footer>
  );
};