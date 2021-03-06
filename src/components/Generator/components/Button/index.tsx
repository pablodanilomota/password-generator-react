import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export function GenerateButton() {
  return (
    <Button icon labelPosition="right" size="huge" color="teal">
      Generate
      <Icon name="cogs" />
    </Button>
  )
}
