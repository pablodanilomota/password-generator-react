/**
 * Type definitions.
 */
type Props = {
  hasNumber: boolean
  passwordLength: number
  hasUpperCaseLetters: boolean
  hasSpecialCharacter: boolean
}

/**
 * Hook.
 */
export function useGeneratePassword() {
  /**
   * Default word.
   */
  const defaultLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'y',
    'x',
    'z'
  ]

  /**
   * Upper case word.
   */
  const upperCaseLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'Y',
    'X',
    'Z'
  ]

  /**
   * Numbers.
   */
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  /**
   * Special characters.
   */
  const specialCharacters = ['!', '$', '%', '@', '#', '_', '-', '+', '*', '&']

  const generate = (params: Props) => ({
    /**
     * Variables.
     * DEBIT.
     */
    optionsToGenerate: ['', 0],
    generatedPassword: '',

    /**
     * Default values to generate.
     */
    defaultOptions: function () {
      this.optionsToGenerate = [...defaultLetters]

      return this
    },

    /**
     * Add upper case words in filter.
     */
    upperCase: function () {
      if (params.hasUpperCaseLetters) {
        this.optionsToGenerate = [
          ...this.optionsToGenerate,
          ...upperCaseLetters
        ]
      }

      return this
    },

    /**
     * Add numbers in filter.
     */
    number: function () {
      if (params.hasNumber) {
        this.optionsToGenerate = [...this.optionsToGenerate, ...numbers]
      }

      return this
    },

    /**
     * Add special characters in filter.
     */
    specialCharacter: function () {
      if (params.hasSpecialCharacter) {
        this.optionsToGenerate = [
          ...this.optionsToGenerate,
          ...specialCharacters
        ]
      }

      return this
    },

    /**
     * Generate a password.
     */
    passwordGenerate: function () {
      const characters = this.optionsToGenerate.join('')

      return (this.generatedPassword = Array(params.passwordLength)
        .fill(characters)
        .map(word => word[Math.floor(Math.random() * word.length)])
        .join(''))
    }
  })

  return {
    generate
  }
}
