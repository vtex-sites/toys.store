import type { ComponentPropsWithRef, FormEvent, ReactNode } from 'react'
import React, { forwardRef, useRef } from 'react'
import { Form, Input, Button } from '@faststore/ui'

export interface NewsletterProps
  extends Omit<ComponentPropsWithRef<'form'>, 'title' | 'onSubmit'> {
  title: ReactNode
  subtitle?: ReactNode
  onSubmit: (value: string) => void
}

const Newsletter = forwardRef<HTMLFormElement, NewsletterProps>(
  function Newsletter({ title, subtitle, onSubmit, ...otherProps }, ref) {
    const emailInputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault()

      if (emailInputRef.current?.value !== '') {
        onSubmit(emailInputRef.current!.value)
      }
    }

    return (
      <section className="section" data-store-newsletter>
        <Form
          className="grid-content"
          data-newsletter-form
          ref={ref}
          onSubmit={handleSubmit}
          {...otherProps}
        >
          <div data-newsletter-header>
            {title}
            {Boolean(subtitle) && subtitle}
          </div>

          <div data-newsletter-controls>
            <Input
              className="frn-newsletter__form-input"
              id="newsletter-email"
              type="email"
              name="newsletter-email"
              placeholder="Seu email"
              ref={emailInputRef}
            />
            <Button className="frn-newsletter__form-button" type="submit">
              Cadastrar
            </Button>
          </div>
        </Form>
      </section>
    )
  }
)

export default Newsletter
