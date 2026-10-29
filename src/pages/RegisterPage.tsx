import { useState } from 'react'
import type { ChangeEvent, FocusEvent, FormEvent } from 'react'
import { TextField } from '../components/ui/TextField'
import { Button } from '../components/ui/Button'
import { validateRegistration } from '../lib/validateRegistration'
import type { RegistrationValues } from '../lib/validateRegistration'

export function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  })

  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Вычисляем ошибки на каждый рендер (в state ошибки не храним, как требует задание)
  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target
    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target
    setTouched((current) => ({
      ...current,
      [name]: true,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto p-6 text-center">
        <p role="status" className="text-xl font-semibold text-emerald-600">
          Thanks, {values.fullName.trim()}. You are registered.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Create an account</h2>

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
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.password || submitAttempted) ? errors.password : undefined}
        />

        <TextField
          label="Confirm password"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={(touched.confirmPassword || submitAttempted) ? errors.confirmPassword : undefined}
        />

        <div className="field">
          <div className="check">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={(touched.acceptTerms || submitAttempted) && errors.acceptTerms ? true : undefined}
            />
            <label htmlFor="acceptTerms">Accept the terms and conditions</label>
          </div>
          {(touched.acceptTerms || submitAttempted) && errors.acceptTerms && (
            <p className="field-error">{errors.acceptTerms}</p>
          )}
        </div>

        <Button type="submit" variant="primary">
          Create account
        </Button>
      </form>
    </div>
  )
}