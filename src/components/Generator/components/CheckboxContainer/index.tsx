import React, { useState } from 'react'

/**
 * Styles.
 */
import { Container, CheckboxContainer, Span } from './styles'

/**
 * Components.
 */
import { Checkbox } from 'semantic-ui-react'

export function CheckBoxContainer() {
  /**
   * States.
   */
  const [isUpperCase, setUpperCase] = useState(false)
  const [isNumber, setNumber] = useState(false)
  const [isSpecialCharacter, setSpecialCharacter] = useState(false)

  /**
   * JSX.
   */
  return (
    <Container>
      <CheckboxContainer>
        <Checkbox
          slider
          checked={isUpperCase}
          onChange={() => setUpperCase(!isUpperCase)}
        />
        <Span>UpperCase Letters</Span>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          slider
          checked={isNumber}
          onClick={() => setNumber(!isNumber)}
        />
        <Span>Numbers</Span>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          slider
          checked={isSpecialCharacter}
          onClick={() => setSpecialCharacter(!isSpecialCharacter)}
        />
        <Span>Special Characters</Span>
      </CheckboxContainer>
    </Container>
  )
}
