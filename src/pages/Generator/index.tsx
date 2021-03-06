import React from 'react'

/**
 * Components.
 */
import { Image } from '../../components/Generator/components/Image'
import { Title } from '../../components/Generator/components/Title'
import { Slider } from '../../components/Generator/components/Slider'
import { CopyButton } from '../../components/Generator/components/CopyButton'
import { GenerateButton } from '../../components/Generator/components/Button'
import { GeneratorContext } from '../../components/Generator/components/Context'
import { CheckBoxContainer } from '../../components/Generator/components/CheckboxContainer'
import { GeneratedPassword } from '../../components/Generator/components/GeneratedPassword'

/**
 * Styles.
 */
import {
  Container,
  ButtonsContainer,
  OptionsContainer,
  GeneratedPasswordContainer
} from './styles'

export function Generator() {
  return (
    <GeneratorContext>
      <Container>
        <Image />
        <Title />
        <OptionsContainer>
          <Slider />
          <CheckBoxContainer />
        </OptionsContainer>

        <ButtonsContainer>
          <GenerateButton />
          <CopyButton />
        </ButtonsContainer>

        <GeneratedPasswordContainer>
          <GeneratedPassword />
        </GeneratedPasswordContainer>
      </Container>
    </GeneratorContext>
  )
}
