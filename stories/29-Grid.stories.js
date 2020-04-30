import React from 'react'
import { action } from '@storybook/addon-actions'
import { MLRow, MLCol } from '../src'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Layout/Grid (MLRow and MLCol)',
  decorators: [withKnobs],
  parameters: {
    info: {
      text: 'Component description goes here',
    },
  },
}

export const basic = () => {
  const style = {
    background: '#0092ff',
    border: '1px solid black',
  }
  return (
    <MLRow>
      <MLCol xs={2} sm={4} md={6} lg={8} xl={10}>
        <div style={style}>Col</div>
      </MLCol>
      <MLCol xs={20} sm={16} md={12} lg={8} xl={4}>
        <div style={style}>Col</div>
      </MLCol>
      <MLCol xs={2} sm={4} md={6} lg={8} xl={10}>
        <div style={style}>Col</div>
      </MLCol>
    </MLRow>
  )
}
