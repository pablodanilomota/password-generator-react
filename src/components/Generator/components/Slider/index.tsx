import React, { ChangeEvent, useContext } from 'react'

/**
 * Components.
 */
import { PasswordGenerateContext } from '../Context'

/**
 * Styles.
 */
import { Input, Container, Span } from './styles'

export function Slider() {
  /**
   * Hooks.
   */
  const { setPasswordLength, passwordLength } = useContext(
    PasswordGenerateContext
  )

  /**
   * Component functions.
   */
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setPasswordLength(+value)
  }

  return (
    <div>
      <Container>
        <Span>4</Span>
        <Input
          type="range"
          min="4"
          max="32"
          value={passwordLength}
          onChange={handleValue}
        />
        <Span>32</Span>
      </Container>
    </div>
  )
}
