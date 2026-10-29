import { useState } from 'react'
import type { ChangeEvent, FocusEvent, FormEvent } from 'react'
import type { CampusEvent } from '../data/events'
import { TextField } from './ui/TextField'
import { Button } from './ui/Button'
import { validateSignup } from '../lib/validateSignup'
import type { SignupValues } from '../lib/validateSignup'

interface EventSignupFormProps {
  event: CampusEvent
}

export function EventSignupForm({ event }: EventSignupFormProps) {
  const [seatsLeft, setSeatsLeft] = useState(event.seats)
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  })
  const [touched, setTouched] = useState<Partial<Record<keyof SignupValues, boolean>>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  // Ошибки вычисляются на каждый рендер
  const errors = validateSignup(values, seatsLeft)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    const { name } = e.target
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length === 0) {
      const ticketsBooked = Number(values.tickets)
      const bookedName = values.fullName.trim()

      setSeatsLeft((prev) => prev - ticketsBooked)
      setSuccessMessage(`Booked: ${values.tickets} for ${bookedName}.`)

      // Очищаем форму для следующего бронирования
      setValues({
        fullName: '',
        email: '',
        tickets: '1',
      })
      setTouched({})
      setSubmitAttempted(false)
    }
  }

  return (
    <div className="card">
      <p className="font-semibold mb-2">Seats left: {seatsLeft}</p>

      {successMessage && (
        <p role="status" className="text-emerald-600 font-semibold mb-4">
          {successMessage}
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate className="form">
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.fullName || submitAttempted) ? errors.fullName : undefined}
        />

        <TextField
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.email || submitAttempted) ? errors.email : undefined}
        />

        <TextField
          label="Tickets"
          type="number"
          name="tickets"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.tickets || submitAttempted) ? errors.tickets : undefined}
        />

        <Button type="submit" variant="primary">
          Book
        </Button>
      </form>
    </div>
  )
}