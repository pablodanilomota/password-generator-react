import React, { useContext } from 'react'

/**
 * Hooks.
 */
import { useGeneratePassword } from '../../hooks/useGeneratePassword'

/**
 * Components.
 */
import { Button, Icon } from 'semantic-ui-react'
import { PasswordGenerateContext } from '../Context'

export function GenerateButton() {
  /**
   * Hooks.
   */
  const { generate } = useGeneratePassword()

  const { params, passwordLength, setGeneratedPassword } = useContext(
    PasswordGenerateContext
  )

  const parameters = { ...params, passwordLength }

  return (
    <Button
      icon
      size="huge"
      color="teal"
      onClick={() => {
        const generatedPassword = generate(parameters)
          .defaultOptions()
          .upperCase()
          .number()
          .specialCharacter()
          .passwordGenerate()

        setGeneratedPassword(generatedPassword)
      }}
      labelPosition="right"
    >
      Generate
      <Icon name="cogs" />
    </Button>
  )
}
