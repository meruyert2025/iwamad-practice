import { Link } from 'react-router'
import { Card } from './ui/Card'
import { Tag } from './ui/Tag'
import type { CampusEvent } from '../data/events'

interface EventCardProps {
  event: CampusEvent
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <h2>{event.title}</h2>
      <p>{event.date} · {event.place}</p>
      <div>
        <Tag label={`${event.seats} seats`} />
      </div>
      <div>
        <Link to={`/events/${event.id}`} className="text-blue-500 underline">
          Details
        </Link>
      </div>
    </Card>
  )
}