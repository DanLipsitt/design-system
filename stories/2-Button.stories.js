import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { MLButton } from 'marklogic-ui-library'

export default {
  title: 'General/MLButton',
  component: MLButton,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Subtitle specified in story file.',
    docs: {

    },
  },
}

export const basic = () => <MLButton type='primary' onClick={action('clicked')}>{text('Primary Button Text', 'Primary')}</MLButton>

basic.story = {
  parameters: {
    docs: {
      storyDescription: 'Description of this individual story, from the' +
        '`.stories.js` file',
    },
  },
}

export const multiple = () => (
  <div>
    <MLButton type='primary' onClick={action('primary clicked')}>{text('Primary Button Text', 'Primary')}</MLButton>
    <MLButton type='highlight' onClick={action('primary clicked')}>{text('Highlight Button Text', 'Highlight')}</MLButton>
    <MLButton onClick={action('default clicked')}>{text('Default Button Text', 'Default')}</MLButton>
    <MLButton type='danger' onClick={action('danger clicked')}>{text('Danger Button Text', 'Danger')}</MLButton>
  </div>
)

multiple.story = {
  parameters: {
    docs: {
      storyDescription: 'Description for multiple buttons story.',
    },
  },
}

export const disabled = () => <MLButton disabled onClick={action('clicked')}>{text('Disabled', 'Disabled')}</MLButton>
