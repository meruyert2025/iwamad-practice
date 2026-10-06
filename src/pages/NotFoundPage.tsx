import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <div className="text-center p-12">
      <h2 className="text-4xl font-bold mb-2">404</h2>
      <p className="mb-4">Page not found</p>
      <Link to="/" className="text-blue-500 underline">
        Back to Home
      </Link>
    </div>
  )
}