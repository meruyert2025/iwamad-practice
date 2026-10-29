import { useParams, Link } from 'react-router'
import { events } from '../data/events'
import { EventSignupForm } from '../components/EventSignupForm'

export function EventDetailsPage() {
  const { eventId } = useParams()
  const event = events.find((item) => item.id === Number(eventId))

  if (!event) {
    return (
      <div className="max-w-md mx-auto p-6 text-center">
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events" className="text-blue-500 underline mt-4 inline-block">
          Back to events
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        {event.date} · {event.place}
      </p>

      {/* Форма бронирования билетов (Часть 2) */}
      <EventSignupForm event={event} />

      <div className="mt-6">
        <Link to="/events" className="text-blue-500 underline">
          ← Back to events
        </Link>
      </div>
    </div>
  )
}