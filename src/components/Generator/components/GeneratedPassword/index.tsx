import React, { useContext } from 'react'

/**
 * Components.
 */
import { PasswordGenerateContext } from '../Context'

/**
 * Styles.
 */
import { Span } from './styles'

export function GeneratedPassword() {
  /**
   * Hooks.
   */
  const { generatedPassword } = useContext(PasswordGenerateContext)

  return <Span>{generatedPassword}</Span>
}
