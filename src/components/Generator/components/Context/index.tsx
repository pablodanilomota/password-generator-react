import React, { ReactNode, useState } from 'react'

/**
 * Type definitions.
 */
type Props = {
  children: ReactNode
}

type Params = {
  hasNumber: boolean
  hasUpperCaseLetters: boolean
  hasSpecialCharacter: boolean
}

type Context = {
  params: Params
  setParams: (params: Params) => void
  passwordLength: number
  setPasswordLength: (length: number) => void
  generatedPassword?: string
  setGeneratedPassword: (value: string) => void
}

/**
 * Context.
 */
export const PasswordGenerateContext = React.createContext<Context>({
  params: {
    hasNumber: false,
    hasUpperCaseLetters: false,
    hasSpecialCharacter: false
  },
  setParams: () => {},
  passwordLength: 4,
  generatedPassword: '',
  setPasswordLength: () => {},
  setGeneratedPassword: () => {}
})

/**
 * Component.
 */
export function GeneratorContext({ children }: Props) {
  /**
   * States.
   */
  const [passwordLength, setPasswordLengthValue] = useState(4)
  const [generatedPassword, setGeneratedPasswordValue] = useState('')
  const [params, setParamsValues] = useState<Params>({
    hasNumber: false,
    hasUpperCaseLetters: false,
    hasSpecialCharacter: false
  })

  /**
   * Component functions.
   */

  const setGeneratedPassword = (password: string) =>
    setGeneratedPasswordValue(password)

  const setPasswordLength = (length: number) => setPasswordLengthValue(length)

  const setParams = (params: Params) => setParamsValues(params)

  return (
    <PasswordGenerateContext.Provider
      value={{
        params,
        setParams,
        passwordLength,
        setPasswordLength,
        generatedPassword,
        setGeneratedPassword
      }}
    >
      {children}
    </PasswordGenerateContext.Provider>
  )
}
