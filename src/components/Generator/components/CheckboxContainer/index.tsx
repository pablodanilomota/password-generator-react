import React, { useContext } from 'react'

/**
 * Styles.
 */
import { Container, CheckboxContainer, Span } from './styles'

/**
 * Components.
 */
import { Checkbox } from 'semantic-ui-react'

import { PasswordGenerateContext } from '../Context'

/**
 * Component.
 */
export function CheckBoxContainer() {
  /**
   * Hooks.
   */
  const { setParams, params } = useContext(PasswordGenerateContext)

  /**
   * JSX.
   */
  return (
    <Container>
      <CheckboxContainer>
        <Checkbox
          slider
          checked={params.hasUpperCaseLetters}
          onChange={() =>
            setParams({
              hasNumber: params.hasNumber,
              hasSpecialCharacter: params.hasSpecialCharacter,
              hasUpperCaseLetters: !params.hasUpperCaseLetters
            })
          }
        />
        <Span>UpperCase Letters</Span>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          slider
          checked={params.hasNumber}
          onClick={() =>
            setParams({
              hasNumber: !params.hasNumber,
              hasSpecialCharacter: params.hasSpecialCharacter,
              hasUpperCaseLetters: params.hasUpperCaseLetters
            })
          }
        />
        <Span>Numbers</Span>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          slider
          checked={params.hasSpecialCharacter}
          onClick={() =>
            setParams({
              hasNumber: params.hasNumber,
              hasSpecialCharacter: !params.hasSpecialCharacter,
              hasUpperCaseLetters: params.hasUpperCaseLetters
            })
          }
        />
        <Span>Special Characters</Span>
      </CheckboxContainer>
    </Container>
  )
}
