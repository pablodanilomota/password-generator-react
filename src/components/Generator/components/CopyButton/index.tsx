import React, { useContext } from 'react'

/**
 * Components.
 */
import { Button } from 'semantic-ui-react'

import { PasswordGenerateContext } from '../Context'

export function CopyButton() {
  /**
   * Hooks.
   */
  const { generatedPassword = '' } = useContext(PasswordGenerateContext)

  return (
    <Button
      icon="copy"
      size="huge"
      color="teal"
      onClick={() => {
        navigator.clipboard.writeText(generatedPassword)
      }}
    ></Button>
  )
}
