import React, { ChangeEvent, useState } from 'react'

import { Input, Container, Span } from './styles'

export function Slider() {
  /**
   * States.
   */
  const [value, setValue] = useState<number>(4)

  /**
   * Component functions.
   */
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setValue(+value)
  }

  return (
    <div>
      <Container>
        <Span>4</Span>
        <Input
          type="range"
          min="4"
          max="32"
          value={value}
          onChange={handleValue}
        />
        <Span>32</Span>
      </Container>
    </div>
  )
}
