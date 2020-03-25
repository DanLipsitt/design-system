import React from 'react'
import { action } from '@storybook/addon-actions'
import MLAutocomplete from '../src/ml-autocomplete'
import { withKnobs } from '@storybook/addon-knobs'
import _ from 'lodash'

export default {
  title: 'Data Entry/MLAutocomplete',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const props = {
  }
  return (<MLAutocomplete {...props} />)
}
