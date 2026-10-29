export type SignupValues = {
  fullName: string
  email: string
  tickets: string
}

export type SignupErrors = Partial<Record<keyof SignupValues, string>>

export function validateSignup(values: SignupValues, seatsLeft: number): SignupErrors {
  const errors: SignupErrors = {}

  // 1. fullName: at least 2 characters, ignoring spaces at both ends
  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name'
  }

  // 2. email: format name@example.com
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(values.email)) {
    errors.email = 'Enter a valid email, like name@example.com'
  }

  // 3. tickets: whole number 1 to 4, and <= seatsLeft
  const ticketNum = Number(values.tickets)
  if (!Number.isInteger(ticketNum) || ticketNum < 1 || ticketNum > 4) {
    errors.tickets = 'Choose 1 to 4 tickets'
  } else if (ticketNum > seatsLeft) {
    errors.tickets = `Only ${seatsLeft} seats left`
  }

  return errors
}