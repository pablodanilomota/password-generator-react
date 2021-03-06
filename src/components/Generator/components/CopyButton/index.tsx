import React from 'react'
import { Button } from 'semantic-ui-react'

export function CopyButton() {
  return (
    <Button
      icon="copy"
      size="huge"
      color="teal"
      onClick={() => {
        navigator.clipboard.writeText('pegadinha do malandro')
      }}
    ></Button>
  )
}
