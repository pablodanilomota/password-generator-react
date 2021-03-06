import React from 'react'

/**
 * Components.
 */
import { Image } from '../../components/Generator/components/Image'
import { Title } from '../../components/Generator/components/Title'
import { Slider } from '../../components/Generator/components/Slider'
import { GenerateButton } from '../../components/Generator/components/Button'
import { CopyButton } from '../../components/Generator/components/CopyButton'
import { CheckBoxContainer } from '../../components/Generator/components/CheckboxContainer'

/**
 * Styles.
 */
import {
  Container,
  ButtonsContainer,
  OptionsContainer,
  GeneratedPassword,
  GeneratedPasswordContainer
} from './styles'

export function Generator() {
  return (
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
        <GeneratedPassword>asld!ADS123aSD</GeneratedPassword>
      </GeneratedPasswordContainer>
    </Container>
  )
}
